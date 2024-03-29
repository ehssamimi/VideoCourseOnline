import React
    // , { useState,useEffect }
    from 'react';
import {Modal, ModalBody, ModalHeader,ModalFooter,Button} from "reactstrap";

export function ModalDelete (props){
    let {isOpen,toggle,item,deleteComponent }=props;
    return<div dir='rtl'>
        <Modal
            isOpen={isOpen}
            size="lg"
            toggle={toggle}
        >
            <ModalHeader toggle={toggle}>
                حذف {item}
            </ModalHeader>

            <ModalBody>
                آیا از حذف این      {item}  مطمئن هستید ؟
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={deleteComponent }>
                    بله
                </Button>{" "}
                <Button color="secondary" onClick={toggle }>
                    بی خیال
                </Button>
            </ModalFooter>
        </Modal>
    </div>
};