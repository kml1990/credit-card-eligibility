import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router';
import Customer from '../../customer/domain/Customer';
import Button from '../common/button/Button';

import './CustomerListItem.scss';

export interface CustomerListItemProps {
    customer: Customer;
}

const CustomerListItem: React.FC<CustomerListItemProps> = ({ customer }) => {
    const history = useHistory();
    const { title, name, lastName, dob, employmentStatus, income, houseNo, postCode } = customer;

    const onClick = () => {
        history.push(`/customers/${customer.id}`);
    };

    return (
        <section className="CustomerListItem">
            <Card className="CustomerListItem__card">
                <Card.Body>
                    <Card.Title className="CustomerListItem__title">{`${title} ${name} ${lastName}`}</Card.Title>
                    <Card.Body className="CustomerListItem__body">
                        <Row>
                            <Col className="CustomerListItem__customerInfo" sm={12} md={6}>
                                <span className="CustomerListItem__bodySection">
                                    DOB: <strong>{dob}</strong>
                                </span>
                                <span className="CustomerListItem__bodySection">
                                    Employment Status: <strong>{employmentStatus}</strong>
                                </span>
                                <span className="CustomerListItem__bodySection">
                                    Annual Income: <strong>{income}</strong>
                                </span>
                                <span className="CustomerListItem__bodySection">
                                    House Number: <strong>{houseNo}</strong>
                                </span>
                                <span className="CustomerListItem__bodySection">
                                    Post Code: <strong>{postCode}</strong>
                                </span>
                            </Col>
                            <Col className="CustomerListItem__button" sm={12} md={6}>
                                <Button onClicked={onClick}>Select Customer</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card.Body>
            </Card>
        </section>
    );
};

export default CustomerListItem;
