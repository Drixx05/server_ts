
import {  Request, Response, Router } from 'express';
import { User } from '../../../entities/User';
import userDatabase from './SignupRouter';
import userDb from '../../../database/UserDatabase';
const signin = Router();
const userId = userDb.get(id);
const pass = userDb.get(password)
signin.post('/signin', (req: Request, res: Response) => {
    try {
             this.pass = password;
           if (!user) {

           }
            return res.status(200).send(user);
    } catch (error) {
        return res.sendStatus(400);
    }
});

export default signin