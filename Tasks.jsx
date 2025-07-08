   import { useState } from 'react';

   const TaskManager = () => {
     const [tasks, setTasks] = useState([]);
     const [newTask, setNewTask] = useState("");

     const addTask = () => {
       setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
       setNewTask("");
     };

     const toggleTask = (id) => {
       setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
     };

     const deleteTask = (id) => {
       setTasks(tasks.filter(task => task.id !== id));
     };

     return (
       <div>
         <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
         <button onClick={addTask}>Add Task</button>
         <ul>
           {tasks.map(task => (
             <li key={task.id}>
               <span onClick={() => toggleTask(task.id)} className={task.completed ? "line-through" : ""}>
                 {task.text}
               </span>
               <button onClick={() => deleteTask(task.id)}>Delete</button>
             </li>
           ))}
         </ul>
       </div>
     );
   };

   export default TaskManager;
   