import { User } from './models/user.model'

export class UserService {

    users: Array<User>;

    constructor(){
        this.users = [
            {
                id: 1,
                name: 'Ann',
                email: 'Ann@hobbies.com',
                hobbies: ['books', 'running', 'sitting']
            },
            {
                id: 1,
                name: 'Ann',
                email: 'Ann@hobbies.com',
                hobbies: ['books', 'running', 'sitting']
            }
        ];
    }
 
    getUser(id: number) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            const { hobbies, ...newUser } = user;
            return newUser;
        }
        
        return undefined;
    }

    changeName(id: number, newName: string) {
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

    changeEmail(id: number, newEmail: string) {
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
    
    getHobbies(id: number) {
        return this.users.find((user: User) => user.id === id)?.hobbies || undefined;
    }

    addHobbies(id: number, newHobbies: Array<string>) {
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

    deleteHobbies(id: number, hobbiesToRemove: Array<string>) {
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