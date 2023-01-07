const mongoose = require("mongoose")
mongoose.set('strictQuery', true);

//mongo connection url

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })

.then(()=> console.log("connection successful..."))
.catch((err)=>console.log(err))


// const desifruitsSchema =  new mongoose.Schema({

//     name: {
//         type: String,
//         required: true,
//     },
//     price: String,
//     owner: String,
//     no: Number,
//     address: String,
//     date:{
//         type: Date,
//         default: Date.now
//     }
// })



// const DeshiFruit = new mongoose.model('DeshiFruit',desifruitsSchema)

// const createDocument = async () => {
//     try {
//         const gazipur = new DeshiFruit({
//     name: "mango",
//     price: 18,
//     owner: "sagor",
//     no: 1,
//     address: "gazi",
   
// })

// const result = await gazipur.save()
// console.log(result);
//     }catch(err){
//         console.log(err);
//     }

// }

// createDocument()

const afganiFruit = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    price:  {
        type: Number,
        required: true,

    },

    address: String,
    owner: String,
    date :{
            type: Date,
            default: Date.now,
       
}})


const AfganiFruit = new mongoose.model("AfganiFruit", afganiFruit);

const documnetCreate = async () => {
    try {
        const oman = new AfganiFruit({
            name: "dalim",
            price: 109,
            address: "oman",
            owner: "sagor",
        })
        const duvai = new AfganiFruit({
            name: "badam",
            price: 16,
            address: "duvai",
            owner: "sagor",
        })
        const qatar = new AfganiFruit({
            name: "lichi",
            price: 677,
            address: "qatar",
            owner: "sagor",
        })
        
        //insert many data
        const result = await AfganiFruit.insertMany([oman,duvai, qatar])
        
        console.log(result)
        
    }catch(err){
        console.log(err)
    }
}


// documnetCreate()


// read document by this 
const getDocument = async () => {

    const result = await AfganiFruit.find({name:"lichi"})
    console.log("result is", result)

}
getDocument()