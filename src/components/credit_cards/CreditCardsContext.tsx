import React, { createContext, useCallback, useContext, useState } from 'react';
import Card from '../../card/domain/CreditCard';
import CardService from '../../card/service/CreditCardService';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';

export interface CreditCardsContextProps {
    creditCards: Card[];
    loadCreditCards: () => void;
}

export const CreditCardsContext = createContext<CreditCardsContextProps>(
    {} as CreditCardsContextProps,
);

export const CreditCardsProvider: React.FC = ({ children }) => {
    const creditCardService = useInjection<CardService>(DependencyType.CreditCardService);
    const [creditCards, setCreditCards] = useState<Card[]>([]);

    const loadCreditCards = useCallback(() => {
        setCreditCards(creditCardService.getCards());
    }, [creditCardService]);

    const values = {
        creditCards,
        loadCreditCards,
    };

    return <CreditCardsContext.Provider value={values}>{children}</CreditCardsContext.Provider>;
};

export function useCreditCards(): CreditCardsContextProps {
    return useContext(CreditCardsContext);
}
