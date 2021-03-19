import Customer from '../../customer/domain/Customer';
import { Validator } from '../../validators/Validator';

export interface CardParams {
    name: string;
    apr: number;
    balanceTransferOfferDuration: number;
    purchaseOfferDuration: number;
    creditAvailable: number;
}

export default class Card {
    private readonly _name: string;

    private readonly _apr: number;

    private readonly _balanceTransferOfferDuration: number;

    private readonly _purchaseOfferDuration: number;

    private readonly _creditAvailable: number;

    private _customerValidator: Validator<Customer>;

    constructor(card: CardParams, customerValidator: Validator<Customer>) {
        const {
            name,
            apr,
            balanceTransferOfferDuration,
            purchaseOfferDuration,
            creditAvailable,
        } = card;
        this._name = name;
        this._apr = apr;
        this._balanceTransferOfferDuration = balanceTransferOfferDuration;
        this._purchaseOfferDuration = purchaseOfferDuration;
        this._creditAvailable = creditAvailable;
        this._customerValidator = customerValidator;
    }

    get name(): string {
        return this._name;
    }

    get apr(): number {
        return this._apr;
    }

    get balanceTransferOfferDuration(): number {
        return this._balanceTransferOfferDuration;
    }

    get purchaseOfferDuration(): number {
        return this._purchaseOfferDuration;
    }

    get creditAvailable(): number {
        return this._creditAvailable;
    }

    isApplicableForCustomer(customer: Customer): boolean {
        return this._customerValidator.isValid(customer);
    }
}
