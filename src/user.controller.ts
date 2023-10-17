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
            const pathArr = url.parse(req.url).path?.split('/')
            const userId = pathArr[pathArr.length - 1]

            const user = this.userService.getUser(userId);

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

    addUser(req: http.IncomingMessage, res: http.ServerResponse) {
        let chunks: any = [];
        let parsedData: any = '';
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            const data = Buffer.concat(chunks);
            parsedData = JSON.parse(data.toString('utf-8'))
            const result = this.userService.addUser(parsedData.name, parsedData.hobbies, parsedData.email)
            if(result) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(result))
            }

            res.statusCode = 500;
            res.end("Error");
        })
    }

    deleteUser(req: http.IncomingMessage, res: http.ServerResponse) {
        if(req.url) { 
            const pathArr = url.parse(req.url).path?.split('/')
            const userId = pathArr[pathArr.length - 1]

            const user = this.userService.getUser(userId);
            if(user){
                this.userService.deleteUser(userId)
            }
        }
    }

    updateUser(req: http.IncomingMessage, res: http.ServerResponse) {
        let chunks: any = [];
        let parsedData: any = '';
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            const data = Buffer.concat(chunks);
            parsedData = JSON.parse(data.toString('utf-8'))
            if(req.url) { 
                const pathArr = url.parse(req.url).path?.split('/')
                const userId = pathArr[pathArr.length - 1]
    
                const user = this.userService.getUser(userId);
    
                if(user) {
                    const result = this.userService.updateUser(userId, parsedData)
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(result))
                }
    
                res.statusCode = 404;
                res.statusMessage = "User ID not found."
                res.end();
            }
        })
    }

    getHobbies(req: http.IncomingMessage, res: http.ServerResponse) {
        if(req.url) { 
            const pathArr = url.parse(req.url).path?.split('/')
            const userId = pathArr[pathArr.length - 1]

            const user = this.userService.getUser(userId);

            if(user && user.hobbies) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify(user.hobbies))
            }

            res.statusCode = 404;
            res.statusMessage = "User ID not found."
            res.end();
        }
    }

    addHobbies(req: http.IncomingMessage, res: http.ServerResponse) {
        let chunks: any = [];
        let parsedData: any = '';
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            const data = Buffer.concat(chunks);
            console.log(data.toString('utf-8'))
            parsedData = JSON.parse(data.toString('utf-8'))
            console.log(parsedData.hobbies)
            if(req.url) { 
                const pathArr = url.parse(req.url).path?.split('/')
                const userId = pathArr[pathArr.length - 1]
    
                const user = this.userService.getUser(userId);
    
                if(user) {
                    console.log('in controller ' + parsedData.hobbies)
                    const result = this.userService.addHobbies(userId, parsedData.hobbies)
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(result))
                }
    
                res.statusCode = 404;
                res.statusMessage = "User ID not found."
                res.end();
            }
        })
    }
   
    deleteHobbies(req: http.IncomingMessage, res: http.ServerResponse) {
        let chunks: any = [];
        let parsedData: any = '';
        req.on("data", (chunk) => {
            chunks.push(chunk);
        });

        req.on("end", () => {
            console.log('we;;2')
            const data = Buffer.concat(chunks);
            parsedData = JSON.parse(data.toString('utf-8'))
            if(req.url) { 
                const pathArr = url.parse(req.url).path?.split('/')
                const userId = pathArr[pathArr.length - 1]
    
                const user = this.userService.getUser(userId);
    
                if(user) {
                    const result = this.userService.deleteHobbies(userId, parsedData.hobbies)
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json')
                    res.end(JSON.stringify(result))
                }
    
                res.statusCode = 404;
                res.statusMessage = "User ID not found."
                res.end();
            }
        })
    }

}