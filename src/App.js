import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import MainPage from "./menu/mainPage"
import page404 from "./menu/page404"
import Registration from "./components/registration/registration"
import AllNotesPage from "./components/blog/AllNotesPage"
import CreateNewNote from "./components/blog/createNewNote"
import AdminPage from "./components/blog/adminPage"
import NotePage from "./components/blog/notePage"
import EditNotePage from "./components/blog/editNotePage"
import OpenedNote from "./components/blog/openedNote"

function App() {
    return (
        <div>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/admin" exact component={AdminPage} />
                <Route path="/registration" component={Registration} />
                <Route path="/notes" component={AllNotesPage} />
                <Route path="/openednote" component={NotePage} />
                <Route path="/openednote/:noteId" component={OpenedNote} />
                <Route path="/createnote" component={CreateNewNote} />
                <Route path="/editnote" component={EditNotePage} />
                <Route path="/404" component={page404} />
                <Redirect to="/404" />
            </Switch>
        </div>
    )
}

export default App
