3.toString(); // will cause error, since 3 is not Number object yet

// but
var p = 3; // is converted to Number Obj
parseInt(3).toString(); // is also OK
p.toString(); // is OK