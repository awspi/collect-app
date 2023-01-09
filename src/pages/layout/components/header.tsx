import React from 'react'
import { Layout, theme } from 'antd';
import logo from '@/assets/logo.svg'
import AvatarDropdown from '@/components/avatar-dropdown';
const {  Header } = Layout;



export default function myHeader() {
  return (
      <Header style={{
        overflow: 'auto',
        width: '100vw',
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        display:'flex',
        zIndex:10
      }}>
        {/* logo */}
        <div style={{
          display:'flex',
          paddingTop:10,
          paddingBottom:10
        }}>
          <img src={logo}/>
        </div>
        {/* avatar */}
        <div style={{
          position:'absolute',
          right:32
        }}>
        <AvatarDropdown />
        </div>
      </Header>
  )
}
