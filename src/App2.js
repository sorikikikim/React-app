import { useState, useEffect } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const onClick = () => setValue((prev) => prev + 1);
	console.log("i run all the time");
	useEffect(() => {
		console.log("CALL THE API..."); //useEffect로 익명 함수 호출 시 한번만 실행됨.
	}, []);
	return (
		<div>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;