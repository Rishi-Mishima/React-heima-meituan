import './Login.scss'
import { useState } from 'react'

const Login = () => {
    const [mobile, setMobile] = useState('')
    const [code, setCode] = useState('')

    const handleLogin = () => {
        console.log('手机号:', mobile)
        console.log('验证码:', code)
        alert('登录逻辑写这里')
    }

    return (
        <div className="login-page">
            <h2>欢迎登录</h2>

            <div className="form-item">
                <input
                    type="text"
                    placeholder="请输入手机号"
                    value={mobile}
                    onChange={e => setMobile(e.target.value)}
                />
            </div>

            <div className="form-item">
                <input
                    type="text"
                    placeholder="请输入验证码"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                />
            </div>

            <button className="login-btn" onClick={handleLogin}>
                登录
            </button>
        </div>
    )
}

export default Login
