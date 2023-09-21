/* eslint-disable import/no-unresolved */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { MdOutlineCloudDone, MdOutlineCloudOff } from 'react-icons/md';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow } from 'swiper/modules';
import projectsData from '../../data/projectsData';

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StatusProject = styled.a<{ $status: string; }>`
  position: absolute;
  top: 0;
  right: 0;
  padding: 10px 20px;
  color: var(--white);
  text-decoration: none;
  background-color: ${(props) => (props.$status === 'Visitar'
    ? 'var(--online-green)' : 'var(--offline-red)')};;
  border-radius: 100px;
  margin: 10px;
  box-shadow: 5px 5px 8px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  z-index: 2;
`;

const Title = styled.h2`
  position: absolute;
  padding: 10px;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.8);
  z-index: 2;
  color: var(--light-green);
`;

const TagsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 2;
`;

const TagProject = styled.span`
  padding: 3px 8px;
  margin: 10px;
  background-color: var(--dark-gray);
  margin: 5px;
  border-radius: 5px;
  color: var(--light-green);
`;

const DescriptionProj = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0px;
  width: 100%;
  transition: height 0.5s ease;
  overflow: hidden;
  padding: 0 20px 60px 20px;
  text-align: justify;
  background: linear-gradient(
    180deg,
  rgba(0,0,0,0.10688025210084029) 0%,
  rgba(0,0,0,0.24413515406162467) 5%,
  rgba(0,0,0,0.5718662464985995) 30%,
  rgba(0,0,0,1) 100%
  );
  z-index: 1;
  ${ProjectContainer}:hover & {
    height: 100%;
  }
`;

export default function App() {
  return (
    <Swiper
      effect="coverflow"
      autoplay={ { delay: 3000 } }
      loop
      grabCursor
      centeredSlides
      slidesPerView="auto"
      coverflowEffect={ {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      } }
      pagination
      modules={ [EffectCoverflow] }
      className="mySwiper"
    >
      { projectsData.mainProjects.map((project) => {
        const status = project.link ? 'Visitar' : 'Offline';
        return (
          <SwiperSlide key={ project.id }>
            <ProjectContainer>
              <div>
                <Title>{ project.title }</Title>
                <StatusProject
                  href={ project.link }
                  target="_blank"
                  rel="noopener noreferrer"
                  $status={ status }
                >
                  { status === 'Visitar' ? (
                    <MdOutlineCloudDone className="status" />
                  ) : (
                    <MdOutlineCloudOff className="status" />
                  )}
                  { status }
                </StatusProject>
              </div>
              <img src={ project.gif } alt={ project.title } />
              <DescriptionProj>{ project.description }</DescriptionProj>
              <TagsContainer>
                { project.tags.split(',').map((tag) => (
                  <TagProject key={ tag }>{ tag }</TagProject>
                )) }
              </TagsContainer>
            </ProjectContainer>
          </SwiperSlide>
        );
      }) }
    </Swiper>
  );
}
