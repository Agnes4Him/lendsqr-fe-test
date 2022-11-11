import { useState } from 'react'
import { TbCone2, TbDotsVertical } from 'react-icons/tb'
import StatusActions from './StatusActions'
import Pagination from './Pagination'
import RecordIndicator from './RecordIndicator'

const DashboardUsersData = ({data, id}) => {

    const [user, setUser] = useState({})
    const [showStatusActions, setShowStatusActions] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(15)

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const nPages = Math.ceil(data.length/recordsPerPage)
    const dataTotal = data.length

    const handleJoinDate = (itemDate) => {
        let date = new Date(itemDate)
        date = date.toString('YYYY-MM-dd')
        let modDate = date.split(" ")
        let year = modDate[3]
        let month = modDate[1]
        let day = modDate[2]
        let time = modDate[4]
        let modTime = time.split(":")
        let hour = modTime[0]
        var modHour
        if (parseInt(hour) < 12) {
            modHour = hour.toString() + ":" + "00" + " " + "AM"
        }else if (parseInt(hour) > 12) {
            modHour = hour.toString() + ":" + "00" + " " + "PM"
        }
        return month + " " + day + "," + " " + year + " " + modHour
    }

    const handleStatusDotsClick = (item) => {
        setUser(item)
        if (!showStatusActions) {
            setShowStatusActions(true)
        }else {
            setShowStatusActions(false)
        }
    }

    const handleStatus = (item) => {

        let currentYear = new Date().getFullYear()
        let active = (item.lastActiveDate).split("T")
        let activeYear = parseInt(active[0].split("-")[0])
        let yearDiff = activeYear - currentYear

        if (yearDiff >= 50) {
            item["status"] = "blacklisted"
        }else if (yearDiff > 30 && yearDiff < 50) {
            item["status"] = "inactive"
        }else if (yearDiff <= 30 && yearDiff > 1) {
            item["status"] = "active"
        }else if (yearDiff <= 1) {
            item["status"] = "pending"
        }

        return item["status"]
    } 

    const handleActivate = (user) => {
        if (user.status !== "active") {
            user["status"] = "active"
        }
    }

    const handleBlacklist = (user) => {
        if (user.status !== "blacklisted") {
            user["status"] = "blacklisted"
        }
    }


    return (
        <div>
        <div className="users-data">
            <table>
                <tr>
                    <th>ORGANIZATION<span><TbCone2 /></span></th>
                    <th>USERNAME<span><TbCone2 /></span></th>
                    <th>EMAIL<span><TbCone2 /></span></th>
                    <th>PHONE NUMBER<span><TbCone2 /></span></th>
                    <th>DATE JOINED<span><TbCone2 /></span></th>
                    <th>STATUS<span><TbCone2 /></span></th>
                </tr>
                {data.slice(indexOfFirstRecord, indexOfLastRecord).map((item) => (
                    <tr key={item.id}>
                        <td>{item.orgName}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{handleJoinDate(item.createdAt)}</td>
                        <td><button className={handleStatus(item)}>{handleStatus(item)}</button></td>
                        <span className="status-dots"><TbDotsVertical onClick={() => handleStatusDotsClick(item)} /></span>
                    </tr>
                ))}
            </table>
        </div>
            <div className="pagination-div">
                <RecordIndicator indexOfLast={indexOfLastRecord} dataTotal={dataTotal} />
                <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <StatusActions showStatusActions={showStatusActions} id={id} user={user} onActivate={handleActivate(user)} onBlacklist={handleBlacklist(user)} />
        </div>
    )
}

export default DashboardUsersData