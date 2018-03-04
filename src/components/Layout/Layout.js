import React, { Fragment } from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'

const layout = ( props ) => (
  <Fragment>
    <Toolbar />
    <main className={classes.Content}>
      {props.children}
    </main>
  </Fragment>
)

export default layout