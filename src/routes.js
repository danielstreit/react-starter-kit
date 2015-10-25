/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import Router from 'react-routing/src/Router';
import http from './core/HttpClient';
import App from './components/App';
import Menu from './components/Menu';
import ContentPage from './components/ContentPage';
import NotFoundPage from './components/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import MenuStore from './stores/MenuStore';
import CategoryStore from './stores/CategoryStore';

const router = new Router(on => {
  on('*', async (state, next) => {
    const component = await next();
    return component && <App context={state.context}>{component}</App>;
  });

  on('/', async () => {
    console.log('menu dispatched');
    const menuItems = MenuStore.getMenuItems();
    const categories = CategoryStore.getCategories();
    console.log(menuItems);
    console.log(categories);
    return <Menu
              menuItems = {menuItems}
              categories = {categories} />
  });

  on('/about', async (state) => {
    const content = await http.get(`/api/content?path=${state.path}`);
    console.log('content', content);
    return content && <ContentPage {...content} />;
  });

  on('error', (state, error) => state.statusCode === 404 ?
    <App context={state.context} error={error}><NotFoundPage /></App> :
    <App context={state.context} error={error}><ErrorPage /></App>
  );
});

export default router;
