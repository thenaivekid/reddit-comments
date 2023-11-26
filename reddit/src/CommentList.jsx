import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";

function CommentList({ comments, addComment }) {
    console.log('first reoploies',comments.filter((el)=>{
        return el.motherId===1
        }));
    return (
      <div className="comment-list">
        {comments.map(comment => {

const replies=comments.filter((el)=>{
return el.motherId===comment.id
});



         return <Comment key={comment.id} comment={comment}   r={comments}  addComment={addComment} /> }
        )}
      </div>
    ) 
  }

export default CommentList;