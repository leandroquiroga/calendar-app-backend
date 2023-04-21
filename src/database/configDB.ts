import mongoose from "mongoose";
import { environment } from "../configuration/environment";

export const dbConecting = async () => {
  try {
    const db = await mongoose.connect(environment.DB_URI);
    console.log(`Connection success on ${db.connection.name}`)
  } catch (error) {
    console.log(error);
    throw new Error('Error ! database not connected')
  }
};
