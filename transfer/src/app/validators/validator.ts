


export abstract class Validator {
    public errorMessage: string ;
    public validatorClass: string;

    abstract deserialize(jsonData): Validator;
    // static parseValidators(initValidators: Object[]): Validator[] {
    //     var finalValidators: Validator[] = [];

    //     for (let initValid in initValidators) {
    //         var instance = new ValidatorImpl[initValid.validatorClass]();
    //         instance.copyInto(initValid);
    //         finalValidators.push(instance);
    //     }

    //     return finalValidators;
    // }
}

export namespace ValidatorImpl {
    export class LengthValidator extends Validator {
        public minLength: number;
        public maxLength: number;


        constructor() {
            super();

            if (this.minLength && this.maxLength) {
                this.errorMessage = 'length should be between ' + this.minLength + ' and ' + this.maxLength;
            } else if (this.minLength) {
                this.errorMessage = 'length should be greater than ' + this.minLength;
            } else if (this.minLength) {
                this.errorMessage = 'length should be greater than ' + this.maxLength;
            }
        }

        deserialize(inputData): Validator {
            this.minLength = inputData.minLength;
            this.maxLength = inputData.maxLength;
            return this;
        }
    }

    export class RequiredValidator extends Validator {

        constructor() {
            super();

            this.errorMessage = 'is required';
        }

        deserialize(inputData): Validator {
            return this;
        }
    }
};
