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
                hobbies: ['crying', 'eating', 'netflix']
            }
        ];
    }
 
    getAllUsers() {
        return this.users;
    }

    getUser(id: string) {
        return this.users.find((user: User) => user.id === id);
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

    updateUser(id: string, updatedUser: any) {
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const result = { ...updatedUser, id };
            this.users.push(result);
            return this.users.find(user => user.id === id);
        }

        return undefined;
    }
    
    getHobbies(id: string) {
        return this.users.find((user: User) => user.id === id)?.hobbies || undefined;
    }

    addHobbies(id: string, newHobbies: Array<string>) {
        console.log('do we g')
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            console.log('wasss')
            const oldHobbies = user.hobbies ?? []
            console.log(oldHobbies)
            console.log(newHobbies)
            const newUser = {...user, hobbies: [...oldHobbies, ...newHobbies]}
            this.users.push(newUser);
            console.log(this.users.find(user => user.id === id))
            return this.users.find(user => user.id === id);
        }

        return undefined;
    }

    deleteHobbies(id: string, hobbiesToRemove: Array<string>) {
        console.log('we;;')
        const user = this.users.find((user: User) => user.id === id);
        if(user) {
            this.users = this.users.filter((user: User) => user.id !== id);
            const { hobbies, ...updatedUser } = user;
            const result = { ...updatedUser, hobbies: hobbies.filter(hobby => !hobbiesToRemove.includes(hobby))};
            this.users.push(result);
            console.log('well')
            return result;
        }

        return undefined;
    }
}