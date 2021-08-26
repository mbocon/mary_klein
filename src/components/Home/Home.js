import "./Home.css";
import { FaInfoCircle, FaHorse } from 'react-icons/fa';

export default function Home() {
   return (
      <div className="home">
         <div className="home-first">
            <div className="home-img-1"></div>
            <div className="home-content">
               <h1><small className="info"><FaInfoCircle /></small> About</h1>
               <p>
                    My name is Mary Klein. I graduated from Mission Farrier School and working towards AFA CF
               </p>
            </div>
         </div>
         <div className="home-second">
            <div className="home-img-2"></div>
            <div className="home-content">
               <h1>Professional Farrier <small className="info"><FaHorse /></small></h1>
               <p>
                Servicing the Hawaiian Islands, specifically Maui. 
               </p>
            </div>
         </div>
         <div className="home-third">
            <div className="home-img-3"></div>
            <div className="home-content">
               <h1>Title?</h1>
               <p>
                  What do you want me to put here? I can also add as many more boxes/images as you'd like
               </p>
            </div>
         </div>
      </div>
   );
}
