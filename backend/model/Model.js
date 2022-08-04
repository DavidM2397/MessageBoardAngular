// Requiring module
const mongoose = require('mongoose');

// Art Schema
const artSchema = new mongoose.Schema({
	msg: String,
	name: String,
    email: String,
	board: String,
    date: Date
});

// Cars
const carsSchema = new mongoose.Schema({
	msg: String,
	name: String,
    email: String,
	board: String,
    date: Date
});

// Music
const musicSchema = new mongoose.Schema({
	msg: String,
	name: String,
    email: String,
	board: String,
    date: Date
});

// Programming 
const programmingSchema = new mongoose.Schema({
	msg: String,
	name: String,
    email: String,
	board: String,
    date: Date
});

// Sports
const sportsSchema = new mongoose.Schema({
	msg: String,
	name: String,
    email: String,
	board: String,
    date: Date
})



// Creating model objects
const Art = mongoose.model('Art', artSchema);
const Cars = mongoose.model('Cars', carsSchema);
const Music = mongoose.model('Music', musicSchema);
const Programming = mongoose.model('Programming', programmingSchema);
const Sports = mongoose.model('Sports', sportsSchema);

// Exporting our model objects
module.exports = {
	Art, Cars, Music, Programming, Sports
}
