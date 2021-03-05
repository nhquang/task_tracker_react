import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
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

  let [tasks, setTasks] = useState([
    new Task(1,"Doctors Appointment", "Dec 5th at 2:30pm", true),
    new Task(2,"Meeting at School", "Dec 12th at 1:30pm", true),
    new Task(3,"Food Shopping", "Dec 14th at 2:30pm", false)
  ]);
  let deleteTask = (id)=>{
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //let name = "Quang";
  return (
    <div className="container">
      <Header />
      {/* <h2>Hello {name} from React</h2> */}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}/> : "No Task"}
      <Footer name = "Quang"/>
    </div>
  );
}

export default App;
