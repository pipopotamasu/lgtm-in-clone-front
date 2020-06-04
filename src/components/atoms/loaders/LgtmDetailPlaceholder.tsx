import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const LgtmCardsPlaceholder = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 700 300"
    backgroundColor="#f5f5f5"
    foregroundColor="#dbdbdb"
    {...props}
  >
    <rect x="10" y="0" rx="2" ry="2" width="210" height="210" />
    <rect x="245" y="10" rx="3" ry="3" width="450" height="20" />
    <rect x="245" y="55" rx="3" ry="3" width="450" height="60" />
    <rect x="245" y="130" rx="3" ry="3" width="95" height="40" />
  </ContentLoader>
);

export default LgtmCardsPlaceholder;
