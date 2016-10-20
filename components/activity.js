var Activity = React.createClass({
  render: function(){
    return(
      <div className="col s12 m4 l4">
          <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator" src={this.props.pic}/>
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
  render: function(){
    return(
      <div className="section scrollspy" id="activities">
        <div className="container">
          <h2 className="header text_orange">Atividades</h2>
          <div className="row">
            <Activity title="Palestra e Workshop" pic="http://materializecss.com/images/office.jpg">
              <p>
                Buscando dar aos alunos do CIn novos conhecimentos, o PET - Informática realiza bimestralmente
                palestras de temas relacionados tanto à computação quanto à temas diversificados, possibilitando
                uma troca de conhecimentos de uma grande variedade de assuntos. A cada bimestre, o PET - Informática
                também promove workshops de temas relevantes, como javascript,
                github, e docker. Muitas vezes os workshops também são voltados para descontrair os estudantes,
                criando uma oportunidade de diversão e engajamento para fugir da rotina!
              </p>
            </Activity>
            <Activity title="Visita dos Colégios" pic="http://materializecss.com/images/office.jpg">
              <p>
                Em parceria com o CIn, o PET organiza visitas para qualquer colégio que esteja interessado em
                mostrar o Centro para seus alunos, a fim de ajudar na escolha profissional! Para marcar a
                visita da sua escola, veja o processo na seção FAQ
              </p>
            </Activity>
            <Activity title="Capacitação" pic="http://materializecss.com/images/office.jpg">
              <p>
                É uma forma de retribuirmos ao centro tudo aquilo que ele nos fornece! Um curso voltado principalmente
                para servidores da UFPE e moradores da região onde são ensinadas noções básicas e a
                vançadas de computador, como internet, office e Google Drive.
              </p>
            </Activity>
            <Activity title="Dia do Calouro" pic="http://materializecss.com/images/office.jpg">
              <p>
                Ocorrendo na primeira semana de aula de cada semestre, o Dia do Calouro é quando os novos alunos
                são apresentados, pela visão de outros alunos, aos cursos, ao Centro e as oportunidades o
                ferecidas pela universidade.
              </p>
            </Activity>
            <Activity   title="Doação de Sangue" pic="http://materializecss.com/images/office.jpg">
              <p>
                Em parceria com o HEMOPE e com o CIn, o PET realiza semestralmente uma campanha de doação de sangue
                onde todas as pessoas, de dentro ou fora do centro, são convidadas a ajudar o próximo com
                comodidade, construindo uma consciência social importante para qualquer cidadão.
              </p>
            </Activity>
            <Activity title="OPEI" pic="http://materializecss.com/images/office.jpg">
              <p>
                Ocorrendo desde 2015, a OPEI se espelha na OBI e tem como objetivo despertar o interesse em Ciência
                da Computação em alunos do ensino fundamental e médio de colégios, através de problemas
                de raciocínio lógico e matemática. Para alunos de ensino médio, a OPEI conta também com modalidade
                prática de programação, com linguagens como JAVA, C/C++ e Python. Para saber como inscrever
                sua escola, veja o passo-a-passo na aba FAQ.
                <br/>
                <a href="http://www.cin.ufpe.br/~pet/opei/" className="activator">OPEI</a>
              </p>
            </Activity>
            <Activity  title="Programa de Férias" pic="http://materializecss.com/images/office.jpg">
              <p>
                No período das férias escolares, o petianos ministram aulas de informática para alunos de ensino médio,
                supervisionadas pelo tutor prof. Dr. Fernando da Fonseca de Souza, para estimularem
                o estudo da Ciência da Computação aos alunos e a desenvolverem uma base de programação.
              </p>
            </Activity>
            <Activity title="CinWiki" pic="http://materializecss.com/images/office.jpg">
              <p>
                Site colaborativo no formato Wikipedia com informações sobre os cursos, disciplinas e quaisquer
                atividades relacionadas ao centro de informática.
                <br/>
                <a href="http://www.cin.ufpe.br/~pet/wiki/index.php/P%C3%A1gina_principal" className="activator">CinWiki</a>
              </p>
            </Activity>
            <Activity title="Manual do Calouro" pic="http://materializecss.com/images/office.jpg">
              <p>
                Manual criado para auxiliar o calouro nos seus primeiros dias no Centro de Informática, explicando
                principalmente o passo-a-passo de atividades e as oportunidades do Centro e da Universidade
                de maneira simples e direta.
                <br/>
                <a href="http://www.cin.ufpe.br/~pet/wiki/index.php/Manual_de_Sobreviv%C3%AAncia_do_CIn" className="activator">Manual</a>
              </p>
            </Activity>
            <Activity title="CInQuest" pic="http://materializecss.com/images/office.jpg">
              <p>
                CInQuest é um jogo RPG desenvolvido pelo PET - Informática para ajudar calouros a se encontrar
                em no Centro de  Informática. Nele, o aluno fará tudo o que será necessário na vida de estudante
                do CIn, realizando as atividades num cenário fiel ao Centro real.
                <br/>
                <a href="https://pet-informatica.github.io/cinquest/" className="activator">Cinquest</a>
              </p>
            </Activity>
            <Activity title="GeoQuest" pic="http://materializecss.com/images/office.jpg">
              <p>
                Aplicativo android realizado pelo PET - Informática (UFPE) em parceria com o PET - Geografia (UFPE)
                para incentivar o estudo da geografia para provas e vestibulares, através de um jogo de per
                guntas e respostas.
              </p>
            </Activity>
            <Activity title="PetUtility" pic="http://materializecss.com/images/office.jpg">
              <p>
                O PETutility é um programa desenvolvido e utilizado pelo PET - Informática para o gerenciamento
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
