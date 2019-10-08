import {configure} from '@storybook/react';
import React from 'react';

const req = require.context('../src/components', true, /\.stories\.js$/);
function loadStories() {
    req.keys().forEach(filename => req(filename));
}
configure(loadStories, module);
