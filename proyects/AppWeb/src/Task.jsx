import { useState } from 'react'
import Card from './TaskComponent.jsx'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Task = () => {
const [taskList, setTaskList] = useState([])
const [tasksName, setTasksName] = useState('')
const [tasksContent, setTasksContent] = useState('')


const createTask = () => {
    toast.success("Task created")
    const NewCard = {
        TaskName: tasksName,
        Content: tasksContent,
    };
    setTaskList([...taskList, NewCard]);
    setTasksName('');
    setTasksContent('');

}

    return (
        <>  
        <div>
        <input type="text" placeholder='Name of task' value={tasksName} onChange={(e) => setTasksName(e.target.value)}></input>
        <input type="text" placeholder='Description' value={tasksContent} onChange={(e)=> setTasksContent(e.target.value)}></input>
        {taskList.map((task,index) => (
            <Card
                key={index}  
                TaskName={task.TaskName}
                Content={task.Content} 
            />))}
            <button onClick={createTask}>Create Task</button>
        
        
        <ToastContainer></ToastContainer>
        </div>
        </>
    )
}
export default Task