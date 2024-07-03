import { eq } from "drizzle-orm";
import db from "../drizzle/db";
import { TIUser, TSUser, UsersTable } from "../drizzle/schema";

export const usersService = async (limit?: number): Promise<TSUser[] | null> => {
    if (limit) {
        return await db.query.UsersTable.findMany({
            limit: limit
        });
    }
    return await db.query.UsersTable.findMany();
}

export const getUserService = async (id: number): Promise<TSUser | undefined> => {
    return await db.query.UsersTable.findFirst({
        where: eq(UsersTable.id, id)
    })
}

type TRIUser = Array<{ id: number }>;

export const createUserService = async (user: TIUser): Promise<TRIUser | undefined> => {
    return await db.insert(UsersTable).values(user).returning({ id: UsersTable.id }).execute();
}

export const updateUserService = async (id: number, user: TIUser) => {
    await db.update(UsersTable).set(user).where(eq(UsersTable.id, id))
    return "User updated successfully";
}

export const deleteUserService = async (id: number) => {
    await db.delete(UsersTable).where(eq(UsersTable.id, id))
    return "User deleted successfully";
}
