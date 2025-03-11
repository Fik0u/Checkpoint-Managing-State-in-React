// Imports
import { useEffect, useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {

// State variable for the list of tasks
  const [tasks, setTasks] = useState(() => {

// Get the tasks from local storage if they exist, otherwise set the tasks to an empty array    
    const savedTasks = localStorage.getItem('tasks')
    return savedTasks ? JSON.parse(savedTasks) : []
  });

    const [editTask, setEditTask] = useState(null)

// Save the tasks to local storage whenever the tasks state changes
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks)) // Save the tasks to local storage & convert the tasks array to a JSON string
  }, [tasks])

// Function to add a task
    const addTask = (newTask) => {
      setTasks([...tasks, newTask])
    }

// Function to delete a task
    const deleteTask = (id) => {
      if (window.confirm('Are you sure you want to delete this task?')) {
        setTasks(tasks.filter(task => task.id !== id))
      }
    }

// Function to toggle the done status of a task
    const toggleDone = (id) => {
      setTasks(tasks.map(task => task.id === id ? {...task, done: !task.done} : task))
    }

// Function to edit a task
    const updateTask = (task) => {
      setTasks(tasks.map(t => t.id === task.id ? task : t))
      setEditTask(null)
    }

  return (
    <div className="App">
      <h1 style={{margin: '10px'}}>CheckMate</h1>
      
  {/* Pass the addTask and updateTask functions as props to the TaskForm component */}
      <TaskForm AddEdit = {editTask ? updateTask : addTask} editTask = {editTask} />
      <TaskList tasks = {tasks} deleteTask = {deleteTask} toggleDone = {toggleDone} setEditTask = {setEditTask}/>
    </div>
  );
}

export default App;
