import axios from 'axios';

(async function() {{

    const adjust = await axios.post(`http://localhost:7777/products/adjust/quantity`,
    {
        SKU: 1,
        token: 1234,
        count: -1

    })

    console.log('adjustment?', adjust.data);


}})();