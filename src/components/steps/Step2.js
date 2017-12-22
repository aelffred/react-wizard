import React, { Component } from 'react'

export default class Step2 extends Component {

	state = {
		count: 0
	}

	isValidated() {
		return this.state.count > 2
	}

	count = () => {
		this.setState({
			count: ++this.state.count
		})
	}

	render() {
		const status = this.state.count > 2 ? 'alert-success' : 'alert-danger'
		return (
			<div>

				<div class="panel panel-info">
					<div class="panel-heading">
						<h3 class="panel-title">Step 2</h3>
					</div>
					<div class="panel-body">

						<p>
							Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo,
							tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
							malesuada magna mollis euismod. Donec sed odio dui.
						</p>

						<p>
							<a class="btn btn-info" role="button">View details »</a>
						</p>

						<div class={ 'alert ' + status }>
							Count: {this.state.count}
						</div>

						<button className="btn btn-success" onClick={this.count}>+</button>

					</div>
				</div>

			</div>
		)
	}
}