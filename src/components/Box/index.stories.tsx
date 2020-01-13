import React from 'react';

import { storiesOf } from '@storybook/react';
import Box from './Box';

storiesOf('Button', module)
  .add('big button', () => <Box size={"big"}></Box>)
  .add('small button', () => <Box size={"small"} ></Box>);
