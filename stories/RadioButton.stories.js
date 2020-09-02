import React from "react";
// import { action } from '@storybook/addon-actions'
import { Radio } from 'antd'

import './material.css'

export default {
  title: 'RadioButton',
  component: Radio
}


export const Status = () => <div>
  <Radio checked>Checked</Radio>
  <Radio checked={false}>Unchecked</Radio>
  <Radio checked={false}>Unchecked</Radio>
</div>
