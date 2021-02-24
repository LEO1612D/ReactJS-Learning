import React from 'react'

export default function CommentBox(props) {
    const {avatar,author,date,text} = props;
    return (
     <div className="ui comments">
        <div className="comment">
                <a className="avatar"><img src={avatar}/></a>
                <div className="content">
                    <a className="author">{author}</a>
                    <div className="metadata">
                        <span className="date">{date}</span>
                    </div>
                    <div className="text">
                        {text}
                    </div>
                    <div className="actions">
                        <a className="reply">Reply</a>
                    </div>
                </div>
        </div>
    </div>

    )
}
