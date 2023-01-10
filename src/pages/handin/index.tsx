
import TaskSteps from '@/components/task-steps'
import { Task } from '@/types/task'
import { Button, Card, Divider, Form, Input, Typography, Upload, UploadProps } from 'antd'
import { InboxOutlined } from '@ant-design/icons';
import React from 'react'
import LoginModal from '@/components/login-model';

export default function Handin() {
  const title='青年大学习1'
  const taskInfo:Task={
    title: "青年大学习1",
    creator: "syz",
    end_time: "2.1 10:00",
    current: 1,
    status: "process"
  }
  //todo 处理上传图片
  const handleUpload:UploadProps['onChange']=(info)=>{
    console.log(info);
    
  }
  //todo 提交
  const onFinish=(values:any)=>{
    console.log(values);
    
  }
  return (
    <>
    <LoginModal/>
    <Card title={title} 
    style={{ 
      width: 700,
      position:'absolute',
      left:'50%',
      top:'50%',
      transform:'translate(-50%, -50%)'
      }}
      extra={<Typography.Text type='secondary'>{taskInfo.creator}</Typography.Text>}
      >
      <TaskSteps item={taskInfo} size={'small'} />
      <Divider />
    <Form name="handin" onFinish={onFinish} >

    <Form.Item name="description" label="提交说明">
      <Input.TextArea placeholder='请输入任务说明,可为空...' autoSize={
        { minRows: 4, maxRows: 6 }
      }/>
    </Form.Item>
    <Form.Item label="上传文件" valuePropName="fileList" rules={[{ required: true }]}>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      onChange={handleUpload}
      listType="picture"
      maxCount={1}
      style={{
        textAlign:'center',
      }}
    >
      <div 
        style={{
          display:'table-cell',
          verticalAlign:'middle',
          textAlign:'center',
          background:'rgba(0,0,0,.02)',
          border:'1px dashed #d9d9d9',
          padding:'16px 5px',
          borderRadius:'8px'
        }}>
          <p style={{
            marginBottom:16,
            fontSize:48,
            color:'#1677ff'
          }}>
          <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击上传或者拖拽文件到此上传</p>
          <p style={{
            color:'rgba(0,0,0,.45)'
          }}>
            请上传单个文件,多个文件请打包,无需修改文件名称,后台会统一修改
          </p>
      </div>
    </Upload>
        </Form.Item>
      <Form.Item wrapperCol={ {offset: 10} }>
      <Button type="primary" htmlType="submit">
        提交
      </Button>
    </Form.Item>
  </Form>
    </Card>
    </>

  )
}
