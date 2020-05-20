import React from "react";

const List = ({ task }) => {
	const lista = [];
	lista.concat(task);
	const listaFin = lista.map((data, index) => {
		return <li key={index}>{data}</li>;
	});
	return (
		<ul>
			{listaFin}
			<button>x</button>
		</ul>
	);
};
export default List;
