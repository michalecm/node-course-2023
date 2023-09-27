import { User } from './models/user.model'
import { v4 as uuid } from 'uuid'

export class UserService {

    users: Array<User>;

    constructor(){
        this.users = [
            {
                id: '1',
                name: 'Ann',
                email: 'Ann@hobbies.com',
                hobbies: ['books', 'running', 'sitting']
            },
            {
                id: uuid(),
                name: 'Bob',
                email: 'bob@hobbies.com',
                hobbies: ['crying', 'crawling', 'screaming']
            }
        ];
    }
 
    getAllUsers() {
        return this.users;
    }

    getUser(id: string) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            const { hobbies, ...newUser } = user;
            return newUser;
        }
        
        return undefined;
    }

    addUser(name: string, hobbies: Array<string>, email: string) {
        const id = uuid();
        this.users.push({ name, hobbies, email, id });
        return this.users.find(user => user.id === id);
    }

    deleteUser(id: string) {
        this.users = this.users.filter(user => user.id !== id);
        return this.users.find(user => user.id === id);
    }

    changeName(id: string, newName: string) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const { name, ...updatedUser } = user;
            const result = { ...updatedUser, name: newName };
            this.users.push(result);
            return result;
        }

        return undefined;
    }

    changeEmail(id: string, newEmail: string) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const { email, ...updatedUser } = user;
            const result = { ...updatedUser, email: newEmail };
            this.users.push(result);
            return result;
        }

        return undefined;
    }
    
    getHobbies(id: string) {
        return this.users.find((user: User) => user.id === id)?.hobbies || undefined;
    }

    addHobbies(id: string, newHobbies: Array<string>) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const { hobbies, ...updatedUser } = user;
            const result = { ...updatedUser, hobbies: [...hobbies, ...newHobbies] };
            this.users.push(result);
            return result;
        }

        return undefined;
    }

    deleteHobbies(id: string, hobbiesToRemove: Array<string>) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const { hobbies, ...updatedUser } = user;
            const result = { ...updatedUser, hobbies: hobbies.filter(hobby => !hobbiesToRemove.includes(hobby))};
            this.users.push(result);
            return result;
        }

        return undefined;
    }
}