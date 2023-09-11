import React from 'react'
import './App1.css'

const TodoList = (props) => {
    
  return (
    <>
        <div className='item_list'>
            <button className='btn_del' onClick={()=>{
                props.onSelect(props.id)
            }}>x</button>
            <li className='list_order'> {props.text} </li>
        </div>
    </>
  )
}

export default TodoList