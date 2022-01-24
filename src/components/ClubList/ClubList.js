import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClubCard from '../../common/HomePageCards/ClubCard.js';
import axios from 'utilities/axios';

function ClubList({ text }) {
  const [clubList, setClubList] = useState(null);

  useEffect(() => {
    axios.get('/club/feed').then((res) => {
      setClubList(res.data.clubs);
    });
  }, []);

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
      <div className="my-4 mx-3 mx-lg-5">
          <h2 className="text-primary mx-lg-3 my-3">
              {text}
          </h2>

          {clubList && (
          <Carousel
              autoPlay
              autoPlaySpeed={2500}
              infinite
              responsive={responsive2}
          >
              {clubList?.map((option) => (
                  <ClubCard
                      key={option.username}
                      value={option}
                  />
          ))}
          </Carousel>
      )}
      </div>
  );
}

ClubList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClubList;
