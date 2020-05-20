import React from "react";
import List from "./list.js";

export class InputToDo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
	}
	addToList = e => {
		if (e.key === "Enter") {
			this.setState({
				task: e.target.value
			});
			e.target.value = "";
		}
	};
	render() {
		return (
			<div className="main">
				<h1>To Do List</h1>
				<input
					className="px-5"
					placeholder="What need to be done?"
					onKeyPress={this.addToList}
				/>
				<ul>
					<List task={this.state.task} />
				</ul>
			</div>
		);
	}
}
