import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'utilities/axios.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import EventTalkCard from 'common/HomePageCards/EventTalkCard.js';

function ClubEventList({ text }) {
  const [clubEventList, setClubEventList] = useState(null);

  useEffect(() => {
    axios.get('/club/feed').then((res) => {
      setClubEventList(res.data.competitions);
    });
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
      <div className="my-4 mx-3 mx-lg-3">
          <h2 className="text-primary mx-lg-5 my-3">
              {text}
          </h2>

          {clubEventList && (
          <Carousel
              autoPlay
              autoPlaySpeed={2500}
              infinite
              responsive={responsive}
          >
              {clubEventList?.map((option) => (
                  <EventTalkCard
                      element={option}
                      key={option}
                  />
          ))}
          </Carousel>
      )}
      </div>
  );
}

ClubEventList.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClubEventList;
