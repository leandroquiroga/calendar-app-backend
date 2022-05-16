const mongoose  = require("mongoose");

const dbConecting = async () => {
  try {
    const db = await mongoose.connect(process.env.DB_URI);
    console.log(`Connection success on ${db.connection.name}`)
  } catch (error) {
    console.log(error);
    throw new Error('Error ! database not connected')
  }
};

module.exports = {
  dbConecting
};