import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className="w-11/12 px-10 mt-[60px] flex  flex-col items-center justify-center text-center">
        <NavLink to={`/blog/${post.id}`} className="flex font">
            <span className='font-bold'>{post.title}</span>
        </NavLink>
        <p className='font-bold text-md'>
            By 
            <span className='font-bold text-sm '>{post.author}</span>
            on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted on {post.date}</p>
        <p className='flex flex-col w-11/12 max-w-[450px]'>{post.content}</p>
        <div className='font-bold underline gap'>
            {post.tags.map( (tag,index) =>(
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                    <span>{`#${tag}`}</span>
                </NavLink>
            ))}
        </div>
    </div>
  )
}
export default BlogDetails 
