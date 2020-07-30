import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

import './style-guide.scss'

export default {
	title: 'Style Guide',
	component: Button
}
const colors = {
	lightBlue: '#adadec',
	ligthRed: '#ef637d',
	lightGreen: '#8ebb8e',
	gray: '#aaa',
	lightGray: '#ddd',
	deepGray: '#999',
	color1: '#eeeb88',
	color2: '#66eab9',
	color3: '#5e7494',
	color4: '#b988ee',
	color5: '#f491df',
	color6: '#aa7412'
}

const typographys = {
	h1: {
		color: 'black',
		fontSize: '34px'
	},
	h2: {
		color: '#444',
		fontSize: '32px'
	},
	h3: {
		color: '#444',
		fontSize: '30px'
	},
	h4: {
		color: '#444',
		fontSize: '26px'
	},
	paragraph: {
		color: '#666',
		fontSize: '22px'
	},
	text: {
		color: '#666',
		fontSize: '20px'
	},
	link: {
		color: '#1890ff',
		textDecoration: 'underline'
	}
}
export const StyleGuide = () => (
	<div className="styleGuideContainer">
		<h4>COLOR</h4>
		<div className="color-panel">
			{Object.keys(colors).map(key => (
				<div className="item-panel">
					<div className="color" style={{ backgroundColor: colors[key] }} />
					<div className="color-value">{colors[key]}</div>
					<span className="color-name">{key}</span>
				</div>
			))}
		</div>
		<h4>TYPOGRAPHY</h4>
		<div className="typography-panel">
			{Object.keys(typographys).map(key => <div style={typographys[key]}>{key}: test</div>)}
		</div>
	</div>
)
