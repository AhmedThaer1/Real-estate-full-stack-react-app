import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About the App</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam illum quam optio autem suscipit incidunt dicta dolorum eum dolores recusandae laboriosam expedita quo facilis, numquam et.
            Delectus atque dolorum sapiente.
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +964 00000000</span>
          <span>instagram</span>
          <span>facebook</span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Iraq</span>
          <span>Baghdad</span>
          <span>Soon</span>
        </div>
      </div>
      <p className={classes.copy}>Copy Right. 2023 , AQARI All Right Reserved</p>
    </footer>
  )
}

export default Footer