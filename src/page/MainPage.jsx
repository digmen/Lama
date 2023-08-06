import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from 'react-router-dom';

import logo from './img/lama.svg';
import lamavector from './img/lamavector.png';
import dowloand from './img/dowloand.png';

import './css/main.css';
import AnimatedImage from '../anime/Animate';

function MainPage() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section one">
              <div className="container">
                <nav className="nav">
                  <img src={logo} alt="logo lama" />
                  <Link to="/about" style={{ textDecoration: 'none' }}>
                    ABOUT US
                  </Link>
                </nav>
                <section className="main_one_text">
                  <span className="main_span">
                    Лама - ваш личный AI оператор на связи.
                  </span>
                  <span className="main_span">
                    Simplicity and ease with Lama.
                  </span>
                </section>
                <AnimatedImage />
              </div>
            </div>
            <div className="section">
              <div className="container main_two">
                <img
                  style={{ width: '550px', height: '500px' }}
                  src={lamavector}
                  alt="lama"
                />
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxHeight: '500px',
                  }}
                >
                  <span>Lama - your pathway to simplicity and ease.</span>
                  <span>
                    Lama - AI-оператор, помогающий быстро получить ответы на
                    вопросы в предварительно загруженных тематиках (бизнес,
                    медицина, госуслуги). Оператор использует технологии для
                    точной обработки запросов и предоставления соответствующей
                    информации из базы данных. Идеальный инструмент для быстрого
                    и качественного обслуживания клиентов, пациентов или
                    пользователей, оптимизируя процессы коммуникации и улучшая
                    пользовательский опыт.
                  </span>
                </div>
              </div>
            </div>
            <div className="section">
              <div className="container main_three">
                <h1>Dowloand app</h1>
                <img src={dowloand} />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default MainPage;
