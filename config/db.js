import mongoose from "mongoose";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(`${process.env.MONGODB_URI}/QuickCart`, opts)
      .then((mongoose) => {
        return mongoose;
      });
  }

    cached.conn = await cached.promise;
    return cached.conn;
}

export default connectDB;





// Simplified connectDB.js for Next.js + Mongoose


// import mongoose from "mongoose";

// let isConnected = false; // connection state

// export async function connectDB() {
//   if (isConnected) {
//     console.log("📦 Using existing MongoDB connection");
//     return;
//   }

//   try {
//     const db = await mongoose.connect(process.env.MONGODB_URI, {
//       dbName: "QuickCart", // optional but cleaner
//     });

//     isConnected = db.connections[0].readyState === 1;

//     console.log("🚀 MongoDB Connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error);
//   }
// }
