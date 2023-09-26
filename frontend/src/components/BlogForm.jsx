import { useState } from "react";
import axios from 'axios';

export const BlogForm = ({blogs, setBlogs}) => {
    
    const [body, setBody] = useState('');
    
    const handleChange = (event) => {
        setBody(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!body) return alert('Escribe algo para postear!');

        axios.post('http://127.0.0.1:8000/post/',{
            body
        }).then((response) => {
            setBody('');
            const {data} = response;
            setBlogs([
                ...blogs,
                data
            ])
        }).catch(() => {
            alert('Algo fue mal');
        })
    }

   return (
    <section className="w-[98%] mx-auto mt-5">        
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Type here!" 
                className="py-2 shadow-md rounded-lg outline-none w-2/3 max-w-3xl"     
                onChange={handleChange}
                value={body}
            />

            <button 
                type="submit" 
                className="text inline-block bg-green-800 w-14 rounded-lg shadow-md text-white font-bold"
            >                
            POST
            </button>
        </form>
    </section>
   )
 }
 