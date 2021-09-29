import React from "react"
import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import InputPassword from "./inputPassword"

const FormLogIn = ({ classname, boxStyle }) => {
    return (
        <div className={classname}>
            <Box
                component={boxStyle}
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="standard-basic"
                    label="Username"
                    variant="standard"
                />
                <InputPassword />
            </Box>
        </div>
    )
}

export default FormLogIn
