const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://rushikeshk21:AM1wqFFlVdgJOZNw@cluster0.nssnkdv.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoConnection = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true // Adding this option for better compatibility
        }); 
        console.log("Database Connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        const food_category = await mongoose.connection.db.collection("food_category");
        try {
          const data= await fetched_data.find({}).toArray();
          const catData =  await food_category.find({}).toArray();
            global.food_items = data;
            global.food_category = catData;
        } catch (err) {
            console.log(err);
        }
        
    } catch (error) {
        console.error("Error connecting to the database:", error);
    }
};

module.exports = mongoConnection;
