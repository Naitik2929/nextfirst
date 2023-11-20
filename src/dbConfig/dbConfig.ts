import mongoose, { mongo } from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const conn = mongoose.connection;
    conn.on("connected", () => {
      console.log("Database connected successfully");
    });
  } catch (error) {
    console.log(error);
  }
}
