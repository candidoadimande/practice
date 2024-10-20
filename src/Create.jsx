import {useState} from "react"
export default function Create() {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [author, setAuthor] = useState("")
  return (
    <div className="create">
      <h2>Add a new blog</h2>
      <form>
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
        <button>Add blog</button>
      </form>
    </div>
  )
}1