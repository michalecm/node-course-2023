import { UserEntity } from '../models/user.entity'

let users = [
    { id: '0fe36d16-49bc-4aab-a227-f84df899a6cb' }
]
  
export class UserRepository {
    getUser(id: string) { 
        const user = users.find(user => user.id === id)
        const userExists = !!user
        if(!userExists) return undefined;
        return user;
    }

    getUsers() { 
        return users
    }

    addUser(id: string) {
        const user = users.find(user => user.id === id)
        const userExists = !!user
        if(userExists) throw new Error("User exists.")
        const newUser = {id}
        users = [...users, newUser]
        return newUser;
    }
}