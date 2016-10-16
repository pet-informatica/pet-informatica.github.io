var PetMember = React.createClass({
  render: function() {
    return(
      <div className="col s12 m3">
        <div className="card card-avatar">
          <div className="waves-effect waves-block waves-light">
            <img className="activator" src={this.props.pic} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.name}
              <br/>
              <small><em><a className="red-text text-darken-1" href="#">{this.props.desc}</a></em></small>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

var PetMemberBoard = React.createClass({
  render: function(){
    return(
      <div className="section scrollspy" id="team">
        <div className="container">
          <h2 className="header text_orange"> Petianos </h2>
          <div className="row">
            <PetMember name="Higor Cavalcanti" desc="hcmb" pic="http://joashpereira.com/templates/material_one_pager/img/avatar2.png" face=""/>
            <PetMember name="Ruy Brito" desc="rbb3" pic="http://joashpereira.com/templates/material_one_pager/img/avatar2.png" face=""/>
            <PetMember name="Divino Neto" desc="dgmn" pic="http://joashpereira.com/templates/material_one_pager/img/avatar2.png" face=""/>
            <PetMember name="Maria Luiza" desc="mlmv" pic="http://joashpereira.com/templates/material_one_pager/img/avatar2.png" face=""/>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<PetMemberBoard />, document.getElementById('petmember-board'));
