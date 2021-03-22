import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import Card from '../../credit_card/domain/CreditCard';
import CardService from '../../credit_card/service/CreditCardService';
import Customer from '../../customer/domain/Customer';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';

export type GetCreditCardsForCustomer = (customer: Customer) => Card[];
export interface CreditCardsContextProps {
    creditCards: Card[];
    loadCreditCards: () => void;
    getCreditCardsForCustomer: GetCreditCardsForCustomer;
}

export const CreditCardsContext = createContext<CreditCardsContextProps>(
    {} as CreditCardsContextProps,
);

export const CreditCardsProvider: React.FC = ({ children }) => {
    const creditCardService = useInjection<CardService>(DependencyType.CreditCardService);
    const [creditCards, setCreditCards] = useState<Card[]>([]);

    const loadCreditCards = useCallback(async () => {
        const cards = await creditCardService.getCards();
        setCreditCards(cards);
    }, [creditCardService]);

    useEffect(() => {
        loadCreditCards();
    }, [loadCreditCards]);

    const getCreditCardsForCustomer = (customer: Customer) => {
        return creditCardService.getCardsForCustomer(customer);
    };

    const values = {
        creditCards,
        loadCreditCards,
        getCreditCardsForCustomer,
    };

    return <CreditCardsContext.Provider value={values}>{children}</CreditCardsContext.Provider>;
};

export function useCreditCards(): CreditCardsContextProps {
    return useContext(CreditCardsContext);
}
