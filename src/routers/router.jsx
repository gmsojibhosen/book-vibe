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
        {
            index: true,
            Component: Home,
            loader: async () => {
                const res = await fetch('/booksData.json');
                if(!res.ok) throw new Error('Failed to fetch posts');
                return res.json();
            },
            
        },
        {path: 'listBook', Component: ListBook},
        {path: 'pageRead', Component: PageRead},
    ]
    
},

])