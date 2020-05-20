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
			if (e.target.value.split(" ").join("").length > 0) {
				this.setState({
					lista: this.state.lista.concat(e.target.value)
				});
			}
			e.target.value = "";
		}
	};
	taskCounter = leng => {
		if (leng === 0) {
			return (
				<li className="taskCounter text-muted">No tasks, add a task</li>
			);
		} else if (leng === 1) {
			return <li className="taskCounter text-muted">{leng} item left</li>;
		} else if (leng > 1) {
			return (
				<li className="taskCounter text-muted">{leng} items left</li>
			);
		}
	};

	render() {
		return (
			<div className="main">
				<h1>todos</h1>
				<input
					type="text"
					placeholder="What need to be done?"
					onKeyPress={this.addToList}
				/>
				<List
					lista={this.state.lista}
					counter={this.taskCounter(this.state.lista.length)}
					onDeleteClicked={index =>
						this.setState({
							lista: this.state.lista.filter(
								(item, pos) => pos !== index
							)
						})
					}
				/>
			</div>
		);
	}
}
