import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
	setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

function Formulario({ setTarefas }: Props) {
	const [tarefa, setTarefa] = useState("");
	const [tempo, setTempo] = useState("00:00");

	function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setTarefas((tarefasAntigas) => [
			...tarefasAntigas,
			{
				tarefa,
				tempo,
				selecionado: false,
				completado: false,
				id: uuidv4(),
			},
		]);
		setTarefa("");
		setTempo("00:00");
	}

	return (
		<form className={style.novaTarefa} onSubmit={adicionarTarefa}>
			<div className={style.inputContainer}>
				<label htmlFor="tarefa">Adicione um novo estudo</label>
				<input
					value={tarefa}
					onChange={(event) => setTarefa(event.target.value)}
					type="text"
					name="tarefa"
					id="tarefa"
					placeholder="O que você quer estudar"
					required
				/>
			</div>
			<div className={style.inputContainer}>
				<label htmlFor="tempo">Tempo</label>
				<input
					value={tempo}
					onChange={(event) => setTempo(event.target.value)}
					type="time"
					step="1"
					name="tempo"
					id="tempo"
					min="00:00:00"
					max="01:30:00"
					required
				/>
			</div>
			<div>
				<Botao type="submit"> Adicionar </Botao>
			</div>
		</form>
	);
}

export default Formulario;
