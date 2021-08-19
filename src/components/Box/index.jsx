import styled from 'styled-components';
import MEDIA from '../../helpers/mediaTemplates';

export const PageBox = styled.div`
  min-height: calc(100vh - 14rem);
  max-width: ${({ theme }) => theme.width};
  padding-top: ${({ theme }) => theme.marginHeader};
  margin: 0 auto 10rem auto;

  ${MEDIA.TABLET`
    padding-top: 12rem;
    min-height: calc(100vh - 15rem);
    margin: 0 5rem 5rem 5rem;
 `};
  ${MEDIA.MOBILE`
    padding-top: 12rem;
    min-height: calc(100vh - 15rem);
    margin: 0 2rem 2rem 2rem;
 `};
`;

export const TextBox = styled.div`
  background: ${({ theme }) => theme.background};
  border-radius: 10px;
  padding: 3rem;

  ${MEDIA.MOBILE`
    padding: 2rem;
 `};
`;

export const ImageBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 3rem;
`;
