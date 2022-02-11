import React from "react"
import BackToMainPage from "../../components/buttons/backToMainPage"
import NavBar from "../../components/navbar/navBar"
import Users from "../../components/Users"

const AdminPage = () => {
    return (
        <>
            <NavBar />
            <BackToMainPage />
            <div className="main">
                <Users />
            </div>
        </>
    )
}

export default AdminPage
