import { useState, useEffect } from "react";

function Hello() {
	/* 방법 1
	function destroyedFn() { //cleanup function
		console.log("destroyed :( ");
	}
	function createdFn() {
		console.log("created :) ");
		return destroyedFn; //return cleanup function
	}
	useEffect(createdFn, []);
	*/
	/* 방법 2
	useEffect(() => {
		console.log("hi :)");
		return () => console.log("bye :(");
	}, []);
	*/
	/* 방법 3*/
	useEffect(function() {
		console.log("hi :)");
		return function() {
			console.log("bye :(");
		}
	}, []);
	return <h1>Hello</h1>;
}

function App() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return <div>
		{showing ? <Hello /> : null}
		<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
	</div>;
}

export default App;