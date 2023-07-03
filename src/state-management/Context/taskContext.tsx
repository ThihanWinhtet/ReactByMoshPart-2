import React from "react";
import { AddTask, DeleteTask, Task } from "../Reducer/taskReducer";

interface TaskContextType{
    tasks : Task[],
    dispatch : React.Dispatch<AddTask | DeleteTask>
}

const TaskConext = React.createContext<TaskContextType>({} as TaskContextType);
export default TaskConext;

