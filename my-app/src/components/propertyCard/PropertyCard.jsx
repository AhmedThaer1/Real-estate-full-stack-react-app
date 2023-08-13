import React from 'react'
import classes from './propertyCard.module.css'
import { FaBed, FaExchangeAlt, FaHeart, FaShower, FaSquareFull, FaThLarge, FaVectorSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import person from '../../assets/person.jpg'


const PropertyCard = ({ property }) => {
  const ownerProfileImg = property?.currentOwner?.profileImg


    return (
        // <div key={property._id} className={`${classes.property} ${classes.propertyCardAnimation}`}>
        //     <h3 className={classes.name}>{property.title}</h3>
        //     <Link to={`/propertyDetail/${property._id}`} className={classes.imgContainer}>
        //         <img src={`http://localhost:5000/images/${property?.img}`} alt="" />
        //     </Link>
        //     <div className={classes.details}>
        //         <div className={classes.priceAndOwner}>
        //             <span className={`${classes.price} ${classes.priceAnimation}`}>$ {property.price}</span>
        //             <img src={ownerProfileImg ? `http://localhost:5000/images/${ownerProfileImg}` : person} className={`${classes.owner} ${classes.ownerAnimation}`} />
        //         </div>
        //         <div className={`${classes.moreDetails} ${classes.moredetailanimation}`}>
        //             <span>{property.beds} <FaBed className={classes.icon} /></span>
        //             <span>{property.sqmeters} square meters<FaSquareFull className={classes.icon} /></span>
        //         </div>
        //         <div className={classes.desc}>
        //             {property.desc}
        //         </div>
        //         <div className={classes.bookedMarked}>
        //         </div>
        //     </div>
        // </div>

        <div key={property._id} className={`${classes.box} ${classes.propertyCardAnimation}`}>
            <Link to={`/propertyDetail/${property._id}`}>
              <div className={classes.top}>
                  <Link to={`/propertyDetail/${property._id}`}>
                  <img src={`http://localhost:5000/images/${property?.img}`} alt="" />
                  </Link>
                  <span>
                  <FaHeart  className={classes.icons}/>
                  </span>
              </div>
            </Link>
            <div className={classes.bottom}>
                <h3>{property.title}</h3>
                <p>
                    Enjoy serenity of Deering Bay whole day from this spectacular North
                    and...
                    {/* {property.desc} */}
                </p>
                <div className={classes.advants}>
                    <div>
                        <span>Bedrooms</span>
                        <div><FaThLarge className={classes.icon}/> <span>{property.beds}</span></div>
                    </div>
                    <div>
                        <span>Bathrooms</span>
                        <div><FaShower className={classes.icon}/><span>3.5</span></div>
                    </div>
                    <div>
                    <span>Area</span>
                    <div>
                    <FaVectorSquare className={classes.icon}/><span>{property.sqmeters}<span>Sq Mt</span></span>
                    </div>
                  </div>
                </div>
                 <div className={classes.price}>
                  <span>For Sale</span>
                  <span>$ {property.price}</span>
                 </div>
            </div>
        </div>

    )
}

export default PropertyCard


{/**<div class="box">
        <div class="top">
          <img src="https://cdn.pixabay.com/photo/2014/07/31/00/30/vw-beetle-405876__340.jpg" alt="" />
          <span
            ><i class="fas fa-heart"></i><i class="fas fa-exchange-alt"></i
          ></span>
        </div>
        <div class="bottom">
          <h3>Villa In Alexandria</h3>
          <p>
            Enjoy serenity of Deering Bay whole day from this spectacular North
            and...
          </p>
          <div class="advants">
            <div>
              <span>Bedrooms</span>
              <div><i class="fas fa-th-large"></i><span>3</span></div>
            </div>
            <div>
              <span>Bathrooms</span>
              <div><i class="fas fa-shower"></i><span>3.5</span></div>
            </div>
            <div>
              <span>Area</span>
              <div>
                <i class="fas fa-vector-square"></i
                ><span>3500<span>Sq Ft</span></span>
              </div>
            </div>
          </div>
          <div class="price">
            <span>For Sale</span>
            <span>$825,000</span>
          </div>
        </div>
      </div> */}