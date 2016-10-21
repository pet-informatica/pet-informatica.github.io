var Navbar = React.createClass({
  componentDidMount: function() {
    $(".button-collapse").sideNav({
      closeOnClick: true
    });
  },
  render: function() {
    return(
      <div className="navbar-fixed">
        <nav role="navigation">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" className="brand-logo">
                <img src="images/petlogo.png"/>
              </a>
              <a data-activates="nav-mobile" className="button-collapse" href="#"><i className="mdi mdi-menu"></i></a>
              <ul className="right hide-on-med-and-down">
                <li><a className="font-light" href="#about-board">Sobre</a></li>
                <li><a className="font-light" href="#activity-board">Atividades</a></li>
                <li><a className="font-light" href="#member-board">Petianos</a></li>
                <li><a className="font-light" href="#faq-board">FAQ</a></li>
                <li><a className="font-light" href="#footer">Contatos</a></li>
              </ul>
              <ul id="nav-mobile" className="side-nav">
                <li className="side-nav-logo">
                  <a href="#" className="center">
                    <img src="images/petlogo.png"/>
                  </a>
                </li>
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
