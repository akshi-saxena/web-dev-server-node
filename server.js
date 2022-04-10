import express from 'express';
import helloController
  from "./controllers/hello-controller.js";
import userController from './controllers/user-controller.js';
import tuitsController from './controllers/tuits-controller.js';
import cors from 'cors';

import tuitsController from "./tuits/tuits-controller.js";
// mongoose.connect('mongodb+srv://akshisaxena:<password>@cluster0.jvygh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
helloController(app)
userController(app)
tuitsController(app)
app.get('/', (req,res) => res.send('Welcome to Full Stack Development'))
app.listen(process.env.PORT || 4000);