import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src="https://community.hubspot.com/t5/image/serverpage/image-id/72313iE08435278D194CB3?v=v2" alt="notfound" />
            <Link to={'/'}>RETURN TO HOME PAGE..</Link>
          </div>
        </section>
    </>
  )
}

export default NotFound;