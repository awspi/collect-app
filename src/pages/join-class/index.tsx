import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';
import LoginModal from '@/components/login-model';

const JoinClass: React.FC = () => {
  //todo 获取邀请信息
  const inviter='小明'
  const classname='计科2005'
  return (
    <div style={{
      position:'absolute',
      left:'50%',
      top:'50%',
      transform:'translate(-50%, -50%)'
    }}>

    <LoginModal/>
    <Result
    icon={<SmileOutlined />}
    title={`${inviter}邀请你加入班级${classname}`}
    extra={<Button type="primary">加入</Button>}
    />
    </div>
  )
}

export default JoinClass;
