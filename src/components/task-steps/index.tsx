import { Task } from '@/types/task'
import { Steps } from 'antd'
import React from 'react'

type IProps={
  item:Task
  size?:'default'|'small'
}

export default function TaskSteps(props:IProps) {
  const {item,size}=props
  return (
    <Steps
    size={size||'default'}
    style={{ padding: 10 }}
    current={item.current}
    items={[
      {
        title: "作业发布",
        description: `创建人:${item.creator}`
      },
      {
        title: "收作业中",
        //todo 
        description: `截止日期: ${item.end_time}`,
        subTitle: `剩余:${'72:00:08'}`
      },
      {
        title: item.status==='finish'?"已提交":item.status==='error'?'未按时提交':'未提交',
        description: item.status==='finish'?"tql,给我抄抄":item.status==='error'?'请及时联系创建人':'请尽快提交',
        status: item.current===1?'wait':item.status
      }
    ]}
  />
  )
}
