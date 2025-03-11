import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { AntDesignOutlined } from '@ant-design/icons';

// Component for the form to add or edit a task
const TaskForm = ({AddEdit, editTask}) => {
// State variables for the title and description of the task
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

// Function to handle the submission of the form
    const handleSubmit = (e) => {
        e.preventDefault()
        AddEdit({id: editTask? editTask.id : Math.floor(Math.random() * 10000), title, description, done: editTask? editTask.done : false})
        setTitle('') // Clear the title and description field after submission
        setDescription('')
    }

// If the task is being edited, set the title and description fields to the current values
useEffect(() => {
    if (editTask){
        setTitle(editTask.title)
        setDescription(editTask.description)
    }
}, [editTask])

  return (
    <div className='container my-4 p-4' style={{width: '500px', border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#212529ad'}}>
       <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter task" required value = {title} onChange = {(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Description" required value = {description} onChange = {(e) => setDescription(e.target.value)}/>
      </Form.Group>

      <Button type="submit" size="large" icon={<AntDesignOutlined />} style={{background: 'linear-gradient(135deg,rgb(46, 41, 74),rgb(47, 165, 208))', border:'none', inset: '-1px', opacity: '1', borderRadius: '20px'}}>
      {editTask ? 'Edit Task' : 'Add Task'}
        </Button>
      
    </Form>
    </div>
  )
}

export default TaskForm
