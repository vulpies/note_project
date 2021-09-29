import React from "react"
import { Link } from "react-router-dom"
import CommonBtn from "./buttons/commonBtn"

const AllNotes = ({ onRemove, note, id }) => {
    return (
        <div className="notes__single-block col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="notes__top-part">
                <h4 className="notes__single-block__title">{note.title}</h4>
                <p className="notes__single-block__subtitle">
                    {note.description}
                </p>
            </div>

            <div className="notes__btn">
                <Link to="/openednote/:noteId">
                    <CommonBtn name="Открыть" />
                </Link>
                <button
                    className="notes__btn-common notes__btn-remove"
                    onClick={() => onRemove(id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default AllNotes
