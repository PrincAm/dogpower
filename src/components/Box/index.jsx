import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const PageBox = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  padding-top: ${({ theme }) => theme.marginHeader};
  margin: 0 auto 10rem auto;

  ${MEDIA.TABLET`
    min-height: calc(100vh - 15rem);
    margin: 0 5rem 5rem 5rem;
 `};
  ${MEDIA.MOBILE`
    min-height: calc(100vh - 15rem);
    margin: 0 2rem 5rem 2rem;
 `};
`;

export const TextBox = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 3rem;
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;