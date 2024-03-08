
const mongoose = require("mongoose")

const MONGO_URI =
  //process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/Mamachama"
    process.env.MONGODB_URI || "mongodb+srv://helena-mamachamadb:9NLgmn2z4CMtb8YA@mamachamadb.viyc9cr.mongodb.net/?retryWrites=true&w=majority&appName=MamachamaDB"


mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name
    console.log(`Connected to Mongo! Database name: "${dbName}"`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err)
  })
