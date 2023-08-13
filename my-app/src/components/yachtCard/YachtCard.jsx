import React from 'react'
import classes from './yachtCard.module.css'
import { Link } from 'react-router-dom'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaHeart, FaShower, FaThLarge, FaVectorSquare }  from 'react-icons/fa'

const YachtCard = ({ yacht }) => {

    return (
        // <Link to={`/yacht/${yacht._id}`} className={classes.container}>
        //     <div className={classes.wrapper}>
        //         <div className={classes.imgContainer}>
        //             <img src={`http://localhost:5000/images/${yacht.img}`} />
        //         </div>
        //         <h3 className={classes.title}>{yacht.title}</h3>
        //         <div className={classes.priceAndMaxPassengers}>
        //             <span>$ {yacht.price}</span>
        //             <span className={classes.passengers}><BsFillPersonFill />  {yacht.maxPassengers}</span>
        //         </div>
        //     </div>
        // </Link>

        <div className={`${classes.box} ${classes.propertyCardAnimation}`}>
        <Link to={`/yacht/${yacht._id}`}>
          <div className={classes.top}>
              <img src={`http://localhost:5000/images/${yacht.img}`} alt="" />
              <span>
              <FaHeart  className={classes.icons}/>
              </span>
          </div>
        </Link>
        <div className={classes.bottom}>
            <h3>{yacht.title}</h3>
            <p>
                Enjoy serenity of Deering Bay whole day from this spectacular North
                and...
                {/* {property.desc} */}
            </p>
            <div className={classes.advants}>
                <div>
                    <span>Bedrooms</span>
                    <div><FaThLarge className={classes.icon}/> <span>3</span></div>
                </div>
                <div>
                    <span>Bathrooms</span>
                    <div><FaShower className={classes.icon}/><span>3.5</span></div>
                </div>
                <div>
                <span>Area</span>
                <div>
                <FaVectorSquare className={classes.icon}/><span>{yacht.maxPassengers}<span>Sq Mt</span></span>
                </div>
              </div>
            </div>
             <div className={classes.price}>
              <span>For Sale</span>
              <span>$ {yacht.price}</span>
             </div>
        </div>
    </div>
    )
}

export default YachtCard