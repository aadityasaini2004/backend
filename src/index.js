import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env"
})

connectDB()



// ;(async ()=> {
//   try {
//     await mongoose.connect(`${process.env.MONOGODB_URL} /${DB_NAME}`)
//     app.on("error",(error) => {
//       console.log("Application does not talk with database", error);
//       throw error
//     })
//     app.listen(process.env.PORT, () => {
//        console.log(`App is listning on ${process.env.PORT}`); 
//     })

//   } catch (error) {
//     console.error("ERROR:" , error)
//     throw err
//   }
// })()