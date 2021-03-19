import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FaBeer, FaSpinner } from 'react-icons/fa';
import Button from '../common/button/Button';
import Icon from '../common/icon/Icon';
import InputField from '../common/input/InputField';
import { useInjection } from '../../di/DependencyContext';
import CardService from '../../card/service/CardService';
import DependencyType from '../../di/DependencyType';
import Customer from '../../customer/domain/Customer';

import './Home.scss';

interface SimpleForm {
    username: string;
    password: string;
}

const SimpleFormSchema = Yup.object().shape({
    username: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    password: Yup.string().min(5, 'Too Short!').max(50, 'Too Long!').required('Required'),
});

const Home: React.FC = () => {
    const cardService = useInjection<CardService>(DependencyType.CardService);
    const customerParams = {
        id: '549b60a6-88ed-11eb-8dcd-0242ac130003',
        name: 'Kamil',
        lastName: 'Step',
        employmentStatus: 'Student',
        income: 17000,
    };
    const customer = new Customer(customerParams);
    const cards = cardService.loadCards();

    const eligible = cards.filter(card => {
        return card.isApplicableForCustomer(customer);
    });

    console.log(eligible);

    const initialValues = {
        username: '',
        password: '',
    };

    return (
        <div className="Home">
            <Formik
                initialValues={initialValues}
                validationSchema={SimpleFormSchema}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting }: FormikProps<SimpleForm>) => (
                    <Form className="Home__form">
                        <InputField name="username" placeholder="Type here..." label="Username" />
                        <InputField
                            name="password"
                            placeholder="Type here..."
                            label="Password"
                            type="password"
                        />
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
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Home;
