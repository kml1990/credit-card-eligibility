import React, { useEffect } from 'react';
import CreditCardList from '../../credit_cards/CreditCardList';
import { useCreditCards } from '../../credit_cards/CreditCardsContext';

const CreditCards: React.FC = () => {
    const { loadCreditCards } = useCreditCards();

    useEffect(() => {
        loadCreditCards();
    }, [loadCreditCards]);

    return (
        <div className="CreditCards">
            <CreditCardList />
        </div>
    );
};

export default CreditCards;
