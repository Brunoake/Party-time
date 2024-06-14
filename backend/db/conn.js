const mongoose = require("mongoose")

async function main() {

    try {

        mongoose.set("strictQuery", true);

        await mongoose.connect("mongodb+srv://bruno:7g*Aw_-6TpwaYxD@cluster0.evll01o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

        console.log("conectado ao banco")
    } catch (error) {
    console.log(`erro: ${error}`)    
    }

}

module.exports = main;