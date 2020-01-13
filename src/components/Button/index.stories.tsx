import React from 'react';

import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('big button', () => <Button size={"big"}></Button>)
  .add('small button', () => <Button size={"small"}></Button>);