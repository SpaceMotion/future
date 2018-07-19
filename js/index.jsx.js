class CustomTable extends React.Component {
	constructor() {
		super();
		this.state = {
			array: [
				'id',
				'firstname',
				'lastname',
				'email',
				'phone'
			]
		};
	}

	render() {
		console.log(this);
		return (
			<table>
				<thead>
					<tr>
						{this.state.array.map((record) => {
							return <th>{record}</th>;
						})}
					</tr>
				</thead>
				<tbody>

				</tbody>
			</table>
		);
	}
}

window.onload = () => {
	ReactDOM.render(<CustomTable></CustomTable>, document.querySelector('#app'));
};