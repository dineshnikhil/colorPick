import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<Nav />
			<main>
				<Home />
			</main>
		</div>
	);
}

export default App;
