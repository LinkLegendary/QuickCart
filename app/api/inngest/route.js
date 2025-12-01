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



// app/api/inngest/route.js
import { serve } from "inngest/next";
import { inngest } from "@/config/inngest";

// Lazy load functions to avoid build-time Mongoose imports
async function loadFunctions() {
  const { 
    syncUserCreation, 
    syncUserUpdation, 
    syncUserDeletion 
  } = await import("@/config/inngest");

  return [
    syncUserCreation,
    syncUserUpdation,
    syncUserDeletion,
  ];
}

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: await loadFunctions(),
});
