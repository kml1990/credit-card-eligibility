import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FaPaperPlane } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useCustomers } from '../../customers/CustomersContext';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';
import InputField from '../../common/input/InputField';
import { CustomerForm, EmploymentStatuses, Titles } from '../../../types/Types';
import Radio from '../../common/input/Radio';
import Loader from '../../common/loader/Loader';

import './CheckCredit.scss';

const CustomerFromSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    dob: Yup.string().required('Required'),
    employmentStatus: Yup.string().required('Required'),
    income: Yup.number().min(1, 'To low').required('Required'),
});

const CheckCredit: React.FC = () => {
    const history = useHistory();
    const { addCustomer } = useCustomers();

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
                    history.push(`/customers/${customer.id}`);
                }}
            >
                {({ isSubmitting }: FormikProps<CustomerForm>) => (
                    <Form className="CheckCredit__form">
                        <Row>
                            <Col sm={12} md={4}>
                                <Radio name="title" label="Title" options={Titles} />
                            </Col>
                            <Col sm={12} md={4}>
                                <InputField
                                    name="name"
                                    placeholder="Type here..."
                                    label="First Name"
                                />
                            </Col>
                            <Col sm={12} md={4}>
                                <InputField
                                    name="lastName"
                                    placeholder="Type here..."
                                    label="Last Name"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={4}>
                                <Radio
                                    name="employmentStatus"
                                    label="Employment Status"
                                    options={EmploymentStatuses}
                                />
                            </Col>
                            <Col sm={12} md={4}>
                                <InputField
                                    type="date"
                                    name="dob"
                                    placeholder="Type here..."
                                    label="Date Of Birth"
                                />
                            </Col>
                            <Col sm={12} md={4}>
                                <InputField
                                    type="range"
                                    min="0"
                                    max="100000"
                                    step="500"
                                    name="income"
                                    placeholder="Type here..."
                                    label="Salary: £"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={6}>
                                <InputField
                                    name="houseNo"
                                    placeholder="Type here..."
                                    label="House Number"
                                />
                            </Col>
                            <Col sm={12} md={6}>
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
                                        <Loader />
                                    ) : (
                                        <Icon>
                                            <FaPaperPlane />
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
