import logo from '../Images/logo.png'
import { MdSearch, MdOutlineArrowDropDown } from 'react-icons/md'
import { BsBell } from 'react-icons/bs'

const TopBar = ({avatar, userName}) => {
    return (
        <div className="topbar-container">
            <div className="topbar-inner">
                <div className="logo-search">
                    <img src={logo} alt="Logo" width="110px" />
                    <form>
                        <input 
                        type="text"
                        placeholder="Search for anything" 
                        />
                        <button><MdSearch /></button>
                    </form>
                </div>
                <div className="avatar-docs">
                    <p className="docs">Docs</p>
                    <BsBell className="bell-icon" />
                    <img src={avatar} alt="Avatar" className="avatar" />
                    <p className="username">{userName}</p>
                    <MdOutlineArrowDropDown className="drop-icon" />
                </div>
            </div>
        </div>
    )
}

export default TopBar