import logo from '../Images/logo.png'
import image from '../Images/image.png'

const LoginImages = () => {
    return (
        <div>
            <nav className='navbar'>
                <img src={logo} alt="Brand Logo" width="140px" />
            </nav>
            <div className='brand-image'>
                <img src={image} alt="Brand" height="220px" />
            </div>
        </div>
    )
}

export default LoginImages