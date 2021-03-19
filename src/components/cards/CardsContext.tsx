import React, { createContext, useContext, useEffect, useState } from 'react';
import Card from '../../card/domain/Card';
import CardService from '../../card/service/CardService';
import { useInjection } from '../../di/DependencyContext';
import DependencyType from '../../di/DependencyType';

export interface CardsContextProps {
    cards: Card[];
}

export const CardsContext = createContext<CardsContextProps>({} as CardsContextProps);

export const CardsProvider: React.FC = ({ children }) => {
    const cardService = useInjection<CardService>(DependencyType.CardService);
    const [cards, setCards] = useState<Card[]>([]);

    useEffect(() => {
        setCards(cardService.getCards());
    }, [cardService]);

    const values = {
        cards,
    };

    return <CardsContext.Provider value={values}>{children}</CardsContext.Provider>;
};

export function useCards(): CardsContextProps {
    return useContext(CardsContext);
}
