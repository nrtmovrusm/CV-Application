import React from 'react';

function HeadingView({name, email, number}) {
    return (
      <div className='headingView'>
        <h1>{name}</h1>
        <h2>{email} | {number}</h2>
      </div>
    )
}

export default HeadingView