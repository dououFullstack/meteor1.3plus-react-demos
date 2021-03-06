import React from 'react';
import {mount} from 'react-mounter';

import {PcLayout} from '/client/modules/admin/components/pc_layout.jsx';
import Home from './components/home.jsx';
import Experts from './components/experts.jsx';
import Companies from './containers/companies';
import Contact from './containers/contact';
import Notice from './containers/notice';
import Menu from './containers/menu';

export default function (injectDeps, {FlowRouter}) {
  const PcLayoutCtx = injectDeps(PcLayout);

  const adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin'
  });

  const router = (name, content, layout) => {
    adminRoutes.route(`/${name}`, {
      name: `admin.${name}`,
      action() {
        mount(layout, {
          menu: <Menu activeItem={name}/>,
        content: () => content
        });
      }
    });
  }

  router('home', <Home />, PcLayoutCtx)
  router('experts', <Experts />, PcLayoutCtx)
  router('companies', <Companies />, PcLayoutCtx)
  router('conferences', <Companies />, PcLayoutCtx)
  router('notice', <Notice />, PcLayoutCtx)
  router('contact', <Contact />, PcLayoutCtx)
}
