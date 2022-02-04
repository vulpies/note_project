import React from "react"
import NavBar from "../../components/navbar/navBar"
import Users from "../../components/Users"

const AdminPage = () => {
    return (
        <>
            <NavBar />
            <div className="main main__div">
                <Users />
            </div>
        </>
    )
}

export default AdminPage
