import React from 'react';
import './css/main.css';

function AboutPage() {
  return (
    <div className="about_main">
      <h1>Lama</h1>
      <div className="cart">
        <div className="cart_ab">
          <div className="crat_ab_ab">
            <span>
              18-летний подросток, начал заниматься фронтенд-мобильной
              разработкой год назад. Его талант был замечен компанией, и он стал
              их стажером, внедряя свои инновационные идеи.
            </span>
          </div>
        </div>
        <div className="cart_ab">
          <div className="crat_ab_ab">
            <span>
              Бексултану, 18 лет, увлекающемуся обучением машинному обучению. Он
              активно учится и применяет свои знания в практике, стремясь стать
              профессионалом в области данных.
            </span>
          </div>
        </div>
        <div className="cart_ab">
          <div className="crat_ab_ab">
            <span>
              Бекендшик стал лучшим студентом своего потока благодаря своему
              умению и преданности программированию. Еще в юные годы он начал
              работать фрилансером, набирая ценный опыт и совершенствуя свои
              навыки разработки.
            </span>
          </div>
        </div>
        <div className="cart_ab">
          <div className="crat_ab_ab">
            <span>
              Ux/Ui дизайнер активно изучает UX/UI дизайн и стремится
              развиваться в этой области. Она усердно применяет полученные
              знания, работая над учебными и личными проектами, чтобы набрать
              ценный опыт.
            </span>
          </div>
        </div>
        <div className="cart_ab">
          <div className="crat_ab_ab">
            <span>
              Фронтенд-разработчик, окончив курсы, не терял времени и сразу
              начал работать, полностью погружаясь в профессиональную
              деятельность. Его стремительный прогресс и усердие сулят ему
              большой успех в карьере разработчика.
            </span>
          </div>
        </div>
      </div>
      <div className="cart_name">
        <span>
          Barsbek <br /> Mobile
        </span>
        <span>
          Beksultan <br /> Data science
        </span>
        <span>
          Islam <br /> Backend
        </span>
        <span>
          Sezim <br /> Ux/Ui
        </span>
        <span>
          Jakshylyk <br /> Frontend
        </span>
      </div>
      <h1 style={{ fontSize: '30px', marginTop: '80px' }}>
        The best team of this hackathon
      </h1>
    </div>
  );
}

export default AboutPage;
