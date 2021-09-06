import React from 'react';
import IntroContent from "../../content/IntroContent.json";
import Container from "../../common/Container";
import ContentBlock from "../../components/UnauthenticatedHome/ContentBlock";
import PropTypes from "prop-types";


function Home({onLogin}) {
  return (
      <Container>
          <ContentBlock
              button={IntroContent.button}
              content={IntroContent.text}
              icon="developer.svg"
              id="intro"
              onLogin={onLogin}
              title={IntroContent.title}
              type="left"
          />
      </Container>
  );
}

Home.propTypes = {
  onLogin: PropTypes.func.isRequired
}
export default Home;
