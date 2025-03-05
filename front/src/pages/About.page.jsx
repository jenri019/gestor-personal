import React from 'react';
import { useDispatch } from 'react-redux';
import { setProps } from '../store/slices/home/homeSlice';

function AboutPage() {
  const dispatch = useDispatch();

  const changePage = () => {
    dispatch(setProps({ flag: true }));
  }

  return (
    <>
      <h1>About Page</h1>
      <button type="button" className='btn btn-primary' onClick={changePage}></button>
    </>
  );
}

export default AboutPage;