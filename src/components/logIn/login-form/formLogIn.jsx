import React, { useState } from "react"
import Form from "react-bootstrap/Form"
import FloatingLabel from "react-bootstrap-floating-label"
import style from "./formLogin.module.css"
import "../../../style/css/style.css"

const FormLogIn = () => {
    const [data, setData] = useState({ email: "", password: "" })
    const [error, setError] = useState("")

    // const passRegExp = /[a-zA-Z]+\d+/g

    const handleChange = ({ target }) => {
        setData({ ...data, email: target.value })
        if (target.value.trim() !== "") {
            const emailRegExp = /[A-Z0-9._%+-]+@[A-Z0-9-]+\.[A-Z]/gim
            if (!emailRegExp.test(target.value)) {
                setError("red")
            } else {
                setError("green")
            }
        } else {
            setError("")
        }
        // setPassword(target.value)
        // if (!password || password.trim() === "") {
        //     console.log("ошибка!")
        // }}
    }
    function styleInput(key) {
        switch (key) {
            case "green":
                return "rgb(13 253 65 / 25%)"

            case "red":
                return "rgb(253 2 2 / 51%)"

            default:
                return "transparent"
        }
    }

    return (
        <Form className={style.form}>
            <FloatingLabel
                controlId="input"
                label="Email address"
                className={style.input}
                name="email"
                value={data.email}
                style={{
                    boxShadow: `0 0 0 10px ${styleInput(error)}`,
                    border: `0px solid ${styleInput(error)}`,
                    borderRadius: "7px",
                }}
                onChange={(e) => handleChange(e)}
            >
                <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel
                controlId="password"
                label="Password"
                value={data.password}
                className={style.input}
                onChange={(e) => handleChange(e)}
            >
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
        </Form>
    )
}

export default FormLogIn
