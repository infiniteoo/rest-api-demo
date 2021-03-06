import express from 'express';
import { router as products } from './products';

const app = new express();

app.get('/', express.static('api/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/products', products);

app.listen(7777, function() {
    console.log('App Running');
});

