var Parallax = React.createClass({
  componentDidMount: function(){
    $('.parallax').parallax();
  },
  render: function(){
    return(
      <div className="parallax-container">
          <div className="parallax deep-orange"><img src={this.props.pic} className="overlay"/></div>
      </div>
    );
  }
});

ReactDOM.render(<Parallax pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477172565/pet/team-2_yv03cq.jpg"/>, document.getElementById('team-1'));
ReactDOM.render(<Parallax pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477172859/pet/team-1_abc3cz.jpg"/>, document.getElementById('team-2'));
