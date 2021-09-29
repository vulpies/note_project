import React from "react"
import NavBar from "../../menu/navBar"
import BackToMainPage from "./buttons/backToMainPage"
import OpenedNote from "./openedNote"

const NotePage = () => {
    return (
        <>
            <NavBar />
            <BackToMainPage />
            <div>each single note</div>
            <OpenedNote />
        </>
    )
}

export default NotePage
