import { getByPlaceholderText } from "@testing-library/react";
import { useEffect, useState } from "react";
import Bloglist from "../Bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }

    ])

    const handleDelete = (id) => {
        console.log('clicked');
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log('use effect ran')
    });


    return (
        <div className="home">
            <Bloglist blogs={blogs} title="All Blogs" handleDelete={handleDelete}></Bloglist>
            {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"></Bloglist> */}
        </div>
    );
}

export default Home;