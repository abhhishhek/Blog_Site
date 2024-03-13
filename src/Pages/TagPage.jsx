import React from 'react'
import Blogs from '../components/Blogs';
import Header from '../components/Header';
import Pagination from '../components/Pagination';
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const TagPage = () => {
    const Navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
  return (
    <div>
        <Header/>
        <div>
            <button onClick={() => Navigation(-1)}>back</button>
            <h2>
                Blogs tagged <span>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}
export default TagPage
