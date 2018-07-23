class CustomTable extends React.Component {
	constructor() {
		super();
		this.state = {
			headers: ['id', 'firstName', 'lastName', 'email', 'phone'],
			data: []
		};

		fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}').then(response => {
			return response.json();
		}).then(data => {
			this.setState({
				data: data
			});
			console.log(data);
		});
	}

	render() {
		return React.createElement(
			'table',
			null,
			React.createElement(
				'thead',
				null,
				React.createElement(
					'tr',
					null,
					this.state.headers.map((record, index) => {
						return React.createElement(
							'th',
							{ key: index },
							record
						);
					})
				)
			),
			React.createElement(
				'tbody',
				null,
				this.state.data.map(item => {
					return React.createElement(
						'tr',
						null,
						this.getItem(item)
					);
				})
			)
		);
	}

	getItem(item) {
		return this.state.headers.map((header, index) => {
			return React.createElement(
				'td',
				{ key: index },
				item[header]
			);
		});
	}
}

window.onload = () => {
	ReactDOM.render(React.createElement(CustomTable, null), document.querySelector('#app'));
};