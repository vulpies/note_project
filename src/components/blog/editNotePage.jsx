import React from "react"
import { Link } from "react-router-dom"
import NavBar from "../../menu/navBar"
import BackToMainPage from "./buttons/backToMainPage"
import CommonBtn from "./buttons/commonBtn"

const EditNotePage = () => {
    return (
        <>
            <NavBar />
            <BackToMainPage />
            <div className="create-note">
                <h2 className="create-note__title">Редактирование заметки</h2>

                <div className="create-note__texts">
                    <p className="create-note__texts-subtitle">Название:</p>

                    <p className="create-note__texts-subtitle">Описание:</p>
                </div>

                <div className="notes__btn">
                    <CommonBtn name="Сохранить" />
                    <Link to="/notes/:noteId">
                        <CommonBtn name="Отменить" />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default EditNotePage
