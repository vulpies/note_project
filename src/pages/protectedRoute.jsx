import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const users = useSelector((state) => state.usersReducer)

    return (
        <Route
            {...rest}
            render={(props) => {
                if (users.auth === false) {
                    return (
                        <Redirect
                            to={{
                                pathname: "/",
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
                return Component ? <Component {...props} /> : children
            }}
        />
    )
}

export default ProtectedRoute
