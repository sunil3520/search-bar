const express= require("express")
const dotenv=require("dotenv");
const {connection}=require("./Config/db") 
const cors=require("cors");
dotenv.config();
const app=express()


const {productRouter}=require("./routes/products.routes")
app.use(cors())
app.use("/",productRouter)

app.listen(process.env.PORT,async()=>{
    console.log(`Server is running on port ${process.env.PORT}`);

    try {
        await connection;
        console.log(`Mongo is connected`)
    } catch (error) {
        console.warn(`Mongo disconnected`);
    } 
})