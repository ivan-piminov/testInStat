import {TaskType} from "../entities";

const ADD_TASK = 'ADD_TASK'
const CHANGE_STATUS = 'CHANGE_STATUS'
const SEARCH_TASK = 'SEARCH_TASK'


export type InitialStateType = {
    tasks: Array<TaskType>,
    search: string
}


const initialState: InitialStateType = {
    tasks: [],
    search: ''
}
export type AddTaskType = {
    type: typeof ADD_TASK,
    NewTask: {
        id: number,
        taskName: string
        isDone: boolean
    }
}
export type ChangeStatusType = {
    type: typeof CHANGE_STATUS,
    id: number,
    isDone: boolean,
}
export type SearchType = {
    type: typeof SEARCH_TASK,
    search: string
}

type CommonActionTypes = AddTaskType | ChangeStatusType | SearchType

export const reducer = (state: InitialStateType = initialState, action: CommonActionTypes): InitialStateType => {
    switch (action.type) {
        case "ADD_TASK":
            return {
                ...state,
                tasks: [...state.tasks, action.NewTask]
            }
        case "CHANGE_STATUS":
            return {
                ...state,
                tasks: [...state.tasks.map((task: TaskType) => {
                    if (task.id === action.id) return {...task, isDone: action.isDone}
                    else return task
                })
                ]
            }
        case "SEARCH_TASK":
            return {
                ...state,
                search: action.search,
            }
        default:
            return state
    }
}

