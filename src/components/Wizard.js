import React, { Component, Fragment } from 'react'
import StepZilla from 'react-stepzilla'

import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'

const steps = [
	{ name: 'Step 1', component: <Step1 /> },
	{ name: 'Step 2', component: <Step2 /> },
	{ name: 'Step 3', component: <Step3 /> },
]

export default class Wizard extends Component {
	render() {
		return (
			<Fragment>

				<h1 className="page-header">Wizard</h1>

				<StepZilla
					steps={steps}
					stepsNavigation={false}
					nextButtonCls="btn btn-primary pull-right"
					backButtonCls="btn btn-primary pull-left"
				/>

			</Fragment>
		);
	}
}
