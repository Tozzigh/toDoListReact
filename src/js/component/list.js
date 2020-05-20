import React from "react";

const List = ({ lista, onDeleteClicked, counter }) => {
	const listaa = lista.map((elemento, index) => {
		return (
			<li key={index}>
				{elemento}
				<i
					className="delLi fa fa-times"
					onClick={() => onDeleteClicked(index)}
				/>
			</li>
		);
	});
	return (
		<ul>
			{listaa}
			{counter}
		</ul>
	);
};

export default List;
