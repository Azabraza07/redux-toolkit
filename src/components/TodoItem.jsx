import React from 'react'
import { useDispatch } from 'react-redux'
import {removeTodo} from '../store/TodoSlice'
import { toggleTodoComplete } from '../store/TodoSlice'


const TodoItem = ({ id, completed, text,}) => {
    const dispatch = useDispatch()

    return (
        <li className='list' key={id}>
            <input type='checkbox' onChange={() => dispatch(toggleTodoComplete({id}))}
                checked={completed} />
            <span>{text}</span>
            <span onClick={() => dispatch(removeTodo({id}))} className='delete'>&times;</span>
        </li>
    )
}

export default TodoItem