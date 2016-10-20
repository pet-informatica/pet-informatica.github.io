
var MailBox = React.createClass({
  render: function(){
    return(
      <div className="col l6 s12">
        <form className="col s12" >
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
                <button className="btn waves-effect waves-light red darken-1" type="submit">Submit
                  <i className="mdi mdi-send right white-text"></i>
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
          <li><p className="white-text">pet-informatica@cin.ufpe.com</p></li>
          <li>
            <div>
              <a className="white-text side_margin" href="https://www.facebook.com/petinformatica">
                <i className="small mdi mdi-facebook-box"></i>
              </a>
              <a className="white-text side_margin " href="https://github.com/pet-informatica">
                <i className="small mdi mdi-github-box"></i>
              </a>
              <a className="white-text side_margin" href="https://cin.ufpe.br/~pet">
                <i className="small mdi mdi-book-open"></i>
              </a>
            </div>
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
          Made with <a className="white-text" href="http://materializecss.com/">materializecss</a>
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
            <MailBox></MailBox>
          </div>
          <Copyright></Copyright>
        </div>
      </footer>
    );
  }
});

ReactDOM.render(<Footer />, document.getElementById('footer'));
