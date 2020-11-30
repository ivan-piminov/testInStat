import {AddTaskType, ChangeStatusType, SearchType} from "./reducer";

export const addTask = (taskName: string): AddTaskType => {
    return {
        type: 'ADD_TASK',
        NewTask: {
            id: Math.random(),
            taskName,
            isDone: false
        }
    }
}
export const changeStatus = (id: number, isDone: boolean): ChangeStatusType => {
    return {
        type: 'CHANGE_STATUS',
        id,
        isDone
    }
}
export const searchTask = (data:string): SearchType=>{
    return{
        type: 'SEARCH_TASK',
        search:data
    }
}