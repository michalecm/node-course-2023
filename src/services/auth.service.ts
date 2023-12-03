import { UserRepository } from "../repositories/user.repository";
import uuid4 from "uuid4";

export class AuthService {

    userRepository: UserRepository;

    constructor(repository: UserRepository) {
        this.userRepository = repository;
    }

    createUser() {
        const id = uuid4()
        this.userRepository.addUser(id)
        return this.getUser(id)
    }

    getUser(id: string) {
        return this.userRepository.getUser(id)
    }

    getUsers(){
        return this.userRepository.getUsers()
    }
}