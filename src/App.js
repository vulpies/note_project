import React from "react"
import { Route, Switch } from "react-router-dom"
import MainPage from "./pages/mainPage"
import page404 from "./pages/page404"
import Registration from "./pages/registration/registration"
import AllNotesPage from "./pages/allNotesPage"
import CreateNewNote from "./pages/create_note/createNewNote"
import NotePage from "./pages/opened_note/notePage"
import EditNotePage from "./pages/editNotePage"
import AdminPage from "./pages/admin_page/adminPage"
import LoginPage from "./pages/loginPage"
import ProtectedRoute from "./pages/protectedRoute"

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={Registration} />

                <ProtectedRoute path="/users" exact component={AdminPage} />
                <ProtectedRoute
                    path="/notes/editnote/:noteId"
                    component={EditNotePage}
                />
                <ProtectedRoute path="/notes/:noteId" component={NotePage} />
                <ProtectedRoute path="/notes" component={AllNotesPage} />
                <ProtectedRoute path="/createnote" component={CreateNewNote} />
                <ProtectedRoute path="/404" component={page404} />
            </Switch>
        </div>
    )
}

export default App
