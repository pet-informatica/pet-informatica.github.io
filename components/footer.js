
var MailBox = React.createClass({
  render: function(){
    return(
      <div className="col l6 s12">
        <form className="col s12" action="https://formspree.io/petcomputacao-l@cin.ufpe.br" method="POST">
          <div className="row">
            <div className="input-field col s6">
              <i className="mdi mdi-account prefix white-text"></i>
              <input id="icon_prefix" name="name" type="text" className="validate white-text"/>
              <label htmlFor="icon_prefix" className="white-text">Nome</label>
            </div>
            <div className="input-field col s6">
              <i className="mdi mdi-email prefix white-text"></i>
                <input id="icon_email" name="email" type="email" className="validate white-text"/>
                <label htmlFor="icon_email" className="white-text">Email</label>
            </div>
            <div className="input-field col s12">
              <i className="mdi mdi-border-color prefix white-text"></i>
              <textarea id="icon_prefix2" name="message" className="materialize-textarea white-text"></textarea>
              <label htmlFor="icon_prefix2" className="white-text">Mensagem</label>
            </div>
              <div className="col offset-s7 s5">
                <button className="btn waves-effect waves-light white" type="submit">
                  <span className="font-normal deep-orange-text">Submit</span>
                  <i className="mdi mdi-send right deep-orange-text"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
    );
  }
});

var Contact = React.createClass({
  render: function(){
    return(
      <div className="col l3 s12">
        <h5 className="white-text">Contato</h5>
        <ul>
          <li>
            <p className="white-text">petcomputacao-l@cin.ufpe.com</p>
          </li>
          <li>
              <a className="white-text side_margin" href="https://www.facebook.com/petinformatica">
                <i className="small mdi mdi-facebook-box"></i> Facebook
              </a>
          </li>
          <li>
            <a className="white-text side_margin " href="https://github.com/pet-informatica">
              <i className="small mdi mdi-github-box"></i> Github
            </a>
          </li>
          <li>
            <a className="white-text side_margin" href="https://cin.ufpe.br/~pet">
              <i className="small mdi mdi-book-open"></i>  Wiki
            </a>
          </li>
        </ul>
      </div>
    );
  }
});

var Links = React.createClass({
  render: function(){
    return(
      <div className="col l3 s12">
        <h5 className="white-text">Links</h5>
        <ul>
          <li>
              <a className="white-text side_margin" href="https://pet-informatica.github.io/programa-de-ferias">
                <i className="small mdi mdi-flag"></i> Programa de Férias
              </a>
          </li>
          <li>
              <a className="white-text side_margin" href="http://cin.ufpe.br/~pet/wiki2/">
                <i className="small mdi mdi-flag"></i> CinWiki
              </a>
          </li>
          <li>
              <a className="white-text side_margin" href="https://www.cin.ufpe.br/~pet/opei/">
                <i className="small mdi mdi-flag"></i> OPEI
              </a>
          </li>
          <li>
              <a className="white-text side_margin" href="https://pet-informatica.github.io/cinquest/">
                <i className="small mdi mdi-flag"></i> CinQuest
              </a>
          </li>
          <li>
              <a className="white-text side_margin" href="https://www.cin.ufpe.br/~pet/wiki/index.php/Manual_de_Sobreviv%C3%AAncia_do_CIn">
                <i className="small mdi mdi-flag"></i> Manual
              </a>
          </li>
        </ul>
      </div>
    );
  }
});


var Copyright = React.createClass({
  render: function(){
    return(
      <div className="footer-copyright">
        <div className="container">
          Made by PET-Informática. Thanks to <a className="white-text" href="http://materializecss.com/">materializecss</a> and <a className="white-text" href="https://facebook.github.io/react/">react.</a>
        </div>
      </div>
    );
  }
});

var Footer = React.createClass({
  render:function(){
    return(
      <footer id="contact" className="page-footer scrollspy">
        <div className="container">
          <div className="row">
            <Contact></Contact>
            <Links></Links>
            <MailBox></MailBox>
          </div>
        </div>
        <Copyright></Copyright>
      </footer>
    );
  }
});

ReactDOM.render(<Footer />, document.getElementById('footer'));
