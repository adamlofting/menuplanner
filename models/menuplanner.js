var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
ObjectId = mongoose.Schema.ObjectId;

// Things can be ingredients in a meal, and also ad-hoc purchases
var ThingSchema = new Schema({
    name:  String,
    amount: String,
    unit:   String,
    price: Number,
    got: Boolean
});

var MealSchema = new Schema({
    name:  String,
    things: [ThingSchema],
    made: Boolean
});

var MenuPlanSchema = new Schema({
    name:  String,
    date: { type: Date, default: Date.now },
    meals: [MealSchema],
    otherThings: [ThingSchema],
    complete: Boolean
});

var UserAccountSchema = new Schema({
    email: String,
    currency: { type: String, default: '&pound;' },
    menuplans: [MenuPlanSchema]
});

// Turn the schema into models
var Thing = module.exports.Thing = mongoose.model('Thing', ThingSchema);
var Meal = module.exports.Meal = mongoose.model('Meal', MealSchema);
var MenuPlan = module.exports.MenuPlan = mongoose.model('MenuPlan', MenuPlanSchema);
var UserAccount = module.exports.UserAccount = mongoose.model('UserAccount', UserAccountSchema);