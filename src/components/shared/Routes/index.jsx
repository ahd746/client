import React from 'react';
import PageRoutes from '../../Pages/routes';
import UserRoutes from '../../Users/routes';
import AuthenticationRoutes from '../../Authentication/routes';
import ArticleRoutes from '../../Article/routes';

const Routes = () => {
  return (
    <>
      <PageRoutes/>
      <UserRoutes/>
      <AuthenticationRoutes/>
      <ArticleRoutes/>
    </>
  );
}

export default Routes;