import http from 'http'
import * as url from 'url'
import { UserController } from './src/user.controller'

const server = http.createServer((req, res) => {
    const userController = new UserController();
    const { pathName } : any = url.parse(req.url || '');
    const userRoutePattern = /^\/user\/(\d+)$/; 
    let requestBody = '';
  
    req.on('data', (chunk) => {
      requestBody += chunk.toString();
    });

    req.on('end', () => {
      const contentType = req.headers['content-type'];    
      if (contentType !== 'application/json') {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('This application only accepts JSON requests.');
      }
    });
   
    if (req.method === 'GET') {
      console.log('we gettings')
        // if(req.url === '/'){
        //     return userController.getAllUsers(req, res);
        // }
        if(userRoutePattern.test(pathName)) {
          console.log(true)
            return userController.getUser(req, res);
        }
    }
});
  
  const PORT = process.env.PORT || 3000;
  
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
  
//caching headers for hobbies
//hypermedia links (HATEOAS) for each user to retrieve a list of hobbies