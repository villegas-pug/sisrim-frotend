import React, { useState } from 'react'
import { Card } from 'antd'
import styled from 'styled-components'

import MyCard from 'components/Card'

const BodyTab = styled.div`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`

const tabList = [
   { key: 1, tab: '» PARENTESCOS' },
   { key: 2, tab: '» DATOS ADICIONALES BENEFICIARIO' },
   { key: 3, tab: '» DIRECCIÓN BENEFICIARIO' },
   { key: 4, tab: '» DATOS CONTACTO' }
]

export default function TabsCard() {

   /*» HOOK'S  */
   const [activeKey, setActiveKey] = useState(1)

   /*» HANDLER'S  */
   const onTabChange = (key) => { setActiveKey(key) }

   /*» DEPENDENCY'S  */
   const contentList = [
      <BodyTab>
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
         <MyCard title='test...' description='test...' />
      </BodyTab>,
      <p>content2</p>,
      <p>content3</p>,
      <p>content4</p>,
   ]

   return (
      <>
         <Card
            tabList={tabList}
            activeTabKey={activeKey}
            onTabChange={onTabChange}
         >
            {contentList[activeKey - 1]}
         </Card>
      </>
   )
}