import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import MainPage from "./menu/mainPage"
import page404 from "./menu/page404"
import Registration from "./menu/registration/registration"
import AllNotesPage from "./components/blog/notes/allNotesPage"
import CreateNewNote from "./components/blog/createNewNote"
import AdminPage from "./components/blog/adminPage"
import NotePage from "./components/blog/opened_note/notePage"
import EditNotePage from "./components/blog/edit_note/editNotePage"
import LoginPage from "./menu/loginPage"

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/admin" exact component={AdminPage} />
                <Route path="/login" exact component={LoginPage} />
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
