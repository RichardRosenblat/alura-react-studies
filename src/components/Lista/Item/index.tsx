import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface Props extends ITarefa {
	selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function item({
	tarefa,
	tempo,
	completado,
	id,
	selecionado,
	selecionaTarefa,
}: Props) {
	return (
		<li
			className={`${style.item} ${selecionado ? style.itemSelecionado : ""}  ${
				completado ? style.itemCompletado : ""
			}`}
			onClick={() =>
				!completado &&
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
			{completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
		</li>
	);
}
