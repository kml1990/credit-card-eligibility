import { inject, injectable } from 'inversify';
import DependencyType from '../../di/DependencyType';
import Card from '../domain/CreditCard';
import { CreditCardDto } from '../dto/CreditCardDto';
import CreditCardParser from '../parser/CreditCardParser';
import creditCardsDto from '../credit_cards.json';
import Customer from '../../customer/domain/Customer';

@injectable()
export default class CreditCardService {
    private readonly _cards: Set<Card>;

    private readonly _cardParser: CreditCardParser;

    constructor(@inject(DependencyType.CreditCardParser) cardParser: CreditCardParser) {
        this._cardParser = cardParser;
        this._cards = new Set();
    }

    getCards(): Card[] {
        if (this._cards.size === 0) {
            this.fetchCards().map(card => this._cards.add(card));
        }
        return Array.from(this._cards);
    }

    getCardsForCustomer(customer: Customer): Card[] {
        return Array.from(this._cards).filter(card => card.isApplicableForCustomer(customer));
    }

    private fetchCards(): Card[] {
        return (creditCardsDto as CreditCardDto[]).map(card => this._cardParser.parse(card));
    }
}
