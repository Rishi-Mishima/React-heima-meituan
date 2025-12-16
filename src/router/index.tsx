import Login from "../page/Login";
import Article from "../page/Article";
import Layout from "../page/Layout";
import Board from "../page/Board";
import About from "../page/About";
import NotFound from "../page/NotFound";

import { createBrowserRouter } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/article/:id',
        element: <Article />
    },
    {
        path: '/layout',
        element: <Layout />,
        children: [
            {
                // 默认二级路由
                index: true,
                element: <Board />
            },
            {
                path: 'about',
                element: <About />
            },
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])

export default router

