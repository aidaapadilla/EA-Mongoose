require('../connection');

const Product = require('../models/muffins');

const someFunction = async () => {

    const donutone = new Product({
        name: 'DonutXocolata',
        description: 'veggie donut de xocolata'
    });
    await donutone.save();

    const donuttwo = new Product({
        name: 'DonutSucre',
        description: 'veggie donut amb fresa'
    });
    await donuttwo.save();

    const donutthree = new Product({
        name: 'DonutMickey',
        description: 'donut del mickey mouse'
    })
    await donutthree.save();


    const products = await Product.find({name: 'DonutXocolata'});
    console.log(products)

};

someFunction();