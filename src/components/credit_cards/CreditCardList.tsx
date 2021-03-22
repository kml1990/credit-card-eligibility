import React, { useEffect, useState } from 'react';
import CreditCard from '../../credit_card/domain/CreditCard';
import CreditCardCalculator, { SelectedCard } from '../../credit_card/service/CreditCardCalculator';
import Customer from '../../customer/domain/Customer';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';
import CreditCardListItem from './CreditCardListItem';
import { useCreditCards } from './CreditCardsContext';

export interface CreditCardListProps {
    customer?: Customer;
    selectable?: boolean;
}

const CreditCardList: React.FC<CreditCardListProps> = ({ customer, selectable = false }) => {
    const { creditCards, getCreditCardsForCustomer } = useCreditCards();
    const creditCardCalculator = useInjection<CreditCardCalculator>(
        DependencyType.CreditCardCalculator,
    );
    const [cards, setCards] = useState<CreditCard[]>([]);
    const [totalAvailableCredit, setTotalAvailableCredit] = useState<number>(0);

    useEffect(() => {
        if (customer) {
            setCards(getCreditCardsForCustomer(customer));
            return;
        }
        setCards(creditCards);
    }, [creditCards, customer, getCreditCardsForCustomer]);

    useEffect(() => {
        return () => {
            creditCardCalculator.resetCards();
        };
    }, [creditCardCalculator]);

    const onCardSelected = (selectedCard: SelectedCard, selected: boolean) => {
        if (selected) {
            creditCardCalculator.addSelectedCard(selectedCard);
        } else {
            creditCardCalculator.removeSelctedCard(selectedCard);
        }
        setTotalAvailableCredit(creditCardCalculator.getTotalAvailableCredit());
    };

    return (
        <div className="CreditCardList">
            <h4>Total amount of credit available: £{totalAvailableCredit}</h4>
            {cards.map(creditCard => (
                <CreditCardListItem
                    key={creditCard.id}
                    creditCard={creditCard}
                    selectable={selectable}
                    onCardSelected={onCardSelected}
                />
            ))}
        </div>
    );
};

export default CreditCardList;
