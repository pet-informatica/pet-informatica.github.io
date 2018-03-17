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
        <a href={this.props.link} target="_blank">
          <ul className="slides">
            {this.props.children}            
          </ul>
        </a>
      </div>
    );
  }
});

var ActivityContent  = React.createClass({
  render:function(){
    return (
      <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {this.props.title}
            <i className="mdi mdi-dots-vertical right"></i>
          </span>
      </div>
    );
  }
});

var ActivityReveal  = React.createClass({
  render:function(){
    return (
      <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {this.props.title}
            <i className="mdi mdi-close right"></i>
          </span>
          {this.props.children}
      </div>
    );
  }
});


var ActivityCard = React.createClass({
  render: function(){
    return(
      <div className="col s12 m6 l4">
        <div className="card">
          {this.props.children}
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
          <h2 className="header center text_orange">Atividades</h2>
          <div className="row">

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477243125/pet/freshman-day_d6uo3h.jpg"/>
              </Slider>
              <ActivityContent title="Dia do Calouro"/>
              <ActivityReveal title="Dia do Calouro">
                <p>
                  Ocorrendo na primeira semana de aula de cada semestre, o <span className="deep-orange-text">Dia do Calouro</span> é quando os novos alunos
                  são apresentados, pela visão de outros alunos, aos cursos, ao Centro e as oportunidades oferecidas pela universidade.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477191658/pet/guest-1_rzorhm.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477195743/pet/guest-2_sekwxv.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477195741/pet/guest-3_c2lers.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477191656/pet/guest-4_be29oz.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477191657/pet/guest-5_ptde70.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477195744/pet/guest-6_uponen.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477195742/pet/guest-7_a8lst5.jpg"/>
              </Slider>
              <ActivityContent title="Visita de Colégios"/>
              <ActivityReveal title="Visita de Colégios">
                <p>
                  Em parceria com o CIn, o <span className="deep-orange-text">PET-Informática</span> organiza visitas para qualquer colégio que esteja interessado em
                  mostrar o Centro para seus alunos, a fim de ajudar na escolha profissional! Para marcar a
                  visita da sua escola, veja o processo na seção <a href="#faq-board">FAQ</a>. Durante a visita,
                  vamos fazer um tour com os alunos pelos prédios do CIn, e também fazer uma apresentação do curso!
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477243774/pet/capacitacao_g8cvjw.jpg"/>
              </Slider>
              <ActivityContent title="Capacitação"/>
              <ActivityReveal title="Capacitação">
                <p>
                  É uma forma de retribuirmos ao centro tudo aquilo que ele nos fornece! Um curso semestral voltado principalmente
                  para servidores da UFPE e moradores da região onde são ensinadas noções básicas e a
                  vançadas de computador, como internet, office e Google Drive.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://pet-informatica.github.io/programa-de-ferias/#/">
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477196259/pet/vacation-2_ze698t.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477242071/pet/vacation-1_efeufj.jpg"/>
              </Slider>
              <ActivityContent title="Programa de Férias"/>
              <ActivityReveal title="Programa de Férias">
                <p>
                  No período das férias escolares, o <span className="deep-orange-text">PET-Informática</span> ministra aulas de programação para alunos de ensino médio,
                  para estimular o estudo da Ciência da Computação pelos alunos e ajudá-los desenvolverem uma base sólida de programação.
                  É um curso de introdução à uma linguagem de programação, como C/C++ e Pyton.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477193038/pet/hemope-2_outvy0.png"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477193037/pet/hemope-3_lvntah.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477193037/pet/hemope-4_d1qq9s.jpg"/>
              </Slider>
              <ActivityContent title="Doação de Sangue"/>
              <ActivityReveal title="Doação de Sangue">
                <p>
                  Em parceria com o HEMOPE e com o CIn, o <span className="deep-orange-text">PET-Informática</span> realiza semestralmente uma campanha de doação de sangue
                  onde todas as pessoas, de dentro ou fora do centro, são convidadas a ajudar o próximo com
                  comodidade, construindo uma consciência social importante para qualquer cidadão.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://pet-informatica.github.io/opei">
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477243544/pet/opei-1_hlzmz9.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477193983/pet/opei-3_yqsidh.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477193981/pet/opei-2_rhcwm8.jpg"/>
              </Slider>
              <ActivityContent title="OPEI"/>
              <ActivityReveal title="OPEI">
                <p>
                  Ocorrendo desde 2015, a <span className="deep-orange-text">Olimpíada Pernambucana de Informática</span> se espelha na OBI e tem como objetivo despertar o interesse em Ciência
                  da Computação em alunos do ensino fundamental e médio de colégios, através de problemas
                  de raciocínio lógico e matemática. Para alunos de ensino médio, a <span className="deep-orange-text">OPEI</span> conta também com modalidade
                  prática de programação, com linguagens como JAVA, C/C++ e Python. Para saber como inscrever
                  sua escola, veja o passo-a-passo na aba <a href="#faq-board">FAQ</a>.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://cin.ufpe.br/~pet/wiki">
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477240117/pet/wiki_wzfbew.jpg"/>
              </Slider>
              <ActivityContent title="CInWiki"/>
              <ActivityReveal title="CInWiki">
                <p>
                  Site colaborativo feito pelo <span className="deep-orange-text">PET-Informática</span> no formato Wikipedia com informações sobre os cursos, disciplinas e quaisquer
                  atividades relacionadas ao centro de informática. Você é bem vindo para contribuir com nossa Wiki! Se achar que existem
                  informações desatualizadas, nos comunique!
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477188922/pet/workshop-1_q7jy1v.png"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477188920/pet/workshop-2_ch1gxk.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477188918/pet/workshop-3_p0llcf.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477188915/pet/workshop-4_rv3lih.jpg"/>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477188917/pet/workshop-5_vjlsse.jpg"/>
              </Slider>
              <ActivityContent title="Palestra e Workshop"/>
              <ActivityReveal title="Palestra e Workshop">
                <p>
                  Buscando dar aos alunos do cIn novos conhecimentos, o <span className="deep-orange-text">PET-Informática</span> realiza bimestralmente
                  palestras de temas relacionados tanto à computação quanto à temas diversificados, possibilitando
                  uma troca de conhecimentos de uma grande variedade de assuntos.
                </p>
                <p>
                  A cada bimestre, o <span className="deep-orange-text">PET-Informática</span> também promove workshops de temas relevantes, como javascript,
                  github, e docker. Muitas vezes os workshops também são voltados para descontrair os estudantes,
                  criando uma oportunidade de diversão e engajamento para fugir da rotina!
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://www.cin.ufpe.br/~pet/manual">
                <Slide pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1520210140/Manual_do_Calouro_mwm0pc.png"/>
              </Slider>
              <ActivityContent title="Manual do Calouro"/>
              <ActivityReveal title="Manual do Calouro">
                <p>
                  Manual criado para auxiliar o calouro nos seus primeiros dias no Centro de Informática, explicando
                  principalmente o passo-a-passo de atividades e as oportunidades do Centro e da Universidade
                  de maneira simples e direta.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://pet-informatica.github.io/cinquest/">
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477240116/pet/cinquest-logo_f8ndmz.jpg"/>
              </Slider>
              <ActivityContent title="CInQuest"/>
              <ActivityReveal title="CInQuest">
                <p>
                  <span className="deep-orange-text">CinQuest</span> é um jogo RPG desenvolvido pelo <span className="deep-orange-text">PET-Informática</span> para
                  ajudar calouros a se encontrarem no Centro de  Informática. Nele, o aluno fará tudo o que será necessário na vida de estudante
                  do CIn, realizando as atividades num cenário fiel ao Centro real.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider link="https://cin.ufpe.br/~pet/lib">
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520207386/PETLib_mdjk1u.png"/>
              </Slider>
              <ActivityContent title="PETLib"/>
              <ActivityReveal title="PETLib">
                <p>
                  O <span className="deep-orange-text">PETLib</span> é uma iniciativa criada pelo grupo para facilitar os estudos dos alunos da graduação, possibilitando acesso rápido a materiais de estudo disponibilizados
                  por outros alunos ou pelos próprios professores.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1520210161/PETUtility_yw5wng.png"/>
              </Slider>
              <ActivityContent title="PETUtility"/>
              <ActivityReveal title="PETUtility">
                <p>
                  O <span className="deep-orange-text">PETUtility</span> é um programa desenvolvido e utilizado pelo <span className="deep-orange-text">PET-Informática</span> para o gerenciamento
                  interno de suas atividades. Ele foca em modelar e organizar as atividades exercidas pelo grupo
                  de maneira mais simples e rápida através de uma aplicação web.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520209655/logo_petLab_mo0wbf.png"/>
              </Slider>
              <ActivityContent title="petLab"/>
              <ActivityReveal title="petLab">
                <p>
                  O <span className="deep-orange-text">petLab</span> é uma inciativa do PET-Informática que propõe um período de intercâmbio em laboratórios de tecnologia e grupos de pesquisa da UFPE, onde os alunos envolvidos deverão 
                  desenvolver projetos relacionados com as áreas de pesquisa por onde passarão. Neste primeiro ano, nossos parceiros são Lika, LIVE, SPG e Voxar Labs.
                </p>
              </ActivityReveal>
            </ActivityCard>

            <ActivityCard>
              <Slider>
                <Slide pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520209677/HackaPET_h0zeyn.png"/>
              </Slider>
              <ActivityContent title="HackaPET"/>
              <ActivityReveal title="HackaPET">
                <p>
                  O <span className="deep-orange-text">HackaPET</span> é uma iniciativa do PET-Informática que consiste em promover um hackaton para alunos do CIn com o objetivo de aumentar o engajamento dos alunos, como também motivá-los a 
                  desenvolver seus conhecimentos.
                </p>
              </ActivityReveal>
            </ActivityCard>

          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<ActivityBoard />, document.getElementById('activity-board'))
