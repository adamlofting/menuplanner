var app = require('./server');
var conn = app.locals.mers.conn;

var Thing = conn.model('Thing');
var Meal = conn.model('Meal');
var MenuPlan = conn.model('MenuPlan');
var UserAccount = conn.model('UserAccount');

var i=0;


// function newmeal(next){
//   new Meal({
// 		name:"Meal "+(i++),
//         things:[{
// 					name:"Thing "+(i++),
// 			        amount:"2",
// 			        unit:"grams",
// 			        price:1,
// 			        got:false
// 			   }],
//         made:false
//    }).save(next);
// }

// conn.collections.meals.drop(function(){
// newmeal(newmeal(newmeal));
// });

app.listen(3002);
console.log("Express server listening on port 3002 in %s mode", app.settings.env);
