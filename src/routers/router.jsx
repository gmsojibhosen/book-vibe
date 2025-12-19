import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import ListBook from "../components/ListBook/ListBook";
import PageRead from "../components/PageRead/PageRead";

export const router = createBrowserRouter( [
{
    path: '/',
    Component: Root,

    children: [
        {index: true, Component: Home},
        {path: 'listBook', Component: ListBook},
        {path: 'pageRead', Component: PageRead},
    ]
    
},

])