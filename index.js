import express from 'express'
import { PORT } from './SRC/Config/serverConfig.js';
import connectToDb from './SRC/Config/DbConfig.js';

const app=express()




app.listen(PORT,()=>{
      console.log("server is listening on port",PORT);
      connectToDb()
      
})