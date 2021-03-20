import React from 'react';
import Card from 'react-bootstrap/Card';
import CreditCard from '../../card/domain/CreditCard';

import './CreditCardListItem.scss';

export interface CreditCardListItemProps {
    creditCard: CreditCard;
}

const CreditCardListItem: React.FC<CreditCardListItemProps> = ({ creditCard }) => {
    const { name, apr } = creditCard;
    return (
        <Card className="CreditCardListItem">
            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
            <Card.Body>
                <small className="text-muted">
                    GUARANTEED APR You are guaranteed to get the APR shown if you&apos;re accepted
                </small>
                <Card.Title className="CreditCardListItem__title">{name}</Card.Title>
                <Card.Text>
                    This card has supporting text below as a natural lead-in to additional content.
                </Card.Text>
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
