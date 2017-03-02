var Member = React.createClass({
  componentDidMount: function(){
    $('.materialboxed').materialbox();
  },
  render: function() {
    return(
      <div className="col s12 m6 l3">
        <div className="card card-avatar">
          <div className="center">
            <img className="circle materialboxed center" src={this.props.pic} />
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">
              {this.props.name}
              <br/>
              <small><em><p className="red-text text-darken-1">{this.props.desc}        <a href={this.props.face}><i className="blue-text text-darken-4 mdi mdi-facebook-box">
              </i></a></p></em></small>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

var Members = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Member name="Camila Brendel" desc="cscbb" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078745/pet/camila_ogqnbg.png" face="https://www.facebook.com/camila.brendel"/>
        <Member name="Divino Neto" desc="dgmn" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078756/pet/divino_x0c8kp.png" face="https://www.facebook.com/dgmneto"/>
        <Member name="Edjan Michiles" desc="esvm" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078739/pet/edjan_rdfnez.png" face="https://www.facebook.com/edjanmichiles"/>
        <Member name="Higor Cavalcanti" desc="hcmb" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078705/pet/higor_trgodn.png" face="https://www.facebook.com/HigorCMB"/>
        <Member name="Lucas Santana" desc="lss5" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078723/pet/lucas_plnf2x.png" face="https://www.facebook.com/lucassantanadsilva"/>
        <Member name="Lucas Valença" desc="lvrma" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078786/pet/val_vwbuov.png" face="https://www.facebook.com/lucas.valenca.589"/>
        <Member name="Marcela Azevedo" desc="macm3" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078762/pet/marcela_ga1upn.png" face="https://www.facebook.com/marcelaazevedo6"/>
        <Member name="Maria Júlia" desc="mjgfl" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1488486564/pet/mjulia_gysqyr.png" face="https://www.facebook.com/mariajuliagfl"/>
        <Member name="Maria Luiza" desc="mlmv" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078740/pet/malu_qfwczh.png" face="https://www.facebook.com/mluiza.menezes"/>
        <Member name="Pedro Rossi" desc="pgrr" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078785/pet/rossi_iiqcfp.png" face="https://www.facebook.com/pgrr97"/>
        <Member name="Rodrigo Calegario" desc="rcac" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078707/pet/calegario_yf6nqx.png" face="https://www.facebook.com/rodrigo.calegario.5"/>
        <Member name="Ruy Brito" desc="rbb3" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078788/pet/ruy_bamenh.png" face="https://www.facebook.com/ruy.brito.3"/>
        <Member name="Simone Cohen" desc="scc" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078797/pet/simone_rzxtmg.png" face="https://www.facebook.com/scohen3594"/>
        <Member name="Fernando Fonseca" desc="fdfd" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1479137835/pet/fdfd_fe6zpw.jpg" face="http://www.cin.ufpe.br/~fdfd/"/>
      </div>
    );
  }
});

var ExMembers = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Member name="Rafael Nunes" desc="rngs" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078763/pet/peao_oje2db.png" face="https://www.facebook.com/peaonunes"/>
        <Member name="Marlon Reghert" desc="mras" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078791/pet/marlon_nhxx7l.png" face="https://www.facebook.com/marlonreghert.ads"/>
        <Member name="Leonardo Galdino" desc="lcgm" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1477078735/pet/leo_bprqni.png" face="https://www.facebook.com/leonardo.galdino.142"/>
        <Member name="Aline Correia" desc="afcs" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/aline_id6oyv.jpg" face="https://www.facebook.com/aline.correia.332"/>
        <Member name="Pedro Torres" desc="phtg" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/torres_exzgle.jpg" face="https://www.facebook.com/pedrootorres"/>
        <Member name="Maria Gabriela" desc="mgtmc" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/gabi_jh56lw.jpg" face="https://www.facebook.com/MariaGabrielaCardoso"/>
        <Member name="Marina Haack" desc="mmlh" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/haack_fxg1zi.jpg" face="https://www.facebook.com/ninahaacks"/>
        <Member name="Tomer Simis" desc="tls" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/tomer_gkmxf2.jpg" face="https://www.facebook.com/tomer.simis"/>
        <Member name="Victor Monteiro" desc="vddm" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/vddm_sjwx5p.jpg" face="https://www.facebook.com/victorddiniz"/>
        <Member name="Leonardo Andrade" desc="ljacs" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/leoandrade_tc7kj8.jpg" face="https://www.facebook.com/leonardojacs"/>
        <Member name="Danilo Neves" desc="dnr2" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/danilo_uukmn2.jpg" face="https://www.facebook.com/danilo.nevesribeiro"/>
        <Member name="Ermano Arruda" desc="eaa3" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/ermano_iaur9a.jpg" face="https://www.facebook.com/ermano.arruda"/>
        <Member name="Filipe Fernando" desc="ffcms" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/filipe_yw1pgb.jpg" face="https://www.facebook.com/ffcms"/>
      </div>
    );
  }
});


var Tutor = React.createClass({
  render: function(){
    return(
      <div className="center col s12 m6 l6">
        <div className="card card-avatar">
          <div className="center">
            <img className="circle materialboxed center" src={this.props.pic} />
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4">
              {this.props.name}
              <br/>
              <small><em><p className="red-text text-darken-1">{this.props.desc}        <a href={this.props.face}><i className="blue-text text-darken-4 mdi mdi-facebook-box">
              </i></a></p></em></small>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

var MemberBoard = React.createClass({
  componentDidMount: function(){
    $('ul.tabs').tabs();
  },
  render: function(){
    return(
      <div className="section scrollspy" id="team">
        <div className="container">
          <h2 className="header center text_orange">Petianos</h2>
          <div className="row">
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s3 active"><a href="#members">Membros</a></li>
                <li className="tab col s3"><a href="#ex-members">Egressos</a></li>
              </ul>
            </div>
            <div id="members" className="col s12 top_margin"><Members></Members></div>
            <div id="ex-members" className="col s12 top_margin"><ExMembers></ExMembers></div>
          </div>
        </div>
      </div>
    );
  }
});

ReactDOM.render(<MemberBoard />, document.getElementById('member-board'));
