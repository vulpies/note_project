import React, { useState } from "react"
import FormButtons from "../components/logIn/login-buttons/formButtons"
import LoginPage from "../components/logIn/login-form/loginPage"
import AllNotesPage from "../components/blog/notes/allNotesPage"

const MainPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)
    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
            <div className="main main__div">
                <h1>Добро пожаловать!</h1>
                <p>
                    Для просмотра контента, пожалуйста, войдите или
                    зарегистрируйтесь.
                </p>

                {!isSubmitted ? (
                    <LoginPage submitForm={submitForm} />
                ) : (
                    <AllNotesPage />
                )}
                <FormButtons />
            </div>
        </>
    )
}

export default MainPage
