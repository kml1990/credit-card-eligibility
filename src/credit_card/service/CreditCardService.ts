import { inject, injectable } from 'inversify';
import DependencyType from '../../di/DependencyType';
import CreditCard from '../domain/CreditCard';
import { CreditCardDto } from '../dto/CreditCardDto';
import CreditCardParser from '../parser/CreditCardParser';
import Customer from '../../customer/domain/Customer';

@injectable()
export default class CreditCardService {
    private readonly _cards: Set<CreditCard>;

    private readonly _cardParser: CreditCardParser;

    constructor(@inject(DependencyType.CreditCardParser) cardParser: CreditCardParser) {
        this._cardParser = cardParser;
        this._cards = new Set();
    }

    async getCards(): Promise<CreditCard[]> {
        if (this._cards.size === 0) {
            const cards = await this.fetchCards();
            const parsedCards = this.parseCards(cards);
            parsedCards.map(card => this._cards.add(card));
        }
        return Array.from(this._cards);
    }

    getCardsForCustomer(customer: Customer): CreditCard[] {
        return Array.from(this._cards).filter(card => card.isApplicableForCustomer(customer));
    }

    private parseCards(cards: CreditCardDto[]): CreditCard[] {
        return cards.map(card => this._cardParser.parse(card));
    }

    private async fetchCards(): Promise<CreditCardDto[]> {
        const images = await fetch('/credit-cards');
        return images.json();
    }
}
