import { Validator } from "../Validator";
import { FieldValidator } from "./FieldValidator";
import { extractValidatorPropeties } from "./utils";

@Validator()
export class FnValidator implements FieldValidator {
    validate(field: string, props: any, value: any) {
        if (typeof props == "function") {
            return props(value);
        }
    }
}