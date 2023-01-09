import { Card, FormInstance } from 'antd'
import React from 'react'
import {  Typography } from 'antd';
interface IProps{
  form:FormInstance<any>
}
export default function TemplateList(props:IProps) {
  const {form }=props

  return (
    <div style={{
      width:'30%',
      padding:10
      
    }}>
  <Typography.Title level={2}>任务模版</Typography.Title>

     <Card
     style={{
      marginBottom:10
     }}
      hoverable
      extra={<a onClick={()=>form.setFieldsValue({
        title:'青年大学习:第X期',
        description:'请大家及时提交青年大学习截图哦',
        upload_type:'pic',
        visibility:true
      })}>使用</a>}
      title="青年大学习"
      size='small'
      cover={
        <img
          src="https://img9.vilipix.com/picture/pages/regular/2021/06/07/09/55/65872002_p0_master1200.jpg?x-oss-process=image/resize,w_450/format,jpg"
          style={{
            height:150
          }}
        />
      }
  />
     <Card
     style={{
      marginBottom:10
     }}
      hoverable
      extra={<a onClick={()=>form.setFieldsValue({
        title:'XX问卷截图提交',
        description:'请大家及时提交',
        upload_type:'pic',
        visibility:true
      })}>使用</a>}
      title="问卷截图收集"
      size='small'
      cover={
        <img
          src="https://img9.vilipix.com/picture/pages/regular/2021/06/07/09/55/65872002_p0_master1200.jpg?x-oss-process=image/resize,w_450/format,jpg"
          style={{
            height:150
          }}
        />
      }
  />
     <Card
     style={{
      marginBottom:10
     }}
      hoverable
      extra={<a onClick={()=>form.setFieldsValue({
        title:'XX作业:请及时提交!',
        description:'完成第X章课后习题',
        upload_type:'file',
        visibility:false
      })}>使用</a>}
      title="XX作业"
      size='small'
      cover={
        <img
          src="https://img9.vilipix.com/picture/pages/regular/2021/06/07/09/55/65872002_p0_master1200.jpg?x-oss-process=image/resize,w_450/format,jpg"
          style={{
            height:150
          }}
        />
      }
  />

    </div>
  )
}
