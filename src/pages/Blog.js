import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';

const Blog = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({type: 'LOAD_BLOG_DATA'})
  }, [dispatch]);

  return (
    <h1>Blog</h1>
  )
}

export default Blog;