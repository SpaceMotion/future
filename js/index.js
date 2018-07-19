class CustomTable extends React.Component {
	constructor() {
		super();
		this.state = {
			array: ['id', 'firstname', 'lastname', 'email', 'phone']
		};
	}

	render() {
		console.log(this);
		return React.createElement(
			'table',
			null,
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					this.state.array.map(record => {
						return React.createElement(
							'th',
							null,
							record
						);
					})
				)
			),
			React.createElement('tbody', null)
		);
	}
}

window.onload = () => {
	ReactDOM.render(React.createElement(CustomTable, null), document.querySelector('#app'));
};