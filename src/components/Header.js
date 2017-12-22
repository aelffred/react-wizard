import React from 'react'

export default function Header() {
	return (
		<nav className="navbar navbar-inverse navbar-fixed-top">
			<div className="container">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand">Wizard</a>
				</div>
				<div id="navbar" className="navbar-collapse collapse" aria-expanded="false" style={{ height: '1px' }}>
					{/* nav goes here */}
				</div>
			</div>
		</nav>
	)
}