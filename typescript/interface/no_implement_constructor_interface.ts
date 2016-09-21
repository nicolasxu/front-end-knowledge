interface ClockConstructor {
    new (hour: number, minute: number);
    // define an interface for constructor, but will result an error if you implement this interface


    // the reason is:
    /*
			 a class has two types: the type of the static side and 
			 the type of the instance side. You may notice that if 
			 you create an interface with a construct signature and 
			 try to create a class that implements this interface 
			 you get an error:
    */

}


class Clock implements ClockConstructor {
	// error
  currentTime: Date;
  constructor(h: number, m: number) { }
}


