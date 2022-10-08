import logo from './logo.svg';
import Header from './components/blocks/Header/component';
import MainBlock from './components/blocks/MainBlock/component';
import AboutBlock from './components/blocks/AboutBlock/component';
import Footer from './components/blocks/Footer/component';
import './modules/bootstrap/scss/bootstrap.scss';
import "./fonts/Inter/stylesheet.css";


function App() {
	return (
	<div className="App">
		<div className='main_content'>
			<Header />
			<MainBlock />
			<AboutBlock />
		</div>
		<Footer />
	</div>
	);
}

export default App;
