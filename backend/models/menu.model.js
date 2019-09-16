const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const menuItemSchema = new Schema({
	itemname: { type: String, required: true },
	description: { type: String, required: true},
	price: { type: Number, required: false}
}, {
	timestamps: true,
});

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

module.exports = MenuItem;