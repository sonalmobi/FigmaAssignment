import { FunctionComponent } from "react";
import styles from "./css/Homepage1.module.css";

export const Homepage1: FunctionComponent = () => {
  return (
    <div className={styles.homepageDiv}>
      <div className={styles.groupDiv}>
        <div className={styles.groupDiv1}>
          <img className={styles.sortIcon} alt="" src="sort1.svg" />
          <div className={styles.filterDiv}>Filter</div>
        </div>
      </div>
      <b className={styles.upcomingRides4}>Upcoming rides (4)</b>
      <div className={styles.pastRides2}>Past rides (2)</div>
      <div className={styles.shoeCardDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.groupDiv2}>
          <img className={styles.rectangleIcon} alt="" src="rectangle@2x.png" />
        </div>
        <div className={styles.groupDiv3}>
          <div className={styles.productNameDiv}>Product Name</div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.brandNameDiv}>Brand Name</div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.locationDiv}>Location</div>
        </div>
        <div className={styles.groupDiv6}>
          <div className={styles.descriptionOfTheProductI}>
            Description of the Product / Item
          </div>
        </div>
        <div className={styles.groupDiv7}>
          <div className={styles.div}>10:12:2021</div>
          <div className={styles.groupDiv8}>
            <div className={styles.dateDiv}>
              <span>Date</span>
              <span className={styles.span}>:</span>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv9}>
          <div className={styles.div1}>$</div>
          <div className={styles.div2}>29.99</div>
        </div>
      </div>
      <div className={styles.rideId002}>Ride Id : 002</div>
      <div className={styles.originStation20}>Origin Station : 20</div>
      <div className={styles.stationPath2039404}>
        station_path: : [20, 39, 40, 42, 54, 63, 72, 88, 98]
      </div>
      <div className={styles.date15thFeb20221633}>
        Date: 15th Feb 2022 16:33
      </div>
      <div className={styles.shoeCardDiv1}>
        <div className={styles.rectangleDiv1} />
      </div>
      <div className={styles.shoeCardDiv2}>
        <div className={styles.rectangleDiv2} />
        <div className={styles.distance1Div}>
          <span>Distance:</span>
          <span className={styles.span1}> 1</span>
        </div>
      </div>
      <div className={styles.shoeCardDiv3}>
        <div className={styles.rectangleDiv2} />
      </div>
      <div className={styles.rideId001}>
        <span>Ride Id :</span>
        <span className={styles.span1}> 001</span>
      </div>
      <div className={styles.originStation23}>
        <span>Origin Station :</span>
        <span className={styles.span1}> 23</span>
      </div>
      <div className={styles.stationPath23424548}>
        <span>station_path:</span>
        <span className={styles.span1}>
          {" "}
          [23, 42, 45, 48, 56, 60, 77, 81, 93]
        </span>
      </div>
      <div className={styles.date15thFeb202216331}>
        <span>Date:</span>
        <span className={styles.span1}> 15th Feb 2022 16:33</span>
      </div>
      <div className={styles.rideId003}>
        <span>Ride Id :</span>
        <span className={styles.span1}> 003</span>
      </div>
      <div className={styles.originStation13}>
        <span>Origin Station :</span>
        <span className={styles.span1}> 13</span>
      </div>
      <div className={styles.stationPath13254148}>
        <span>station_path:</span>
        <span className={styles.span1}>
          {" "}
          [13, 25, 41, 48, 59, 64, 75, 81, 91]
        </span>
      </div>
      <div className={styles.date15thFeb202216332}>
        <span>Date:</span>
        <span className={styles.span1}> 15th Feb 2022 16:33</span>
      </div>
      <div className={styles.rideId0021}>
        <span>Ride Id :</span>
        <span className={styles.span1}> 002</span>
      </div>
      <div className={styles.originStation201}>
        <span>Origin Station :</span>
        <span className={styles.span1}> 20</span>
      </div>
      <div className={styles.stationPath20394042}>
        <span>station_path :</span>
        <span className={styles.span1}>
          {" "}
          [20, 39, 40, 42, 54, 63, 72, 88, 98]
        </span>
      </div>
      <div className={styles.date15thFeb202216333}>
        <span>{`Date `}</span>
        <span className={styles.span1}>: 15th Feb 2022 16:33</span>
      </div>
      <div className={styles.groupDiv10}>
        <img className={styles.image1Icon} alt="" src="image-1@2x.png" />
      </div>
      <div className={styles.groupDiv11}>
        <img className={styles.image1Icon1} alt="" src="image-11@2x.png" />
      </div>
      <div className={styles.groupDiv12}>
        <img className={styles.image1Icon2} alt="" src="image-15@2x.png" />
      </div>
      <div className={styles.distance0}>
        <span>Distance :</span>
        <span className={styles.span1}> 0</span>
      </div>
      <b className={styles.nearestRidesB}>Nearest rides</b>
      <div className={styles.lineDiv} />
      <div className={styles.groupDiv13}>
        <div className={styles.rectangleDiv4} />
        <b className={styles.dashboard}>Edvora</b>
        <b className={styles.dhruvSinghB}>Dhruv Singh</b>
        <div className={styles.groupDiv14}>
          <img
            className={styles.rectangleIcon1}
            alt=""
            src="rectangle1@2x.png"
          />
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.cityNameDiv}>City Name</div>
      </div>
      <div className={styles.frameDiv1}>
        <div className={styles.cityNameDiv}>City Name</div>
      </div>
      <div className={styles.frameDiv2}>
        <div className={styles.cityNameDiv}>City Name</div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.cityNameDiv}>State Name</div>
      </div>
      <div className={styles.frameDiv4}>
        <div className={styles.cityNameDiv}>State Name</div>
      </div>
      <div className={styles.frameDiv5}>
        <div className={styles.cityNameDiv}>State Name</div>
      </div>
    </div>
  );
};
