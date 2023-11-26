import { useState, useEffect } from 'react';

const CommentForm = ({addComment, parentId}) => {
    // parentId is the id of div of comment in which this comment is nested

    const [comment_content, setComment_comment_content] = useState('');
    const [username, setUsername] = useState('');

    function submitComment(e){
        
        e.preventDefault();
        addComment(comment_content, username, parentId)
        setComment_comment_content('');
        setUsername('');
    }
    return (
        <form onSubmit={submitComment}>
            <input type="text" placeholder='comment' value={comment_content} onChange={(e) =>
                setComment_comment_content(e.target.value)} />
            <input type="text" placeholder='username' value={username} onChange={(e) =>
                setUsername(e.target.value)}/>
            <input type="submit" />
        </form>
    )
}

export default CommentForm;