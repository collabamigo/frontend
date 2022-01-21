import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClubCard from '../../common/HomePageCards/ClubCard.js';
import styles from '../../styles/index.module.css';

const ClubList = ({ ItemList, text }) => {
  const responsive2 = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className={styles.thirdsectionMiddle + ' my-5'}>
      <h2 className="text-primary mx-3 my-3">{text}</h2>
      <Carousel autoPlay autoPlaySpeed={2500} infinite responsive={responsive2}>
        {ItemList?.map((option) => (
          <ClubCard key={option.username} value={option} />
        ))}
      </Carousel>
    </div>
  );
};

ClubList.propTypes = {
  ItemList: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
};

export default ClubList;
