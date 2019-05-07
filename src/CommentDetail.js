import React from "react"

const style = {padding: "5px",}

const CommentDetail = props => {
    return(
        <div className="ui comments" style={style}>
            <div className="comment">
                <a className="avatar" href="/">
                    <img src={props.avatar} alt="avatar"/>
                </a>
                <div className="content">
                    <a href="/" className="author">{props.author}</a>
                    <div className="metadata">
                        <span className="date">{props.timeAgo}</span>
                    </div>
                    <div className="text">
                        {props.text}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentDetail