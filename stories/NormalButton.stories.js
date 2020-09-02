import React from 'react'

import { Button, Slider as SL } from 'antd'

export default {
  title:'Button',
  component: Button
}

export const Primary = () => <Button type="primary" style={{borderRadius:10}}>Primary</Button>;

// Primary.storyName = 'I am the primary';

// Primary.storyName ='I am the primary'