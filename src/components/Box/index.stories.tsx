import React from 'react';

import { storiesOf } from '@storybook/react';
import Box from './Box';

storiesOf('Box', module)
  .add('big Box', () => <Box size={"big"}></Box>)
  .add('small Box', () => <Box size={"small"} ></Box>);
