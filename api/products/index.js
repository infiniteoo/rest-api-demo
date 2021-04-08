import express from 'express';
import { getCollection } from '../../database';

export const router = express.Router();

router.get('/detail/:SKU', async function(req, res){

    const { SKU } = req.params;
    
    console.log("Searching for SKU", SKU);
    const collection = await getCollection("store", "products");
    const product = await collection.findOne({SKU : +SKU});
    res.json(product);


})

