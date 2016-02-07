// in defing the backbonejs View, you can pass a function to 
// the events attributes in View to define function dynamically. 

var source = "http://stackoverflow.com/questions/34847792/event-binding-for-views-in-commonjs-backbonejs";



events:{
    "keydown .number-only": "isNumeric",
    "keydown .text-only": "isText",
    "keydown .alphanumeric": "isAlphanumeric"
},

events: function() {
 // access commonEventHash from your common file
  return _.extend(commonEventHash, {
    "click .custom": "customMethod" // events specific to view
  });
}