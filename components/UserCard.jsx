import React from 'react'
import './userCard.css';
import userLinkedIn from "../src/assets/usercard_lk.svg";
import userMail from "../src/assets/usercard_mail.svg";

const UserCard = (props) => {
  return (
    <div className="card_container">
        <div className="user_card">
            <div className="image">
                <img 
                    src={props.image} 
                    alt={props.name} 
                    className="user_img"
                    // Use lazy loading if prop is passed, or default to auto
                    loading="lazy"
                />
            </div>
            <h3>{props.name}</h3>
            <h4>{props.role}</h4>
            <div className="socials">
                <h3>Socials</h3>
                <ul>
                    {props.linkedin && (
                        <li>
                            <a href={props.linkedin} className='card_a' target='_blank' rel="noreferrer">
                                <img src={userLinkedIn} alt="linkedin" />
                            </a>
                        </li>
                    )}
                    {props.mail && (
                        <li>
                            <a href={`mailto:${props.mail}`} className='card_a'>
                                <img src={userMail} alt="mail" />
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </div>  
  )
}

export default UserCard;