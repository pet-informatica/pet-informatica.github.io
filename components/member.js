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
              <small><em><p className="red-text text-darken-1">{this.props.desc}        
                <a href={this.props.face} target="_blank">
                  <i className="blue-text text-darken-4 mdi mdi-facebook-box"/>
                </a>
              </p></em></small>
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
        <Member name="Aline Gouveia" desc="amtg" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172203/aline_ebd2ui.jpg" face="https://www.facebook.com/mariatenorioo"/>
        <Member name="André Vasconcelos" desc="alpvj" pic="https://res.cloudinary.com/andrevas/image/upload/v1586205139/andre_fsfwa.jpg" face="https://www.facebook.com/andreluis0"/>
        <Member name="César Silva" desc="accs2" pic="https://res.cloudinary.com/andrevas/image/upload/v1586216590/cesar_mnabsd.jpg" face="https://www.facebook.com/petinformatica/"/>
        <Member name="Erick Almeida" desc="eaor" pic="https://res.cloudinary.com/andrevas/image/upload/v1586216209/erick_jnkcsa.jpg" face="https://www.facebook.com/erickingles"/>
        <Member name="Gabriel Nogueira" desc="gnl2" pic="https://res.cloudinary.com/andrevas/image/upload/v1586208604/gnogueira_sjahfb.jpg" face="https://www.facebook.com/gabriel.nogueira.9404"/>
        <Member name="José Bezerra" desc="jbmn2" pic="https://res.cloudinary.com/andrevas/image/upload/v1586205664/joseB_oife.jpg" face="https://www.facebook.com/jose.bezerra.54"/>
        <Member name="Luan Brito" desc="lab7" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536189911/luan_x4zz04.jpg" face="https://www.facebook.com/luan.brito.98"/>
        <Member name="Marconi Gomes" desc="mgrf" pic="https://res.cloudinary.com/andrevas/image/upload/v1586205231/marconi_ioadj.png" face="https://www.facebook.com/itsmarconi"/>
        <Member name="Pedro Basilio" desc="pcsb" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172198/basi_nyknu1.jpg" face="https://www.facebook.com/pedrocostab"/>
        <Member name="Simone Santos" desc="scs" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211862/simone_edbcgo.jpg" face="https://www.linkedin.com/in/simone-santos-0562a228/"/>
      </div>
    );
  }
});

