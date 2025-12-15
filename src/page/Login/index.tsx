// import './Login.scss'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//     const [mobile, setMobile] = useState('')
//     const [code, setCode] = useState('')

//     const handleLogin = () => {
//         console.log('手机号:', mobile)
//         console.log('验证码:', code)
//         alert('登录逻辑写这里')
//     }

//     return (
//         <div className="login-page">
//             <h2>欢迎登录</h2>

//             <Link to={'/article'}> 欢迎来到登湖也</Link>

//             <div className="form-item">
//                 <input
//                     type="text"
//                     placeholder="请输入手机号"
//                     value={mobile}
//                     onChange={e => setMobile(e.target.value)}
//                 />
//             </div>

//             <div className="form-item">
//                 <input
//                     type="text"
//                     placeholder="请输入验证码"
//                     value={code}
//                     onChange={e => setCode(e.target.value)}
//                 />
//             </div>

//             <button className="login-btn" onClick={handleLogin}>
//                 登录
//             </button>
//         </div>
//     )
// }

// export default Login

import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()
    return (
        <div>
            Im the login page

            <button onClick={() => navigate('/article?id=1001&name=jack')}> searchParams </button>
            <button onClick={() => navigate('/article/1001 ')}>Params</button>


        </div>

    )
}

export default Login