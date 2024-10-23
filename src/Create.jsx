import {useState} from "react"
import { useNavigate } from "react-router-dom"
export default function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIspending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIspending(true)
    
  setTimeout(() => {
    fetch('http://localhost:8000/blogs', {
      method: "POST",
      headers: {"content-type": "aplication/jsob"},
      body: JSON.stringify(blog)
    }).then(() => {
      setIspending(false)
      console.log('New blog added');
      navigate('/');
    })
  }, 1000)
      
  }
    return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form onSubmit={handleSubmit} >
        <label>Blog title:</label>
        <input 
           type="text"
           value={title}
           required
           onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add blog</button>}
        {isPending && <button>Adding blog...</button>}
      </form>
    </div>
  )
}1