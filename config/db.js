const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
<<<<<<< HEAD
    await mongoose.connect(process.env.MONGO_URL,
=======
    await mongoose.connect('process.env.MONGO_URL',
>>>>>>> f99561ddc9e25b8d6d05ace1b85d71d32d3a86b7
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
    console.log(`Mongodb connected ${mongoose.connection.host}`.bgGreen.white);
  } catch (error) {
    console.log(`Mongodb Server Issue ${error}`.bgRed.white);
  }
};

module.exports = connectDB;
