import { test } from 'node:test';
import assert from 'node:assert/strict';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import App from '../src/App.tsx';

const renderRoute = (path) => renderToStaticMarkup(
  React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(App)),
);

for (const path of ['/', '/features']) {
  test(`${path} omits the two retired spotlights and retains the other features`, () => {
    const html = renderRoute(path);

    assert.doesNotMatch(html, /id="(?:founder-blogs|version-17)"/);
    assert.doesNotMatch(html, /Write Once on LINKUP|Rank on Google Search, News|New in LINKUP 17\.0|Built For Daily Momentum/);
    assert.match(html, /id="linkup-agent"/);
    assert.match(html, /id="features"/);

    if (path === '/') {
      assert.match(html, /id="builders"/);
      assert.match(html, /Meet the Builders on/);
      assert.match(html, /id="launch-film"/);
    }
  });
}
