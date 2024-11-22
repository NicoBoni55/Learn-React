import Avatar from './assets/avatar.jpeg';
import './PresentationCard.css';

export default function PresentationCard() {
  let name = 'Nicolas';
  let age = 21;
  const location = 'Uruguay' 
  return(
      <div className="presentation-card">
          <img src={Avatar} alt="avatar" className='avatar'/>
          <h1 className='presentation-description'>
            Hi, I’m {name},<br /> I’m {age} years old, and<br />I currently live in {location}.
          </h1>
      </div>
  )
}
