import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

export default {
	title: 'Style Guide',
	component: Button
}

export const Text = () => <Button onClick={action('clicked')}>Hello Button</Button>

export const Emoji = () => (
	<Button onClick={action('clicked')}>
		<span role="img" aria-label="so cool">
			😀 😎 👍 💯
		</span>
	</Button>
)

const colors = {
	blue: 'blue',
	red: 'red',
	green: 'green'
}
export const StyleGuide = () => (
	<div className="color-panel">
		{Object.keys(colors).map((key, value) => (
			<div className="item-panel">
				<div className="color" />
				<span>{key}</span>
			</div>
		))}
	</div>
)
