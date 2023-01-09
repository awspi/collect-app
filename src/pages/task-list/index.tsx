import TaskList from "@/components/task-list";
import { Task } from "@/types/task";
import React, { useState } from "react";
import { Tabs, TabsProps ,theme} from "antd";
import StickyBox from 'react-sticky-box';
import {
  NumberOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  IssuesCloseOutlined,
  CloseCircleOutlined
} from "@ant-design/icons";
export default function TaskListPage() {
  const [activeKey, setActiveKey] = useState('0');
  const onChange=(key:string)=>{
    //todo 获取新的List
    setActiveKey(key)
  }
  const [list, setList] = useState<Task[]>([
    {
      title: "青年大学习1",
      creator: "syz",
      end_time: "2.1 10:00",
      current: 1,
      status: "process"
    },
    {
      title: "青年大学习2",
      creator: "syz",
      end_time: "2.1 10:00",
      current: 1,
      status: "process"
    },
    {
      title: "青年大学习3",
      creator: "syz",
      end_time: "2.1 10:00",
      current: 2,
      status: "finish"
    },
    {
      title: "青年大学习4",
      creator: "syz",
      end_time: "2.1 10:00",
      current: 2,
      status: "error"
    },
    {
      title: "青年大学习5",
      creator: "syz",
      end_time: "2.1 10:00",
      current: 1,
      status: "wait"
    }
  ]);
  const tabItems = [
    {
      label: (
        <span>
          <NumberOutlined />
          全部
        </span>
      ),
      key: "0",
      children:<TaskList list={list} />
    },
    {
      label: (
        <span>
          <ClockCircleOutlined />
          进行中
        </span>
      ),
      key: "1",
      children:<TaskList list={list} />
    },
    {
      label: (
        <span>
          <IssuesCloseOutlined />
          已截止
        </span>
      ),
      key: "2",
      children:<TaskList list={list} />
    },    
    {
      label: (
        <span>
          <CheckCircleOutlined />
          已完成
        </span>
      ),
      key: "3",
      children:<TaskList list={list} />
    },
    {
      label: (
        <span>
          <CloseCircleOutlined />
          未完成
        </span>
      ),
      key: "4",
      children:<TaskList list={list} />
    }
  ];
  //* sticky
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} style={{ zIndex: 10, }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );
  return (
    <>
      <Tabs centered items={tabItems}  activeKey={activeKey} 
      onChange={onChange}  renderTabBar={renderTabBar} />
    </>
  );
}
