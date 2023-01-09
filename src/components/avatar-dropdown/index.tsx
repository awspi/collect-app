import React, { useEffect, useState } from 'react'
import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, message, Space } from 'antd';
import type { MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function AvatarDropdown() {

  const [name,setName]=useState('undefined')
  //模拟componentDidMount
  useEffect(()=>{
    setName('wsp')
  },[])

  const navigate=useNavigate()

  const onClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case '1':
        navigate('/profile')
        break;
      case '2':
        message.success('已登出');
        //todo 登出账号
        break
      default:
        break;
    }
  };
  const items:MenuProps['items']=[
    {
      label:'编辑资料',
      key:'1'
    },
    {
      label:'退出',
      key:'2'
    }
  ]
  return (
    <Dropdown menu={{ items, onClick }} >
        <a onClick={(e) => e.preventDefault()}>
        <Avatar style={{ backgroundColor: '#00a2ae', verticalAlign: 'middle' }} size="large" >
        {name}
      </Avatar>
        </a>
      </Dropdown>
  )
}
