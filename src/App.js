import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'

class Task {
  constructor(id, text, day, reminder){
      this.id = id;
      this.text = text;
      this.day = day;
      this.reminder = reminder;
  }
}


function App() {

  let [tasks, setTasks] = useState(() =>{ return [
    new Task(1,"Doctors Appointment", "Dec 5th at 2:30pm", true),
    new Task(2,"Meeting at School", "Dec 12th at 1:30pm", true),
    new Task(3,"Food Shopping", "Dec 14th at 2:30pm", false)
  ]});

  let [showAddTask, setShowAddTask] = useState(false);

  let deleteTask = (id)=>{
    setTasks(items => items.filter((task) => task.id !== id));
  };
  let toggleReminder = (id) =>{
    setTasks(items => items.map((item) => 
      item.id == id ? {...item, reminder: !item.reminder} : item
    ))
  };
  let onadd =()=>{
    setShowAddTask(prev => !prev);
  }
  let addTask = (newTask)=>{
    const id = Math.floor(Math.random() * 10000) + 1;
    let add = new Task(id, newTask.text, newTask.datetime, newTask.reminder);
    setTasks(prev => [...prev, add]);
  }
  return (
    <div className="container">
      <Header onclick = {onadd} show = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}  onToggleReminder = {toggleReminder}/> : "No Task"}
      
      <Footer name = "Quang"/>
    </div>
  );
}

export default App;
