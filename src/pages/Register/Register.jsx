import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";
import Helmet from "../../components/Helmet/Helmet";
import CommonSection from "../../components/CommonSection/CommonSection";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import FormInput from "../../components/FormInput/FormInput";
import "./register.css";
import authService from "../../services/authService";



const Register = () => {

    const [dateInputType, setDateInputType] = useState("text");

    const activateDateInput = () => {
        setDateInputType("date");
    };

    const corporateInitialValues = {
        companyName: "",
        taxNo: "",
        contactName: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const corporateValidationSchema = Yup.object().shape({
        companyName: Yup.string().required("Company name is required"),
        taxNo: Yup.string().required("Tax No is required"),
        contactName: Yup.string().required("Contact name is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().required("Type your password again."),
    });

    const corporateOnSubmit = async (values, { resetForm }) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        try {
            // const response = await axiosInstance.post(`rentals/add`, { ...values, userId: 9, carId: id });
            // console.log('Response:', response);
            // navigate("/order-complete", { state: { info: response.data, rental: values } })
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };

    const individualInitialValues = {
        firstName: "",
        lastName: "",
        nationalIdNo: "",
        birthDate: "",
        phoneNumber: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const individualValidationSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        nationalIdNo: Yup.string().required("TC No is required"),
        birthDate: Yup.string().required("Birth date is required"),
        phoneNumber: Yup.string().required("Phone number is required"),
        email: Yup.string().required("Email is required"),
        password: Yup.string().required("Password is required"),
        confirmPassword: Yup.string().required("Type your password again."),
    });

    const individualOnSubmit = async (values, { resetForm }) => {
        // Handle form submission logic here
        console.log("Form submitted with values:", values);
        try {
            authService.customerRegister(values)
        } catch (error) {
            console.error('Veri çekme hatası:', error);
        }
        resetForm();
    };



    return (
        <Helmet title="Register">
            <section className="register-page-section">
                <Container>
                    <div className="register-container">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="register-individual-tab" data-bs-toggle="tab" data-bs-target="#register-individual" type="button" role="tab" aria-controls="home" aria-selected="true">Bireysel</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="register-corporate-tab" data-bs-toggle="tab" data-bs-target="#register-corporate" type="button" role="tab" aria-controls="profile" aria-selected="false">Kurumsal</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="register-individual" role="tabpanel" aria-labelledby="register-individual-tab">

                                <Formik
                                    initialValues={individualInitialValues}
                                    validationSchema={individualValidationSchema}
                                    onSubmit={individualOnSubmit}
                                >
                                    <Form>
                                        <div className="individual-register-body">
                                            <div className="register-form page-form">
                                                <FormInput formGroupClass="m-top-20" inputClass="form-control" name="firstName" placeholder="Ad*" />
                                                <FormInput formGroupClass="m-top-20" inputClass="form-control" name="lastName" placeholder="Soyad*" />
                                                <FormInput inputClass="form-control" name="nationalIdNo" placeholder="TC No*" />
                                                <FormInput
                                                    inputClass="form-control"
                                                    type={dateInputType}
                                                    name="birthDate"
                                                    id="date"
                                                    placeholder="Doğum Tarihi*"
                                                    onFocus={activateDateInput}
                                                    pattern="\d{2}\d{2}\d{4}"
                                                />
                                                <FormInput inputClass="form-control" name="phoneNumber" placeholder="Telefon*" />
                                                <FormInput inputClass="form-control" type="email" name="email" placeholder="E-Posta*" />
                                                <FormInput inputClass="form-control" type="password" name="password" placeholder="Şifre*" />
                                                <FormInput inputClass="form-control" type="password" name="confirmPassword" placeholder="Şifre Tekrar*" />
                                            </div>
                                        </div>
                                        <div className="register-footer">
                                            <button className="register-button" type="submit">Kayıt Ol</button>
                                        </div>
                                    </Form>
                                </Formik>



                            </div>
                            <div className="tab-pane fade" id="register-corporate" role="tabpanel" aria-labelledby="register-corporate-tab">
                                <Formik
                                    initialValues={corporateInitialValues}
                                    validationSchema={corporateValidationSchema}
                                    onSubmit={corporateOnSubmit}
                                >
                                    <Form>
                                        <div className="corporate-register-body">
                                            <div className="register-form page-form">
                                                <FormInput formGroupClass="m-top-20 width-100" inputClass="form-control full-size" name="companyName" placeholder="Company Name*" />
                                                <FormInput inputClass="form-control" name="taxNo" placeholder="Tax No*" />
                                                <FormInput inputClass="form-control" name="contactName" placeholder="Yetkili Ad Soyad*" />
                                                <FormInput inputClass="form-control" name="phoneNumber" placeholder="Telefon*" />
                                                <FormInput inputClass="form-control" name="email" placeholder="E-Posta*" />
                                                <FormInput inputClass="form-control" name="password" placeholder="Şifre*" />
                                                <FormInput inputClass="form-control" name="confirmPassword" placeholder="Şifre Tekrar*" />
                                            </div>
                                        </div>
                                        <div className="register-footer">
                                            <button className="register-button" type="submit">Kayıt Ol</button>
                                        </div>
                                    </Form>
                                </Formik>
                            </div>
                        </div>
                    </div>






                </Container>
            </section>
        </Helmet>
    );
};

export default Register;