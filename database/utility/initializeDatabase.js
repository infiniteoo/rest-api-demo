import { getCollection } from '../'


const brands = [
    "Shanes's",
    "Diligan",
    "Veggies of the Spinning Wheel"
]

const productTypes = [
    "Sweater",
    "Tee-Shirt",
    "Hat",
    "Shoes"
]

const sizes = [

    "Small",
    "Medium",
    "Large"

]

const colors = [
    "Black",
    "Blue",
    "White",
    "Green"
]

let skuCount = 1;
let price = 1;


function generateProducts() {
    const products = [];

    for (let brand of brands) {

        for (let color of colors) {

            for (let productType of productTypes) {

                for (let size of sizes) {
                    products.push({
                        SKU: skuCount++,
                        brand,
                        productType,
                        color,
                        size,
                        price: price++,
                        quantity: 5
                    })
                }
            }
        }
    }

    return products;
}

(async function() {



const products = generateProducts();

const collection = await getCollection("store", "products");
await collection.deleteMany();
await collection.insertMany(products);

const tokens = await getCollection("auth", "tokens");
await tokens.insertOne({
    owner: "CLIENT-1",
    value: 1234,
    expiry: null,
    canModifyProducts: true
})


console.log('DONE!');


})();