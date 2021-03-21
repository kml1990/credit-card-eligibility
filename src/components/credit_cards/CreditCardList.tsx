import React, { useEffect, useState } from 'react';
import CreditCard from '../../card/domain/CreditCard';
import Customer from '../../customer/domain/Customer';
import CreditCardListItem, { SelectedCard } from './CreditCardListItem';
import { useCreditCards } from './CreditCardsContext';

export interface CreditCardListProps {
    customer?: Customer;
}

const CreditCardList: React.FC<CreditCardListProps> = ({ customer }) => {
    const { creditCards, getCreditCardsForCustomer } = useCreditCards();
    const [cards, setCards] = useState<CreditCard[]>([]);
    const [selectedCards, setSelectedCards] = useState<SelectedCard[]>([]);

    useEffect(() => {
        if (customer) {
            setCards(getCreditCardsForCustomer(customer));
            return;
        }
        setCards(creditCards);
    }, [creditCards, customer, getCreditCardsForCustomer]);

    const onCardSelected = (selectedCard: SelectedCard, selected: boolean) => {
        if (!selected) {
            setSelectedCards(selectedCards.filter(card => card.id !== selectedCard.id));
            return;
        }
        setSelectedCards([...selectedCards, selectedCard]);
    };

    const totalCreditSelected = selectedCards.reduce((total: number, card) => {
        let totalCreditAvailable = total;
        totalCreditAvailable += card.creditAvailable;
        return totalCreditAvailable;
    }, 0);

    return (
        <div className="CreditCardList">
            <h4>Total amount of credit available: £{totalCreditSelected}</h4>
            {cards.map(creditCard => (
                <CreditCardListItem
                    key={creditCard.id}
                    creditCard={creditCard}
                    onCardSelected={onCardSelected}
                />
            ))}
        </div>
    );
};

export default CreditCardList;
