import { Link, Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            I m the 1st layer layout router

            {/* 配置二级路由出口 */}
            <Link to='board'> Board </Link>
            <Link to='about'> About</Link>
            <Outlet>

            </Outlet>
        </div>
    )
}

export default Layout