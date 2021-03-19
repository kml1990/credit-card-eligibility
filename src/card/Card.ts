import Customer from '../customer/Customer';
import { Validator } from '../validators/Validator';

export interface CardParams {
    apr: number;
    balanceTransferOfferDuration: number;
    purchaseOfferDuration: number;
    creditAvailable: number;
}

export default class Card {
    private _customerValidator: Validator<Customer>;

    constructor(customerValidator: Validator<Customer>) {
        this._customerValidator = customerValidator;
    }

    isApplicableForCustomer(customer: Customer): boolean {
        return this._customerValidator.isValid(customer);
    }
}
