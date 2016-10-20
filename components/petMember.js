var PetMember = React.createClass({
  render: function() {
    return(
      <div className="col s12 m3">
        <div className="card card-avatar">
          <div className="waves-effect waves-block waves-light">
            <a href={this.props.face}><img className="activator circle" src={this.props.pic} /></a>
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              {this.props.name}
              <br/>
              <small><em><p className="red-text text-darken-1">{this.props.desc}</p></em></small>
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
            <PetMember name="Camila Brendel" desc="cscbb" pic="images/members/camila.png" face="https://www.facebook.com/camila.brendel"/>
            <PetMember name="Divino Neto" desc="dgmn" pic="images/members/divino.png" face="https://www.facebook.com/dgmneto"/>
            <PetMember name="Edjan Michiles" desc="esvm" pic="images/members/edjan.png" face="https://www.facebook.com/edjanmichiles"/>
            <PetMember name="Higor Cavalcanti" desc="hcmb" pic="images/members/higor.png" face="https://www.facebook.com/HigorCMB"/>
            <PetMember name="Lucas Santana" desc="lss5" pic="images/members/lucas.png" face="https://www.facebook.com/lucassantanadsilva"/>
            <PetMember name="Lucas Valença" desc="lvrma" pic="images/members/val.png" face="https://www.facebook.com/lucas.valenca.589"/>
            <PetMember name="Leonardo Galdino" desc="rbb3" pic="images/members/leogal.png" face="https://www.facebook.com/leonardo.galdino.142"/>
            <PetMember name="Marcela Azevedo" desc="macm3" pic="images/members/marcela.png" face="https://www.facebook.com/marcelaazevedo6"/>
            <PetMember name="Maria Júlia" desc="mjgfl" pic="images/members/julia.png" face="https://www.facebook.com/mariajuliagfl"/>
            <PetMember name="Maria Luiza" desc="mlmv" pic="images/members/malu.png" face="https://www.facebook.com/mluiza.menezes"/>
            <PetMember name="Marlon Reghert" desc="mlmv" pic="images/members/marlon.png" face="https://www.facebook.com/marlonreghert.ads"/>
            <PetMember name="Pedro Rossi" desc="pgrr" pic="images/members/rossi.png" face="https://www.facebook.com/pgrr97"/>
            <PetMember name="Rafael Nunes" desc="rngs" pic="images/members/peao.png" face="https://www.facebook.com/peaonunes"/>
            <PetMember name="Rodrigo Calegario" desc="rcac" pic="images/members/calegario.png" face="https://www.facebook.com/rodrigo.calegario.5"/>
            <PetMember name="Ruy Brito" desc="rbb3" pic="images/members/ruy.png" face="https://www.facebook.com/ruy.brito.3"/>
            <PetMember name="Simone Cohen" desc="scc" pic="images/members/simone.png" face="https://www.facebook.com/scohen3594"/>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<PetMemberBoard />, document.getElementById('petmember-board'));
