import {useParams, useNavigate } from "react-router-dom"
import useFetch from "./useFetch"
export default function Blogdetail() {
  const {id} = useParams();
  const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
  const navigate = useNavigate();
  function handleClick() {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    })
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div> }
      {error && <div>{error}</div>}
      {blog && (
      <div>
        <article>
          <h2>{blog.title}</h2>
          <p>Written by{blog.author}</p>
          <div>{blog.body}</div>
        </article>
        <button onClick={handleClick}>Delete</button>
      </div>
      )}
    </div>
  )
}