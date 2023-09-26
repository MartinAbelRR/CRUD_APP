import { useEffect, useState } from "react"

import { BlogForm } from "./components/BlogForm"
import { Blogs } from "./components/Blogs"
import { Header } from "./components/Header"

import axios from 'axios'

export const CrudApp = () => {
  // Primera llamada a la API para consumirla.

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get/')
    .then((response) => {
      setBlogs(response.data)
    }).catch(() => {
      alert('Algo fue mal!')
    })    
  }, []);

  return (
    <>
      <Header/>

      <BlogForm blogs={blogs} setBlogs={setBlogs}/>

      <Blogs blogs={blogs} setBlogs={setBlogs}/>
    </>
  )
}