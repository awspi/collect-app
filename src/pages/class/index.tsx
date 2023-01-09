import { Student } from '@/types/student';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Avatar, Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
export default function Class() {
  const params=useParams()
  console.log(params.id);

  const [studentsList,setStudentsList]=useState<Student[]>([
    {
      name:'闻苏鹏',
      xh:'201911020101',
      tags:['创建人','摸鱼的人']
    },
    {
      name:'尚益州',
      xh:'201912321111',
      tags:['腾讯SSP','人生赢家']
    },
    {
      name:'小明',
      xh:'201912321121',
      tags:['学委']
    },
    {
      name:'小王',
      xh:'201912321221',
      tags:['学生']
    },
  ])
  useEffect(()=>{
    //todo 根据班级获取stu数据
  },[params.id])

  //todo 删除学生
  const onRemove=(record:Student)=>{

  }

  const columns: ColumnsType<Student> = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <Avatar style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }} size="large" >
        {text}
      </Avatar>
      ),
    },
    {
      title: '学号',
      dataIndex: 'xh',
      key: 'xh',
    },
    {
      title: '角色',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => (
              <Tag color={'geekblue'} key={tag}>
                {tag}
              </Tag>
            ))}
        </>
      ),
    },
    {
      title: '操作',
      key: 'action',
      // todo 根据tag判断是否现在该列
      render: (_, record) => (
        <Space>
          <Button size='small' type='primary' onClick={e=>onRemove(record)}>分配角色</Button>
          <Button size='small' onClick={e=>onRemove(record)}>移除</Button>
        </Space>
      ),
    },
  ];
  return (
  <>
    <Table columns={columns} dataSource={studentsList} pagination={false} rowKey="xh"/>
    <div style={{position:'fixed',right:50}}>总数:{studentsList.length}</div>
  </>
  )
}
