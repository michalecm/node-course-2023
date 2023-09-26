import * as url from 'url'
import { UserService } from "./user.service";
import http from 'http'

export class UserController {

    userService: UserService;

    constructor(){
        this.userService = new UserService()
    }

    getAllUsers(req: http.IncomingMessage, res: http.ServerResponse) {
        const users = this.userService.getAllUsers();
        if(users) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(users))
        }

        res.statusCode = 500;
        res.statusMessage = "Error retrieving users."
        res.end();
    }

    getUser(req: http.IncomingMessage, res: http.ServerResponse) {
        if(req.url) { 
            const userId = Number.parseInt(url.parse(req.url).pathname ?? '0')
            const user = this.userService.getUser(userId)
            console.log(user)
            if(user) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(user))
            }

            res.statusCode = 404;
            res.statusMessage = "User ID not found."
            res.end();
        }
    }

    // changeName(req: http.IncomingMessage, res: http.ServerResponse) {
    //     if(req.url) { 
    //         const userId = Number.parseInt(url.parse(req.url).pathname ?? '0')
    //         const newName = req.
            
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'application/json')
    //             return res.end(JSON.stringify(user))

    //         res.statusCode = 404;
    //         res.statusMessage = "User ID not found."
    //         return res.end();
    //     }
    // }

    changeEmail(req: http.IncomingMessage, res: http.ServerResponse) {}
    getHobbies(req: http.IncomingMessage, res: http.ServerResponse) {}
    addHobbies(req: http.IncomingMessage, res: http.ServerResponse) {}
    deleteHobbies(req: http.IncomingMessage, res: http.ServerResponse) {}
}