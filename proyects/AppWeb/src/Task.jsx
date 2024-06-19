import { useState } from 'react'
import Card from './TaskComponent.jsx'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const Task = () => {
const [taskList, setTaskList] = useState([])
const [tasksName, setTasksName] = useState('')
const [tasksContent, setTasksContent] = useState('')


const createTask = () => {
    if (tasksName === ""){
        return toast.error("No puedes dejar vacio el nombre")}
        else {
    toast.success("Task created")
    const NewCard = {
        TaskName: tasksName,
        Content: tasksContent,
    
    };
    setTaskList([...taskList, NewCard]);
    setTasksName('');
    setTasksContent('');
}

}

const removeTask = (id) => {
    toast.success("Task removed")
    const updatedTasks = taskList.filter(task => task.id !== id);
    setTaskList(updatedTasks);

}

    return (
        <>  
        <div>
            <form>
                <p>Nombre de la tarea:</p>
        <input required type="text" placeholder='Name of task' value={tasksName} onChange={(e) => setTasksName(e.target.value)}></input>
        <p>Descripción:</p>
        <input type="text" placeholder='Description' value={tasksContent} onChange={(e)=> setTasksContent(e.target.value)}></input>
        <br></br><br></br><button type="submit" onClick={createTask}>Create Task</button>
        {taskList.map((task,index) => (
            <Card
                key={index}  
                TaskName={task.TaskName}
                Content={task.Content}
                date={new Date().toLocaleString()}
                onDelete={removeTask}
         
            />))}
            
        
        
        <ToastContainer></ToastContainer>
        </form>
        </div>
        </>
    )
}
export default Task