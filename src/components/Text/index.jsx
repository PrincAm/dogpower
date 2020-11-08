import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'xlarge':
        return '500';
      case 'large':
        return '400';
      case 'medium':
        return '400';
      default:
        return '400';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xlarge':
        return '4.0rem';
      case 'large':
        return '3.2rem';
      case 'medium':
        return '2.8rem';
      default:
        return '2rem';
    }
  }};
  line-height: ${({ size }) => () => {
    switch (size) {
      case 'xlarge':
        return '4.2rem';
      case 'large':
        return '3.4rem';
      case 'medium':
        return '3.0rem';
      default:
        return '2.2rem';
    }
  }};

  ${MEDIA.TABLET`
    font-size: ${({ size }) => () => {
      switch (size) {
        case 'large':
          return '2.6rem';
        default:
          return '2rem';
      }
    }};
  `};
`;

export default Text;
