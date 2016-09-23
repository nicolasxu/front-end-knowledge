
import { StringValidator } from "./Validation";

import { Face2 } from "./Validation";

export const numberRegexp = /^[0-9]+$/;

export class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}



export { ZipCodeValidator as ZV }