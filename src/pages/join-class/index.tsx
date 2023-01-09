import React from 'react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const JoinClass: React.FC = () => (
  <Result
    icon={<SmileOutlined />}
    title="XXX邀请你加入班级 计科2005"
    extra={<Button type="primary">加入</Button>}
  />
);

export default JoinClass;
