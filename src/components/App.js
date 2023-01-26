import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, Tasks } from "../data";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const mTasks = Tasks.map( (task, index) => {
    return {...task, id: index}
  })

  console.log(Tasks)
  console.log(mTasks)

  const [category, setCategory] = useState("All")
  const [tasks, setTasks] = useState(mTasks);

  function addTask(newTasks) {
  function onTaskFormSubmit(newTask) {
    setTasks([{...newTask, id: tasks.length},...tasks]);
  }

  function deleteTask(taskId) {
      let newTasks = tasks.filter(task => {
        if(task.id === taskId) {
          return false;
        }
        return true;
      })

      setTasks(newTasks)
    // alert(taskId)
    // console.log(tasks)
    let newTasks = tasks.filter(task => {
      if(task.id === taskId) {
        return false
      } else {
        return true
      }      
    })

    setTasks(newTasks)

      // let newTasks = tasks.filter(task => {
      //   if(task.id === taskId) {
      //     return false;
      //   }
      //   return true;
      // })

      // setTasks(newTasks)
  }

  const tasksToDisplay = tasks.filter(task => {
    if(category === "All") { 
      return true;
    } else {
      return task.category === category
    }
  });
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter updateCategory={setCategory} categories={CATEGORIES} />
      <NewTaskForm onTaskFormSubmit={addTask} categories={CATEGORIES}/>
      <NewTaskForm onTaskFormSubmit={onTaskFormSubmit} categories={CATEGORIES}/>
      <TaskList deleteTask={deleteTask} tasks={tasksToDisplay} />
    </div>
  )};
}
export default App;
