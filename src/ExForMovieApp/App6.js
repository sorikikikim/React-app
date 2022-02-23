import { useEffect, useState } from "react";

function App() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([])
	const getMovies = async() => {
		/* 이 두개를 합쳐서 
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
		);
		const json = await response.json();
		아래와 같이 만들 수 있다*/
		const json = await(await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
		)).json();
		setMovies(json.data.movies);
		setLoading(false);
		//과거 : then -> 요즘 : async/await	
	}
	useEffect(() => {
		getMovies(); //async, await 방법
		/* then 방법
		fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
		)
		.then((response) => response.json())
		.then((json) => {
			setMovies(json.data.movies);
			setLoading(false);
		});
		*/
	}, []);
	console.log(movies);
	return (
		<div>
			{loading ? <h1>Loading...</h1> : 
			<div>
				{movies.map((movie) => (
				<div key={movie.id}>
					<img src={movie.medium_cover_image} />
					<h2>{movie.title} ({movie.year})</h2>
					<p>{movie.summary}</p>
					<ul>
						{movie.genres.map((g) => (
							<li key={g}>{g}</li>
						))}
					</ul>
				</div>
				))}
			</div>}
		</div>
	);
	//리스트에 있는 것들을 화면에 보이기 위한 방법 -> map()
	//map(배열의 item 변경 식) : map함수로 배열의 item을 변경하면 변경된 값을 가진 새 배열을 리턴
}

export default App; 