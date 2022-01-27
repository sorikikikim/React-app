import { useState, useEffect } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
	//렌더링 될 때마다 실행된다. 
	console.log("i run all the time");
	
	//[]라는 빈 내용만 설정하였기 때문에 한번만 실행된다.
	useEffect(() => {
		console.log("I run only once."); //useEffect로 익명 함수 호출 시 한번만 실행됨.
	}, []);
	
	//[keyword]가 5글자 이상일 때만 실행된다.
	/*useEffect(() => {
		if (keyword !== "" && keyword.length > 5)
			console.log("SEARCH FOR", keyword);
	}, [keyword]);
	*/

	//[keyword]에 변화가 있을 때만 실행된다.
	useEffect(() => {
			console.log("I run when 'keyword' changes.");
	}, [keyword]);

	//[counter]에 변화가 있을 때만 실행된다.
	useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]);

	//[keyword, counter]에 변화가 있을 때만 실행된다.
	useEffect(() => {
		console.log("I run when 'keyword & counter' changes.");
	}, [keyword, counter]);
	
	return (
		<div>
			<input 
				value={keyword}
				onChange={onChange} 
				type="text" 
				placeholder="Search here...">
			</input>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;