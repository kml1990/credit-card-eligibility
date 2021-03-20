import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FaBeer, FaSpinner } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useCustomers } from '../../customers/CustomersContext';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';
import InputField from '../../common/input/InputField';
import { CustomerForm, EmploymentStatuses, Titles } from '../../../types/Types';
import Radio from '../../common/input/Radio';

import './CheckCredit.scss';

// TODO more validation for forms
const CustomerFromSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    employmentStatus: Yup.string().required('Required'),
    income: Yup.number().required('Required'),
});

const CheckCredit: React.FC = () => {
    const history = useHistory();
    const { addCustomer } = useCustomers();
    // const { cards } = useCards();
    // const { customers } = useCustomers();

    // const cardsPerCustomer = customers.map(customer => {
    //     const eligibleCards = cards.filter(card => card.isApplicableForCustomer(customer));
    //     return { name: customer.name, cards: eligibleCards };
    // });

    // console.log(cardsPerCustomer);

    const initialValues: CustomerForm = {
        title: 'Mr.',
        name: '',
        lastName: '',
        dob: '',
        employmentStatus: 'Full Time',
        income: 0,
        houseNo: '',
        postCode: '',
    };

    return (
        <div className="CheckCredit">
            <Formik
                initialValues={initialValues}
                validationSchema={CustomerFromSchema}
                onSubmit={values => {
                    const customer = addCustomer(values);
                    history.push(`/customers`);
                }}
            >
                {({ isSubmitting }: FormikProps<CustomerForm>) => (
                    <Form className="CheckCredit__form">
                        <Row>
                            <Col>
                                <Radio name="title" label="Title" options={Titles} />
                            </Col>
                            <Col>
                                <InputField
                                    name="name"
                                    placeholder="Type here..."
                                    label="First Name"
                                />
                            </Col>
                            <Col>
                                <InputField
                                    name="lastName"
                                    placeholder="Type here..."
                                    label="Last Name"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Radio
                                    name="employmentStatus"
                                    label="Employment Status"
                                    options={EmploymentStatuses}
                                />
                            </Col>
                            <Col>
                                <InputField
                                    type="date"
                                    name="dob"
                                    placeholder="Type here..."
                                    label="Date Of Birth"
                                />
                            </Col>
                            <Col>
                                <InputField
                                    type="number"
                                    name="income"
                                    placeholder="Type here..."
                                    label="Income"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <InputField
                                    name="houseNo"
                                    placeholder="Type here..."
                                    label="House Number"
                                />
                            </Col>
                            <Col>
                                <InputField
                                    name="postCode"
                                    placeholder="Type here..."
                                    label="Post Code"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button type="submit">
                                    {isSubmitting ? (
                                        <Icon spin>
                                            <FaSpinner />
                                        </Icon>
                                    ) : (
                                        <Icon>
                                            <FaBeer />
                                        </Icon>
                                    )}{' '}
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CheckCredit;
