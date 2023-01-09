import { Collect } from '@/types/collect';
import { Button, Progress, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react'
import SearchPanel from './components/search-panel'



export default function MyCollect() {

  const [collectList,setCollectList]=useState<Collect[]>([
    {
      id:1,
      title:'青年大学习1',
      create_time:'2023年1月9日',
      end_time:'2023年1月10日',
      visibility:true,
      current:1,
      finish_num:1,
      class:['计科2005'],
      upload_type:'file',
      creator:'1',
      description:'1'
    },
    {
      id:2,
      title:'青年大学习2',
      create_time:'2023年1月9日',
      end_time:'2023年1月10日',
      visibility:false,
      current:2,
      finish_num:1,
      class:['粮工1901'],
      upload_type:'pic',
      creator:'1',
      description:'1'
    },
  ])
  //todo 获取总数
  const student_totalNum={
    '计科2005':5,
    '粮工1901':10,
  }

  //todo 删除
  const onRemove=(record:Collect)=>{}
  //todo 编辑
  const onEdit=(record:Collect)=>{}

  const columns: ColumnsType<Collect> = [
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',
      width:150,
      fixed: 'left',
    },
    {
      title: '发布班级',
      dataIndex: 'class',
      key: 'class',
      align:'center',
      render:(_,{class:_class})=>(
        _class.map(item=>(
          <Tag color={'pink'} key={item}>
          {item}
        </Tag>
        ))
      )
    },
    {
      title: '任务状态',
      dataIndex: 'current',
      key: 'current',
      align:'center',
      render:(_,{current})=>(
        current===0?
        <Tag  color={'red'}>
        已发布
        </Tag>
        :current===1?
        <Tag  color={'blue'}>
        进行中
        </Tag>
        :
        <Tag  color={'green'}>
        已结束
        </Tag>
      )
    },
    {
      title: '完成情况',
      dataIndex: 'finish_num',
      key: 'finish_num',
      align:'center',
      render:(_,{finish_num})=>(
        <>
        <Progress width={35} type="circle" percent={finish_num/student_totalNum['计科2005']*100} />
        {/* todo 多个班级情况  */}
        <span style={{paddingLeft:5}}>{finish_num+'/'+student_totalNum['计科2005']}</span>
        </>
      )
    },
    {
      title: '发布日期',
      dataIndex: 'create_time',
      key: 'create_time',
    },
    {
      title: '截止日期',
      dataIndex: 'end_time',
      key: 'end_time',
    },
    {
      title: '互相可见',
      dataIndex: 'visibility',
      key: 'visibility',
      align:'center',
      render:(_,{visibility})=>(
        <Tag color={'geekblue'}>
          {visibility?'是':'否'}
        </Tag>
      )
    },
    {
      title: '上传类型',
      dataIndex: 'upload_type',
      key: 'upload_type',
      align:'center',
      render:(_,{upload_type})=>(
        <Tag color={'orange'} key={upload_type}>
          {upload_type==='pic'?'图片':'文件'}
        </Tag>
      )
    },
    {
      title: '操作',
      key: 'action',
      fixed: 'right',
      align:'center',
      width:200,
      // todo 根据tag判断是否现在该列
      render: (_, record) => (
        <Space size={2}>
          <Button size='small' type='link' onClick={e=>onRemove(record)}>未提交名单</Button>
          <Button size='small' type='primary' onClick={e=>onEdit(record)}>编辑</Button>
          <Button size='small' onClick={e=>onRemove(record)}>删除</Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <SearchPanel/>
      <Table size="middle" columns={columns} dataSource={collectList} pagination={false} rowKey='id' scroll={{ x: 1200 }}/>
    </>
  )
}
