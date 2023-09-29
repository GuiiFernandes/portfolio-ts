/* eslint-disable import/no-unresolved */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineCloudDone, MdOutlineCloudOff } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';
// import required modules
import { EffectCoverflow } from 'swiper/modules';

import projectsData from '../../data/projectsData';
import { ProjectContainer, Title, StatusProject, Gif,
  DescriptionProj, TagsContainer, TagProject, GitHub } from './styled';

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
              <Gif src={ project.gif } alt={ project.title } />
              <DescriptionProj>{ project.description }</DescriptionProj>
              <TagsContainer>
                { project.tags.split(',').map((tag) => (
                  <TagProject key={ tag }>{ tag }</TagProject>
                )) }
              </TagsContainer>
              <GitHub href="https://github.com/GuiiFernandes" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </GitHub>
            </ProjectContainer>
          </SwiperSlide>
        );
      }) }
    </Swiper>
  );
}
