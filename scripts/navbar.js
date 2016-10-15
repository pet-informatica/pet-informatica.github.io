var Navbar = React.createClass({
  render: function() {
    return(
      <nav>
        <div className="nav-wrapper orange darken-4">
          <a href="#" className="brand-logo center">
            <img src="images/petlogo.png"/>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a>Sobre</a></li>
            <li><a>Projetos</a></li>
            <li><a>Petianos</a></li>
          </ul>
        </div>
      </nav>
    );
  }
});
ReactDOM.render(<Navbar />, document.getElementById('navbar'));
