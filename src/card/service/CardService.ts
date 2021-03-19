import { inject, injectable } from 'inversify';
import DependencyType from '../../di/DependencyType';
import Card from '../domain/Card';
import { CardDto } from '../dto/CardDto';
import CardParser from '../parser/CardParser';
import cardsDto from '../cards.json';

@injectable()
export default class CardService {
    private readonly _cards: Set<Card>;

    private readonly _cardParser: CardParser;

    constructor(@inject(DependencyType.CardParser) cardParser: CardParser) {
        this._cardParser = cardParser;
        this._cards = new Set();
    }

    getCards(): Card[] {
        if (this._cards.size === 0) {
            this.fetchCards().map(card => this._cards.add(card));
        }
        return Array.from(this._cards);
    }

    private fetchCards(): Card[] {
        return (cardsDto as CardDto[]).map(card => this._cardParser.parse(card));
    }
}
