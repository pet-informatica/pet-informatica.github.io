var Parallax = React.createClass({
  componentDidMount: function(){
    $('.parallax').parallax();
  },
  render: function(){
    return(
      <div className="parallax-container">
        <div className="parallax"><img src={this.props.pic}/></div>
      </div>
    );
  }
});

ReactDOM.render(<Parallax pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477099784/pet/team-1_ew62th.jpg"/>, document.getElementById('team-1'));
ReactDOM.render(<Parallax pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477099784/pet/team-2_dmasam.jpg"/>, document.getElementById('team-2'));
