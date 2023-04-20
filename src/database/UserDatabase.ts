import { User } from "../entities/User";

const userDb = new Map();
export class UserDatabase {
    save(user : User) {
        userDb.set(user.id, user)
    }
}
