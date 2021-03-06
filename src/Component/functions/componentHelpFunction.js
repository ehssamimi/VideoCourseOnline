import NotificationManager from "../../components/common/react-notifications/NotificationManager";
import {TweenMax} from "gsap/TweenMax";

export const error_Notification=(state,Description)=>{
    return NotificationManager.error(
        state,
        Description,
        3000,
        null,
        null,
        "error"
    );
};
export const success_Notification=(Response)=>{
    return NotificationManager.success(
        "تبریک",
        Response,
        3000,
        null,
        null,
        "success"
    );
};

// *****show all product***
export const getProductList=(Products)=>{
    let productSeparate=[];
    Products.map((each, index) => {
        let sub = {"تعداد": each['Count'],"تولید": each['Manufacture'],"دسته بندی": each['Category'] };
        let Main = {
            "name": each['Name'],
            "Attribute": each['Attribute'],
            "Description": each['Description'],
            "PrevPrice": each['PrevPrice'],
            "CurrentPrice": each['CurrentPrice'],
            "Images": each['Images'][0],
            "ViewCount": each['ViewCount'] ,
            "Off": each['Off'],
            "id":each['_id']
        };
        let row={'Main':Main,'sub':sub};
        productSeparate.push(row)
    });
    return productSeparate;
};

export function categoryDetails (categories) {
    let CategoryOption=[];let Subs={};
    categories.map((each, index) => {
        CategoryOption.push({value: each.name, label: each.name});
        let SubCatCondition = each.sub_categories !== undefined ?
            // ******** this function add sub category in array
            LabelValueOption(each.sub_categories)
            :[{ value:"زیر دسته بندی نداریم ", label: "we have not sub category" }] ;
        Subs[each.name]=SubCatCondition;
    });
    return{
        cat:CategoryOption,
        subCat:Subs
    }
}

            // *****set error*****
export function set_error(condition,error_message) {

    if (condition === '') {
        return{
            validate:false,error:error_message
        }
    }else {
        return{
            validate:true,error: ""
        }
    }
}

// *****GetDate******
export const GetData=(Data)=>{
    if (Data!==null){
        return `${Data.year}/${Data.month}/${Data.day}`;

    }else {
        return null
    }
};
// ************ Label-Value-Option*********
export const LabelValueOption=(sub)=>{
        let SubCat=[];
        sub.map((each,index)=>{
            let subRow= { value: each , label: each  };
            SubCat.push(subRow);
        });
        return SubCat;
}
// *************Remove item**********
export const RemoveItem=(id)=>{
    const $el = document.getElementById(id);
    const duration = 2;
    const from = { opacity: 0};
    TweenMax.to($el, duration, from);
    return setTimeout(() => {
        $el.remove();
    }, 2000)
};
// *************permission option******
export const PermissionOptions=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= {permission_name: each, description: each };
        SubCat.push(subRow);
    });
    return SubCat;
}
export const permissionOptionReverse=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= each.permission_name;
        SubCat.push(subRow);
    });
    return SubCat;
}
// *************Role option******
export const RoleOptions=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= {role_name: each, description: each };
        SubCat.push(subRow);
    });
    return SubCat;
}
export const roleOptionReverse=(sub)=>{
    let SubCat=[];
    sub.map((each,index)=>{
        // let subRow= { value: each , label: each  };
        let subRow= each.role_name;
        SubCat.push(subRow);
    });
    return SubCat;
}