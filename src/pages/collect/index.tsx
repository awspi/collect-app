import React, { useState } from 'react'
import { Button, Form, Input,DatePicker,Switch, message,Checkbox,Radio} from 'antd';
import TemplateList from './components/template-list';
const CheckboxGroup = Checkbox.Group;
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 5, span: 10 },
};
export default function Collect() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();
  //todo 班级
  const [jointClass,setJointClass]=useState(['计科2005','粮工1901'])
  //todo 新建任务
  const onFinish = (values: any) => {
    console.log(values);
    
    messageApi.open({
      type: 'loading',
      content: 'Action in progress..',
      duration: 0,
    });
    //todo react-query loading
    setTimeout(messageApi.destroy, 2500);
  };

  const onReset = () => {
    form.resetFields();
  };


  return (
  <div style={{
    display:'flex'
  }}>
    {contextHolder}
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} style={{
      width:'70%',
      height:'calc(100vh - 68px - 200px'
    }}>
    <Form.Item name="title" label="任务标题"  rules={[{ required: true }]}>
      <Input placeholder='请输入任务标题...'/>
    </Form.Item>
    <Form.Item name="description" label="任务描述" rules={[{ required: true }]}>
      <Input.TextArea placeholder='请输入任务描述...' />
    </Form.Item>
    <Form.Item name="end_time" label="截止日期" rules={[{required:true}]}>
      <DatePicker />
    </Form.Item>
    <Form.Item name='upload_type' label="上传文件类型" rules={[{required:true}]} initialValue='pic' >
          <Radio.Group >
            <Radio value="pic" defaultChecked={true}> 图片 </Radio>
            <Radio value="file"> 文件 </Radio>
          </Radio.Group>
        </Form.Item>
    <Form.Item name="visibility" valuePropName="checked" label="学生互相可见" rules={[{required:true}]}>
      <Switch />
    </Form.Item>
    <Form.Item name="class"  label="班级" rules={[{required:true}]}>
    <CheckboxGroup options={jointClass} value={jointClass}  />
    </Form.Item>
    <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
    </Form.Item>
  </Form>
  <div 
  style={{
    width:0.7,
    backgroundColor:'rgba(0,0,0,0.88)'
  }}>&nbsp;</div>
    <TemplateList form={form}/>
  </div>
    
  )
}
