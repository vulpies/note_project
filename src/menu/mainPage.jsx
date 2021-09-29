import React from "react"
import FormLogIn from "../components/logIn/formLogIn"
import FormButtons from "../components/logIn/formButtons"

const MainPage = () => {
    return (
        <>
            <div className="main main__div">
                <h1>Добро пожаловать!</h1>
                <p>
                    Для просмотра контента, пожалуйста, войдите или
                    зарегистрируйтесь.
                </p>

                <FormLogIn classname="logInForm" boxStyle="form" />
                <FormButtons />
            </div>
        </>
    )
}

export default MainPage
