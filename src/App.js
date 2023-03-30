import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Description from './Description';
import image from './images/mart.jpg';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <img className='image' src={image} alt="" />
      <div>
      <Title name="Profile" />
   <Description name='Gabriel Martinelli, is a Brazilian professional footballer who plays for Arsenal and the Brazil national team.Martinelli began his senior club career playing for Ituano and signed for Arsenal in July He made his senior debut in 2022. ' />
   </div>
    </div>
  );
}

export default App;
