import React from 'react'
import CommentBox from './CommentBox'
import FeedBackCard from './FeedBackCard'


export default function App() {
    return (
        <div className="ui raised very padded text container segment">
            <FeedBackCard>
                <CommentBox avatar="https://source.unsplash.com/random" author="Nikunj" date="Today at 5:42PM" text="Hello there"></CommentBox>
            </FeedBackCard>
            <FeedBackCard>
                <CommentBox  avatar="https://source.unsplash.com/random" author="Raj" date="Yesterday at 6:42PM" text="Hello !!!"></CommentBox>
            </FeedBackCard>
            <FeedBackCard>
                <CommentBox  avatar="https://source.unsplash.com/random" author="Shlok" date="Today at 7:42PM" text="Hello hii!!"></CommentBox>
            </FeedBackCard>

            <FeedBackCard>
                <CommentBox  avatar="https://source.unsplash.com/random" author="Yash" date="Today at 8:42PM" text="Hello there"></CommentBox>
            </FeedBackCard> 
        </div>
    )
}
