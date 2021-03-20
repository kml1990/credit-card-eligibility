import React from 'react';
import CreditCardListItem from './CreditCardListItem';
import { useCreditCards } from './CreditCardsContext';

const CreditCardList: React.FC = () => {
    const { creditCards } = useCreditCards();

    return (
        <div className="CreditCardList">
            {creditCards.map(creditCard => (
                <CreditCardListItem key={creditCard.id} creditCard={creditCard} />
            ))}
        </div>
    );
};

export default CreditCardList;
