import { FiUsers } from 'react-icons/fi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { GiMoneyStack } from 'react-icons/gi'

const UsersMetrics = ({data}) => {

    var loans = 0
    var savings = 0

    for (var i = 0; i < data.length; i++) {
        if (Number(data[i]["accountBalance"]) > Number(data[i]["education"]["loanRepayment"])) {
            savings = savings + 1
        }else if (Number(data[i]["education"]["loanRepayment"]) > Number(data[i]["accountBalance"])) {
            loans = loans + 1
        }
    }

    return (
        <div>
            <p>Users</p>
            <div className="users-metrics">
                <div className="box">
                    <div className="box1-div"><FiUsers /></div>
                    <p className="text">USERS</p>
                    <p className="number">{data.length}</p>
                </div>
                <div className="box box2">
                    <div className="box2-div"><FiUsers /></div>
                    <p className="text">ACTIVE USERS</p>
                    <p clasName="number">{data.length}</p>
                </div>            
                <div className="box box3">
                    <div className="box3-div"><HiOutlineDocumentReport /></div>
                    <p className="text">USERS WITH LOANS</p>
                    <p className="number">{loans}</p>
                </div>
                <div className="box box4">
                    <div className="box4-div"><GiMoneyStack /></div>
                    <p className="text">USERS WITH SAVINGS</p>
                    <p className="number">{savings}</p>
                </div>
            </div>
        </div>
    )
}

export default UsersMetrics