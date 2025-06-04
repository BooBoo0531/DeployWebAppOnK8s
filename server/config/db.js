const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const mongoUrl = process.env.MONGO_URL; // Không cần dotenv ở đây!
    if (!mongoUrl) {
      throw new Error("MONGO_URL is not defined");
    }
    const conn = await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error connecting MongoDB: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
