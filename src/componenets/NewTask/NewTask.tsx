import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addTask, searchTask} from "../../redux/action";

export const NewTask = () => {
    const [state, setState] = useState<string>('');
    const dispatch = useDispatch();
    const addNewTask = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (state.length) {
            e.preventDefault();
            dispatch(addTask(state));
            setState('')
        } else e.preventDefault()
    }

    useEffect((): any => dispatch(searchTask(state)), [dispatch, state])

    return (
        <form className='mt-3 form-group d-flex'>
            <input className='form-control mr-2' type="text" placeholder='введите название задачи' value={state}
                   onChange={(e) => {
                       setState(e.target.value)
                   }}/>
            <button className='btn btn-primary' onClick={(e) => addNewTask(e)} type='submit'>Добавить</button>
        </form>
    )
}