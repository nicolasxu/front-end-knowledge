

export {ZipCodeValidator as RegExpBasedZipCodeValidator} from "./ZipCodeValidator";

export { A as B } from "./fileA";

/*
	fileA contains the definition of A. In my module, I just import A from file A,
	and then export it as B. That is:

	export { A as B } from "./fileA";

*/