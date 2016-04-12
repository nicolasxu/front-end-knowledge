



var source = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this";
// must read


/* 1. In Arrow function */
// in Arrow function, this is set permently as where it is defined, permently. 
// No matter what, foo's this is set to what it was when it was created 
// (in the example above, the global object). 

var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject); // true

// Call as a method of an object
var obj = {foo: foo};
console.log(obj.foo() === globalObject); // true
// still global object, not obj

// Attempt to set this using call
console.log(foo.call(obj) === globalObject); // true

// Attempt to set this using bind
foo = foo.bind(obj);
console.log(foo() === globalObject); // true



/* 2. As Object method */

var o = {prop: 37};
function independent() {
  return this.prop;
}
o.f = independent;

console.log(o.f()); // logs 37

var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5

/* 3. Getter & Setter (same as object method) */
// what is getter/setter? 
// The get syntax binds an object property to a 
// function that will be called when that property 
// is looked up.


function sum(){
  return this.a + this.b + this.c;
}

var o = {
  a: 1,
  b: 2,
  c: 3,
  get average(){
    return (this.a + this.b + this.c) / 3;
  }
};

Object.defineProperty(o, 'sum', {
    get: sum, enumerable:true, configurable:true});

console.log(o.average, o.sum); // logs 2, 6

/* 3. As a constructor */
// As a constructor
// When a function is used as a constructor (with the new keyword), 
// its this is bound to the new object being constructed.

/* 4. call, apply, bind */
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7); // [object Number]

function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty

/* 5. DOM event handler */
// When a function is used as an event handler, 
// its this is set to the element the event fired from 
// When called as a listener, turns the related element blue
function bluify(e){
  // Always true
  console.log(this === e.currentTarget); 
  // true when currentTarget and target are the same object
  console.log(this === e.target);
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the
// element is clicked on, it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}

/* 6. event handler */
// When code is called from an in–line on-event handler, 
// its this is set to the DOM element on which the listener 
<button onclick="alert(this.tagName.toLowerCase());">
  Show this
</button>
// The above alert shows button. Note however that only the 
// outer code has its this set this way:
<button onclick="alert((function(){return this}()));">
  Show inner this
</button>