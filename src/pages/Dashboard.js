import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TopBar from "../components/TopBar"
import SideBar from "../components/SideBar"
import UsersMetrics from '../components/UsersMetrics'
import DashboardUsersData from '../components/DashboardUsersData'

const Dashboard = () => {

    const [data, setData] = useState([])
    const [dataPresent, setDataPresent] = useState(false)
    const [dashboardError, setDashboardError] = useState("")
    const [dashboardFocus, setDashboardFocus] = useState(true)

    const {email} = useParams()

    var avatar
    var userName
    var id

    useEffect(() => {
        fetch("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users", { mode: 'cors' })
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then((result) => {
            console.log(result)
            setData(result)
            setDataPresent(true)
            setDashboardError("")
        })
        .catch((err) => {
            console.log("Error", err)
            setData({})
            setDataPresent(false)
            setDashboardError("Unable to fetch data. Try again later")
        })
    }, [])

    for(var i = 0; i < data.length; i++) {
        if (data[i]["email"] === email) {
            avatar = data[i]["profile"]["avatar"]
            userName = data[i]["userName"]
            id = data[i]["id"]
        }
    }

    return (
        <div className="dashboard-container">
            <TopBar avatar={avatar} userName={userName} />
            <div className="dashboard-body">
                <SideBar dashboardFocus={dashboardFocus} email={email} />
                <div className="main">
                    {dataPresent && <div className="main-inner">
                        <UsersMetrics data={data} />
                        <DashboardUsersData data={data} id={id} />
                    </div>}
                    {!dataPresent && <p className="dashboard-error">{dashboardError}</p>}
                </div>
            </div>
        </div>
    )
}

export default Dashboard