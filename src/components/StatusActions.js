//import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const StatusActions = ({showStatusActions, id, user, onActivate, onBlacklist}) => {

    const navigate = useNavigate()

    const handleViewDetails = () => {
        localStorage.setItem("user", JSON.stringify(user))
        navigate(`/user-details/${id}`)
    }

    return (
        <div className="actions-container">
            { showStatusActions &&
            <div className="users-actions">
                <div><MdOutlineRemoveRedEye /><button className="view" onClick={handleViewDetails}>View Details</button></div>
                <div><FaUserCheck /><span onClick={onBlacklist}>Blacklist User</span></div>
                <div><AiOutlineUser /><span onClick={onActivate}>Activate User</span></div>
            </div> }
        </div>
    )
}

export default StatusActions