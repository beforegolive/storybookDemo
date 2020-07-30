import React from 'react'
import { action } from '@storybook/addon-actions'
import Btn from '@material-ui/core/Button'
import { Select, MenuItem, Stepper, Step, StepLabel, TextField } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

import './material.css'

export default {
	title: 'Material UI',
	component: Button
}

export const Input = () => <TextField label="Standard" onInput={action('onInput')} />

export const Button = () => (
	<div className="button-container">
		<Btn variant="contained" onClick={action('onClick')}>
			Default
		</Btn>
		<Btn variant="contained" color="primary" onClick={action('onClick')}>
			Primary
		</Btn>
		<Btn variant="contained" color="secondary" onClick={action('onClick')}>
			Seconary
		</Btn>
		<Btn variant="contained" color="secondary" disabled>
			Disabled
		</Btn>
	</div>
)

export const Dropdown = () => (
	<Select onChange={action('onChange')}>
		<MenuItem value={0}>
			<em>None</em>
		</MenuItem>
		<MenuItem value={10}>Ten</MenuItem>
		<MenuItem value={20}>Twenty</MenuItem>
		<MenuItem value={30}>Thirty</MenuItem>
	</Select>
)

export const Message = () => (
	<div className="message-container">
		<Alert severity="error">This is an error message!</Alert>
		<br />
		<Alert severity="warning">This is a warning message!</Alert>
		<br />
		<Alert severity="info">This is an information message!</Alert>
		<br />
		<Alert severity="success">This is a success message!</Alert>
	</div>
)

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad']
export const Steppers = () => (
	<Stepper alternativeLabel activeStep={1}>
		{steps.map(label => (
			<Step key={label}>
				<StepLabel>{label}</StepLabel>
			</Step>
		))}
	</Stepper>
)
