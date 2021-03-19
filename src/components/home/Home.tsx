import { Form, Formik, FormikProps } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import { FaBeer, FaSpinner } from 'react-icons/fa';
import Button from '../common/button/Button';
import Icon from '../common/icon/Icon';
import InputField from '../common/input/InputField';

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
