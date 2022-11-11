import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import UsersMetrics from '../components/UsersMetrics'
import DashboardUsersData from '../components/DashboardUsersData'

const Users = () => {

    const [data, setData] = useState([])
    const [usersFocus, setUsersFocus] = useState(true)
    const [filterOrg, setFilterOrg] = useState("")
    const [filterUserName, setFilterUserName] = useState("")
    const [filterEmail, setFilterEmail] = useState("")
    const [filterDate, setFilterDate] = useState(null)
    const [filterPhone, setFilterPhone] = useState(0)
    const [filterStatus, setFilterStatus] = useState("")

    const {email} = useParams()

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
    }, [email])

    var avatar
    var userName
    var id

    for(var i = 0; i < data.length; i++) {
        if (data[i]["email"] === email) {
            avatar = data[i]["profile"]["avatar"]
            userName = data[i]["userName"]
            id = data[i]["id"]
        }
    }

    const handleFilter =(e) => {
        e.preventDefault()
        let newResult = []
        for(var i = 0; i < data.length; i++) {
            if (data[i]["orgName"] === filterOrg || data[i]["userName"] === filterUserName || data[i]["email"] === filterEmail || data[i]["createdAt"] === filterDate || data[i]["profile"]["phoneNumber"] === filterPhone || data[i]["status"] === filterStatus) {
                newResult.push(data[i])
            }
        }
        setData(newResult)
    }

    const handleFilterReset = () => {
        setFilterOrg("")
        setFilterUserName("")
        setFilterEmail("")
        setFilterDate(null)
        setFilterPhone(0)
        setFilterStatus("")
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
    }

    return (
        <div className="dashboard-container">
            <TopBar avatar={avatar} userName={userName} />
            <div className="dashboard-body">
                <SideBar usersFocus={usersFocus} />
                <div className="main">
                    <div className="main-inner">
                        <UsersMetrics data={data} />
                        <DashboardUsersData data={data} id={id} />
                    </div>
                </div>
            </div>
            <div className="filter-block">
            <form>
                <p>Organization</p>
                <select placeholder="Select"
                value={filterOrg}
                onChange={(e) => setFilterOrg(e.target.value)}
                >
                    <option value="labore-dolor-et">labore-dolor-et</option>
                    <option value="accusamus-minima-repudiandae">accusamus-minima-repudiandae</option>
                    <option value="natus-harum-unde">natus-harum-unde</option>
                </select>
                <p>Username</p>
                <input
                type="text"
                placeholder="User"
                value={filterUserName}
                onChange={(e) => setFilterUserName(e.target.value)}
                />
                <p>Email</p>
                <input
                type="email"
                placeholder="Email"
                value={filterEmail}
                onChange={(e) => setFilterEmail(e.target.value)}
                />
                <p>Date</p>
                <input
                type="date"
                placeholder="Date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                />
                <p>Phone Number</p>
                <input
                type="tel"
                placeholder="Phone Number"
                value={filterPhone}
                onChange={(e) => setFilterPhone(e.target.value)}
                />
                <p>Status</p>
                <select 
                placeholder="Select"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Blacklisted">Blacklisted</option>
                    <option value="Pending">Pending</option>
                </select>
                <div className="filterblk-btn">
                    <button className="filterblk-reset" onClick={handleFilterReset}>Reset</button>
                    <button className="filterblk-filter" onClick={handleFilter}>Filter</button>
                </div>
            </form>
            </div>
        </div>
    )
}

export default Users