import React from "react";
// import { action } from '@storybook/addon-actions'
import { Checkbox } from 'antd'

// import './material.css'

export default {
  title: 'CheckBox',
  component: Checkbox
}


export const Status=()=><div>
  <Checkbox checked>Checked</Checkbox>
  <Checkbox checked>Checked</Checkbox>
  <Checkbox checked={false}>Unchecked</Checkbox>
</div>

// const CBGroup = CB.Group
// const plainOptions = ['Dev', 'UX', 'BA', 'PM1']

// export const CheckBox = () => <CBGroup options={plainOptions} onChange={action('group changed')} />

// export const Status = () => <CheckBox checked>Checked</CheckBox>