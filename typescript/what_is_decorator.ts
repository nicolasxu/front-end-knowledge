/*

	Decorator:
	Software design pattern that modify the origianl code behavior without modifying the code directly.
	e.g.:
	class decorator will modify the class behavior without modify the class definition code, which could be a library. 

	Typescript decorator is a function called at runtime
	A Class Decorator is declared just before a class declaration.

*/

// Example in Angular 2

import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	template: '<h1>First Angular App - Nicolas Xu</h1>'
})
export class AppComponent {}