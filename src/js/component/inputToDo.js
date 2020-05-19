import React from "react";
import List from "./list.js";

export class InputToDo extends React.Component {
	constructor() {
		super();
		this.state = {
			lista: []
		};
	}
	addToList = e => {
		if (e.key === "Enter") {
			this.setState({
				lista: this.state.lista.concat(e.target.value)
			});
			e.target.value = "";
		}
	};
	render() {
		return (
			<div className="main">
				<input
					placeholder="What need to be done?"
					onKeyPress={this.addToList}
				/>
				<List lista={this.state.lista} />
			</div>
		);
	}
}
