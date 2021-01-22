import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 4.8rem;
  color: #3a3a3a;
  max-width: 45rem;
  line-height: 5.6rem;

  margin-top: 8rem;
`;

export const Form = styled.form<FormProps>`
  display: flex;
  flex-wrap: wrap;
  max-width: 70rem;
  margin-top: 4rem;

  input {
    flex: 2 1 40rem;
    color: #3a3a3a;
    border-radius: 0.5rem 0rem 0rem 0.5rem;
    border: 2px solid #fff;
    border-right: none;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    flex: 1 1 20rem;
    border: none;
    color: white;
    font-weight: bold;
    background-color: #04d361;
    border-radius: 0rem 0.5rem 0.5rem 0rem;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }

  input,
  button {
    padding: 2.4rem;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 0.8rem;
`;

export const Repositories = styled.div`
  margin-top: 8rem;
  max-width: 70rem;

  a {
    display: flex;
    align-items: center;

    text-decoration: none;
    padding: 2.4rem;
    border-radius: 0.5rem;
    width: 100%;
    background: white;
    transition: transform 0.2s ease;

    // Espaçamento da lista
    & + a {
      margin-top: 1.6rem;
    }

    &:hover {
      transform: translateX(1rem);
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }

    div {
      margin: 0 1.6rem;
      flex: 1;

      strong {
        font-size: 2rem;
        color: #3d3d4d;
      }

      p {
        font-size: 1.8rem;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
