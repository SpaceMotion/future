class CustomTable extends React.Component {
	constructor() {
		super();
		this.state = {
			headers: [{
				key: 'id',
				label: 'id'
			}, {
				key: 'firstName',
				label: 'first name'
			}, {
				key: 'lastName',
				label: 'last name'
			}, {
				key: 'email',
				label: 'e-mail'
			}, {
				key: 'phone',
				label: 'phone'
			}],
			data: [],
			activePage: 3,
			itemsPerPage: 23

		};

		fetch('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}').then((response) => {
			return response.json();
		}).then((data) => {
			this.setState({
				data: data.sort((a, b) => {
					return a.firstName.localeCompare(b.firstName);
				})
			});			
		});
	}

	render() {
		return (
			<div className='custom-table'>
				<table className='table'>
					<thead className='table__header'>
						<tr className='table__row'>
							{this.state.headers.map((header, index) => {
								return <th onClick={this.sortByKey.bind(this)} data-key={header.key} className='table__cell' key={index}>{header.label}</th>;
							})}
						</tr>
					</thead>
					<tbody className='table__body'>
						{this.state.data.map((item, index) => {
							return <tr className='table__row' key={index}>{this.getItem(item)}</tr>;
						}).slice(this.state.itemsPerPage * this.state.activePage, this.state.itemsPerPage * this.state.activePage + this.state.itemsPerPage)}
					</tbody>
				</table>
				<div>
					<span data-control-id='previousPage' onClick={this.controlHandler.bind(this)}>Previous Page</span>&nbsp;&nbsp;&nbsp;
					<span data-control-id='nextPage' onClick={this.controlHandler.bind(this)}>Next Page</span>
				</div>
			</div>
		);
	}

	getItem(item) {
		return this.state.headers.map((header, index) => {
			return <td className='table__cell' key={index}>{item[header.key]}</td>;
		});
	}

	sortByKey(event) {
		let key = event.target.dataset.key;
		this.setState({
			data: this.state.data.sort((a, b) => {
				return a[key].localeCompare(b[key]);
			})
		});
	}

	controlHandler(event) {
		switch (event.target.dataset.controlId) {
			case 'previousPage':
				this.setState(previousState => {
					activePage: previousState.activePage--
				});
				break;
			case 'nextPage':
				this.setState(previousState => {
					activePage: previousState.activePage++
				});
				break;
		}
		this.forceUpdate();
	}
}

window.onload = () => {
	ReactDOM.render(<CustomTable></CustomTable>, document.querySelector('#app'));
};