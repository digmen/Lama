import React from 'react';
import { useSpring, animated } from 'react-spring';
import iphone from '../page/img/iphone.png';
import '../page/css/main.css';

const AnimatedImage = () => {
  const props = useSpring({
    from: { transform: 'translateY(100vh)' }, // Начальное состояние: изображение снизу страницы
    to: { transform: 'translateY(0vh)' }, // Конечное состояние: изображение находится на своем месте
    config: { duration: 10 }, // Длительность анимации в миллисекундах
  });

  return (
    <animated.div className="animated-container" style={props}>
      <div className="anim_div">
        <img src={iphone} alt="Image" />
      </div>
    </animated.div>
  );
};

export default AnimatedImage;
