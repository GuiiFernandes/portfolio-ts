import styles from './InfosAbout.module.css';

const getAge = () => {
  const birthDate: any = new Date('1992-07-02');
  const yearNow: any = new Date();
  return Math.floor((yearNow - birthDate) / (1000 * 60 * 60 * 24 * 365));
};

const lineHeigth = 'line-heigth';
const textIndent2 = 'text-ident2';
const textIndent4 = 'text-ident4';

export default function InfosAbout() {
  return (
    <div className={ styles['code-text'] }>
      <p className={ styles[lineHeigth] }>
        <span className={ styles.gray }>const</span>
        {' '}
        nome
        {' '}
        <span className={ styles.green1 }>=</span>
        {' '}
        <span className={ styles.green2 }>
          <strong>&#39;Guilherme Fernandes&#39;</strong>
        </span>
        ;
      </p>
      <p className={ styles[lineHeigth] }>
        <span className={ styles.gray }>const</span>
        {' '}
        idade
        {' '}
        <span className={ styles.green1 }>
          =
          {' '}
          {getAge()}
        </span>
        ;
      </p>
      <p className={ styles[lineHeigth] }>
        <span className={ styles.gray }>const</span>
        {' '}
        formacao
        {' '}
        <span className={ styles.green1 }>=</span>
        {' '}
        [
        <span className={ styles.green2 }>&#39;Desemnvolvedor Web Jr.&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>
          &#39;Tecnólogo em Gestão Financeira&#39;
        </span>
        ];
      </p>
      <p>
        <span className={ styles.gray }>const</span>
        {' '}
        status
        {' '}
        <span className={ styles.green1 }>=</span>
        {' '}
        &#123;
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>instituicoesEducacionais</span>
        : [
        <span className={ styles.green2 }>&#39;Trybe&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;IFMG - Formiga&#39;</span>
        ],
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>trabalho</span>
        : [&#123;
      </p>
      <p className={ styles[textIndent4] }>
        <span className={ styles.green1 }>empresa</span>
        :
        {' '}
        <span className={ styles.green2 }>
          &#39;Sweet Pet - Estética Animal&#39;
        </span>
        ,
      </p>
      <p className={ styles[textIndent4] }>
        <span className={ styles.green1 }>cargo</span>
        :
        {' '}
        <span className={ styles.green2 }>&#39;Gestor Financeiro&#39;</span>
        ,
      </p>
      <p className={ styles[textIndent2] }>&#125;,</p>
      <p className={ styles[textIndent2] }>
        &#123;
      </p>
      <p className={ styles[textIndent4] }>
        <span className={ styles.green1 }>empresa</span>
        :
        {' '}
        <span className={ styles.green2 }>
          &#39;Trybe&#39;
        </span>
        ,
      </p>
      <p className={ styles[textIndent4] }>
        <span className={ styles.green1 }>cargo</span>
        :
        {' '}
        <span className={ styles.green2 }>&#39;Monitor de Instrução&#39;</span>
        ,
      </p>
      <p className={ styles[textIndent2] }>&#125;]</p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>interesses</span>
        : [
        <span className={ styles.green2 }>&#39;Aplicacoes Web&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Financas&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Economia&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Web3&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Investimentos&#39;</span>
        ],
      </p>
      <p className={ styles[lineHeigth] }>&#125;;</p>
      <p>
        <span className={ styles.gray }>const</span>
        {' '}
        habilidades
        {' '}
        <span className={ styles.green1 }>=</span>
        {' '}
        &#123;
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>linguagens</span>
        : [
        <span className={ styles.green2 }>&#39;TypeScript&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Javascript&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;MySQL&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;HTML&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Solidity&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;VBA Excel&#39;</span>
        ],
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>design</span>
        : [
        <span className={ styles.green2 }>&#39;Tailwind&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Bootstrap&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;CSS&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Figma&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Corel Draw&#39;</span>
        ],
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>ferramentas</span>
        : [
        <span className={ styles.green2 }>&#39;React&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Redux&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Docker&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Node.js&#39;</span>
        ],
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>plataformas</span>
        : [
        <span className={ styles.green2 }>&#39;Linux&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;GitHub&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;VS Code&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Microsoft Office&#39;</span>
        ],
      </p>
      <p className={ styles[textIndent2] }>
        <span className={ styles.green1 }>testes</span>
        : [
        <span className={ styles.green2 }>&#39;Mocha&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Chai&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Sinon&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;RTL&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Vitest&#39;</span>
        ,
        {' '}
        <span className={ styles.green2 }>&#39;Jest&#39;</span>
        ],
      </p>
      <p className={ styles[lineHeigth] }>&#125;;</p>
    </div>
  );
}
