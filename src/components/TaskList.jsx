import TaskCard from "./TaskCard"

function TaskList({tasks}) {
  return (
    <div className = "grid grid-cols-3 gap-4">
        {Array.isArray(tasks) ? (
        tasks.map(task => (
          <TaskCard task={task} key={task._id}/>
        ))
      ) : (
        <p>No hay tareas disponibles.</p>
      )}
    </div>
  )
}

export default TaskList