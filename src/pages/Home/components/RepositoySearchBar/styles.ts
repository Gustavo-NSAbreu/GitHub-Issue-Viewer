import styled from "styled-components";

export const RepositorySearchBarContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2rem;
  min-height: 100vh;
`;

export const InputAndButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 54rem;
  gap: 0.75rem;

  h1 {
    align-self: flex-start;
    color: ${(props) => props.theme['gray-100']};
    font: 400 1.125rem Nunito, sans-serif;
  }

  form {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 54rem;
    gap: 1.25rem;
  }
  
  input[type="text"] {
    flex-grow: 100;

    padding: 0.75rem 1rem;
    height: 3.125rem;  
    width: max-content;

    border: 1px solid ${(props) => props.theme['gray-600']};
    border-radius: 0.375rem;
    
    background: ${(props) => props.theme['gray-950']};
    color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-500']};
      font: 400 0.875rem Nunito, sans-serif;
    }
  }

  button {
    flex-grow: 1;
    padding: 0.375rem 0.75rem;

    border: none;
    border-radius: 0.25rem;

    color: ${(props) => props.theme['gray-100']};

    cursor: pointer;

    background: ${props => props.theme.blue}; /* blue from your palette */
    &:hover {
      background: #2673c1;
      transition: background-color 0.3s ease;
    }
    &:active {
      background: #1d589f;
    }
  }
`;