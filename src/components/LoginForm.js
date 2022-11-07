import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {

    const [ hidePassword, setHidePassword ] = useState(true)
    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [loginError, setLoginError] = useState("")
    const [loginSuccess, setLoginSuccess] = useState("")

    const navigate = useNavigate()

    const handleShowPassword = () => {
        setHidePassword(false)
    }

    const handleHidePassword = () => {
        setHidePassword(true)
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        // Check for empty fields
        if (email.length === 0 || password.length === 0) {
            setLoginError("All fields are required")
            setLoginSuccess("")
        }else if (password.length < 6) {
            setLoginError("Enter a strong password")
            setLoginSuccess("")
        }else {
            if (!localStorage.getItem(email)) {
                localStorage.setItem(email, password)
                setLoginError("")
                setLoginSuccess("Login successful")
                setTimeout(() => {
                    navigate("/dashboard")
                }, 1500)
            }else {
                if (localStorage.getItem(email) !== password) {
                    setLoginError("Password is incorrect")
                    setLoginSuccess("")
                }else {
                    setLoginError("")
                    setLoginSuccess("Login successful")
                    setTimeout(() => {
                        navigate("/dashboard")
                    }, 1500)
                }
            }
        }
    }

    const handleForgotPassword = () => {
        navigate("/reset-password")
    }

    return (
        <div className="form-section">
            <div className="form-container">
                <p className="welcome">Welcome!</p>
                <p className="welcome-text">Enter details to login.</p>
                <form onSubmit={handleLoginSubmit}>
                    <input 
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    { hidePassword ? 
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    /> : 
                    <input
                    type="text"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    /> }
                    <p className="forgot-pwd" onClick={handleForgotPassword}>FORGOT PASSWORD?</p>
                    <button className="login-btn">LOG IN</button>
                </form>
                { hidePassword ? <button className="show-btn" onClick={ handleShowPassword }>SHOW</button> : <button className="hide-btn" onClick={ handleHidePassword }>HIDE</button>}
            </div>
            { loginError && <p className="login-error">{ loginError }</p> }
            { loginSuccess && <p className="login-success">{ loginSuccess}</p>}
        </div>
    )
}

export default LoginForm