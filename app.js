import express from 'express';
// import bodyParser from 'body-parser';
import teste1 from './teste1.js';
import teste2 from './teste2.js';
import teste3 from './teste3.js';
import teste4 from './teste4.js';
import teste5 from './teste5.js';
import validationMiddleware from './validationMiddleware.js';

const app = express();

app.set('view engine', 'jade');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// bodyParser is deprecated
// app.use(bodyParser.json());                        
// app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(import.meta.url + '/public'));

app.get('/', function(req, res){
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2)
app.delete("/users/:userId", validationMiddleware, teste3)
app.put("/users/:userId", validationMiddleware, teste4)
app.get("/users/access", teste5);


const PORT  = 3000;
app.listen(PORT, function(){
  console.log('Express server listening on port ' + PORT);
});