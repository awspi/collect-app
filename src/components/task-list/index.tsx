import React from 'react'
import { Steps, Card } from "antd";
import { Task } from '@/types/task';


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
          <Steps
            style={{ padding: 10 }}
            current={item.current}
            items={[
              {
                title: "作业发布",
                description: "创建人:hjj"
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
        </Card>
        ))
    }
    </>
  )
}
