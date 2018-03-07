import React from 'react'
import classes from './Spinner.css'

const spinner = () => (
  <div className={classes.Spinner}>
    <div className={classes.Dot1}></div>
    <div className={classes.Dot2}></div>
  </div>
)

export default spinner