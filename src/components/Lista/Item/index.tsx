import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

interface props extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function item({
	tarefa,
	tempo,
	completado,
	id,
	selecionado,
	selecionaTarefa,
}: props) {
	console.log("item atual", arguments);

	return (
		<li
			className={`${style.item} ${
				selecionado ? style.itemSelecionado : ""
			}`}
			onClick={() =>
				selecionaTarefa({
					tarefa,
					tempo,
					completado,
					id,
					selecionado,
				})
			}
		>
			<h3>{tarefa}</h3>
			<span>{tempo}</span>
		</li>
	);
}
