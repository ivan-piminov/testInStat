import React from 'react';
import {useSelector} from "react-redux";
import {ItemTask} from "../ItemTask/ItemTask";
import {TaskType} from "../../entities";
import {InitialStateType} from "../../redux/reducer";


export const TasksList=()=>{
    const searchData = useSelector((state:InitialStateType) => state.search)
    const data = useSelector((state:InitialStateType) => state.tasks.filter(i => i.taskName.includes(searchData)))

    if(data.length === 0){
        return <p> Упс! Ничего не найдено!</p>
    }
    const tasks = data.map((item:TaskType) => {return <ItemTask key={item.id+Math.random()} id={item.id} taskName={item.taskName} isDone={item.isDone}/>} )
    return(
       <div>{tasks}</div>
    )
}