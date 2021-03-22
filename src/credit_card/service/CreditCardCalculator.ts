import { injectable } from 'inversify';
import CreditCard from '../domain/CreditCard';

export type SelectedCard = Pick<CreditCard, 'id' | 'creditAvailable'>;

@injectable()
export default class CreditCardCalculator {
    private _selectedCards: Map<string, SelectedCard>;

    constructor() {
        this._selectedCards = new Map();
    }

    addSelectedCard(selectedCard: SelectedCard): void {
        this._selectedCards.set(selectedCard.id, selectedCard);
    }

    removeSelctedCard(selectedCard: SelectedCard): void {
        this._selectedCards.delete(selectedCard.id);
    }

    getTotalAvailableCredit(): number {
        return Array.from(this._selectedCards.values()).reduce((total: number, card) => {
            total += card.creditAvailable;
            return total;
        }, 0);
    }

    resetCards(): void {
        this._selectedCards = new Map();
    }
}
