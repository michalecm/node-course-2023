import express from 'express'
import bodyParser from 'body-parser'
import router from './routes'
import * as models from './models'
import { UserRepository } from './repositories/user.repository';
import { AuthService } from './services/auth.service';
const userRepository = new UserRepository()
const authService = new AuthService(userRepository);

//user can add products to cart and then order them
//product repreents products a user can order
//cart contains a list of products and the amount a user can order
//order contains a list of products from a cart that a user has ordered

//User has 1 cart at a time, attached to a specific user
//can have multiple orders

//API with Swagger and proper http codes
//controller service and repository
//data is stored in memory or on file system
// JOI validation
// x-user-id header with middleware to check that the user is valid
// order should have copy of product not the ID 
//optional DELETE soft delete

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
    const userId = req.headers['x-user-id']
    const userExists = authService.getUser(userId as string)
    if(userExists || req.path.includes('auth')) next()
    else {
        res.status(401)
        res.send('UNAUTHORIZED')
    }
})

app.use(router)

const server = app.listen(3000, () => { console.log("listening...") })