var ExMembers = React.createClass({
  render: function(){
    return(
      <div className="row">
        <Member name="Aline Correia" desc="afcs" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/aline_id6oyv.jpg" face="https://www.facebook.com/aline.correia.332"/>
        <Member name="Camila Brendel" desc="cscbb" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078745/pet/camila_ogqnbg.png" face="https://www.facebook.com/camila.brendel"/>
        <Member name="Claudio Carvalho" desc="cco2" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211481/claudio_uu2hai.jpg" face="https://www.facebook.com/claudiocarvalhoo"/>
        <Member name="Danilo Neves" desc="dnr2" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/danilo_uukmn2.jpg" face="https://www.facebook.com/danilo.nevesribeiro"/>
        <Member name="Divino Neto" desc="dgmn" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078756/pet/divino_x0c8kp.png" face="https://www.facebook.com/dgmneto"/>
        <Member name="Éden Ernandes" desc="eeas" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211483/eden_bsjax1.jpg" face="https://www.facebook.com/edenernandes"/>
        <Member name="Edjan Michiles" desc="esvm" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078739/pet/edjan_rdfnez.png" face="https://www.facebook.com/edjanmichiles"/>
        <Member name="Ermano Arruda" desc="eaa3" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/ermano_iaur9a.jpg" face="https://www.facebook.com/ermano.arruda"/>
        <Member name="Felipe Araújo" desc="fbma" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/felipe_ixro6g.jpg" face="https://www.facebook.com/felipearaujo213"/>
        <Member name="Fernando Fonseca" desc="fdfd" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1479137835/pet/fdfd_fe6zpw.jpg" face="https://www.cin.ufpe.br/~fdfd/"/>
        <Member name="Filipe Fernando" desc="ffcms" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/filipe_yw1pgb.jpg" face="https://www.facebook.com/ffcms"/>
        <Member name="Henrique Caúla" desc="lhtc" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172200/tato_afltz1.jpg" face="https://www.facebook.com/hcaula"/>
        <Member name="Higor Cavalcanti" desc="hcmb" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078705/pet/higor_trgodn.png" face="https://www.facebook.com/HigorCMB"/>
        <Member name="Larícia Mota" desc="lmmc2" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211484/laricia_ddvzpy.jpg" face="https://www.facebook.com/laricia.mota"/>
        <Member name="Lavínia Paganini" desc="lfp2" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1520211486/lavinia_ns9hir.jpg" face="https://www.facebook.com/lavinia.f.paganini"/>
        <Member name="Lucas Cardoso" desc="lccao" pic="http://res.cloudinary.com/dkbuneg9h/image/upload/v1520211491/cardoso_vu9o0b.jpg" face="https://www.facebook.com/profile.php?id=100002452062517"/>
        <Member name="Lucas Santana" desc="lss5" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078723/pet/lucas_plnf2x.png" face="https://www.facebook.com/lucassantanadsilva"/>
        <Member name="Leonardo Andrade" desc="ljacs" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/leoandrade_tc7kj8.jpg" face="https://www.facebook.com/leonardojacs"/>
        <Member name="Leonardo Galdino" desc="lcgm" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078735/pet/leo_bprqni.png" face="https://www.facebook.com/leonardo.galdino.142"/>
        <Member name="Lucas Valença" desc="lvrma" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078786/pet/val_vwbuov.png" face="https://www.facebook.com/lucas.valenca.589"/>
        <Member name="Marcela Azevedo" desc="macm3" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078762/pet/marcela_ga1upn.png" face="https://www.facebook.com/marcelaazevedo6"/>
        <Member name="Marlon Reghert" desc="mras" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078791/pet/marlon_nhxx7l.png" face="https://www.facebook.com/marlonreghert.ads"/>
        <Member name="Maria Gabriela" desc="mgtmc" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/gabi_jh56lw.jpg" face="https://www.facebook.com/MariaGabrielaCardoso"/>
        <Member name="Maria Luiza" desc="mlmv" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078740/pet/malu_qfwczh.png" face="https://www.facebook.com/mluiza.menezes"/>
        <Member name="Marina Haack" desc="mmlh" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/haack_fxg1zi.jpg" face="https://www.facebook.com/ninahaacks"/>
        <Member name="Maria Júlia" desc="mjgfl" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1488486564/pet/mjulia_gysqyr.png" face="https://www.facebook.com/mariajuliagfl"/>
        <Member name="Matheus Borba" desc="mlbas" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/broba_qpijfp.jpg" face="https://www.facebook.com/MatheusBorba222"/>
        <Member name="Pedro Rossi" desc="pgrr" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078785/pet/rossi_iiqcfp.png" face="https://www.facebook.com/pgrr97"/>
        <Member name="Pedro Torres" desc="phtg" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/torres_exzgle.jpg" face="https://www.facebook.com/pedrootorres"/>
        <Member name="Pedro Tôrres" desc="phts" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211494/peu_hzuwon.jpg" face="https://www.facebook.com/t0rr3sp3dr0"/>
        <Member name="Rafael Nunes" desc="rngs" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078763/pet/peao_oje2db.png" face="https://www.facebook.com/peaonunes"/>
        <Member name="Ramon Saboya" desc="rsg3" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172198/ramon_fhrnmq.jpg" face="https://www.facebook.com/ramonsaboyagomes"/>
        <Member name="Rodrigo Calegario" desc="rcac" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078707/pet/calegario_yf6nqx.png" face="https://www.facebook.com/rodrigo.calegario.5"/>
        <Member name="Rodrigo Rodrigues" desc="rfrl" pic="https://res.cloudinary.com/andrevas/image/upload/v1586216978/rods_opka.jpg" face="https://www.facebook.com/rodrigo.f.lemos.9"/>
        <Member name="Ruy Brito" desc="rbb3" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078788/pet/ruy_bamenh.png" face="https://www.facebook.com/ruy.brito.3"/>
        <Member name="Simone Cohen" desc="scc" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078797/pet/simone_rzxtmg.png" face="https://www.facebook.com/scohen3594"/>  
        <Member name="Tomer Simis" desc="tls" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/tomer_gkmxf2.jpg" face="https://www.facebook.com/tomer.simis"/>
        <Member name="Ullayne Fernandes" desc="uffl" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211497/ullayne_idtnvf.jpg" face="https://www.facebook.com/ullayne.fernandes"/>
        <Member name="Valdemiro Vieira" desc="vrvs" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/vald_cbl90s.jpg" face="https://www.facebook.com/valdemiroo"/>
        <Member name="Victor Monteiro" desc="vddm" pic="https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/vddm_sjwx5p.jpg" face="https://www.facebook.com/victorddiniz"/>      
        <Member name="Wilton Ramos" desc="wrs" pic="https://res.cloudinary.com/andrevas/image/upload/v1586208350/wilton_opgsk.jpg" face="https://www.facebook.com/petinformatica/"/>
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
