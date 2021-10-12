import Home from "./components/Home";
import Header from "./components/Header";

const User = resolve =>{
    require.ensure(["./components/user/User.vue"],() =>{
        resolve(require("./components/user/User.vue"));
    }, "User" )
} 
const UserStart = resolve =>{
    require.ensure(["./components/user/User.vue"],() =>{
        resolve(require("./components/user/UserStart.vue"));
    }, "User" )
}
const UserDetail = resolve =>{
    require.ensure(["./components/user/User.vue"],() =>{
        resolve(require("./components/user/UserDetail.vue"));
    }, "User" )
}
const UserEdit = resolve =>{
    require.ensure(["./components/user/User.vue"],() =>{
        resolve(require("./components/user/UserEdit.vue"));
    }, "User" )
}


export const routes =[

    {path: '/', name : 'anasayfa', components : {
        default: Home,
        "header-top": Header
    }},
    {
    path: '/user', name: 'kullanici', components:{
        default: User,
        "header-bottom": Header
    },
     children : [
        {path : '', component: UserStart}, // /user
        {path : ':id', component: UserDetail, beforeEnter: (to, from, next) =>{
            console.log("Route seviyesinde kontrol");
            next();
        }
        },// /user/12
        {path: ":id/edit", component: UserEdit, name : "userEdit"} // user/12/edit
    ]
},//user/deneme~id

{path : "/redirect", redirect: "/user"},
{path: "*", redirect: "/route"}//*=def

];
