import React from 'react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './style.css'

const { Header, Content, Footer } = Layout

export default function BasicLayout({ children }) {
   return (
      <Layout className='layout' style={{ height: '100vh' }}>
         <Header>
            <div className='logo' />
            <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
               <Menu.Item key='1'><Link to='/beneficiario-buscar'>Registrar</Link></Menu.Item>
               <Menu.Item key='2'><Link to='/beneficiario-buscar'>Consultar</Link></Menu.Item>
               <Menu.Item key='3'><Link to='/beneficiario-buscar'>Reportes</Link></Menu.Item>
            </Menu>
         </Header>
         <Content style={{ padding: '10px 10px' }}>
            <div className='site-layout-content'>
               {children}
            </div>
         </Content>
         <Footer style={{ textAlign: 'center' }}>RIM ©2021</Footer>
      </Layout>
   )
}