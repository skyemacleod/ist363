import { useState } from 'react'
import Pioneer from './pioneer'
import './App.css'
import elizabethImg from './assets/elizabeth.jpg'
import timImg from './assets/tim.jpg'
import rayImg from './assets/ray.webp'

function App() {

const [pioneers, setPioneers] = useState([
  {
    id: 1,
    name: 'Elizabeth J. Feinler',
    age: '95',
    bio: 'Elizabeth Jocelyn "Jake" Feinler is an American information scientist. From 1972 until 1989 she was director of the Network Information Systems Center at the Stanford Research Institute. Her group operated the Network Information Center for the ARPANET as it evolved into the Defense Data Network and the Internet.',
    img: elizabethImg,
    viewed: 'false',
  },
  {
    id: 2,
    name: 'Tim Berners Lee',
    age: '70',
    bio: 'Sir Timothy John Berners-Lee, also known as TimBL, is an English computer scientist best known as the inventor of the World Wide Web, HTML, the URL system, and HTTP. He is a professorial research fellow at the University of Oxford and a professor emeritus at the Massachusetts Institute of Technology.',
    img: timImg,
    viewed: 'false',
  },
  {
    id: 3,
    name: 'Ray Tomlinson',
    age: '74',
    bio: 'Raymond Samuel Tomlinson was an American computer programmer who invented the first email program on the ARPANET system, the precursor to the Internet, in 1971; it was the first system able to send mail between users on different hosts connected to ARPANET.',
    img: rayImg,
    viewed: 'false',
  },
]);
const [selectedPioneer, setSelectedPioneer] = useState(null);

function handleClick(pioneer) {

  setPioneers(pioneers.map(p =>
    p.id === pioneer.id ? { ...p, viewed: true } : p
  ));
  setSelectedPioneer({ ...pioneer, viewed: true });
}
function handleBack() {
  setSelectedPioneer(null);
}

return (
  <div className="app-container">
    <h1>Internet Pioneers Bios</h1>

    {}
    {selectedPioneer ? (
      <Pioneer pioneer={selectedPioneer} onBack={handleBack} />
    ) : (
      <div className="card-grid">
        {pioneers.map(pioneer => (
          <div
            key={pioneer.id}
            className="card"
            onClick={() => handleClick(pioneer)}
          >
            {pioneer.viewed && <span className="viewed-tag">VIEWED</span>}
            <img src={pioneer.img} alt={pioneer.name} />
            <p>{pioneer.name}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);
}

export default App;
