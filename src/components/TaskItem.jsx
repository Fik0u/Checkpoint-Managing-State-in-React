import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/esm/Button';

const TaskItem = ({task, deleteTask, toggleDone, setEditTask}) => {
  return (
    <div>
        <Accordion>
           <Accordion.Item eventKey="0">
            <Accordion.Header style={{textDecoration: task.done ? 'line-through' : 'none'}}>{task.title}</Accordion.Header>
            <Accordion.Body style={{backgroundColor: task.done ? 'beige' : 'white'}}>
                {task.description}
                <div>
                <Button variant="danger" className='m-4' onClick = {() => deleteTask(task.id)}>Delete</Button>

                <Button variant="info" className='m-4' onClick = {() => toggleDone(task.id)}> {task.done? 'Undone' : 'Done'} </Button>

                <Button variant="dark" className='m-4' onClick = {() => setEditTask(task)}>Edit</Button>
                </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default TaskItem
