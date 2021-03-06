import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Container from 'components/ui/Container';
import Button from 'components/ui/Button';
import TitleSection from 'components/ui/TitleSection';

import * as Styled from './styles';

const Banner = ({ title, subtitle, content, linkTo, linkText, linkTo2, linkText2 }) => (
  <Styled.Banner>
    <Container section>
      <TitleSection title={title} subtitle={subtitle} />
      <Styled.Content>{content}</Styled.Content>
        <Link to={linkTo}>
          <Button primary>{linkText}</Button>
        </Link>
        <p>&nbsp;&nbsp;<br></br>&nbsp;&nbsp;</p>
        <a href={linkTo2}>
          <Button primary>{linkText2}</Button>
        </a>
    </Container>
  </Styled.Banner>
);

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  content: PropTypes.any.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired
};

export default Banner;
