import React, { useState,useEffect } from 'react';
import {GetAllPermission} from "../../../functions/ServerConnection";
import {error_Notification, getProductList} from "../../../functions/componentHelpFunction";
import InfiniteScroll from "react-infinite-scroller";
import Loader from "../../../Common/Loader/Loader";
import ShowRolesInRow from "./subs/ShowRolesInRow";


const permissionss=[   {
    "id": "5e7f2902cf2e9b297aabed97",
    "permission_name": "update_role",
    "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
    "create_at": "2020-03-28T10:37:53.665000"
},
    {
        "id": "5e7f2902a6a46b494b4ec4b8",
        "permission_name": "update_role",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    },
    {
        "id": "5e7f2902cf2e9b297aabed98",
        "permission_name": "delete_role",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    },
    {
        "id": "5e7f2902a6a46b494b4ec4b9",
        "permission_name": "get_role",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    },
    {
        "id": "5e7f2902cf2e9b297aabed99",
        "permission_name": "get_role",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    },
    {
        "id": "5e7f2902a6a46b494b4ec4ba",
        "permission_name": "add_trusted_service",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    },
    {
        "id": "5e7f2902cf2e9b297aabed9a",
        "permission_name": "renew_trusted_service",
        "description": "thisis, asadad,asdjadkas,asoayfihoa,saklfdheoa,sadasd",
        "create_at": "2020-03-28T10:37:53.665000"
    }]
export default function ShowRole() {

    const [productSeparate, setproductSeparate] = useState(permissionss);
    const [pageStart, setpageStart] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     setproductSeparate()
    // });

    const loadMore=async()=>{

        // ***get all product and current page ***
        let Response = await GetAllPermission(pageStart);
        if (Response!=='error') {
            let{Products,Page}=Response;
            // *** modify  products to our label value ***
            // let productsSeparate = getProductList(Products);
            // // *******update state*****
            // setproductSeparate([...productSeparate,...productsSeparate]);
            // console.log(productSeparate);
            // setpageStart(Page+1);
            // ***** check if product length is zero then stop loop****
            sethasMore(Products.length !== 0);
        }else {
            error_Notification('Network Error')
        }
    };


    return (
        <div>
            <section className="PermissionCard">
                {productSeparate.length>0 && Array.isArray(productSeparate)  ?
                    productSeparate.map((todo, index) =>
                        <ShowRolesInRow  content={todo}  key={index} class={' col-sm-6 col-lg-3  '}/>
                    ) : ''
                }
            </section>
        </div>
    );
}

//<InfiniteScroll
// className="row rtl m-0"
// pageStart={0}
//  loadMore={loadMore}
//  hasMore={hasMore}
//  loader={<div className="loader col-6 offset-3" key={0}><Loader/></div>}
//>
//  <div>
//  <section className="cards">
//   {productSeparate.length>0 && Array.isArray(productSeparate)  ?
//   productSeparate.map((todo, index) =>
/*<PreviewProduct Main={todo.Main} sub={todo.sub}  key={index} class={' col-sm-6 col-lg-3  '}/>*/
//       <ShowPermissionRow key={index}/>
//    ) : ''
//   }
//   </section>
//  </div>
//</InfiniteScroll>