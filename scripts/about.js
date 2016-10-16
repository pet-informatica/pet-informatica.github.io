var About = React.createClass({
  render: function(){
    return(
      <div className="col s12 center">
        <h5 className="light white-text">
          O Programa de Educação Tutorial (PET) é um programa financiado pela Secretaria de Educação Superior (SISu/MEC)
          em convênio com Universidades Públicas Brasileiras para reforçar, através de um sistema de bolsas, a preparação
          intelectual e profissional dos estudantes, orientados pelo princípio  da indissociabilidade entre ensino, pesquisa
          e extensão da educação tutorial. Atualmente, o PET conta com mais de 800 grupos e 4200 alunos bolsistas distribuídos
          por todo o território nacional, em instituições de ensino superior públicas – federais, estaduais e municipais – e privadas.
        </h5>
      </div>
    );
  }
});

var Pilar = React.createClass({
  render: function(){
    return(
      <div  className="col s12 m4 l4 top_margin">
        <div className="center promo promo-example">
          <i className="mdi mdi-book-minus"></i>
          <h5 className="promo-caption white-text">{this.props.title}</h5>
          <p className="light center white-text">{this.props.desc}</p>
        </div>
      </div>
    );
  }
});

var AboutBoard = React.createClass({
  render: function(){
    return(
      <div id="about" className="section scrollspy bkg_amber">
        <div className="container">
          <h2 className="center header white-text">O que é o PET?</h2>
          <div className="row center">
              <About />
              <Pilar title="Ensino" desc="Sendo exercido de forma ampla pelos membros do grupo de Informática, está sempre presente no planejamento das nossas atividades. Esse pilar é sempre alvo de análises e brainstormings, pois buscamos atuar de forma inovadora, atentos às necessidades da graduação, tendo um grande peso na nossa tríade."/>
              <Pilar title="Pesquisa" desc="O ramo da pesquisa é a forma que os alunos, auxiliados por professores orientadores, buscam aprofundamento nas diversas áreas do curso de Ciência da Computação. É através das pesquisas e Iniciações Científicas que os alunos petianos compreendem o valor da contribuição acadêmica que essa atividade desenvolve." />
              <Pilar title="Extensão" desc="Extensão universitária é uma das formas de interação entre universidade, diversos setores e a comunidade onde está inserida. É a ponte permanente entre universidade e setores da sociedade. Através da extensão, a universidade influencia e é influenciada pela comunidade, ou seja, possibilita troca de valores entre universidade e o meio. " />
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<AboutBoard />, document.getElementById('about-board'));
