import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import BuscarBeneficiario from 'pages/BuscarBeneficiario'

export default function DashboardRoutes() {
   return (
      <>
         <Switch>
            <Route exact path='/buscar-beneficiario' component={BuscarBeneficiario} />
            <Redirect to='buscar-beneficiario' />
         </Switch>
      </>
   )
}
