function newMember(name, status, login, imgLink, fbLink){
  var member = new Object();
  member.name = name;
  member.desc = login;
  member.pic = imgLink;
  member.face = fbLink;
  member.graduate = status;
  return member;
}
//Seguir ordem lexicográfica ao colocar um novo nome (abcdefghijklmnopqrstuvwxyz)
//[Nome, Gradute?, Login, imgLink, fbLink]
var AllMembersArray = [
  newMember("Aline Gouveia",     true,  "amtg",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172203/aline_ebd2ui.jpg",          "https://www.facebook.com/mariatenorioo"                  ),
  newMember("André Vasconcelos", true,  "alpvj", "https://res.cloudinary.com/andrevas/image/upload/v1586205139/andre_fsfwa.jpg",            "https://www.facebook.com/andreluis0"                     ),
  newMember("César Silva",       true,  "accs2", "https://res.cloudinary.com/andrevas/image/upload/v1586216590/cesar_mnabsd.jpg",           "https://www.facebook.com/petinformatica"                 ),
  newMember("Erick Almeida",     true,  "eaor",  "https://res.cloudinary.com/andrevas/image/upload/v1586216209/erick_jnkcsa.jpg",           "https://www.facebook.com/erickingles"                    ),
  newMember("Gabriel Nogueira",  true,  "gnl2",  "https://res.cloudinary.com/andrevas/image/upload/v1586208604/gnogueira_sjahfb.jpg",       "https://www.facebook.com/gabriel.nogueira.9404"          ),
  newMember("José Bezerra",      true,  "jbmn2", "https://res.cloudinary.com/andrevas/image/upload/v1586205664/joseB_oife.jpg",             "https://www.facebook.com/jose.bezerra.54"                ),
  newMember("Luan Brito",        true,  "lab7",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536189911/luan_x4zz04.jpg",           "https://www.facebook.com/luan.brito.98"                  ),
  newMember("Marconi Gomes",     true,  "mgrf",  "https://res.cloudinary.com/andrevas/image/upload/v1586205231/marconi_ioadj.png",          "https://www.facebook.com/itsmarconi"                     ),
  newMember("Pedro Basilio",     true,  "pcsb",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172198/basi_nyknu1.jpg",           "https://www.facebook.com/pedrocostab"                    ),
  newMember("Simone Santos",     true,  "scs",   "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211862/simone_edbcgo.jpg",         "https://www.linkedin.com/in/simone-santos-0562a228/"     ),
  newMember("Aline Correia",     false, "afcs",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/aline_id6oyv.jpg",      "https://www.facebook.com/aline.correia.332"              ),
  newMember("Camila Brendel",    false, "cscbb", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078745/pet/camila_ogqnbg.png",     "https://www.facebook.com/camila.brendel"                 ),
  newMember("Claudio Carvalho",  false, "cco2",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211481/claudio_uu2hai.jpg",        "https://www.facebook.com/claudiocarvalhoo"               ),
  newMember("Danilo Neves",      false, "dnr2",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/danilo_uukmn2.jpg",     "https://www.facebook.com/danilo.nevesribeiro"            ),
  newMember("Divino Neto",       false, "dgmn",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078756/pet/divino_x0c8kp.png",     "https://www.facebook.com/dgmneto"                        ),
  newMember("Éden Ernandes",     false, "eeas",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211483/eden_bsjax1.jpg",           "https://www.facebook.com/edenernandes"                   ),
  newMember("Edjan Michiles",    false, "esvm",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078739/pet/edjan_rdfnez.png",      "https://www.facebook.com/edjanmichiles"                  ),
  newMember("Ermano Arruda",     false, "eaa3",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/ermano_iaur9a.jpg",     "https://www.facebook.com/ermano.arruda"                  ),
  newMember("Felipe Araújo",     false, "fbma",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/felipe_ixro6g.jpg",         "https://www.facebook.com/felipearaujo213"                ),
  newMember("Fernando Fonseca",  false, "fdfd",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1479137835/pet/fdfd_fe6zpw.jpg",       "https://www.cin.ufpe.br/~fdfd/"                          ),
  newMember("Filipe Fernando",   false, "ffcms", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/filipe_yw1pgb.jpg",     "https://www.facebook.com/ffcms"                          ),
  newMember("Henrique Caúla",    false, "lhtc",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172200/tato_afltz1.jpg",           "https://www.facebook.com/hcaula"                         ),
  newMember("Higor Cavalcanti",  false, "hcmb",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078705/pet/higor_trgodn.png",      "https://www.facebook.com/HigorCMB"                       ),
  newMember("Larícia Mota",      false, "lmmc2", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211484/laricia_ddvzpy.jpg",        "https://www.facebook.com/laricia.mota"                   ),
  newMember("Lavínia Paganini ", false, "lfp2",  "http://res.cloudinary.com/dkbuneg9h/image/upload/v1520211486/lavinia_ns9hir.jpg",         "https://www.facebook.com/lavinia.f.paganini"             ),
  newMember("Lucas Cardoso",     false, "lccao", "http://res.cloudinary.com/dkbuneg9h/image/upload/v1520211491/cardoso_vu9o0b.jpg",         "https://www.facebook.com/profile.php?id=100002452062517" ),
  newMember("Lucas Santana",     false, "lss5",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078723/pet/lucas_plnf2x.png",      "https://www.facebook.com/lucassantanadsilva"             ),
  newMember("Leonardo Andrade" , false, "ljacs", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/leoandrade_tc7kj8.jpg", "https://www.facebook.com/leonardojacs"                   ),
  newMember("Leonardo Galdino",  false, "lcgm",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078735/pet/leo_bprqni.png",        "https://www.facebook.com/leonardo.galdino.142"           ),
  newMember("Lucas Valença",     false, "lvrma", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078786/pet/val_vwbuov.png",        "https://www.facebook.com/lucas.valenca.589"              ),
  newMember("Marcela Azevedo",   false, "macm3", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078762/pet/marcela_ga1upn.png",    "https://www.facebook.com/marcelaazevedo6"                ),
  newMember("Marlon Reghert",    false, "mras",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078791/pet/marlon_nhxx7l.png",     "https://www.facebook.com/marlonreghert.ads"              ),
  newMember("Maria Gabriela",    false, "mgtmc", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/gabi_jh56lw.jpg",       "https://www.facebook.com/MariaGabrielaCardoso"           ),
  newMember("Maria Luiza",       false, "mlmv",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078740/pet/malu_qfwczh.png",       "https://www.facebook.com/mluiza.menezes"                 ),
  newMember("Marina Haack",      false, "mmlh",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/haack_fxg1zi.jpg",      "https://www.facebook.com/ninahaacks"                     ),
  newMember("Maria Júlia",       false, "mjgfl", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1488486564/pet/mjulia_gysqyr.png",     "https://www.facebook.com/mariajuliagfl"                  ),
  newMember("Matheus Borba",     false, "mlbas", "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/broba_qpijfp.jpg",          "https://www.facebook.com/MatheusBorba222"                ),
  newMember("Pedro Rossi",       false, "pgrr",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078785/pet/rossi_iiqcfp.png",      "https://www.facebook.com/pgrr97"                         ),
  newMember("Pedro Torres",      false, "phtg",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/torres_exzgle.jpg",     "https://www.facebook.com/pedrootorres"                   ),
  newMember("Pedro Tôrres",      false, "phts",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211494/peu_hzuwon.jpg",            "https://www.facebook.com/t0rr3sp3dr0"                    ),
  newMember("Rafael Nunes",      false, "rngs",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078763/pet/peao_oje2db.png",       "https://www.facebook.com/peaonunes"                      ),
  newMember("Ramon Saboya",      false, "rsg3",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172198/ramon_fhrnmq.jpg",          "https://www.facebook.com/ramonsaboyagomes"               ),
  newMember("Rodrigo Calegario", false, "rcac",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078707/pet/calegario_yf6nqx.png",  "https://www.facebook.com/rodrigo.calegario.5"            ),
  newMember("Rodrigo Rodrigues", false, "rfrl",  "https://res.cloudinary.com/andrevas/image/upload/v1586216978/rods_opka.jpg",              "https://www.facebook.com/rodrigo.f.lemos.9"              ),
  newMember("Ruy Brito",         false, "rbb3",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078788/pet/ruy_bamenh.png",        "https://www.facebook.com/ruy.brito.3"                    ),
  newMember("Simone Cohen" ,     false, "scc",   "https://res.cloudinary.com/dkbuneg9h/image/upload/v1477078797/pet/simone_rzxtmg.png",     "https://www.facebook.com/scohen3594"                     ),
  newMember("Tomer Simis",       false, "tls",   "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781670/pet/tomer_gkmxf2.jpg",      "https://www.facebook.com/tomer.simis"                    ),
  newMember("Ullayne Fernandes", false, "uffl",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1520211497/ullayne_idtnvf.jpg",        "https://www.facebook.com/ullayne.fernandes"              ),
  newMember("Valdemiro Vieira",  false, "vrvs",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1536172201/vald_cbl90s.jpg",           "https://www.facebook.com/valdemiroo"                     ),
  newMember("Victor Monteiro",   false, "vddm",  "https://res.cloudinary.com/dkbuneg9h/image/upload/v1478781671/pet/vddm_sjwx5p.jpg",       "https://www.facebook.com/victorddiniz"                   ),
  newMember("Wilton Ramos",      false, "wrs",   "https://res.cloudinary.com/andrevas/image/upload/v1586208350/wilton_opgsk.jpg",           "https://www.facebook.com/petinformatica/"                )
];

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
    participants = [];
    for (var i = 0; i < AllMembersArray.length; i++){
      if (AllMembersArray[i].graduate == true)
        participants.push(AllMembersArray[i]);
    }
    return(
      <div className="row">
        {participants.map(participants => 
          <Member name = {participants.name} desc={participants.desc} pic={participants.pic} face={participants.face}/>
          )}
      </div>
    );
  }
});

var ExMembers = React.createClass({
  render: function(){
    participants = [];
    for (var i = 0; i < AllMembersArray.length; i++){
      if (AllMembersArray[i].graduate == false)
        participants.push(AllMembersArray[i]);
    }
    return(
      <div className="row">
        {participants.map(participants => 
          <Member name = {participants.name} desc={participants.desc} pic={participants.pic} face={participants.face}/>
          )}
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
