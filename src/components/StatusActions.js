import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'

const StatusActions = ({id, showStatusActions, onActivate, onBlacklist}) => {
    return (
        <div className="actions-container">
            { showStatusActions &&
            <div className="users-actions">
                <div><MdOutlineRemoveRedEye /><Link to={`/user-details/${id}`} style={{textDecoration:"none"}} className="view">View Details</Link></div>
                <div><FaUserCheck /><span onClick={onBlacklist}>Blacklist User</span></div>
                <div><AiOutlineUser /><span onClick={onActivate}>Activate User</span></div>
            </div> }
        </div>
    )
}

export default StatusActions