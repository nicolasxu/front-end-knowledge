
declare module myThing {


	interface MyObject {
    a: number;
    b: string;
	}


  export function getMyThing():string;
  export function getMyObject():MyObject;

}

