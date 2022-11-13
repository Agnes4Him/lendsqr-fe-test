import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import { BsArrowLeft } from 'react-icons/bs'
//import { AiOutlineUser } from 'react-icons/ai'
import {FcRating} from 'react-icons/fc'

const UserDetails = () => {

    const [data, setData] = useState([])
    const [userData, setUserData] = useState(null)
    const [userDataError, setUserDataError] = useState("")
    const [usersFocus] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", {mode:'cors'})
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((result) => {
            console.log(result)
            setData(result)
        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

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

    useEffect(() => {
        if (localStorage.getItem("user")) {
            console.log(localStorage.getItem("user"))
            let user = localStorage.getItem("user")
            setUserData(JSON.parse(user))
            console.log(userData)
            setUserDataError("")
        }else {
            setUserData({})
            setUserDataError("Data not available at the moment.")
        }
    }, [userData])

    return (
        <div className="userdetails-container">
            <TopBar avatar={avatar} userName={userName} />
            <div className="userdetails-body">
                <SideBar usersFocus={usersFocus} email={email} />
                <div className="details-main">
                    { userData && <div className="details-container">
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
                                        <div className="img-div"><img src={userData.profile.avatar} alt="Avatar" className="profile-img" /></div>
                                        <div className="name-div">
                                            <p className="user-name">{userData.profile.firstName} {userData.profile.lastName}</p>
                                            <p className="user-id">{userData.accountNumber}</p>
                                        </div>
                                    </div>
                                    <div className="tier-container">
                                        <p className="tier-text">User's Tier</p>
                                        <FcRating className="rating-icon" /><FcRating className="rating-icon" /><FcRating className="rating-icon" />
                                    </div>
                                    <div className="balance-container">
                                        <p className="balance">{userData.accountBalance}</p>
                                        <p className="acct-number">{userData.accountNumber}</p>
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
                                            <p className="content">{userData.profile.firstName} {userData.profile.lastName}</p>
                                        </div>
                                        <div className="marital">
                                            <p className="heading">MARITAL STATUS</p>
                                            <p className="content">Single</p>
                                        </div>
                                    </div>
                                    <div className="phone-children">
                                        <div className="phone">
                                            <p className="heading">PHONE NUMBER</p>
                                            <p className="content">{userData.phoneNumber}</p>
                                        </div>
                                        <div className="children">
                                            <p className="heading">CHILDREN</p>
                                            <p className="content">None</p>
                                        </div>
                                    </div>
                                    <div className="email-residence">
                                        <div className="personal-email">
                                            <p className="heading">EMAIL ADDRESS</p>
                                            <p className="content">{userData.email}</p>
                                        </div>
                                        <div className="residence">
                                            <p className="heading">TYPE OF RESIDENCE</p>
                                            <p className="content">{userData.profile.address}</p>
                                        </div>
                                    </div>
                                    <div className="bvn">
                                        <p className="heading">BVN</p>
                                        <p className="content">{userData.profile.bvn}</p>
                                    </div>
                                    <div className="gender">
                                        <p className="heading">GENDER</p>
                                        <p className="content">{userData.profile.gender}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="education-heading main-text">Education and Employment</p>
                                <div className="education-employment">
                                    <div className="education-email">
                                        <div className="education-level">
                                            <p className="heading">LEVEL OF EDUCATION</p>
                                            <p className="content">{userData.education.level}</p>
                                        </div>
                                        <div className="office-email">
                                            <p className="heading">OFFICE EMAIL</p>
                                            <p className="content">{userData.education.officeEmail}</p>
                                        </div>
                                    </div>
                                    <div className="employment-income">
                                        <div className="employment-status">
                                            <p className="heading">EMPLOYMENT STATUS</p>
                                            <p className="content">{userData.education.employmentStatus}</p>
                                        </div>
                                        <div className="income">
                                            <p className="heading">MONTHLY INCOME</p>
                                            <p className="content">#{userData.education.monthlyIncome[1]} - #{userData.education.monthlyIncome[0]}</p>
                                        </div>
                                    </div>
                                    <div className="sector-loan">
                                        <div className="sector">
                                            <p className="heading">SECTOR OF EMPLOYMENT</p>
                                            <p className="content">{userData.education.sector}</p>
                                        </div>
                                        <div className="loan">
                                            <p className="heading">LOAN REPAYMENT</p>
                                            <p className="content">{userData.education.loanRepayment}</p>
                                        </div>
                                    </div>
                                    <div className="employ-duration">
                                        <p className="heading">DURATION OF EMPLOYMENT</p>
                                        <p className="content">{userData.education.duration}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="socials-heading main-text">Socials</p>
                                <div className="socials">
                                    <div className="twitter">
                                        <p className="heading">TWITTER</p>
                                        <p className="content">{userData.socials.twitter}</p>
                                    </div>
                                    <div className="facebook">
                                        <p className="heading">FACEBOOK</p>
                                        <p className="content">{userData.socials.facebook}</p>
                                    </div>
                                    <div className="instagram">
                                        <p className="heading">INSTAGRAM</p>
                                        <p className="content">{userData.socials.instagram}</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <p className="guarantor-heading main-text">Guarantor</p>
                                <div className="guarantor">
                                    <div className="guarantor-names">
                                        <p className="heading">FULL NAME</p>
                                        <p className="content">{userData.guarantor.firstName} {userData.guarantor.lastName}</p>
                                    </div>
                                    <div className="guarantor-phone">
                                        <p className="heading">PHONE NUMBER</p>
                                        <p className="content">{userData.guarantor.phoneNumber}</p>
                                    </div>
                                    <div className="guarantor-email">
                                        <p className="heading">EMAIL ADDRESS</p>
                                        <p className="content">guarantor@example.com</p>
                                    </div>
                                    <div className="guarantor-relationship">
                                        <p className="heading">RELATIONSHIP</p>
                                        <p className="content">Sister</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>} 
                    { !userData && <p className="userdata-error">{userDataError}</p>}
                </div>
            </div>
        </div>
    )
}

export default UserDetails