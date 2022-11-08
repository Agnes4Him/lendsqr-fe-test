import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import { FiUsers } from 'react-icons/fi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { GiMoneyStack } from 'react-icons/gi'

const Dashboard = () => {

    const [data, setData] = useState([])

    const {email} = useParams()

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
    }, [email])

    var avatar
    var userName

    for(var i = 0; i < data.length; i++) {
        if (data[i]["email"] === email) {
            avatar = data[i]["profile"]["avatar"]
            userName = data[i]["userName"]
        }
    }

    return (
        <div className="dashboard-container">
            <TopBar avatar={avatar} userName={userName} />
            <div className="dashboard-body">
                <SideBar />
                <div className="main">
                    <div className="main-inner">
                        <p>Users</p>
                        <div className="users-metrics">
                            <div className="div1">
                                <div><FiUsers /></div>
                                <p className="text">USERS</p>
                                <p className="number">2,345</p>
                            </div>
                            <div className="div2">
                                <div><FiUsers /></div>
                                <p className="text">ACTIVE USERS</p>
                                <p clasName="number">2,345</p>
                            </div>
                            <div className="div3">
                                <div><HiOutlineDocumentReport /></div>
                                <p className="text">USERS WITH LOANS</p>
                                <p className="number">2,345</p>
                            </div>
                            <div className="div4">
                                <div><GiMoneyStack /></div>
                                <p className="text">USERS WITH SAVINGS</p>
                                <p className="number">2,345</p>
                            </div>
                        </div>
                        <div className="users-data"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard