import React from 'react'
import { ITask } from '../Interfaces'

interface Props{
  task: ITask
  completeTask(taskNameToDelete:string): void
}

const TodoTask = ({task, completeTask}: Props) =>{
  return (
  <div className='task'>
    <div className='content'>
      <span>{task.taskName}</span>
      <span>due in {task.deadline} day(s)</span>
    </div>
    <button onClick={()=>{completeTask(task.taskName)}}>done!</button>
  </div>)
}

export default TodoTask