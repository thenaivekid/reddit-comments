import { useState } from "react";
import CommentForm from "./CommentForm"; 
import { v4 as uuidv4 } from 'uuid';

const Comment = ({comment,r=[], addComment
}) => {
    const allReplies=r.filter((rp)=>rp.motherId===comment.id);
    console.log("all replies",allReplies)

const [replies,setReplies]=useState(allReplies)
    
  const [showCommentForm, setShowCommentForm] = useState(false);
  
  const commentId = comment.id;
  const replySectionId = `${commentId}-reply`;

  function handleReplyClick() {
    setShowCommentForm(true);
  }
  const add=(content,user,parentId)=>{
    const id=uuidv4()

setReplies([...replies,{comment_content:content,id,username:user,motherId:parentId}])
addComment(content,user,parentId)
  }

  console.log('replies',replies)
  return (
    <div id={commentId} className="comment">
      <div>
        <h3>{comment.username}</h3>
        <h5>mother id {comment.motherId}</h5>
        <h5> id {comment.id}</h5>

        <p>{comment.comment_content}</p>  
        
      </div>

      <button onClick={handleReplyClick}>Reply</button>

      {showCommentForm && (
        <CommentForm addComment={add} parentId={commentId}/>
      )}
      <div id={replySectionId} className="reply">
            <h5>replies here</h5>
            {replies?.map((el)=>{
            return <Comment comment={el} addComment={add}   r={r??[]} />
        })}
        </div>
    </div>
  );
}

export default Comment;