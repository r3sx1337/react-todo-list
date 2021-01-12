import React, {useState, useEffect} from 'react';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import './RenderedList.css'
import ToDo from './ToDo'



const RenderedList = ({date}) =>{

    const [ toDoList, setToDoList ] = useState(window.localStorage.getItem('todolist') ? JSON.parse(window.localStorage.getItem('todolist')) : [],);


    useEffect(() => {
        localStorage.setItem('todolist', JSON.stringify(toDoList));
      }, [toDoList]);

    return(
        <div className='renderedlist'>
            <div className='form'>
                <ToDoForm date={date} toDoList={toDoList} setToDoList={setToDoList}/>
            </div>
            <div>
            <div>
            {toDoList.map((todo, id) => {
                if (todo.deadline === new Date(date).setHours(0,0,0,0)){
                    return(
                        <ToDo todo={todo}  key={id} date={date}/>
                    )
                };return false;
            })}         
        </div> 
            </div>
        </div>
    )
};

export default RenderedList;