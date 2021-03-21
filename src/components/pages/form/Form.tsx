import React from 'react';
import { Formik, FormikProps, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import { FaPaperPlane } from 'react-icons/fa';
import { SimpleForm } from '../../../types/Types';
import Button from '../../common/button/Button';
import Icon from '../../common/icon/Icon';
import InputField from '../../common/input/InpputField';

import './Form.scss';
import Loader from '../../common/loader/Loader';

const SimpleFormSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    email: Yup.string().email('Must be valid email').required('Required'),
    dob: Yup.date(),
    favouriteColour: Yup.string(),
    income: Yup.number(),
});

const Form: React.FC = () => {
    const initialValues: SimpleForm = {
        name: '',
        email: '',
        dob: '',
        favouriteColour: '',
        salary: 0,
    };

    return (
        <section className="Form">
            <Formik
                initialValues={initialValues}
                validationSchema={SimpleFormSchema}
                onSubmit={(values, actions) => {
                    actions.setSubmitting(true);
                    setTimeout(() => {
                        console.log(values);
                        actions.setSubmitting(false);
                    }, 1000);
                }}
            >
                {({ isSubmitting }: FormikProps<SimpleForm>) => (
                    <FormikForm className="Form__formik">
                        <InputField name="name" placeholder="Type here..." label="Name" />
                        <InputField
                            type="text"
                            name="email"
                            placeholder="Type here..."
                            label="Email"
                        />
                        <InputField
                            type="date"
                            name="dob"
                            placeholder="Type here..."
                            label="Date of birth"
                        />
                        <InputField
                            name="favouriteColour"
                            placeholder="Type here..."
                            label="Favourite Colour"
                        />
                        <InputField
                            type="range"
                            min="0"
                            max="100000"
                            step="500"
                            name="salary"
                            placeholder="Type here..."
                            label="Salary: £"
                        />
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
                    </FormikForm>
                )}
            </Formik>
        </section>
    );
};

export default Form;
