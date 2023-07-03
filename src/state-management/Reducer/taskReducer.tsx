
interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type : 'ADD',
    task : Task
}

interface DeleteTask {
    type : 'DELETE',
    taskID : number
}

const taskReducer = (tasks : Task[], action : AddTask | DeleteTask): Task[] => {
  if (action.type === 'ADD') return [action.task, ...tasks]; 
  if (action.type === 'DELETE') return tasks.filter(t => t.id !== action.taskID); 
  return [];
}

export default taskReducer