window.onload = () => {
	ReactDOM.render(
		<table>
			<thead>
				<tr>
					<th>id</th>
					<th>firstname</th>
					<th>lastname</th>
					<th>email</th>
					<th>phone</th>
				</tr>
			</thead>
			<tbody>

			</tbody>
		</table>,
		document.querySelector('#app')
	);
};