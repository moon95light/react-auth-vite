import { useContext } from "react";
import { UserContext } from "../../content/userContent";

export default function Dashboard() {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h1>Dashboard</h1>
            {!!user && (<h2> Welcome {user.name}! </h2>)}
        </div>
    )
}