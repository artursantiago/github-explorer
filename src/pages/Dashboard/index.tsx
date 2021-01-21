import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo Fithub Explorer" />
      <Title>Explore Repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/47838241"
            alt="Artur Santiago"
          />
          <div>
            <strong>artursantiago/pokedex</strong>
            <p>Descrição do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/47838241"
            alt="Artur Santiago"
          />
          <div>
            <strong>artursantiago/pokedex</strong>
            <p>Descrição do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/47838241"
            alt="Artur Santiago"
          />
          <div>
            <strong>artursantiago/pokedex</strong>
            <p>Descrição do projeto</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
