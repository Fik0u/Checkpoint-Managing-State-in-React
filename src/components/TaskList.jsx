import React, { useState } from 'react'
import TaskItem from './TaskItem'
// import Button from 'react-bootstrap/esm/Button'
import { Button } from 'antd'

const TaskList = ({tasks, deleteTask, toggleDone, setEditTask}) => {

  const [filter, setFilter] = useState('All')

  const filtredTasks = tasks.filter(task => {
    if (filter === 'Done') return task.done === true
    if (filter === 'Undone') return task.done === false
    return tasks
  })

  return (
    <div className='container'style={{margin:'auto'}}>

    <Button type="primary" style={{backgroundColor:'#6c757d', border: 'none'}}  className='m-4'  onClick = {() => setFilter('All')}>All</Button>

    <Button className='m-4' style={{backgroundColor:'#68b591', border: 'none', color:'white' }}  onClick = {() => setFilter('Done')}>Done</Button>

    <Button style={{backgroundColor:'#9a3a43c7', border: 'none', color: 'white'}} className='m-4'  onClick = {() => setFilter('Undone')}>Undone</Button>


      {filtredTasks.map(task => <TaskItem task={task}key = {task.id} deleteTask = {deleteTask} toggleDone = {toggleDone} setEditTask = {setEditTask} />)}
      
    </div>
  )
}

export default TaskList
