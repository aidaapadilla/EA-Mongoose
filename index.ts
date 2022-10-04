require('./connection');

// using the model 
const bolleria = require('./module/muffins');

// creating a new document base on the model
let donut = new bolleria({
    name: 'MonstruoGalletas',
    description: 'Donut vegano de chocolate',
    price: '1.6'
});

console.log('created product', donut)

// saving the created document
donut.save((err, document) => {
    if (err) console.log(err);
    console.log('saved:', document);
});