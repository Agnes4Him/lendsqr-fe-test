import { useParams } from "react-router-dom"

const UserDetails = () => {

    const {id} = useParams()

    return (
        <div>
            <h2>This is User Details page for user {id}</h2>
        </div>
    )
}

export default UserDetails