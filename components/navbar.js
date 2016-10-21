var Navbar = React.createClass({
  render: function() {
    return(
      <div className="navbar-fixed">
        <nav role="navigation">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo waves-effect waves-block waves-light">
                <img src="images/petlogo.png"/>
              </a>
              <ul className="right hide-on-med-and-down">
                <li><a className="font-light" href="#about-board">Sobre</a></li>
                <li><a className="font-light" href="#activity-board">Atividades</a></li>
                <li><a className="font-light" href="#member-board">Petianos</a></li>
                <li><a className="font-light" href="#faq-board">FAQ</a></li>
                <li><a className="font-light" href="#footer">Contatos</a></li>
              </ul>
              <ul id="nav-mobile" className="side-nav">
                <li><a className="font-light" href="#about-board">Sobre</a></li>
                <li><a className="font-light" href="#activity-board">Atividades</a></li>
                <li><a className="font-light" href="#member-board">Petianos</a></li>
                <li><a className="font-light" href="#faq-board">FAQ</a></li>
                <li><a className="font-light" href="#footer">Contatos</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
});

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
