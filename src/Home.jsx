import {useState, useEffect} from "react"
import useFetch from "./useFetch"
import Bloglist from "./Bloglist"
export default function Home() {
const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
  
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
    </div>
  );
}