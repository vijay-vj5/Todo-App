import React from 'react'

const Todo = (props) => {

  return (

     <div
       onClick={() => {
       props.onChecked(props.id);
       }}
     >
    <li>{props.text}</li>
    </div>
  )
}

export default Todo