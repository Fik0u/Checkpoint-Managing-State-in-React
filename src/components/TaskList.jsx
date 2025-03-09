import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, deleteTask, toggleDone, setEditTask}) => {
  return (
    <div className='container'>

      {tasks.map(task => <TaskItem task={task}key = {task.id} deleteTask = {deleteTask} toggleDone = {toggleDone} setEditTask = {setEditTask} />)}
      
    </div>
  )
}

export default TaskList
