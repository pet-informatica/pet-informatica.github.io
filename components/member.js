var Member = React.createClass({
  render: function() {
    return(
      <div className="col s12 m3">
        <div className="card card-avatar">
          <div className="waves-effect waves-block waves-light">
            <a href={this.props.face}><img className="activator circle" src={this.props.pic} /></a>
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">
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

var MemberBoard = React.createClass({
  render: function(){
    return(
      <div className="section scrollspy" id="team">
        <div className="container">
          <h2 className="header text_orange"> Petianos </h2>
          <div className="row">
            <Member name="Camila Brendel" desc="cscbb" pic="images/members/camila.png" face="https://www.facebook.com/camila.brendel"/>
            <Member name="Divino Neto" desc="dgmn" pic="images/members/divino.png" face="https://www.facebook.com/dgmneto"/>
            <Member name="Edjan Michiles" desc="esvm" pic="images/members/edjan.png" face="https://www.facebook.com/edjanmichiles"/>
            <Member name="Higor Cavalcanti" desc="hcmb" pic="images/members/higor.png" face="https://www.facebook.com/HigorCMB"/>
            <Member name="Lucas Santana" desc="lss5" pic="images/members/lucas.png" face="https://www.facebook.com/lucassantanadsilva"/>
            <Member name="Lucas Valença" desc="lvrma" pic="images/members/val.png" face="https://www.facebook.com/lucas.valenca.589"/>
            <Member name="Leonardo Galdino" desc="rbb3" pic="images/members/leogal.png" face="https://www.facebook.com/leonardo.galdino.142"/>
            <Member name="Marcela Azevedo" desc="macm3" pic="images/members/marcela.png" face="https://www.facebook.com/marcelaazevedo6"/>
            <Member name="Maria Júlia" desc="mjgfl" pic="images/members/julia.png" face="https://www.facebook.com/mariajuliagfl"/>
            <Member name="Maria Luiza" desc="mlmv" pic="images/members/malu.png" face="https://www.facebook.com/mluiza.menezes"/>
            <Member name="Marlon Reghert" desc="mlmv" pic="images/members/marlon.png" face="https://www.facebook.com/marlonreghert.ads"/>
            <Member name="Pedro Rossi" desc="pgrr" pic="images/members/rossi.png" face="https://www.facebook.com/pgrr97"/>
            <Member name="Rafael Nunes" desc="rngs" pic="images/members/peao.png" face="https://www.facebook.com/peaonunes"/>
            <Member name="Rodrigo Calegario" desc="rcac" pic="images/members/calegario.png" face="https://www.facebook.com/rodrigo.calegario.5"/>
            <Member name="Ruy Brito" desc="rbb3" pic="images/members/ruy.png" face="https://www.facebook.com/ruy.brito.3"/>
            <Member name="Simone Cohen" desc="scc" pic="images/members/simone.png" face="https://www.facebook.com/scohen3594"/>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<MemberBoard />, document.getElementById('member-board'));
