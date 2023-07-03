
export interface Task {
    id: number;
    title: string;
}

export interface AddTask {
    type : 'ADD',
    task : Task
}

export interface DeleteTask {
    type : 'DELETE',
    taskID : number
}

const taskReducer = (tasks : Task[], action : AddTask | DeleteTask): Task[] => {
  if (action.type === 'ADD') return [action.task, ...tasks]; 
  if (action.type === 'DELETE') return tasks.filter(t => t.id !== action.taskID); 
  return [];
}

export default taskReducer