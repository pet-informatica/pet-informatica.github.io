var Question = React.createClass({
  render: function(){
    return(
      <li>
        <div className="collapsible-header"><i className="mdi mdi-dots-vertical"></i>{this.props.title}</div>
        <div className="collapsible-body">{this.props.children}</div>
      </li>
    );
  }
});

var FaqBoard = React.createClass({
  componentDidMount: function(){
    $('.collapsible').collapsible({
      accordion : false
    });
  },
  render: function(){
    return(
      <div className="section scrollspy" id="faq">
        <div className="container">
          <h2 className="header text_orange">FAQ</h2>
          <div className="row">
            <ul className="collapsible popout" data-collapsible="accordion">
              <Question title="O que é o PET?">
                <p>
                  O programa de educação tutorial foi criado para apoiar atividades que integram ensino pesquisa e extensão.
                  O <span className="deep-orange-text">PET</span> proporciona aos alunos, sob orientação de um tutor, a realização de atividades extracurriculares que
                  complementem a formação acadêmica dos estudantes e, ao mesmo tempo, atendam necessidades do próprio curso
                  de graduação.
                </p>
              </Question>
              <Question title="O que é o PET Informática?">
                <p>
                  <span className="deep-orange-text">PET-Informática</span> é o <span className="deep-orange-text">PET</span> do curso de Ciência da Computação da Universidade Federal de Pernambuco, composto por
                  alunos bolsistas e não bolsistas, sob a orientação de um professor tutor, atualmente Prof Dr. Fernando da Fonseca da Silva.
                </p>
              </Question>
              <Question title="Como entro no PET?">
                <p>
                  Periodicamente, com a saída de antigos petianos, são abertas novas vagas para o grupo. A abertura do processo
                  seletivo é divulgada na nossa página do <a href="https://www.facebook.com/petinformatica/">Facebook</a> através do lançamento do edital de Convocação. O processo seletivo
                  se resume em duas etapas: uma primeira, onde o candidato envia currículos e outros documentos sobre a vida acadêmica
                  e a segunda, onde é realizada uma dinâmica em grupo e uma entrevista individual. O processo é aberto para alunos
                  de <span className="deep-orange-text">Ciência da Computação</span> da <span className="deep-orange-text">UFPE</span> que não tenham nenhuma reprovação no curso e que estejam entre o 2 e o 7 período.
                </p>
              </Question>
              <Question title="Como agender uma visita institucional?">
                <p>
                  Para agendar uma visita, o professor que deseja trazer a turma ao centro precisa mandar um <span className="deep-orange-text">email</span> para
                  o CIn através de <span className="deep-orange-text">ncsf@cin.ufpe.br</span> ou <span className="deep-orange-text">rvsj2@cin.ufpe.br</span> informando a instituição, o tamanho da turma, o dia e horários desejados.
                  Nós, em conjunto com o Centro, veremos a possibilidade da vaga e confirmamos a visita.
                </p>
              </Question>
              <Question title="Como participo da OPEI?">
                <p>
                  Se você é aluno: a inscrição para a <span className="deep-orange-text">OPEI</span> é realizada por intermédio de um professor responsável. Caso você queira participar,
                  verifique com a escola se existe um professor responsável pelo cadastro de alunos. Caso não tenha, procure um professor
                  que possa se responsabilizar pelo cadastro da escola através do formulário disponível no site da <a href="https://www.cin.ufpe.br/~pet/opei/">OPEI</a>. É importante que o regulamento seja seguido por alunos e
                  professores.
                </p>
                <p>
                  Se você é professor ou diretor: Leia o regulamento que está disponível na
                 aba <span className="deep-orange-text">quero me inscrever</span> no site da <a href="https://www.cin.ufpe.br/~pet/opei/">OPEI</a> e cadastre a sua escola.
                </p>
              </Question>
              <Question title="Quem pode participar do PET?">
                <p>
                  Diretamente, apenas alunos de Ciência da Computação que não tenham nenhuma reprovação no histórico escolar, mas alunos
                  de outros cursos e funcionários são mais do que convidados a participarem como voluntários de atividades como <span className="deep-orange-text">Doação de Sangue</span> e
                  também <span className="deep-orange-text">OPEI</span> conosco, além de assistirem as <span className="deep-orange-text">palestras</span> e
                  aos <span className="deep-orange-text">workshops</span>.
                </p>
              </Question>
              <Question title="Por que alunos de Engenharia da Computação não podem participar do PET?">
                <p>
                  Quando um grupo <span className="deep-orange-text">PET</span> é criado, ele fica associado a um curso de graduação da universidade e fica restrito
                  àquele curso. Quando o <span className="deep-orange-text">PET-Informática</span> foi criado, ele foi associado ao antigo curso de Informática, que foi substituído
                  pelo curso de Ciência da Computação e por este motivo, só pode receber alunos desse curso.
                </p>
              </Question>
              <Question title="Como entro em contato?">
                <p>
                  Você pode entrar em contato com o <span className="deep-orange-text">PET-Informática</span> através da nossa página no <a href="https://www.facebook.com/petinformatica/">Facebook</a> ou mandar e-mail
                  para a gente: <span className="deep-orange-text">petcomputacao-l@cin.ufpe.br</span>. No Cin, você pode visitar a nossa sala que fica no <span className="deep-orange-text">Bloco A</span>,
                  pertinho da <span className="deep-orange-text">Copa</span>. Você também pode falar diretamente com qualquer petiano pelos corredores ou redes sociais.
                </p>
              </Question>
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<FaqBoard />, document.getElementById('faq-board'));
