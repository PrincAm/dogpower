import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '500';
      case 'sm':
        return '200';
      default:
        return '400';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '6.0rem';
      case 'l':
        return '3.2rem';
      case 'md':
      default:
        return '2.8rem';
      case 'sm':
        return '2.0rem';
      case 'xsm':
        return '1.8rem';
    }
  }};
  line-height: ${({ size }) => () => {
    switch (size) {
      case 'xl':
        return '6.0rem';
      case 'l':
        return '4.6rem';
      case 'md':
      default:
        return '4.0rem';
      case 'sm':
        return '2.8rem';
      case 'xsm':
        return '2.6rem';
    }
  }};

  ${MEDIA.MOBILE`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '4.0rem';
        case 'l':
          return '2.4rem';
        case 'md':
        default:
          return '2rem';
        case 'sm':
          return '1.8rem';
        case 'xsm':
          return '1.6rem';
      }
    }};

    line-height: ${({ size }) => () => {
      switch (size) {
        case 'xl':
          return '4.0rem';
        case 'l':
          return '2.4rem';
        case 'md':
        default:
          return '2rem';
        case 'sm':
          return '1.8rem';
        case 'xsm':
          return '1.6rem';
      }
    }};
  `};
`;

export default Text;

export const PageTitle = styled(Text).attrs(() => ({
  size: 'xl',
  as: 'h1',
}))`
  margin-bottom: 4rem;

  ${MEDIA.MOBILE`
    margin-bottom: 2rem;
  `}
`;
