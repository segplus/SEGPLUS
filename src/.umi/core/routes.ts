// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Users/lyj/Documents/GitHub/ESGPlus/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/.umi/plugin-layout/Layout.tsx').default,
    "routes": [
      {
        "path": "/analysis",
        "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Analysis').default,
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "驾驶仓",
        "icon": "dashboard",
        "routes": [
          {
            "name": "行政部",
            "path": "/dashboard/admin",
            "routes": [
              {
                "name": "分公司行政部",
                "path": "/dashboard/admin/admin",
                "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/admin').default,
                "exact": true
              },
              {
                "name": "项目行政部",
                "path": "/dashboard/admin/knpc",
                "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/knpc').default,
                "exact": true
              }
            ]
          },
          {
            "name": "施工部",
            "path": "/dashboard/construction",
            "routes": [
              {
                "name": "施工部",
                "path": "/dashboard/construction/construction",
                "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/Construction').default,
                "exact": true
              },
              {
                "name": "焊接产量",
                "path": "/dashboard/construction/weld",
                "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/weld').default,
                "exact": true
              }
            ]
          },
          {
            "name": "质量部",
            "path": "/dashboard/QAQC",
            "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/QAQC').default,
            "exact": true
          },
          {
            "name": "市场开发",
            "path": "/dashboard/sckf",
            "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Dashboard/Sckf').default,
            "exact": true
          }
        ]
      },
      {
        "path": "/index.html",
        "redirect": "/Analysis",
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/Analysis",
        "exact": true
      },
      {
        "path": "/details",
        "component": require('/Users/lyj/Documents/GitHub/ESGPlus/src/pages/Details').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
