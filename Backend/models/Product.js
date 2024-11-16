const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        default: null
    },
    price: {
        type: Number,
        require: true,
    },
    category: {
        type: String,
        require: true,
    }
})
const Product = mongoose.model('product', productSchema);
module.exports = Product;

// const constructionProducts = [
//     {
//         name: 'Portland Cement',
//         description: 'High-strength cement used in all kinds of construction projects',
//         price: 8.50,
//         category: 'Building Materials'
//     },
//     {
//         name: 'River Sand',
//         description: 'Fine sand ideal for plastering and flooring work',
//         price: 35.00,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Gravel (20mm)',
//         description: 'Crushed stone aggregate used in concrete mixes for strong foundations',
//         price: 50.00,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Red Clay Bricks',
//         description: 'Durable bricks for building walls and foundations',
//         price: 0.50,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Concrete Blocks',
//         description: 'Hollow concrete blocks for wall construction',
//         price: 1.50,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Ready-Mix Concrete',
//         description: 'Pre-mixed concrete for quick and easy use in large construction projects',
//         price: 80.00,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Steel Reinforcement Bars',
//         description: 'Steel rebar for reinforcing concrete in beams, slabs, and columns',
//         price: 120.00,
//         category: 'Building Materials'
//     },
//     {
//         name: 'Bitumen',
//         description: 'Asphalt material for road construction and waterproofing',
//         price: 200.00,
//         category: 'Road Construction'
//     },
//     {
//         name: 'Crushed Stone (10mm)',
//         description: 'Aggregate used in road construction and concrete mixes',
//         price: 45.00,
//         category: 'Road Construction'
//     },
//     {
//         name: 'Paving Stones',
//         description: 'Interlocking stones for outdoor pavements and landscaping',
//         price: 2.50,
//         category: 'Landscaping Materials'
//     }
// ];

// Insert the sample products into the database
// Product.insertMany(constructionProducts)
//     .then(() => {
//         console.log('Products added successfully');
//         mongoose.connection.close();
//     })
//     .catch((err) => {
//         console.error('Error adding products:', err);
//     });