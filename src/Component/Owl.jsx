import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const arrowStyle = (side) => ({
  position: 'absolute',
  [side]: '25px',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '30px',
  zIndex: 2,
  color: 'white',
  cursor: 'pointer',
});
const NextArrow = ({ onClick }) => <div onClick={onClick} style={arrowStyle('right')}><FaArrowRight /></div>;
const PrevArrow = ({ onClick }) => <div onClick={onClick} style={arrowStyle('left')}><FaArrowLeft /></div>;

const Owl = () => {
  const images = [
    "https://i.pinimg.com/736x/a0/ea/3e/a0ea3e5d2ea06dfad8936682d1a987f1.jpg",
    "https://images.filmibeat.com/img/2020/08/sameeraredy-1596287158.jpg",
    "https://images7.alphacoders.com/824/824025.jpg",
    "https://wallpapers.com/images/featured/avengers-vm16xv4a69smdauy.jpg",
    "https://i.pinimg.com/736x/e1/ba/a8/e1baa878a90533b0a08fa65f3ea9e26c.jpg"
];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1, centerPadding: '0', arrows: true }
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, centerPadding: '0', arrows: false }
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerPadding: '0', arrows: false }
      }
    ]
  };

  return (
    <div style={{ margin: '20px 0', position: 'relative', maxWidth: '100%' }}>
      <Slider {...settings}>
        {images.map((url, idx) => (
          <div key={idx} style={{ display: 'grid', placeItems: 'center', padding: '0 10px' }}>
            <img
              src={url}
              alt={'Slide ${idx}'}
              style={{   width: '100%',
    height: '50vh',
    objectFit:'contain',
    borderRadius: '0',
    margin: 0,
    padding: 0,}}
            />
          </div>
        ))}
      </Slider>
      <style jsx global>{`
        .slick-track { margin: 0 auto; } /* Center slides when only one item */ :contentReference[oaicite:1]{index=1}
      `}</style>
    </div>
  );
};

export default Owl;