var About = React.createClass({
  render: function(){
    return(
      <div className="col s12 center">
        <h4 className="header-1 white-text">
          Somos alunos do Centro de Informática que estão envolvidos em atividades de ensino, pesquisa e extensão,
          buscando melhorar a experiência da graduação para todos os estudantes.
        </h4>
      </div>
    );
  }
});

var Pilar = React.createClass({
  render: function(){
    return(
      <div  className="col s12 m4 l4 top_margin">
        <div className="center promo promo-example">
          {this.props.children}
          <h3 className="header white-text">{this.props.title}</h3>
          <h4 className="header-2 center white-text">{this.props.desc}</h4>
        </div>
      </div>
    );
  }
});

var AboutBoard = React.createClass({
  render: function(){
    return(
      <div className="iris">
        <div id="about" className="section scrollspy">
          <div className="container">
            <h2 className="center header white-text">PET-Informática</h2>
            <div className="row center">
                <About />
                <Pilar
                  title="Ensino"
                  desc="Buscamos contribuir com a formação intelectual dos alunos e da comunidade local, oferecendo palestras, workshops, cursos e atividades relacionadas à difusão do conhecimento e da computação">
                  <i className="mdi mdi-bank"></i>
                </Pilar>
                <Pilar
                  title="Pesquisa"
                  desc="Realizamos internamente iniciações científicas e projetos de pesquisa, tanto individuais como coletivos, com o objetivo de desenvolver as habilidades pessoais de cada petiano e contribuir com a produçao científica da universidade">
                  <i className="mdi mdi-flask"></i>
                  </Pilar>
                <Pilar
                  title="Extensão"
                  desc="Nossas atividades extrapolam os limites universitários, buscando atingir também a comunidade local e engajar pessoas em projetos profissionais, sociais e ambientais">
                  <i className="mdi mdi-map-marker-radius"></i>
                </Pilar>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<AboutBoard />, document.getElementById('about-board'));
