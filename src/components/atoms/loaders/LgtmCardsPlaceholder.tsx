import React from 'react';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const LgtmCardsPlaceholder = (props: IContentLoaderProps) => (
  <ContentLoader
    speed={2}
    viewBox="0 0 800 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="134" height="155" />
    <rect x="145" y="0" rx="2" ry="2" width="134" height="155" />
    <rect x="295" y="0" rx="2" ry="2" width="134" height="155" />
    <rect x="445" y="0" rx="2" ry="2" width="134" height="155" />
    <rect x="595" y="0" rx="2" ry="2" width="134" height="155" />
    <rect x="0" y="171" rx="2" ry="2" width="134" height="155" />
    <rect x="145" y="171" rx="2" ry="2" width="134" height="155" />
    <rect x="295" y="171" rx="2" ry="2" width="134" height="155" />
    <rect x="445" y="171" rx="2" ry="2" width="134" height="155" />
    <rect x="595" y="171" rx="2" ry="2" width="134" height="155" />
  </ContentLoader>
);

export default LgtmCardsPlaceholder;
