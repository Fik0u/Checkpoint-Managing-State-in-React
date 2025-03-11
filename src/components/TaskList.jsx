import React, { useState } from 'react'
import TaskItem from './TaskItem'
// import Button from 'react-bootstrap/esm/Button'
import { Button } from 'antd'

// Component for the list of tasks
const TaskList = ({tasks, deleteTask, toggleDone, setEditTask}) => {
  
// The list can be filtered to show all tasks, done tasks, or undone tasks
// State variable for the filter
  const [filter, setFilter] = useState('All')

// Filter the tasks based on the filter state
  const filtredTasks = tasks.filter(task => {
    if (filter === 'Done') return task.done === true
    if (filter === 'Undone') return task.done === false
    return tasks
  })

  return (
    <div className='container'style={{margin:'auto'}}>
{/* The buttons call the setFilter function with the corresponding filter value */}

    <Button type="primary" style={{backgroundColor:'#6c757d', border: 'none'}}  className='m-4'  onClick = {() => setFilter('All')}>All</Button>

    <Button className='m-4' style={{backgroundColor:'#68b591', border: 'none', color:'white' }}  onClick = {() => setFilter('Done')}>Done</Button>

    <Button style={{backgroundColor:'#9a3a43c7', border: 'none', color: 'white'}} className='m-4'  onClick = {() => setFilter('Undone')}>Undone</Button>

{/* The list of tasks is displayed using the TaskItem component and the deleteTask, toggleDone, and setEditTask functions are passed as props to the TaskItem component */}
      {filtredTasks.map(task => <TaskItem task={task}key = {task.id} deleteTask = {deleteTask} toggleDone = {toggleDone} setEditTask = {setEditTask} />)}
      
    </div>
  )
}

export default TaskList
