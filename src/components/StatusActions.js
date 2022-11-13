//import { Link } from 'react-router-dom'
import { MdOutlineRemoveRedEye } from 'react-icons/md'
import { FaUserCheck } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const StatusActions = ({showStatusActions, id, status, setStatus}) => {

    const navigate = useNavigate()

    const handleViewDetails = () => {

        navigate(`/user-details/${id}`)
    }

    const handleActivate = () => {
        if (status !== "active") {
            setStatus("active")
        }
    }

    const handleBlacklist = () => {
        if (status !== "blacklisted") {
            setStatus("blacklisted")
        }
    }

    return (
        <div className="actions-container">
            { showStatusActions &&
            <div className="users-actions">
                <div><MdOutlineRemoveRedEye /><button className="view" onClick={handleViewDetails}>View Details</button></div>
                <div><FaUserCheck /><span onClick={handleBlacklist}>Blacklist User</span></div>
                <div><AiOutlineUser /><span onClick={handleActivate}>Activate User</span></div>
            </div> }
        </div>
    )
}

export default StatusActions