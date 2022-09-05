import React from 'react';

import ContentsList from '../components/Content/ContentsList';
import { CreateLink } from '../components/CreateLink/CreateLink';
export const ContentPage = () => {
  return (
    <div>
      <CreateLink />
      <ContentsList />
    </div>
  );
};

export default React.memo(ContentPage);
