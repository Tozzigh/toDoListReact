import React from "react";
class List extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		var { lista } = this.props;
		var listaa = [...lista];
		listaa = lista.map((elemento, index) => {
			return (
				<li key={index}>
					{elemento}
					<button>x</button>
				</li>
			);
		});
		return listaa;
	}
}
export default List;
