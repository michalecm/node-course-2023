import http from 'http'
import * as url from 'url'
import { UserController } from './src/user.controller'

const server = http.createServer((req, res) => {
    const userController = new UserController();
    const { path, pathName } : any = url.parse(req.url || '');
    const userRoutePattern = /^\/user\/(\d+)$/; 
    let requestBody = '';
   
    if (req.method === 'GET') {
        if(path.includes('users')) {
            return userController.getUser(req, res);
        }
        if(path.includes('hobbies')) {
            return userController.getHobbies(req, res);
        }
    }
});
  
  const PORT = process.env.PORT || 3000;
  
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
//caching headers for hobbies
//hypermedia links (HATEOAS) for each user to retrieve a list of hobbies