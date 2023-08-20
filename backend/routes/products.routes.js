const express = require("express");
const { ProductModel } = require("../models/products.models");
const productRouter = express.Router();





productRouter.get("/products", async (req, res) => {
  try {
    let data = await ProductModel.find();
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send({ err: error.message }); 
  }
});


productRouter.get("/search/:key",async(req,res)=>{
  const {key}=req.params;
  console.log(key);
  try {
     let result =await ProductModel.find({
      "$or":[
        {title:{$regex:new RegExp(key,"i")}},
        {type:{$regex: new RegExp(key,"i")}}
      ]
     })
     res.status(200).send(result)
  } catch (error) {
    res.status(500).send({error})
  }
})

module.exports = { productRouter };
