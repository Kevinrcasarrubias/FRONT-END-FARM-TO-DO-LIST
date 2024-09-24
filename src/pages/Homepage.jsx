import React, { useState, useEffect } from 'react';
import { fetchTasks } from '../api/tasks';
import TaskList from '../components/TaskList';

function Homepage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks()
      .then(res => {
        setTasks(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  return <TaskList tasks={tasks}/>;
}

export default Homepage;
