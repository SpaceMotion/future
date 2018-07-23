class CustomTable extends React.Component {
	constructor() {
		super();
		this.state = {
			headers: [
				'id',
				'firstName',
				'lastName',
				'email',
				'phone'
			],
			data: [

			]
		};

		fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}').then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({
				data: data
			});			
			console.log(data);		
		});
	}

	render() {
		return (
			<table>
				<thead>
					<tr>
						{this.state.headers.map((record, index) => {
							return <th key={index}>{record}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{this.state.data.map((item) => {
						return <tr>{this.getItem(item)}</tr>;
					})}
				</tbody>
			</table>
		);
	}

	getItem(item) {
		return this.state.headers.map((header, index) => {
			return <td key={index}>{item[header]}</td>;
		});
	}
}

window.onload = () => {
	ReactDOM.render(<CustomTable></CustomTable>, document.querySelector('#app'));
};