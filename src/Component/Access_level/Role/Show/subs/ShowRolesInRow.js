import React, { useState,useEffect } from 'react';
import {ModalDelete} from "../../../../Common/Modals/ModalDelete/ModalDelete";
import {DeletePermission} from "../../../../functions/ServerConnection";

export function ShowProperties(props) {
    let{content}=props;
    return<span className="btn  badge-outline-primary m-1 fs-tag" >{content}</span>
}


export default function  ShowRolesInRow(props){
    const [openModal,setOpenModal]=useState(false);
    let {permission_name,description}=props.content;

    let desc_list=description.split(",");
    console.log(desc_list);

    const handelDelete=async()=>{
        let Response = await DeletePermission(permission_name);
        console.log(Response);
        setOpenModal(!openModal);
    };

    return (

        <article className="card mainCard" dir='rtl'>
            <div className="card-content">
                <div className='d-flex line'>
                    <h2>{permission_name} </h2>
                    <div className="d-flex ml-auto justify-content-center align-items-center" >
                        <div className="glyph-icon simple-icon-trash circle-border-icon " onClick={()=>{setOpenModal(!openModal)}}></div>
                        <div className="glyph-icon iconsminds-file-edit circle-border-icon ml-2 "onClick={()=>{setOpenModal(!openModal)}} ></div>
                    </div>
                </div>
                <div className="pt-2">
                    {description.length>0   ?
                        desc_list.map((todo, index) =>
                            <ShowProperties  content={todo}  key={index} class={' col-sm-6 col-lg-3  '}/>
                        ) : ''
                    }
                </div>



            </div>
            <ModalDelete isOpen={openModal} toggle={()=>{setOpenModal(!openModal)}} item ="مشخصه" deleteComponent={handelDelete}/>
        </article>
    );
}