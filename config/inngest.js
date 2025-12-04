
import { Inngest } from "inngest";
import connectDB from "./db";
import User from "@/models/User";


// Create a client to send and receive events
export const inngest = new Inngest({ id: "quickcart-next" });

// Inngest Function to save user data to a database
export const syncUserCreation = inngest.createFunction(
    {
        id: 'sync-user-from-clerk'
    },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.create(userData)
    }
)

// Inngest Function to update user data in database 
export const syncUserUpdation = inngest.createFunction(
    {
        id: 'update-user-from-clerk'
    },
    { event: 'clerk/user.updated' },
    async ({event}) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + ' ' + last_name,
            imageUrl: image_url
        }
        await connectDB()
        await User.findByIdAndUpdate(id,userData)
    }
)

// Inngest Function to delete user from database
export const syncUserDeletion = inngest.createFunction(
    {
        id: 'delete-user-with-clerk'
    },
    { event: 'clerk/user.deleted' },
    async ({event}) => {
        
        const {id } = event.data

        await connectDB()
        await User.findByIdAndDelete(id)
    }
)















// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "@/models/User";

// export const inngest = new Inngest({ id: "quickcart-next" });

// // Create Clerk user
// export const syncUserCreation = inngest.createFunction(
//   { id: 'sync-user-from-clerk' },
//   { event: 'clerk/user.created' },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     const userData = {
//       _id: id,
//       email: email_addresses[0].email_address,
//       name: `${first_name} ${last_name}`,
//       imageUrl: image_url,
//     };

//     await connectDB();
//     await User.create(userData);
//   }
// );

// // Update Clerk user
// export const syncUserUpdation = inngest.createFunction(
//   { id: 'update-user-from-clerk' },
//   { event: 'clerk/user.updated' },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     const userData = {
//       _id: id,
//       email: email_addresses[0].email_address,
//       name: `${first_name} ${last_name}`,
//       imageUrl: image_url,
//     };

//     await connectDB();
//     await User.findByIdAndUpdate(id, userData);
//   }
// );

// // OPTIONAL — if you want deletion
// export const syncUserDeletion = inngest.createFunction(
//   { id: "delete-user-from-clerk" },
//   { event: "clerk/user.deleted" },
//   async ({ event }) => {
//     const { id } = event.data;

//     await connectDB();
//     await User.findByIdAndDelete(id);
//   }
// );














// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "@/models/User";

// // Create client
// export const inngest = new Inngest({ id: "quickcart-next" });

// // Functions
// export const syncUserCreation = inngest.createFunction(
//   { id: "sync-user-creation" },
//   { event: "clerk/user.created" },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     await connectDB();

//     await User.create({
//       _id: id,
//       email: email_addresses[0].email_address,
//       name: `${first_name} ${last_name}`,
//       imageUrl: image_url,
//     });
//   }
// );

// export const syncUserUpdation = inngest.createFunction(
//   { id: "update-user-from-clerk" },
//   { event: "clerk/user.updated" },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url } = event.data;

//     await connectDB();

//     await User.findByIdAndUpdate(id, {
//       email: email_addresses[0].email_address,
//       name: `${first_name} ${last_name}`,
//       imageUrl: image_url,
//     });
//   }
// );

// export const syncUserDeletion = inngest.createFunction(
//   { id: "delete-user" },
//   { event: "clerk/user.deleted" },
//   async ({ event }) => {
//     await connectDB();
//     await User.findByIdAndDelete(event.data.id);
//   }
// );

























// import { Inngest } from "inngest";
// import connectDB from "./db";
// import User from "@/models/User";


// // Create a client to send and receive events
// export const inngest = new Inngest({ id: "quickcart-next" });

// export const syncUserCreation = inngest.createFunction(

//   { id: "sync-user-creation" },
//   { event: "clerk/user.created" },
//   async ({ event }) => {
//     const { id, first_name, last_name, email_addresses, image_url, } = event.data;
//     const userData = {
//       _id: id,
//        email: email_addresses[0].email_address,
//       name: first_name + '' + last_name,
//      imageUrl: image_url,
      
//     };

//     await connectDB();
//     await User.create(userData);
//   }
// );



// export const syncUserUpdation = inngest.createFunction(
//     { id: 'update-user-from-clerk'},
//     { event: 'clerk/user.updated'},
//     async ({event}) => {
//          const { id, first_name, last_name, email_addresses, image_url, } = event.data;
//     const userData = {
//       _id: id,
//        email: email_addresses[0].email_address,
//       name: first_name + '' + last_name,
//      imageUrl: image_url,
      
//     };
//       await connectDB()
//       await User.findByIdAndUpdate(id,userData)
      
//     }
// )




// export const syncUserDeletion = inngest.createFunction(
//     { id: 'delete-user.deleted'},
//     { event: 'clerk/user.deleted'},
//     async ({event}) => {
//           const {id} = event.data
//           await connectDB()
//           await User.findByIdAndDelete(id)
//     }
// )

































