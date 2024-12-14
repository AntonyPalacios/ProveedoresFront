import {createRouter, createWebHistory} from 'vue-router'
import HomePage from "@/views/HomePage";
import AdminPage from "@/views/AdminPage";
import ListProjects from "@/views/project/ListProjects";
import NewProject from "@/views/project/NewProject";
import EditProject from "@/views/project/EditProject";
import InfoProject from "@/views/project/InfoProject";

import ProviderFormSelf from "@/views/provider/ProviderFormSelf";
import NewProvider from "@/views/provider/NewProvider";
import EvaluateProvider from "@/views/provider/EvaluateProvider";

const routes = [
    {
        path: '/',
        redirect:{name:'home'}
    },
    {
        path: '/login',
        name: 'home',
        component: HomePage,
    },
    {
        path:'/project',
        name: 'adminPage',
        props: true,
        component: AdminPage,
        children:[
            {
                path: '',
                name: 'project',
                component: ListProjects,

            },
            {
                path :'new',
                name:'newProject',
                component: NewProject
            },
            {
                path:':id(\\d+)',
                props: true,
                children:[
                    {
                        path:'',
                        name:'infoProject',
                        component: InfoProject
                    },
                    {
                        path:'provider/:idProv(\\s+)/evaluate',
                        name: 'evaluateProvider',
                        component: EvaluateProvider
                    },
                    {
                        path:'provider/new',
                        name: 'newProvider',
                        component: NewProvider
                    },
                    {
                        path:'edit',
                        name: 'editProject',
                        component: EditProject
                    },

                ],


            },




        ]
    },
    {
        path: '/project/id(\\d+)',

        children: [


        ]
    },
    {
        path: '/provider',
        component: ProviderFormSelf,
        name:'providerFormSelf'
    }

]

const router = createRouter({
    // history: createWebHistory(process.env.BASE_URL),
    history: createWebHistory(),
    routes
})

export default router