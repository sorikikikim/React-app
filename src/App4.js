import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	const onSubmit = (event) => {
		event.preventDefault();
		if (toDo === "") {
			return;
		}
		//state를 절대 직접 수정하지 않음 (예: toDo == "";, toDos.push();)
		//아래와 같이 함수를 통해 수정해야 함 

		//setValue하는 두가지 옵션
		//1. 함수를 보내어 toDos의 값을 바꾼다. 첫번째 인자 - 현재 State, 현재 State를 toDo 배열에 더한다.
		setToDos((currentArray) => [toDo, ...currentArray])
		//2. 데이터를 보내어 toDo의 값을 바꾼다.
		setToDo("");
		/* = setToDos(function(currentArray) {
			return @#$%^
			});
		*/	
 	};
	 console.log(toDos);
	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input 
					onChange={onChange} 
					value={toDo} 
					type="text" 
					placeholder="Write your to do ...">
				</input>
				<button>Add To Do</button>
			</form>
			<hr />
			{toDos.map((item, index) => (
			<li key={index}>{item}</li>
			))}
		</div>
	);
}
//배열.map(() => ":)") 
//배열에 있는 요소 item()을 :)로 변경
export default App; 