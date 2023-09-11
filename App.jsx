import React, { useState } from 'react';
import './App1.css';
import TodoList from './TodoList';

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
      setInputList(e.target.value)
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    })
    setInputList("");
  }

  const deleteItem= ((id) => {
    console.log("deleted")

    setItems((oldItems) =>{
      return(oldItems.filter((arrEle, index)=> {
          return index !== id
      }))
    })
  })

  return (
    <>
    <div className='main_div'>
        <div className='center_div'>
            <br />
            <h1>ToDo List</h1>
            <br />

          <div className='input_item'>
            <input type="text" placeholder='Add a items' value={inputList} onChange={itemEvent}/>
            <button className='button_add' onClick={listOfItems}> + </button>
          </div>
          <br />

            <ol>
                {items.map((itemVal, index) => {
                  return <TodoList 
                  key={index} id={index} 
                  onSelect={deleteItem} 
                  text = {itemVal} />
                })}
            </ol>
        </div>
    </div>
    </>
  )
}

export default App;