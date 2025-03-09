import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const TaskForm = ({AddEdit, editTask}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
        AddEdit({id: editTask? editTask.id : Math.floor(Math.random() * 10000), title, description, done: editTask? editTask.done : false})
        setTitle('')
        setDescription('')
    }

useEffect(() => {
    if (editTask){
        setTitle(editTask.title)
        setDescription(editTask.description)
    }
}, [editTask])

  return (
    <div className='container m-4 p-4' style={{border: '1px solid #ccc', borderRadius: '10px', backgroundColor: '#f9f9f9'}}>
       <Form onSubmit = {handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter task" required value = {title} onChange = {(e) => setTitle(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Description" required value = {description} onChange = {(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        {editTask ? 'Edit' : 'Add'}
      </Button>
    </Form>
    </div>
  )
}

export default TaskForm
