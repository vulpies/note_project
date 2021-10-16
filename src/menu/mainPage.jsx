import React from "react"
import FormButtons from "../components/logIn/login-buttons/formButtons"

const MainPage = () => {
    return (
        <>
            <div className="main main__div">
                <h1>Добро пожаловать!</h1>
                <p>
                    Для просмотра контента, пожалуйста, войдите или
                    зарегистрируйтесь.
                </p>

                <FormButtons />
            </div>
        </>
    )
}

export default MainPage
