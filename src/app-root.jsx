import React from 'react';
import ReactDOM from 'react-dom';

export default class AppRoot extends React.Component {
	render() {
		return <div>React Seed Component</div>
	}
}

const el = document.getElementById('app-root')

if (el) {
	ReactDOM.render(<AppRoot />, el)
}
