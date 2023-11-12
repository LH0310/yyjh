import * as React from "react";
import Dashboard from "../pages/Dashboard";
import BasicForm from '@/pages/admin/form/Basic'
import Advanced from "../pages/admin/form/Advanced";
import Wizard from "../pages/admin/form/Wizard";
import Editor from "../pages/admin/form/Editor";
import CustomIndex from '@/pages/admin/customer';
import Login from '../pages/admin/common/Login';
import Register from '../pages/admin/common/Register';
import Hello from "@/pages/Hello";
import Simple from "@/pages/admin/dialog/Simple";
import Icon from "@/pages/admin/icon/Simple";
import Tabs from "@/pages/admin/common/Tabs";
import SchemaApiDemo from "@/pages/admin/schema/index";
import SchemaApiDemo1 from "@/pages/admin/schema/demo1";
import Simple2 from "@/pages/admin/dialog/Simple2";
import Horizontal from "@/pages/admin/horizontal";

import Service from "@/pages/Service";
import MedicalVisit from "@/pages/MedicalVisit";

import Basic_situation from "@/pages/Basic_situation";
import Get_situation from "@/pages/Get_situation";

import Medical_Manage from "@/pages/Medical_Manage";
import Expenses_Manage from "@/pages/Expenses_Manage";

const path2components = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/dashboard',
        component: Dashboard
    },
    {
        path: '/form/basic',
        component: BasicForm
    },
    {
        path: '/form/basic/advanced',
        component: Advanced
    },
    {
        path: '/form/advanced',
        component: Advanced
    },
    {
        path: '/form/wizard',
        component: Wizard
    },
    {
        path: '/form/editor',
        component: Editor
    },
    {
        path: '/customer/index',
        component: CustomIndex
    },
    {
        path: '/hello',
        component: Hello
    },
    {
        path: '/dialog/simple',
        component: Simple
    },    
    {
        path: '/dialog/simple2',
        component: Simple2
    },
    {
        path: '/icon/simple',
        component: Icon
    },
    {
        path: '/tabs',
        component: Tabs
    },
    {
        path: '/schemaApi/demo',
        component: SchemaApiDemo
    },
    {
        path: '/schemaApi/demo1',
        component: SchemaApiDemo1
    },
    {
        path: '/horizontal',
        component: Horizontal
    },
    {
        path: '/sevice',
        component: Service
    },
    {
        path: '/medicalVisit',
        component: MedicalVisit
    },
    {
        path: '/basic_situation',
        component: Basic_situation
    },
    {
        path: '/get_situation',
        component: Get_situation
    },
    {
        path: '/medical_manage',
        component: Medical_Manage
    },
    {
        path: '/expenses_manage',
        component: Expenses_Manage
    },

]

export default path2components;