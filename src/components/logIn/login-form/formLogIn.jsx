import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap-floating-label"
import style from "./formLogin.module.css"

const FormLogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    /*
    const emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]{2,4}/gim
    const passRegExp = /[a-zA-Z]+\d+/g */

    const handleChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
        if (!email || email.trim() === "") {
            console.log("ошибка!")
        }
        setPassword(e.target.value)
        if (!password || password.trim() === "") {
            console.log("ошибка!")
        }
    }

    return (
        <Form className={style.form}>
            <FloatingLabel
                controlId="input"
                label="Email address"
                className={style.input}
                value={email}
                onChange={(e) => handleChange(e)}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel
                controlId="password"
                label="Password"
                value={password}
                className={style.input}
                onChange={(e) => handleChange(e)}
            >
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </Form>
    )
}

export default FormLogIn
