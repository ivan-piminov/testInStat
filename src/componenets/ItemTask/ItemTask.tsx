import React, {ChangeEvent} from 'react';
import {useDispatch} from "react-redux";
import {changeStatus} from "../../redux/action";
import {TaskType} from "../../entities";

export const ItemTask = ({isDone, taskName, id}: TaskType) => {

    const dispatch = useDispatch();

    const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeStatus(id, e.currentTarget.checked))
    }
    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="input-group border">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input type="checkbox" checked={isDone} onChange={changeStatusHandler}/>
                        </div>
                        <div className='ml-2'>{taskName}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

