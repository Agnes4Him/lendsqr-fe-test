import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import { BsArrowLeft } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import {FcRating} from 'react-icons/fc'

const Dashboard = () => {

    const [data, setData] = useState([])
    const [usersFocus, setUsersFocus] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((result) => {
            console.log(result)
            setData(result)
        })
    }, [id])

    var avatar
    var userName
    var email

    for(var i = 0; i < data.length; i++) {
        if (data[i]["id"] === id) {
            avatar = data[i]["profile"]["avatar"]
            userName = data[i]["userName"]
            email = data[i]["email"]
        }
    }

    return (
        <div className="dashboard-container">
            <TopBar avatar={avatar} userName={userName} />
            <div className="dashboard-body">
                <SideBar usersFocus={usersFocus} email={email} />
                <div className="details-main">
                    <div className="details-container">
                        <Link to={`/users/${email}`} style={{textDecoration:"none"}} className="back-link"><BsArrowLeft className="arrow" /><span>Back to Users</span></Link>
                        <div className="text-btns">
                            <p>Users Details</p>
                            <div className="details-btns">
                                <button className="blacklist-btn">BLACKLIST USER</button>
                                <button className="activate-btn">ACTIVATE USER</button>
                             </div>
                        </div>
                        <div className="user-intro">
                            <div className="intro-inner">
                                <div className="upper-div">
                                    <div className="img-names">
                                        <div className="img-div"><AiOutlineUser className="profile-img" /></div>
                                        <div className="names-div">
                                            <p classNames="user-names">FirstName LastName</p>
                                            <p className="user-id">Labsgjkskbbbb</p>
                                        </div>
                                    </div>
                                    <div className="tier-container">
                                        <p className="tier-text">User's Tier</p>
                                        <FcRating className="rating-icon" /><FcRating className="rating-icon" /><FcRating className="rating-icon" />
                                    </div>
                                    <div className="balance-container">
                                        <p className="balance">#200,000.OO</p>
                                        <p className="acct-number">account number</p>
                                    </div>
                                </div>
                                <div className="lower-div">
                                    <div className="gen-details">General Details</div> 
                                    <div>Documents</div>
                                    <div>Bank Details</div>
                                    <div>Loans</div>
                                    <div>Savings</div>
                                    <div>App and System</div>   
                                </div>
                            </div>
                        </div>
                        <div className="user-info">
                            <div className="userinfo-inner">
                                <p className="personalinfo-heading main-text">Personal Information</p>
                                <div className="personal-info">
                                    <div className="fullname-marital">
                                        <div className="fullname">
                                            <p className="heading">FULL NAME</p>
                                            <p className="content">Grace Effiom</p>
                                        </div>
                                        <div className="marital">
                                            <p className="heading">MARITAL STATUS</p>
                                            <p className="content">Single</p>
                                        </div>
                                    </div>
                                    <div className="phone-children">
                                        <div className="phone">
                                            <p className="heading">PHONE NUMBER</p>
                                            <p className="content">070897654321</p>
                                        </div>
                                        <div className="children">
                                            <p className="heading">CHILDREN</p>
                                            <p className="content">None</p>
                                        </div>
                                    </div>
                                    <div className="email-residence">
                                        <div className="personal-email">
                                            <p className="heading">EMAIL ADDRESS</p>
                                            <p className="content">grace@gmail.com</p>
                                        </div>
                                        <div className="residence">
                                            <p className="heading">TYPE OF RESIDENCE</p>
                                            <p className="content">Parent's Apartment</p>
                                        </div>
                                    </div>
                                    <div className="bvn">
                                        <p className="heading">BVN</p>
                                        <p className="content">090876541826</p>
                                    </div>
                                    <div className="gender">
                                        <p className="heading">GENDER</p>
                                        <p className="content">Female</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="education-heading main-text">Education and Employment</p>
                                <div className="education-employment">
                                    <div className="education-email">
                                        <div className="education-level">
                                            <p className="heading">LEVEL OF EDUCATION</p>
                                            <p className="content">B.Sc</p>
                                        </div>
                                        <div className="office-email">
                                            <p className="heading">OFFICE EMAIL</p>
                                            <p className="content">grace@lendsqr.com</p>
                                        </div>
                                    </div>
                                    <div className="employment-income">
                                        <div className="employment-status">
                                            <p className="heading">EMPLOYMENT STATUS</p>
                                            <p className="content">Employed</p>
                                        </div>
                                        <div className="income">
                                            <p className="heading">MONTHLY INCOME</p>
                                            <p className="content">#200,000-#400,000</p>
                                        </div>
                                    </div>
                                    <div className="sector-loan">
                                        <div className="sector">
                                            <p className="heading">SECTOR OF EMPLOYMENT</p>
                                            <p className="content">FinTech</p>
                                        </div>
                                        <div className="loan">
                                            <p className="heading">LOAN REPAYMENT</p>
                                            <p className="content">#40,000</p>
                                        </div>
                                    </div>
                                    <div className="employ-duration">
                                        <p className="heading">DURATION OF EMPLOYMENT</p>
                                        <p className="content">2 years</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="socials-heading main-text">Socials</p>
                                <div className="socials">
                                    <div className="twitter">
                                        <p className="heading">TWITTER</p>
                                        <p className="content">@grace_effiom</p>
                                    </div>
                                    <div className="facebook">
                                        <p className="heading">FACEBOOK</p>
                                        <p className="content">Grace Effiom</p>
                                    </div>
                                    <div className="instagram">
                                        <p className="heading">INSTAGRAM</p>
                                        <p className="content">@grace_effiom</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="guarantor-heading main-text">Guarantors</p>
                                <div className="guarantor">
                                    <div className="guarantor-names">
                                        <p className="heading">FULL NAME</p>
                                        <p className="content">Debby Ogana</p>
                                    </div>
                                    <div className="guarantor-phone">
                                        <p className="heading">PHONE NUMBER</p>
                                        <p className="content">09078654327</p>
                                    </div>
                                    <div className="guarantor-email">
                                        <p className="heading">EMAIL ADDRESS</p>
                                        <p className="content">debby@gmail.com</p>
                                    </div>
                                    <div className="guarantor-relationship">
                                        <p className="heading">RELATIONSHIP</p>
                                        <p className="content">Sister</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard