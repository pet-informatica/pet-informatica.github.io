var Parallax = React.createClass({
  componentDidMount: function(){
    $('.parallax').parallax();
  },
  render: function(){
    return(
      <div className="parallax-container">
          <div className="parallax deep-orange"><img src={this.props.pic} className="half-color"/></div>
      </div>
    );
  }
});


ReactDOM.render(<Parallax pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1538364834/36064744_1724411950982667_933395912108015616_o_tfbjep.jpg"/>, document.getElementById('team-1'));
ReactDOM.render(<Parallax pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1538365229/opei_dream_time_hxbsn6.jpg"/>, document.getElementById('team-2'));
