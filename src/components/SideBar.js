import { Link } from 'react-router-dom'
import { FaSuitcaseRolling, FaHouseUser, FaUserCheck, FaHandshake } from 'react-icons/fa'
import { MdOutlineArrowDropDown } from 'react-icons/md'
import { FiUsers } from 'react-icons/fi'
import { RiUserSearchFill } from 'react-icons/ri'
import { GiReceiveMoney, GiMoneyStack } from 'react-icons/gi'
import { TbReportMoney } from 'react-icons/tb'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { AiOutlineAudit } from 'react-icons/ai'

const SideBar = ({email, dashboardFocus, usersFocus}) => {

    return (
        <div className="sidebar">
            <div className="sidebar-inner">
                <div className="sidebar-div1">
                    <div className="org-container">
                        <div className="switch-org">
                            <FaSuitcaseRolling />
                            <p>Switch Organization</p>
                            <MdOutlineArrowDropDown />
                        </div>
                    </div>
                    { dashboardFocus ?
                    <div className="dashboard-container focus"><div className="dashboard-div">
                        <FaHouseUser />
                        <p>Dashboard</p>
                    </div></div>
                    :
                    <div className="dashboard-container"><div className="dashboard-div">
                        <FaHouseUser />
                        <p>Dashboard</p>
                    </div></div> }                   
                </div>
                <div className="sidebar-div2">
                    <p className="main-text">CUSTOMERS</p>
                    <ul className="div2-ul">
                        { usersFocus ?
                        <li className="focus">
                            <FiUsers />
                            <p><Link to={`/users/${email}`} style={{textDecoration:"none"}}>Users</Link></p>
                        </li>
                        :
                        <li>
                            <FiUsers />
                            <p><Link to={`/users/${email}`} style={{textDecoration:"none"}} className="users-link">Users</Link></p>
                        </li> }
                        <li>
                            <RiUserSearchFill />
                            <p>Guarantors</p>
                        </li>
                        <li>
                            <GiMoneyStack />
                            <p>Loans</p>
                        </li>
                        <li>
                            <FaHandshake />
                            <p>Decision Models</p>
                        </li>
                        <li>
                            <TbReportMoney />
                            <p>Savings</p>
                        </li>
                        <li>
                            <GiReceiveMoney />
                            <p>Loan Requests</p>
                        </li>
                        <li>
                            <FaUserCheck />
                            <p>Whitelist</p>
                        </li>
                        <li>
                            <FaUserCheck />
                            <p>Karma</p>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-div3">
                    <p className="main-text">BUSINESSES</p>
                    <ul className="div3-ul">
                        <li>
                            <FaSuitcaseRolling />
                            <p>Organization</p>
                        </li>
                        <li>
                            <RiUserSearchFill />
                            <p>Loan Products</p>
                        </li>
                        <li>
                            <GiMoneyStack />
                            <p>Savings Products</p>
                        </li>
                        <li>
                            <FaHandshake />
                            <p>Fees and Charges</p>
                        </li>
                        <li>
                            <TbReportMoney />
                            <p>Transactions</p>
                        </li>
                        <li>
                            <GiReceiveMoney />
                            <p>Services</p>
                        </li>
                        <li>
                            <FaUserCheck />
                            <p>Service Account</p>
                        </li>
                        <li>
                            <FaUserCheck />
                            <p>Settlements</p>
                        </li>
                        <li>
                            <HiOutlineDocumentReport />
                            <p>Reports</p>
                        </li>
                    </ul>
                </div>
                <div className="sidebar-div4">
                    <p className="main-text">SETTINGS</p>
                    <ul className="div4-ul">
                        <li>
                            <FaSuitcaseRolling />
                            <p>Preferences</p>
                        </li>
                        <li>
                            <RiUserSearchFill />
                            <p>Fees and Pricing</p>
                        </li>
                        <li>
                            <AiOutlineAudit />
                            <p>Audit Logs</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SideBar