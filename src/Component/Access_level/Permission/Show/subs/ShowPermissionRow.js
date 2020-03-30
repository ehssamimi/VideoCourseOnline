import React, { useState,useEffect } from 'react';
import {ModalDelete} from "../../../../Common/Modals/ModalDelete/ModalDelete";
import {DeletePermission} from "../../../../functions/ServerConnection";
export default function  ShowPermissionRow(props){
    const [openModal,setOpenModal]=useState(false);
    let {permission_name,description}=props.content;
    const handelDelete=async()=>{
        let Response = await DeletePermission(permission_name);
        console.log(Response)
        setOpenModal(!openModal)
    };

    return (

        <article className="card mainCard" dir='rtl'>
            <div className="card-content">
                <div className='d-flex'>
                    <h2>{permission_name} </h2>
                    <div className="d-flex ml-auto justify-content-center align-items-center" onClick={()=>{setOpenModal(!openModal)}}>
                        <div className="glyph-icon simple-icon-trash circle-border-icon " ></div>
                    </div>
                </div>
                <p>{description} </p>
            </div>
            <ModalDelete isOpen={openModal} toggle={()=>{setOpenModal(!openModal)}} item ="مشخصه" deleteComponent={handelDelete}/>
        </article>
    );
}

//
// class ShowPermissionRow extends Component {
//     render() {
//         let {permission_name,description}=this.props.content;
//
//     }
// }
//
// export default ShowPermissionRow;