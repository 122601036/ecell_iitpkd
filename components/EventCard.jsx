import React from 'react'
import "./eventCard.css"
const EventCard = (props) => {
  return (
    <div className="content">
                {/* <img src={props.image} alt="" className="card" /> */}
                <video src={props.vid} className='card' autoPlay loop muted playsInline></video>
                <div className="description">
                    {props.children}
                </div>
            </div>
    
  )
}

export default EventCard
{/*<div className="container">
            
             <div className="content">
                <img src="/startup expo.jpg" alt="" className="card" />
                <div className="description">
                    <h1>Startup Expo</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae unde facilis possimus at soluta ad architecto sint sequi nam, doloribus saepe distinctio sed consequuntur corrupti quis eligendi neque consequatur? Assumenda eligendi nobis, quas molestiae hic iusto quae nam eum aliquam reprehenderit, distinctio id, ipsum itaque beatae iure qui unde consectetur?
                    </p>
                </div>
            </div>
            <div className="content">
                <img src="/hackathon.jpg" alt="" className="card" />
                <div className="description">
                    <h1>Hackathon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis odit suscipit dolores a nemo exercitationem perferendis fugit magni accusantium eius est amet eos non sapiente, facilis sit illum quos voluptatum temporibus architecto assumenda. Corporis dignissimos a ex quidem, dolorem laudantium ut tenetur deleniti distinctio tempore veniam dolorum accusantium reiciendis quaerat?</p>
                </div>
            </div>
            <div className="content">
                <img src="/ideathon.jpg" alt="" className="card" />
                <div className="description">
                    <h1>Ideathon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui explicabo dolores incidunt ut repudiandae ad expedita magni ab perferendis tenetur, modi iure molestiae assumenda et non laboriosam totam doloribus consectetur tempore consequuntur esse! Voluptas, officiis inventore nemo facere reprehenderit ipsa necessitatibus quaerat adipisci? Dignissimos ducimus obcaecati nulla id eveniet.</p>
                </div>
            </div>
            <div className="content">
                <img src="/ideathon.jpg" alt="" className="card" />
                <div className="description">
                    <h1>Ideathon</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis qui explicabo dolores incidunt ut repudiandae ad expedita magni ab perferendis tenetur, modi iure molestiae assumenda et non laboriosam totam doloribus consectetur tempore consequuntur esse! Voluptas, officiis inventore nemo facere reprehenderit ipsa necessitatibus quaerat adipisci? Dignissimos ducimus obcaecati nulla id eveniet.</p>
                </div>
            </div> 
        </div>*/}