import express, { Express } from 'express';
const app: Express = express();
app.use(express.json());
import signup from './app/routers/authentication/SignupRouter';
import signin from './app/routers/authentication/Signinrouter';

app.use(signup);
app.use(signin);

app.listen(3000, ()=> {
    console.log(`http://localhost:3000`);
});