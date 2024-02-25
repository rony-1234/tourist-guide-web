import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
const Slide = () => {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow:<Arrow/>,
      prevArrow:<Arrow/>,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
      ]
    };
    return (
      <div>
          
          <Slider {...settings}>
            <div className="w-44 h-44 rounded-full bg-gradient-to-r from-[#151515] to">
             
              
            </div>
            <div className="w-44 h-44 rounded-full bg-black">
            
             
            </div>
            <div className="w-44 h-44 rounded-full bg-black">
            
            </div>
            <div className="w-44 h-44 rounded-full bg-black">
          
          
            </div>
           
          </Slider>
        </div>
    );
  };

export default Slide;