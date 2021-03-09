import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useState, useEffect } from 'react'

class Task {
  constructor(id, text, day, reminder){
      this.id = id;
      this.text = text;
      this.day = day;
      this.reminder = reminder;
  }
}


function App() {

  //let location = useLocation();

  let [tasks, setTasks] = useState([]);

  let [showAddTask, setShowAddTask] = useState(false);

  useEffect(async()=>{
    //let getTasks = async()=>{
      setTasks(await fetchTasks());
    //};
    //getTasks();
  }, []);

  let fetchTasks = async() =>{
    let res = await fetch("http://localhost:5000/tasks");
    let data = await res.json();
    return data;
  };
  let fetchATaskById = async(id) =>{
    let res = await fetch(`http://localhost:5000/tasks/${id}`);
    let data = await res.json();
    return data;
  };

  let deleteTask = async (id)=>{
    
    await fetch(`http://localhost:5000/tasks/${id}`, {method: "DELETE"})
    setTasks(items => items.filter((task) => task.id !== id));


  };
  let toggleReminder = async (id) =>{
    let task = await fetchATaskById(id);
    await fetch(`http://localhost:5000/tasks/${id}`, {method:"PUT", headers:{"Content-type": "application/json"}, body : JSON.stringify({...task, reminder: !task.reminder})})
    setTasks(items => items.map((item) => 
      item.id == id ? {...item, reminder: !item.reminder} : item
    ))
  };
  let onadd =()=>{
    setShowAddTask(prev => !prev);
  }
  let addTask = async (newTask)=>{
    /*const id = Math.floor(Math.random() * 10000) + 1;
    let add = new Task(id, newTask.text, newTask.datetime, newTask.reminder);
    setTasks(prev => [...prev, add]);*/

    let res = await fetch("http://localhost:5000/tasks", {method: "POST", headers:{"Content-type" : "application/json"}, body: JSON.stringify(newTask)});
    let data = await res.json();
    setTasks(prev => [...prev, data]);
  }
  return (
    <Router>
      <div className="container">
        <Header onclick = {onadd} show = {showAddTask}/>
        
        <Route path="/" exact render={(props)=>(
          <>
            {showAddTask && <AddTask onAdd = {addTask} />}
            {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}  onToggleReminder = {toggleReminder}/> : "No Task"} 
          </>
        )}/>
        <Route path="/about" component={About}/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
