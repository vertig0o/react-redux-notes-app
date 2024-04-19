import React from 'react'
import Form from './Form'
import Search from './Search'
import Logo from './Logo'
import Notes from './Notes'
import ScrollToTop from "react-scroll-to-top";

function Content() {
  return (
    <>
    <Logo />
    <Form />
    <Search /> 
    <Notes />
    
    <div className='button-container '><ScrollToTop smooth color="#000000" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} width='20' height='20'/></div>
    </>
  )
}

export default Content