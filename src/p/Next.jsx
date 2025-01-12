import React, { useState }from 'react'

const Next = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    const addTodo = () =>{
       if(inputValue.trim()){
        setTodos([...todos, inputValue]);
        setInputValue('');
       }    
    };
return(
    <div>
        <input
           type='text'
           placeholder='Enter the Todo'
           value={inputValue}
           onChange={(e) => setInputValue(e.target.value)}
           />

           <button onClick={addTodo}>Add</button>

           <ul>
            {todos.map((todo, index) => (
                <li key ={index}>{todo}</li>
            ))}
            </ul>

    </div>
  );
}

export default Next