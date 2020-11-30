import './App.css';
import * as React from "react";
import {NewTask} from './componenets/NewTask/NewTask'
import {TasksList} from "./componenets/TasksList/TasksList";

const App: React.FC = () => {
    return (
        <div className="App">
            <NewTask/>
            <TasksList/>
        </div>
    );
}
export default App;
