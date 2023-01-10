import { Button, Modal } from 'antd'
import {
  InfoCircleFilled,
} from '@ant-design/icons';
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';

export default function LoginModal() {
  const navigate=useNavigate()

  //todo 读取是否已经登录
  const [isLogin,setIsLogin]=useState(false)
  //todo 跳转登录 记录本页面,登录完成后跳转回来
  const handleOk=()=>{
    console.log('ok');
    navigate('/unauth')
  }
  return (
    <Modal title="提示" closable={false}  open={!isLogin} width={350}
    footer={[
      <Button key="submit" type="primary"  onClick={handleOk}>
      去登录
    </Button>,

    ]}
    >
    <InfoCircleFilled style={{color:'#2f54eb',fontSize:22,marginLeft:20}}/>
    <span style={{fontSize:16,fontWeight:600,marginLeft:5,lineHeight:1.5}}>当前未登录,请先登录</span>
  </Modal>
  )
}
