import { useState, useEffect } from "react";
import './App.css'
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
import CommentList from "./CommentList";
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [commentsData, setCommentsData] = useState([])


  useEffect(() => {

    const getComments = async () => {
      const comments = await fetchComments();
      setCommentsData(comments); 
    }
  
    getComments();
  
  }, []);

  async function fetchComments() {
    
    const response = await fetch('http://localhost:3000/comments');
    const data = await response.json();
    
    
    return data
  }
  
  
  async function addComment(content, username_, parentId,id) {
    
    var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify({
    "id":id,
    "motherId": parentId,
    "username": username_,
    "comment_content": content
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  
  fetch("http://localhost:3000/comments", requestOptions)
    .then(response => response.json())
    .then(result  => {
      
      setCommentsData(prevComments => [...prevComments, result]);
    })
    .catch(error =>{} )
  }



  
  return (
    <>
      <h1>Comments.</h1>
      <CommentForm addComment={addComment} parentId={-1}/>
      <CommentList comments={commentsData} addComment={addComment}/>
    </>
  )

}

export default App;