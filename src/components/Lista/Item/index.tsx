import { ITarefa } from "../../../types/tarefa";
import style from "../Lista.module.scss";

export default function item({
	tarefa,
	tempo,
	completado,
	id,
	selecionado,
}: ITarefa) {
	console.log("item atual",arguments);
	
	return (
		<li className={style.item}>
			<h3>{tarefa}</h3>
			<span>{tempo}</span>
		</li>
	);
}
