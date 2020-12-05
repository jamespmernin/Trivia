import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <div>
      <h1>Welcome to Trivia!</h1>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login</Link>
      }
      <hr />
      {
        currentUser &&
        <>
          <Link to='/foods'>foods</Link>
          <Link to='/flavors'>flavors</Link>
        </>
      }
    </div>
  )
}