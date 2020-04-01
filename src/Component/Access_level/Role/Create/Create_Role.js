import React, { useState } from 'react';
import Loader from "../../../Common/Loader/Loader";
import {Card, CardBody, CardTitle , Row} from "reactstrap";
import {Colxx} from "../../../../components/common/CustomBootstrap";
import {  Form, Formik} from "formik";
import {error_Notification, success_Notification } from "../../../functions/componentHelpFunction";
import * as Yup from "yup";
import {AddPermission, SuggestPermission} from "../../../functions/ServerConnection";
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {FormInput } from "../../../Common/ComponentFunctional/FormFeilds";
import AddPermissionProperties from "./subs/Add-permission_properties/Add_permission_properties";
import AutoSuggestMU from "./subs/AutoSuggestM-U/AutoSuggestM-U";

const SignupSchema = Yup.object().shape({

    Name: Yup.string()
        .required("نام اجباری است!"),

    Description: Yup.string()
        .required("توضیحات اجباری است!"),
});

const initialValue={
    Name:'',
    Description:"" ,
}

export default function CreateRole (){
    const [initialValues,setInitialValues] =useState(initialValue);
    const [isLoder,setisLoder] =useState(false);
    const [values,setvalues] =useState({name:"",desc:"",permissions:""});
    const getOption=async(name)=>{
        console.log("set option");
        console.log(name);
        const permission=await SuggestPermission(name);
        let {state,Description}=permission;
        if (state===200){
            console.log(Description);
            return Description
            // console.log(Object.keys(countries).map((key) => countries[key].item[0]))
        }

        // if (active) {
        // setOptions(Description);
        // }
    };
    const getValues=(names)=>{
        setvalues({ ... values,permissions:names})
    };






    const  handleSubmit = async (e) => {
        e.preventDefault();
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        console.log(values)
    // const  handleSubmit = async (values, { setSubmitting }) => {
        // console.log("start sending");
        // console.log(values);
        //
        // const payload = {
        //     ...values,
        //     // isOff: values.isOff.value,
        //     // Category: values.Category.value,
        //     // sub_category: values.sub_category.value,
        // };

// **************check its update or just add **********


        // **********send validate data*********
        // setisLoder(true);

        let Data={

            "permission_name": "string",
            "description": "string"

        };

        // let Register = await AddPermission(JSON.stringify(Data));
        //
        // setisLoder(false);
        //
        // let {state, Description} = Register;
        // if (state ) {
        //     success_Notification( "اطلاعات شما با موفقیت ثبت شد")
        // } else {
        //     error_Notification(Description)
        // }

    };


    return isLoder?   // *******checking for submit form or get category Option is then loader start then loader close**********
        <div className='d-flex justify-content-center align-items-center'>
            <div className='col-6'>
                <Loader/>
            </div>
        </div>
        :

        <div  className="w-100 ">
            <Row className="mb-4">
                <Colxx xxs="12">
                    <Card>
                        <CardBody>
                            <CardTitle>
                                <div className='d-flex justify-content-start'>
                                    <span>create permission </span>
                                </div>
                            </CardTitle>
                            <Form className="av-tooltip tooltip-label-bottom w-100 row m-0" onSubmit={handleSubmit}>
                                <div className="col-8 offset-2   d-flex flex-column justify-content-between">
                                    <div className="w-100 row m-0 ">
                                        <AutoSuggestMU GetValues={getValues} getOption={getOption}/>

                                        <div className="w-100">
                                            <TextField
                                                className="col-12 ltr"
                                                // error
                                                // helperText="Incorrect entry."
                                                id="name"
                                                label="Name"
                                                // defaultValue="Hello World"
                                                variant="outlined"
                                                onChange={(e)=>setvalues({ ... values,name:e.target.value})}
                                            />
                                        </div>
                                        <TextField
                                            id="desc"
                                            label="desc"
                                            className="col-12  "
                                            multiline
                                            rowsMax="4"

                                            onChange={(e)=>setvalues({ ... values,desc:e.target.value})}
                                            variant="outlined"
                                        />
                                        <div className="w-100 ">
                                            <button className="btn btn-success text-center col-6 offset-3 "
                                                    type="submit">
                                                فرستادن
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Form>



                        </CardBody>
                    </Card>
                </Colxx>
            </Row>
        </div>
};