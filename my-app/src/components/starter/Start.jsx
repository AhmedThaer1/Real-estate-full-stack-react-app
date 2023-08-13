import React from 'react';
import classes from './start.module.css';
import img from '../../assets/needed/Group 3.png';

const Start = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
      <h1 className={classes.name1}>AQARI/عقاري</h1>
          <div className={classes.left}>
            <div className={classes.desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur, <br />
                 adipisicing elit. Corporis vitae ipsa nihil <br />
                 , voluptatem magni quae quo a delectus impedit <br />
                  sunt dolorum quasi facere minima saepe? Officiis <br />
                   inventore laborum id dolorum?
              </p>
            </div>
          </div>
            <div className={classes.right}>
                <img src={img} alt="hero" />
            </div>
      </div>
    </div>
  )
}

export default Start
