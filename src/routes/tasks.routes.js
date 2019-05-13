import { Router } from 'express';

const router = Router();

//DATABASE CONNECT
import { connect } from '../database';


router.get('/', async (req, res)=>{
    const db = await connect();
    const tasks =await db.collection('tasks').find({}).toArray();
    console.log(tasks);
    res.send(tasks);
});

export default router;