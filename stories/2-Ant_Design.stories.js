import React from 'react'
import { action } from '@storybook/addon-actions'
import { Checkbox, DatePicker as DP, Slider as SL, Rate as Rt, Switch as Sw } from 'antd'
import 'antd/dist/antd.css'

export default {
	title: 'Ant Design',
	component: Checkbox
}

// export const CheckBox = () => <Checkbox onChange={action('changed')}>CheckBox</Checkbox>

const CBGroup = Checkbox.Group
const plainOptions = ['Dev', 'UX', 'BA', 'PM']

export const CheckBox = () => <CBGroup options={plainOptions} onChange={action('group changed')} />

export const Switch = () => <Sw onChange={action('onChange')} />

export const DatePicker = () => (
	<DP onClick={action('onClick')} onChange={action('onChange')} onFocus={action('onFocus')} />
)

export const Slider = () => <SL style={{ width: 300 }} onChange={action('onChange')} />

export const Rate = () => <Rt onHoverChange={action('onHover')} onChange={action('onChange')} />
