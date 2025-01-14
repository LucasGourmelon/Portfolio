import React, { useState } from "react";
import Modal from 'react-modal';  
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Zoom } from 'swiper/modules';
import { SkillsDiv } from "../../components/comptence";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, datacompetences, texts, meta } from "../../content_option";
import { FaGithub } from "react-icons/fa";
import "./style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

export const Portfolio = () => {
  const sliderSettings = {
    modules: [Navigation, Pagination, Autoplay, Zoom], 
    spaceBetween: 10,
    slidesPerView: 1,
    navigation: true,
    pagination: true,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImages, setModalImages] = useState([]);  
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index, images) => {
    setCurrentIndex(index);
    setModalImages(images); 
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <React.Fragment key={i}>
                <div className="po_item">
                  <div className="po_text">
                    <div>
                      <h2>{data.title}</h2>
                      <p>{data.description}</p>
                      <div className="competences">
                        <h4>{texts.competencesprojet}</h4>
                        <div className="skills_buttons ms-auto">
                          {Object.keys(data.competences).map((key, idx) => {
                            if (data.competences[key] && datacompetences[key]) {
                              const competence = datacompetences[key];
                              return (
                                <SkillsDiv
                                  key={idx}
                                  name={competence.title}
                                  description={data.competences[key]}
                                />
                              );
                            }
                            return null;
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="po_technos">
                      <h4>{texts.technos}</h4>
                      <div className="po_technos_list">
                        {Object.keys(data.technos).map((techno, j) => {
                          return (
                            <div key={j} className="po_techno" title={techno}>
                              {data.technos[techno] && React.createElement(data.technos[techno])}
                            </div>
                          );                          
                        })}
                      </div>
                    </div>
                    {data.link && (
                      <a
                        className="github_link"
                        href={data.link.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{texts.voirprojet}</p>
                        {/* si data.link.icon est null ou undefined, on affiche le logo github */}
                        {data.link.icon ? React.createElement(data.link.icon) : <FaGithub />}
                      </a>
                    )}
                  </div>
                  <div className="po_img_div">
                    {data.images.length > 1 ? (
                      <div className="po_slider" key={i}>
                        <Swiper {...sliderSettings}>
                          {data.images.map((image, j) => {
                            return (
                              <SwiperSlide key={j}>
                                <img
                                  src={image}
                                  alt={`Image ${j + 1}`}
                                  className="po_img_slider po_img"
                                  onClick={() => openModal(j, data.images)}
                                  style={{ cursor: 'pointer', width: '100%', height: 'auto' }}
                                />
                              </SwiperSlide>
                            );
                          })}
                        </Swiper>
                      </div>
                    ) : (
                      <img
                        src={data.images[0]}
                        alt={data.title}
                        className="po_img"
                        onClick={() => openModal(0, data.images)} 
                      />
                    )}
                  </div>
                </div>
                {i !== dataportfolio.length - 1 && <hr className="po_divider" />}
              </React.Fragment>
            );
          })}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          appElement={document.getElementById('root')} 
          style={{
            overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
            content: { 
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              padding: '0',
              border: 'none',
              background: 'none',
              

            },
          }}
        >
          <Swiper
            {...sliderSettings}
            initialSlide={currentIndex} 
            loop={true}
            style={{
              height: '70vh', 
              width: '70vw', 
            }}
          >
            {modalImages.map((image, j) => {
              return (
                <SwiperSlide key={j}>
                  <img
                    src={image}
                    alt={`Slide ${j + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Modal>
      </Container>
    </HelmetProvider>
  );
};