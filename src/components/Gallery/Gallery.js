import "./Gallery.css";
import img1 from "../../Images/blackAndWhite.JPG";
import img2 from "../../Images/blackHoof.jpg";
import img3 from "../../Images/kneeling.JPG";
import img4 from "../../Images/furnace.JPG";
import img5 from "../../Images/hammering.JPG";
import img6 from "../../Images/heartShoe.jpg";
import img7 from "../../Images/horseshoe.JPG";
import img8 from "../../Images/horseShoe2.jpg";
import img9 from "../../Images/brownHorse.JPG";
import img10 from "../../Images/kneelingB&W.JPG";
import img11 from "../../Images/withHorse.jpg";
import $ from "jquery";

const imgArr = [
   img1,
   img2,
   img3,
   img4,
   img5,
   img6,
   img7,
   img8,
   img9,
   img10,
   img11,
];

export default function Gallery(props) {
   function flip(e) {
      e.preventDefault();
      $(e.target).addClass("rotate");
      setTimeout(() => {
         $(e.target).removeClass("rotate");
      }, 1000);
   }
   return (
      <div className="gallery-page">
         <div
            className="gallery"
            style={{ background: props.theme === "dark" ? "#000" : "#fff" }}
         >
            {imgArr.map((img, idx) => {
               return (
                  <img
                     onClick={flip}
                     className="gallery-img"
                     key={idx}
                     src={img}
                     alt="farrier work"
                  />
               );
            })}
         </div>
      </div>
   );
}
