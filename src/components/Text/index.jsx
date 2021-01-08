import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

const Text = styled.span`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'xxlarge':
        return '500';
      default:
        return '400';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'xxlarge':
        return '6.0rem';
      case 'xlarge':
        return '4.0rem';
      case 'large':
        return '3.2rem';
      case 'medium':
      default:
        return '2.8rem';
      case 'small':
        return '2.2rem';
    }
  }};
  line-height: ${({ size }) => () => {
    switch (size) {
      case 'xxlarge':
        return '6.0rem';
      case 'xlarge':
        return '5.6rem';
      case 'large':
        return '4.6rem';
      case 'medium':
      default:
        return '4.0rem';
      case 'small':
        return '3.2rem';
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
