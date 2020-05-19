import React from "react";

const List = ({ lista }) => {
	const listaa = lista.map((elemento, index) => {
		if (elemento.split(" ").join("").length > 1) {
			return (
				<li key={index}>
					{elemento}
					<div className="delLi" />
				</li>
			);
		}
	});
	return <ul>{listaa}</ul>;
};

export default List;
