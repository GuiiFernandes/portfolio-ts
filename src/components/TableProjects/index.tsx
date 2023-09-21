/* eslint-disable react/jsx-max-depth */
import { useState } from 'react';

import styles from './TableProjects.module.css';

const INITIAL_STATE = {
  tbody1: 'invisible',
  tbody2: 'invisible',
  tbody3: 'invisible',
  tbody4: 'invisible',
  tbody5: 'invisible',
  tbody6: 'invisible',
};

export default function TableProjects() {
  const [invisible, setInvisible] = useState(INITIAL_STATE);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className={ styles.title }><h3>PROJETOS</h3></th>
          </tr>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody3: invisible.tbody3 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                FULL-STACK
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody3" className={ styles[invisible.tbody3] }>
          <tr>
            <td><a href="https://guiifernandes.github.io/shopping-cart/" target="_blank" rel="noopener noreferrer">Shopping Cart</a></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody1: invisible.tbody1 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                FUNDAMENTOS
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody1" className={ styles[invisible.tbody1] }>
          <tr>
            <td><a href="https://guiifernandes.github.io/lessons-learned/" target="_blank" rel="noopener noreferrer">Lessons Learned</a></td>
          </tr>
          <tr>
            <td><a href="https://github.com/GuiiFernandes/playground-functions" target="_blank" rel="noopener noreferrer">Playground Functions</a></td>
          </tr>
          <tr>
            <td><a href="https://guiifernandes.github.io/pixels-art/" target="_blank" rel="noopener noreferrer">Pixels Art</a></td>
          </tr>
          <tr>
            <td>
              Bônus:
              <a href="https://guiifernandes.github.io/carta-misteriosa" target="_blank" rel="noopener noreferrer">Carta Misteriosa</a>
              {' '}
              |
              <a href="https://guiifernandes.github.io/color-guess/" target="_blank" rel="noopener noreferrer">Adivinhação de Cor</a>
              {' '}
              |
              <a href="https://guiifernandes.github.io/meme-generator" target="_blank" rel="noopener noreferrer">Gerador de Meme</a>
              {' '}
              |
              <a href="https://guiifernandes.github.io/todo-list" target="_blank" rel="noopener noreferrer">Lista de Tarefas</a>
            </td>
          </tr>
          <tr>
            <td><a href="https://guiifernandes.github.io/trybewarts/" target="_blank" rel="noopener noreferrer">TrybeWarts</a></td>
          </tr>
          <tr>
            <td><a href="https://github.com/GuiiFernandes/js-unit-tests" target="_blank" rel="noopener noreferrer">JS Unit Tests</a></td>
          </tr>
          <tr>
            <td><a href="https://github.com/GuiiFernandes/zoo-functions" target="_blank" rel="noopener noreferrer">Zoo Functions</a></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody2: invisible.tbody2 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                FRONT-END
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody2" className={ styles[invisible.tbody2] }>
          <tr>
            <td><a href="https://guiifernandes.github.io/shopping-cart/" target="_blank" rel="noopener noreferrer">Shopping Cart</a></td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody4: invisible.tbody4 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                BACK-END
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody4" className={ styles[invisible.tbody4] }>
          <tr>
            <td><a href="https://guiifernandes.github.io/shopping-cart/" target="_blank" rel="noopener noreferrer">Shopping Cart</a></td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th className={ styles.title }><h3>OUTROS</h3></th>
          </tr>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody6: invisible.tbody6 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                WEB 3
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody6" className={ styles[invisible.tbody6] }>
          <tr>
            <td className={ styles.link }>Em breve</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th className={ styles.title }><h3>EXERCÍCIOS</h3></th>
          </tr>
          <tr>
            <th className={ styles.border_t }>
              <button
                onClick={ () => setInvisible({
                  ...invisible,
                  tbody5: invisible.tbody5 ? '' : 'invisible',
                }) }
                className={ styles.category }
              >
                FRONT-END
              </button>
            </th>
          </tr>
        </thead>
        <tbody id="tbody5" className={ styles[invisible.tbody5] }>
          <tr>
            <td><a href="https://guiifernandes-field-validator.surge.sh/" target="_blank" rel="noopener noreferrer">Validador de Campos</a></td>
          </tr>
          <tr>
            <td><a href="https://guiifernandes.github.io/casa-de-cambio/" target="_blank" rel="noopener noreferrer">Casa de Câmbio</a></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
