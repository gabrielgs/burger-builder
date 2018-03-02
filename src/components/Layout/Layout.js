import React, { Fragment } from 'react'
import Aux from '../../hoc/Aux'

const layout = ( props ) => (
  <Fragment>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      {props.children}
    </main>
  </Fragment>
)

export default layout