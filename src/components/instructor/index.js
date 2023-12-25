import React from 'react'
import Comments from './comments/Comments'

const index = () => {
    return (
        <div>
            <h1>Ask Your Questions Here</h1>

            <Comments
                commentsUrl="http://localhost:3004/comments"
                currentUserId="1"
            />
        </div>
    )
}

export default index