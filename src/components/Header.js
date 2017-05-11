import React, { Component } from 'react'

let Header = () => {
  let HeaderStyle = {
    container: {
      height: 90,
      backgroundColor: 'tomato',

    },
    ul: {
      float:'right',
      color: '#fff',
      listStyle: 'none',
      width: 150,
      marginTop: 20


    },
    li: {
      backgroundColor: 'blue',
      float: 'left',
      borderRadius: 2,
      margin: 5,
      padding: 5

    }
  }
  let { container, ul, li } = HeaderStyle;
  return (
    <div style={container}>
      <div>
        <ul style={ul}>
          <li style={li}>sign up</li>
          <li style={li}>log in</li>
        </ul>
      </div>

    </div>
  )
}

export default Header;
