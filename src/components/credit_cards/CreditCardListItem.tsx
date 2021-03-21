import React, { useCallback, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CreditCard from '../../card/domain/CreditCard';
import Button from '../common/button/Button';

import './CreditCardListItem.scss';

export interface SelectedCard {
    id: string;
    creditAvailable: number;
}
export type OnCardSelected = (selectedCard: SelectedCard, selected: boolean) => void;

export interface CreditCardListItemProps {
    creditCard: CreditCard;
    onCardSelected: OnCardSelected;
}

const CreditCardListItem: React.FC<CreditCardListItemProps> = ({ creditCard, onCardSelected }) => {
    const [isSelected, setIsSelected] = useState<boolean>(false);

    const {
        id,
        name,
        apr,
        balanceTransferOfferDuration,
        purchaseOfferDuration,
        creditAvailable,
    } = creditCard;

    const onClick = useCallback(() => {
        onCardSelected({ id, creditAvailable }, !isSelected);
        setIsSelected(!isSelected);
    }, [creditAvailable, id, isSelected, onCardSelected]);

    return (
        <Card className="CreditCardListItem">
            <Card.Body>
                <small className="text-muted">
                    GUARANTEED APR You are guaranteed to get the APR shown if you&apos;re accepted
                </small>
                <Card.Title className="CreditCardListItem__title">{name}</Card.Title>
                <Card.Body>
                    <Row>
                        <Col className="CreditCardListItem__cardInfo" sm={12} md={6}>
                            <span className="CreditCardListItem__bodySection">
                                APR: <strong>{apr}%</strong>
                            </span>
                            <span className="CreditCardListItem__bodySection">
                                Balance Transfer Offer Duration::{' '}
                                <strong>{balanceTransferOfferDuration} months</strong>
                            </span>
                            <span className="CreditCardListItem__bodySection">
                                Purchase Offer Duration:{' '}
                                <strong>{purchaseOfferDuration} months</strong>
                            </span>
                            <span className="CreditCardListItem__bodySection">
                                Credit Available: <strong>£{creditAvailable}</strong>
                            </span>
                        </Col>
                        <Col className="CreditCardListItem__button" sm={12} md={6}>
                            <Button onClicked={onClick}>
                                {isSelected ? 'Unselect' : 'Select'} Card
                            </Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">
                    <strong>Representative Example</strong> If you spend £1,200 at a purchase
                    interest rate of {apr}% p.a. (variable) your representative APR will be {apr}%
                    APR (variable)
                </small>
            </Card.Footer>
        </Card>
    );
};

export default CreditCardListItem;
