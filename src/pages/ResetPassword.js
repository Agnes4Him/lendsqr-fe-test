import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [resetPwd, setResetPwd] = useState("")
    const [resetError, setResetError] = useState("")
    const [resetSuccess, setResetSuccess] = useState("")

    const navigate = useNavigate()

    const handleResetSubmit = (e) => {
        e.preventDefault()

            if (email.length === 0 || password.length === 0 || resetPwd.length === 0) {
                setResetError("All fields are required")
                setResetSuccess("")
            }else if (password.length < 6) {
                setResetError("Password must be at least 6 characters long")
                setResetSuccess("")
            }else if (password !== resetPwd) {
                setResetError("Passwords do not match")
                setResetSuccess("")
            }else if (!localStorage.getItem(email)) {
                setResetError("That email does not exist")
                setResetSuccess("")
            }else {
                localStorage.setItem(email, password)
                setResetError("")
                setResetSuccess("Password reset was successful")
                setTimeout(() => {
                    navigate("/")
                }, 2000)
            }
    }

    return (
        <div className="reset-container">
            <form onSubmit={handleResetSubmit}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input
                type="password"
                placeholder="Repeat Password"
                value={resetPwd}
                onChange={(e) => setResetPwd(e.target.value)}
                />
                <button className="reset-btn">Submit</button>
            </form>
            { resetError && <p className="reset-error">{resetError}</p> }
            { resetSuccess && <p className="reset-success">{resetSuccess}</p> }
        </div>
    )
}

export default ResetPassword