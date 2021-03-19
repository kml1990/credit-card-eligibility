import { inject, injectable } from 'inversify';
import DependencyType from '../../di/DependencyType';
import Card from '../domain/Card';
import { CardDto } from '../dto/CardDto';
import CardParser from '../parser/CardParser';
import cards from '../cards.json';

@injectable()
export default class CardService {
    private readonly _cards: Set<Card>;

    private readonly _parser: CardParser;

    constructor(@inject(DependencyType.CardParser) parser: CardParser) {
        this._parser = parser;
        this._cards = new Set();
    }

    loadCards(): Card[] {
        return (cards as CardDto[]).map(card => this._parser.parse(card));
    }
}
