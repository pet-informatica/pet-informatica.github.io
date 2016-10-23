var Slide = React.createClass({
  render: function(){
    return(
      <li>
        <img className="act-img" src={this.props.pic}/>
      </li>
    );
  }
});

var Slider = React.createClass({
  render: function(){
    return(
      <div className="slider">
        <ul className="slides">
          {this.props.children}
        </ul>
      </div>
    );
  }
});

var Activity = React.createClass({
  render: function(){
    return(
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <Slider>
              <Slide pic="http://materializecss.com/images/office.jpg"></Slide>
              <Slide pic="http://chainimage.com/images/g%C3%B3ra-mount-assiniboine-kanada-tapeta-na-tapetyczne-pl.jpg"></Slide>
            </Slider>
          </div>
          <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {this.props.title}
                <i className="mdi mdi-dots-vertical right"></i>
              </span>
          </div>
          <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                {this.props.title}
                <i className="mdi mdi-close right"></i>
              </span>
              {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

var ActivityBoard = React.createClass({
  componentDidMount: function(){
    $('.slider').slider({
      indicators: false,
      height: 200
    });
  },
  render: function(){
    return(
      <div className="section scrollspy" id="activities">
        <div className="container">
          <h2 className="header text_orange">Atividades</h2>
          <div className="row">
            <Activity title="Palestra e Workshop" pic="http://materializecss.com/images/office.jpg">
              <p>
                Buscando dar aos alunos do cIn novos conhecimentos, o <span className="deep-orange-text">PET-Informática</span> realiza bimestralmente
                palestras de temas relacionados tanto à computação quanto à temas diversificados, possibilitando
                uma troca de conhecimentos de uma grande variedade de assuntos.
              </p>
              <p>
                A cada bimestre, o <span className="deep-orange-text">PET-Informática</span>
                também promove workshops de temas relevantes, como javascript,
                github, e docker. Muitas vezes os workshops também são voltados para descontrair os estudantes,
                criando uma oportunidade de diversão e engajamento para fugir da rotina!
              </p>
            </Activity>
            <Activity title="Visita dos Colégios" pic="http://materializecss.com/images/office.jpg">
              <p>
                Em parceria com o CIn, o <span className="deep-orange-text">PET-Informática</span> organiza visitas para qualquer colégio que esteja interessado em
                mostrar o Centro para seus alunos, a fim de ajudar na escolha profissional! Para marcar a
                visita da sua escola, veja o processo na seção <a href="#faq-board">FAQ</a>. Durante a visita,
                vamos fazer um tour com os alunos pelos prédios do CIn, e também fazer uma apresentação do curso!
              </p>
            </Activity>
            <Activity title="Capacitação" pic="http://materializecss.com/images/office.jpg">
              <p>
                É uma forma de retribuirmos ao centro tudo aquilo que ele nos fornece! Um curso semestral voltado principalmente
                para servidores da UFPE e moradores da região onde são ensinadas noções básicas e a
                vançadas de computador, como internet, office e Google Drive.
              </p>
            </Activity>
            <Activity title="Dia do Calouro" pic="http://materializecss.com/images/office.jpg">
              <p>
                Ocorrendo na primeira semana de aula de cada semestre, o <span className="deep-orange-text">Dia do Calouro</span> é quando os novos alunos
                são apresentados, pela visão de outros alunos, aos cursos, ao Centro e as oportunidades oferecidas pela universidade.
              </p>
            </Activity>
            <Activity   title="Doação de Sangue" pic="http://materializecss.com/images/office.jpg">
              <p>
                Em parceria com o HEMOPE e com o CIn, o <span className="deep-orange-text">PET-Informática</span> realiza semestralmente uma campanha de doação de sangue
                onde todas as pessoas, de dentro ou fora do centro, são convidadas a ajudar o próximo com
                comodidade, construindo uma consciência social importante para qualquer cidadão.
              </p>
            </Activity>
            <Activity title="OPEI" pic="http://materializecss.com/images/office.jpg">
              <p>
                Ocorrendo desde 2015, a <span className="deep-orange-text">Olimpíada Pernambucana de Informática</span> se espelha na OBI e tem como objetivo despertar o interesse em Ciência
                da Computação em alunos do ensino fundamental e médio de colégios, através de problemas
                de raciocínio lógico e matemática. Para alunos de ensino médio, a <span className="deep-orange-text">OPEI</span> conta também com modalidade
                prática de programação, com linguagens como JAVA, C/C++ e Python. Para saber como inscrever
                sua escola, veja o passo-a-passo na aba <a href="#faq-board">FAQ</a>.
                <br/><br/>
                <a className="center deep-orange" href="http://www.cin.ufpe.br/~pet/opei/" className="activator">
                  <i className="mdi mdi-flag"></i>    OPEI
                </a>
              </p>
            </Activity>
            <Activity  title="Programa de Férias" pic="http://materializecss.com/images/office.jpg">
              <p>
                No período das férias escolares, o <span className="deep-orange-text">PET-Informática</span> ministra aulas de programação para alunos de ensino médio,
                para estimular o estudo da Ciência da Computação pelos alunos e ajudá-los desenvolverem uma base sólida de programação.
                É um curso de introdução à uma linguagem de programação, como C/C++ e Pyton.
              </p>
            </Activity>
            <Activity title="CinWiki" pic="http://materializecss.com/images/office.jpg">
              <p>
                Site colaborativo feito pelo <span className="deep-orange-text">PET-Informática</span> no formato Wikipedia com informações sobre os cursos, disciplinas e quaisquer
                atividades relacionadas ao centro de informática. Você é bem vindo para contribuir com nossa Wiki! Se achar que existem
                informações desatualizadas, nos comunique!
                <br/><br/>
                <a className="center deep-orange" href="http://www.cin.ufpe.br/~pet/wiki/index.php/P%C3%A1gina_principal" className="activator">
                  <i className="mdi mdi-flag"></i>    CinWiki
                </a>
              </p>
            </Activity>
            <Activity title="Manual do Calouro" pic="http://materializecss.com/images/office.jpg">
              <p>
                Manual criado para auxiliar o calouro nos seus primeiros dias no Centro de Informática, explicando
                principalmente o passo-a-passo de atividades e as oportunidades do Centro e da Universidade
                de maneira simples e direta.
                <br/><br/>
                <a className="center deep-orange" href="http://www.cin.ufpe.br/~pet/wiki/index.php/Manual_de_Sobreviv%C3%AAncia_do_CIn" className="activator">
                  <i className="mdi mdi-flag"></i>    Manual do Calouro
                </a>
              </p>
            </Activity>
            <Activity title="CInQuest" pic="http://materializecss.com/images/office.jpg">
              <p>
                <span className="deep-orange-text">CinQuest</span> é um jogo RPG desenvolvido pelo <span className="deep-orange-text">PET-Informática</span> para
                ajudar calouros a se encontrarem no Centro de  Informática. Nele, o aluno fará tudo o que será necessário na vida de estudante
                do CIn, realizando as atividades num cenário fiel ao Centro real.
                <br/><br/>
                <a className="center deep-orange" href="https://pet-informatica.github.io/cinquest/" className="activator">
                  <i className="mdi mdi-flag"></i>    CinQuest
                </a>
              </p>
            </Activity>
            <Activity title="GeoQuest" pic="http://materializecss.com/images/office.jpg">
              <p>
                Aplicativo android realizado pelo <span className="deep-orange-text">PET-Informática</span> em parceria com o PET - Geografia (UFPE)
                para incentivar o estudo da geografia para provas e vestibulares, através de um jogo de perguntas e respostas.
              </p>
            </Activity>
            <Activity title="PetUtility" pic="http://materializecss.com/images/office.jpg">
              <p>
                O <span className="deep-orange-text">PETUtility</span> é um programa desenvolvido e utilizado pelo <span className="deep-orange-text">PET-Informática</span> para o gerenciamento
                interno de suas atividades. Ele foca em modelar e organizar as atividades exercidas pelo grupo
                de maneira mais simples e rápida através de uma aplicação web.
              </p>
            </Activity>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<ActivityBoard />, document.getElementById('activity-board'))
