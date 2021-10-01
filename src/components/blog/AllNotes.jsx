import React from "react"
import { Link } from "react-router-dom"
import CommonBtn from "./buttons/commonBtn"
// import { deleteNoteById } from "../../fake_api/notes.api"

const AllNotes = ({ onRemove, _id, title, description }) => {
    return (
        <div className="notes__single-block col-xl-3 col-md-4 col-sm-6 col-12">
            <div className="notes__top-part">
                <h4 className="notes__single-block-title">{title}</h4>
                <p className="notes__single-block-subtitle">{description}</p>
            </div>

            <div className="notes__btn">
                <Link to={`/notes/${_id}`}>
                    <CommonBtn name="Открыть" />
                </Link>
                <button
                    className="notes__btn-common notes__btn-remove"
                    onClick={() => onRemove(_id)}
                >
                    Удалить
                </button>
            </div>
        </div>
    )
}

export default AllNotes
