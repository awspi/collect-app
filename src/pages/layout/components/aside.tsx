import React, { useEffect, useState } from 'react'
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import {useNavigate, useLocation} from 'react-router-dom'
import {DashboardOutlined, ReconciliationOutlined,ApartmentOutlined ,FileAddOutlined,BarsOutlined} from '@ant-design/icons';
type MenuItem = Required<MenuProps>['items'][number];
const getClassItem=(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children: MenuItem[]=[],
)=>{
  //? 获取班级
  children=[
    {
      key: '计科2005班',
      icon: React.createElement(BarsOutlined),
      label: `计科2005班`,
    }
  ]
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export default function Aside() {

  const items: MenuProps['items'] = [
    {
      key: 'statistic',
      icon: React.createElement(DashboardOutlined),
      label: `统计`
      
    },

    getClassItem('班级','class',<ApartmentOutlined/>),
    {
      key: 'task',
      icon: React.createElement(FileAddOutlined),
      label: '任务',
      children:[
        {
          key: 'collect',
          icon: React.createElement(FileAddOutlined),
          label: '发布任务',
        },
        {
          key: 'mycollect',
          icon: React.createElement(FileAddOutlined),
          label: `我发布的`,
        },
      ]
    },
    {
      key: 'tasklist',
      icon: React.createElement(ReconciliationOutlined),
      label: '作业列表',
    },
  ]
  
    const navigate = useNavigate()
    const location = useLocation()
    const [defaultKey, setDefaultKey] = useState('')

    //? 一般加个空数组就是为了模仿componentDidMounted
    useEffect(()=>{
        let path = location.pathname;
        let key = path.split('/')[1];

        setDefaultKey(key)
    }, [])

    const handleClick = ({key,keyPath}:any) => {
      console.log(key,keyPath);
      //todo class单独处理
      if(keyPath.at(-1)==='class'){
        navigate('/'+keyPath.reverse().join('/'))
        setDefaultKey(keyPath)
        return
      }

      switch (key) {
        case 'collect':
          setDefaultKey(key)
          navigate('/'+key)
          break;
        case 'mycollect':
          setDefaultKey(key)
          navigate('/'+key)
          break;
        case 'tasklist':
          setDefaultKey(key)
          navigate('/'+key)
          break;
        case 'tasklist':
          setDefaultKey(key)
          navigate('/'+key)
          break;
        default:
          //todo 404
          break;
      }

    }

    return (
        <Menu
            onClick={handleClick}
            // style={{ width: 80 }}
            selectedKeys={[defaultKey]}
            mode="inline"
            className='aside'
            theme="light"
            defaultOpenKeys={['class']}
            items={items}
        />
    )
}
