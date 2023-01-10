import React from 'react'
import { Steps, Card } from "antd";
import { Task } from '@/types/task';
import TaskSteps from '../task-steps';


interface IProps{
  list:Task[]
}


export default function TaskList(props:IProps) {
  const {list}=props
  return (
    <>
    {
        list.map((item)=>(
          <Card
          title={item.title}
          extra={<a href="#">{item.status==='error'?'补交':item.status==='finish'?null:'提交'}</a>}
          style={{ marginBottom: 10 }}
          key={item.title+item.creator}
        >
          <TaskSteps item={item}/>
        </Card>
        ))
    }
    </>
  )
}
