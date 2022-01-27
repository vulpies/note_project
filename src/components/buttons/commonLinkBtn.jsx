import React from "react"

const CommonLinkBtn = ({ name, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>
            {name}
        </button>
    )
}

export default CommonLinkBtn
