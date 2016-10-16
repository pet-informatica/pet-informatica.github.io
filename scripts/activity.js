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
                    <i className="mdi mdi-dialpad right"></i>
                  </span>
              </div>
              <div className="card-reveal">
                  <span className="card-title grey-text text-darken-4">
                    {this.props.title}
                    <i className="mdi mdi-close right"></i>
                  </span>
                  <p>{this.props.desc}</p>
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
          <h2 className="header text_b">Atividades</h2>
          <div className="row">
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Cinquest"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Palestras"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Worshops"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Worshops"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Worshops"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
            <Activity desc="O cinquest é um jogo muito foda"
                      title="Worshops"
                      pic="http://materializecss.com/images/office.jpg">
            </Activity>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<ActivityBoard />, document.getElementById('activity-board'))
