import { TbCone2, TbDotsVertical } from 'react-icons/tb'

const DashboardUsersData = ({data}) => {

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
                        <td><button className="status-btn">Pending</button><span><TbDotsVertical /></span></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default DashboardUsersData