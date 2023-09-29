import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 10px 10px;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: var(--dark-gray);
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
`;

export const Textarea = styled.textarea`
  position: relative;
  width: 100%;
  background: transparent;
  outline: none;
  box-shadow: none;
  border: none;
  color: var(--dark-gray);
  font-size: 1em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  z-index: 10;
  resize: none;
  &:focus {
    height: 150px;
    padding: 10px 5px;
  }
  &:valid {
    height: 150px;
    padding: 10px 5px;
  };
`;

export const Span = styled.span`
  position: absolute;
  left: 0;
  padding: 20px 10px 10px;
  font-size: 1em;
  color: var(--white);
  letter-spacing: 00.05em;
  transition: 0.5s;
  pointer-events: none;
  ${Input}:focus ~ & {
    color: var(--dark-green);
    transform: translateX(-10px) translateY(-34px);
    font-size: 0.75em;
  };
  ${Input}:valid ~ & {
    color: var(--dark-green);
    transform: translateX(-10px) translateY(-34px);
    font-size: 0.75em;
  }
  ${Textarea}:focus ~ & {
    color: var(--dark-green);
    transform: translateX(-10px) translateY(-34px);
    font-size: 0.75em;
  };
  ${Textarea}:valid ~ & {
    color: var(--dark-green);
    transform: translateX(-10px) translateY(-34px);
    font-size: 0.75em;
  }
`;

export const I = styled.i`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: var(--dark-green);
  border-radius: 4px;
  transition: 0.5s;
  pointer-events: none;
  z-index: 9;
  ${Input}:focus ~ & {
    height: 44px;
  };
  ${Input}:valid ~ & {
    height: 44px;
  }
  ${Textarea}:focus ~ & {
    height: 150px;
  };
  ${Textarea}:valid ~ & {
    height: 150px;
  }
`;

export const Inputbox = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
`;

export const Inputbox2 = styled.div`
  position: relative;
  margin-top: 20px;
  width: 500px;
`;

export const TextareaContainer = styled.div`
  height: 170px;
  display: flex;
  align-items: flex-end;
`;

export const Form = styled.form`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  max-width: 500px;
  justify-content: space-between;
  gap: 10px;
`;

export const SubmitBtn = styled.button`
  margin: 1rem 0;
  appearance: none;
  background-color: transparent;
  border: 0.125rem solid var(--white);
  color: var(--light-green);
  background-color: var(--dark-gray);
  border-radius: 0.9375rem;
  cursor: pointer;
  min-width: 14.8rem;
  width: 100%;
  font-weight: bold;
  font-size: 2rem;
  outline: none;
  padding: 1rem;
  text-align: center;
  vertical-align: middle;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  will-change: transform;
  &:hover {
    color: var(--black);
    background-color: var(--dark-green);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  };
  &:disabled {
    pointer-events: none;
  };
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 1rem;
  width: 100%;
`;
