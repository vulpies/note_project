import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import MainPage from "./pages/mainPage"
import page404 from "./pages/page404"
import Registration from "./pages/registration/registration"
import AllNotesPage from "./pages/allNotesPage"
import CreateNewNote from "./pages/create_note/createNewNote"
import NotePage from "./pages/opened_note/notePage"
import EditNotePage from "./pages/editNotePage"
import AdminPage from "./pages/admin_page/adminPage"
import LoginPage from "./pages/loginPage"

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/admin" component={AdminPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/registration" component={Registration} />
                <Route
                    path="/notes/editnote/:noteId"
                    component={EditNotePage}
                />
                <Route path="/notes/:noteId" component={NotePage} />
                <Route path="/notes" component={AllNotesPage} />
                <Route path="/createnote" component={CreateNewNote} />
                <Route path="/404" component={page404} />
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}

export default App
