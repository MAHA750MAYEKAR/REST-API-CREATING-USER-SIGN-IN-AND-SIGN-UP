import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export default async function connectToDb() {
      try {
            await mongoose.connect(DB_URL)
            console.log("successfully connected to DB");



      } catch (error) {
            console.log("error in connecting to database", error);


      }

}