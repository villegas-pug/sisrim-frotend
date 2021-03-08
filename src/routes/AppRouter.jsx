import BasicStructure from 'components/BasicLayout'
import React from 'react'
import { BrowserRouter as Routes, Route } from 'react-router-dom'
import DashboardRoutes from './DashboardRoutes'

export default function AppRoutes() {
   return (
      <>
         <Routes basename='sisrim'>
            <BasicStructure>
               <Route path='/' component={DashboardRoutes} />
            </BasicStructure>
         </Routes>
      </>
   )
}
