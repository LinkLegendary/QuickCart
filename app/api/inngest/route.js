import { serve } from "inngest/next";
import { createUserOrder, inngest, syncUserCreation, syncUserDeletion, syncUserUpdation } from "@/config/inngest";

// Create an API that serves zero functions
export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
    createUserOrder
  ],
});








// import { serve } from "inngest/next";
// import {
//   inngest,
//   syncUserCreation,
//   syncUserUpdation,
//   syncUserDeletion,
// } from "@/config/userFunction";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
// });











// TEST FUCTION
// import { NextResponse } from "next/server";
// import connectDB from "@/config/db";
// import User from "@/models/User";

// export async function GET() {
//   try {
//     await connectDB();

//     const user = await User.create({
//       _id: "manual-test",
//       name: "Manual Test",
//       email: "manual@test.com",
//       imageUrl: "https://example.com",
//     });

//     console.log("Inserted:", user);

//     return NextResponse.json({ ok: true, user });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }















// import { serve } from "inngest/next";

// import {
//   inngest,
//   syncUserCreation,
//   syncUserUpdation,
//   syncUserDeletion,
// } from "@/config/inngest";

// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [
//     syncUserCreation,
//     syncUserUpdation,
//     syncUserDeletion,
//   ],
// });

















// import { serve } from "inngest/next";


// import {
//   inngest,
//   syncUserCreation,
//   syncUserDeletion,
//   syncUserUpdation,
// } from "@/config/inngest";

// // Create an API that serves zero functions
// export const { GET, POST, PUT } = serve({
//   client: inngest,
//   functions: [syncUserCreation, syncUserUpdation, syncUserDeletion],
// });



