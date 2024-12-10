import React from 'react'
import { Link } from 'react-router-dom'

function ServiceProviderCategory() {
  return (
    <div>
      <Link to="/PlumbersDetails">Plumbers</Link><br/>
      <Link to="/ElectricianDetails">Electricians</Link><br/>
      <Link to="/ACMechanicalDetails">AC Mechanics</Link><br/>
            <Link to="/AcMechanicinterest">Mechanics</Link><br/>
            <Link to="/carpenters">Carpenters</Link><br/>
            <Link to="/pest-Control">Pest Control</Link><br/>
            <Link to="/painters">painters</Link><br/>
      <div>
        <h3>See the service reviews here</h3>
        <Link to="/show-reviews"> See reviews</Link>
      </div>
    </div>
  //  stopped here
  )
}

export default ServiceProviderCategory
