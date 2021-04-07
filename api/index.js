import express from 'express';

const app = new express();

app.get('/', express.static('api/public'));

app.listen(7777, function() {
    console.log('App Running');
})

