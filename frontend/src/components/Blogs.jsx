import { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';

export const Blogs = ({blogs = [], setBlogs}) => {
   
    const [show, setShow] = useState(false);
    const [record, setRecord] = useState(null);

    const handleUpdate = async (id, value) => {
        return axios.put(`http://127.0.0.1:8000/put/${id}/`, value)
        .then((response) => {
            const {data} = response;
            const newBlogs = blogs.map(blog => {
                if(blog.id === id){
                    return data;
                }
                return blog;
            })
            setBlogs(newBlogs);
        }).catch(() => {
            alert('Algo fue mal');
        })
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleChange = (event) => {
        setRecord({
            ...record,
            body: event.target.value
        })
    }

    const handleSaveChanges = async () => {
        await handleUpdate(record.id, {body: record.body});
        handleClose();
    }

    const handleDelete = (id) => {
        axios.delete(`http://127.0.0.1:8000/delete/${id}/`)
        .then(() => {
            const newBlogs = blogs.filter(blog => blog.id !== id);
            setBlogs(newBlogs);
        }).catch(() => {
            alert('Algo fue mal!');
        })
    }

  return (
    <>
        <section className='w-[98%] mt-5 mx-auto'>
            {blogs.map((blog) => (
                <ul key={blog.id} className='flex justify-between border-solid rounded-lg border-2 mx-auto mb-4 shadow-2xl px-8 py-4 max-w-4xl'>               
                    <li className='font-bold text-blue-900'>{blog.body}</li>
                    <div className='flex gap-5 items-center'>
                        <li className='cursor-pointer'><FaEdit onClick={() => {setRecord(blog); setShow(true)}}/></li>
                        <li className='cursor-pointer'><FaTrashAlt onClick={() => handleDelete(blog.id)}/></li>
                    </div>
                </ul>            
            ))}
            
            <section 
                className='fixed inset-0 bg-black/60 transition-all'
                hidden={!show}
            >
                <article className='fixed w-96 bg-gray-100 h-80 top-[50%] left-[50%] -mt-40 -ml-48 px-8'>
                    <header className='border-solid my-3 border-b-2 border-green-300 flex justify-between'>
                        <h1 className='font-bold text-2xl'>EDIT BLOG</h1>
                        <h1 className='text-red-600 text-2xl font-bold cursor-pointer' onClick={handleClose}>x</h1>
                    </header>

                    <div>
                        <input 
                            type="text"
                            placeholder="Type here!" 
                            className="py-2 shadow-md rounded-lg outline-none w-11/12 max-w-3xl"     
                            value={record ? record.body : ''}
                            onChange={handleChange}
                        />
                    </div>

                    <footer className='flex justify-evenly mt-4'>
                        <button className='bg-red-600 rounded-lg p-2 text-white font-bold' onClick={handleClose}>
                            Cerrar
                        </button>

                        <button className='bg-blue-600 rounded-lg p-2 text-white font-bold' onClick={handleSaveChanges}>
                            Save
                        </button>
                    </footer>
                </article>
            </section>
        </section>
    </>
  )
}
