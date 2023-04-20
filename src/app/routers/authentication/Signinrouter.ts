import {  v4 } from 'uuid';
import {  Request, Response, Router } from 'express';
import { User } from '../../../entities/User';
import { UserDatabase } from '../../../database/UserDatabase';
const signin = Router();
const id  = v4();

signin.post('/signin', (req: Request, res: Response) => {
    try {
        const user : User = {   
            id,   
            email: req.body.email,  
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: req.body.password
           }
           userDatabase.save(user);
            return res.status(200).send(user);
    } catch (error) {
        return res.sendStatus(400);
    }
});

export default signin