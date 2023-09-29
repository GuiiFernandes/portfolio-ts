import styled from 'styled-components';

export const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StatusProject = styled.a<{ $status: string; }>`
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

export const Title = styled.h2`
  position: absolute;
  padding: 10px;
  text-shadow: 0px 0px 5px rgba(0,0,0,0.8);
  z-index: 2;
  color: var(--light-green);
`;

export const TagsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 430px;
  overflow-x: scroll;
  display: flex;
  z-index: 2;
`;

export const TagProject = styled.span`
  padding: 3px 8px;
  margin: 10px;
  background-color: var(--dark-green);
  margin: 5px;
  border-radius: 5px;
  color: var(--dark-gray);
`;

export const DescriptionProj = styled.div`
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

export const GitHub = styled.a`
  position: absolute;
  bottom: -10px;
  right: 5px;
  margin: 1rem;
  font-size: 4rem;
  color: var(--white);
  z-index: 2;
  &:hover {
    color: var(--light-green);
    filter: drop-shadow(0px 0px 20px var(--dark-green));
  }
`;

export const Gif = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;
