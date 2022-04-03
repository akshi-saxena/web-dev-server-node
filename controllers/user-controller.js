import people from './users/users.js';
let users = people;

const userController = (app) => {
 app.get('/api/users', findAllUsers);
}

const findAllUsers = (req, res) => {
    const type = req.query.type;
    if(type) {
      res.json(findUsersByType(type));
      return;
    }   
}

const findUsersByType = (type) => {
    return users.filter(user => user.type === type);
}
   

export default userController;