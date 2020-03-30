import React, { useState,useEffect } from 'react';
import Loader from "../../../Common/Loader/Loader";
import {Card, CardBody, CardTitle, FormGroup, Label, Row} from "reactstrap";
import {Colxx} from "../../../../components/common/CustomBootstrap";
import {Field, Form, Formik} from "formik";
// import {FormInput,FormSelect} from './../../../Common/ComponentFunctional/FormFeilds'
import {error_Notification, success_Notification,categoryDetails,} from "../../../functions/componentHelpFunction";
import * as Yup from "yup";
import {AddPermission} from "../../../functions/ServerConnection";


export  function FormInput(props) {
    let{label,name,placeHolder,setFieldTouched,errors,touched,type,component,row,DivClass}=props;
    return<div className={DivClass}>

        <FormGroup className="form-group has-float-label position-relative">
            <Label>
                <span>{label}</span>
            </Label>
            <Field className="form-control" name={name}   onBlur={setFieldTouched} type={type}
                   component={component}
                   rows={row}
                   placeholder={placeHolder} />
            {errors[`${name}`]  && touched[`${name}`] ? (
                <div className="invalid-feedback d-block">
                    {errors[`${name}`]}
                </div>
            ) : null}
        </FormGroup>
    </div>
}


const SignupSchema = Yup.object().shape({

    Name: Yup.string()
        .required("نام اجباری است!"),

    Description: Yup.string()
        .required("توضیحات محصول اجباری است!"),
});



const initialValue={
    Name:'',
    Description:"" ,
}



export default function CreatePermission (){
    const [initialValues,setInitialValues] =useState(initialValue);
    const [isLoder,setisLoder] =useState(initialValue);
    const  handleSubmit = async (values, { setSubmitting }) => {
        console.log("start sending");
        console.log(values);

        const payload = {
            ...values,
            // isOff: values.isOff.value,
            // Category: values.Category.value,
            // sub_category: values.sub_category.value,
        };

// **************check its update or just add **********

        // **************update product **********



            // **********send validate data*********
                setisLoder(true);






                let Data={

                   "permission_name": "string",
                    "description": "string"

                };

                let Register = await AddPermission(JSON.stringify(Data));

                this.setState({
                    showLoader: false
                });

                let {state, Description} = Register;
                if (state ) {
                    success_Notification( "اطلاعات شما با موفقیت ثبت شد")

                } else {
                    error_Notification(Description)

                }







    };


    return<div dir='rtl'>
        <Row className="mb-4">
            <Colxx xxs="12">
                <Card>
                    <CardBody>
                        <CardTitle>
                            <div className='d-flex justify-content-start'>
                                <span>اطلاعات محصول</span>
                            </div>
                        </CardTitle>
                        <Formik
                            initialValues={
                                initialValues
                            }
                            validationSchema={SignupSchema}
                            onSubmit={ handleSubmit}
                        >
                            {({
                                  handleSubmit,
                                  setFieldValue,
                                  setFieldTouched,
                                  handleChange,
                                  handleBlur,
                                  values,
                                  errors,
                                  touched,
                                  isSubmitting
                              }) => (
                                <Form className="av-tooltip tooltip-label-bottom w-100 row m-0" >
                                    <div className="col-sm-12   d-flex flex-column justify-content-between">
                                        <div className="w-100 row m-0 ">

                                            <FormInput  label='نام' type='text' name='Name' placeHolder='نام محصول را وارد کنید !' DivClass="col-sm-12 col-md-6" setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>

                                            <FormInput label='توضیحات' component='textarea' rows="3"  type='text' name='Description' placeHolder='توضیحات را وارد کنید' DivClass="col-sm-12 "  setFieldTouched={setFieldTouched} errors={errors} touched={touched}/>


                                        </div>
                                        <button className="btn btn-success text-center" type="submit">
                                            فرستادن
                                        </button>
                                    </div>

                                </Form>
                            )}
                        </Formik>
                    </CardBody>
                </Card>
            </Colxx>
        </Row>
    </div>
};