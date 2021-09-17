import React from 'react'
import classes from "../css/layout.module.css"
const Layout = (props) => {
  return (
    <div className={classes.layout}>
      {props.children}
    </div>
  )
}

export default Layout
