import { useState } from 'react'
import { TbCone2, TbDotsVertical } from 'react-icons/tb'
import StatusActions from './StatusActions'

const DashboardUsersData = ({data, id}) => {

    const [showStatusActions, setShowStatusActions] = useState(false)

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

    const handleStatusDotsClick = () => {
        if (!showStatusActions) {
            setShowStatusActions(true)
        }else {
            setShowStatusActions(false)
        }
    }

    const handleStatus = (item) => {

        let currentYear = new Date().getFullYear()
        let active = (item.lastActiveDate).split("T")
        let activeYear = parseInt(active.split("-")[0])
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

    const handleOnActvate = (item, itemStatus) => {
        if (itemStatus !== "active") {
            item["status"] = "active"
        }
    }

    const handleOnBlacklist = (item, itemStatus) => {
        if (itemStatus !== "blacklisted") {
            item["status"] = "blacklisted"
        }
    }


    return (
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
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.orgName}</td>
                        <td>{item.userName}</td>
                        <td>{item.email}</td>
                        <td>{item.phoneNumber}</td>
                        <td>{handleJoinDate(item.createdAt)}</td>
                        <td><button className={handleStatus(item)}>{handleStatus(item)}</button>
                        <span className="status-dots"><TbDotsVertical onClick={handleStatusDotsClick} /></span>
                        </td>
                        <StatusActions id={id} showStatusActions={showStatusActions} onActivate={handleOnActvate(item, handleStatus(item))} onBlacklist={handleOnBlacklist(item, handleStatus(item))} />
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default DashboardUsersData