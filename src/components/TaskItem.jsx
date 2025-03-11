// Imports
import { CheckCircleOutlined, CloseCircleOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';


// Component for each task is represented as an accordion item
// Each task has a title, description, and buttons for editing, marking as done, and deleting
const TaskItem = ({task, deleteTask, toggleDone, setEditTask}) => {
  return (
    <div>
        <Accordion  style={{width: '700px', margin: 'auto', borderRadius: '10px', backgroundColor: '#212529ad'}}>
           <Accordion.Item eventKey="0">
            <Accordion.Header style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.title}</Accordion.Header>
            <Accordion.Body style={{backgroundColor: task.done ? '#1987547a' : '#dee2e6'}}>
                {task.description}
                
{/* Buttons for editing, marking as done, and deleting a task */}

                <div>
                <EditOutlined className='m-4' style={{fontSize:'25px'}} onClick = {() => setEditTask(task)}/>

                {task.done ? <CloseCircleOutlined className='m-4' style={{fontSize:'25px', color: '#7b241c '}} onClick = {() => toggleDone(task.id)}/> : <CheckCircleOutlined className='m-4' style={{fontSize:'25px', color: '#239b56 '}} onClick = {() => toggleDone(task.id)}/>}

                <DeleteOutlined className='m-4' style={{fontSize:'25px', color: '#dc3545'}} onClick = {() => deleteTask(task.id)}/>
                </div>

            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default TaskItem
