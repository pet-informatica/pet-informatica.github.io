import { PetWebsiteData, PetMemberType, PetColorScheme } from './content-model'

export const petDefaultDescriptionsLibrary = {
  model:
    'Composto por estudantes de Ciência da Computação do Centro de Informática da Universidade Federal de Pernambuco e uma professora tutora, temos como objetivo aproximar as pessoas da computação em suas diversas vertentes — seja com atividades voltadas ao público externo que ainda não ingressou na área ou direcionadas a estudantes do centro.',
  head:
    'O PET Informática é um programa da Universidade Federal de Pernambuco formado por pessoas alunas de Ciência da Computação. Organizamos cursos, palestras, workshops e olimpíadas para as pessoas alunas da graduação e toda a comunidade local.',
  website:
    'Somos pessoas alunas do Centro de Informática da Universidade Federal de Pernambuco que estão envolvidas em atividades de ensino, pesquisa e extensão, buscando melhorar a experiência da graduação para toda a comunidade acadêmica.',
}

export const imageLocations = {
  local: 'images',
  cdn: 'https://res.cloudinary.com/doiqlfqcn/image/upload/v1727264179/pet-website/',  
}

export const targetImageLocation = imageLocations.cdn;

export const petWebsiteData: PetWebsiteData = {
 announcement: {
   visible: false,
   colorScheme: PetColorScheme.MarAmarelo,
   shortDescription: 'Seleção 2024',
   longDescription:
     'A seleção de 2024 para novos petianos está aberta! Inscreva-se até o dia 5 de fevereiro.',
   callToAction: {
     text: 'Inscreva-se',
     url: 'https://pet.cin.ufpe.br/selecao/',
   },
 },
  hero: {
    title: null,
    text: null,
    circleImage: {
      url: `${targetImageLocation}/projetos/petianos.jpg`,
      alternativeText:
        'Equipe da Olimpíada Pernambucana de Informática, organizada pelo PET Informática.',
    },
    presentationImage: {
      url: `${targetImageLocation}/projetos/presentation.jpg`,
      alternativeText:
        'Duas petianas conversando com um participante da Olimpíada Pernambucana de Informática. Ao fundo, a entrada do Centro de Informática da Universidade Federal de Pernambuco e outras pessoas alunas.',
    },
    entries: [
      {
        title: 'Ensino',
        icon: 'ri-ball-pen-fill',
        text:
          'Buscamos contribuir com a formação intelectual das pessoas alunas e da comunidade local, oferecendo palestras, workshops, cursos e atividades relacionadas à difusão do conhecimento e da computação.',
      },
      {
        title: 'Pesquisa',
        icon: 'ri-test-tube-fill',
        text:
          'Realizamos internamente iniciações científicas e projetos de pesquisa, tanto individuais como coletivos, com o objetivo de desenvolver as habilidades pessoais de cada pessoa petiana e contribuir com a produção científica da Universidade.',
      },
      {
        title: 'Extensão',
        icon: 'ri-open-arm-fill',
        text:
          'Nossas atividades extrapolam os limites universitários, buscando atingir também a comunidade local e engajar pessoas em projetos profissionais, sociais e ambientais.',
      },
    ],
  },
  activities: [
    {
      title: 'OPEI',
      text:
        'Ocorrendo desde 2015, a Olimpíada Pernambucana de Informática tem como objetivo despertar o interesse na área de computação em estudantes do ensino fundamental e médio, através de problemas de raciocínio lógico e matemática. Para o ensino médio e estudantes do primeiro ano do ensino superior, a OPEI conta também com modalidade prática de programação.',
      images: [{
        url: `${targetImageLocation}/projetos/opei.jpg`,
        alternativeText:
          'Sala com estudantes realizando a avaliação prática da OPEI em computadores. No canto direito, uma aluna aplica a prova, enquanto no meio e no canto esquerdo, alunos estão realizando a prova.',
      }],
      callToAction: {
        text: 'Saiba mais no site oficial',
        url: 'https://opei.cin.ufpe.br/',
      },
    },
    {
      title: 'Visita de Colégios',
      text:
        'Em parceria com o CIn, o PET Informática organiza visitas para qualquer colégio que esteja interessado em mostrar o Centro para sua turma, a fim de ajudar na escolha profissional! Para marcar a visita da sua escola, veja o processo na seção <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="#perguntas-frequentes">Perguntas Frequentes</a>. Durante a visita, vamos fazer um tour com as pessoas alunas pelos prédios do CIn, e também fazer uma apresentação do curso!',
      images: [{
        url: `${targetImageLocation}/projetos/visitas.jpg`,
        alternativeText:
          'Estudantes e integrantes do PET Informática em frente do Centro de Informática sorrindo e fazendo poses divertidas após uma visita.',
      }],
      callToAction: {
        text: 'Agende a sua visita',
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdKJB2H0mqj7a7nkDeBYc42l-HsPXs1MJo-vRy6S_L9jZyCjw/viewform?usp=sf_link',
      },
    },
    {
      title: 'Conecta.pet',
      text:
          'O Conecta é uma plataforma híbrida (remota e presencial) para você aprender, sem enrolação e com muita prática, a programar em Python do zero. O conteúdo é formado por uma parte remota (conceitos e exercícios) e uma parte presencial (um projeto, opcional). Além disso, o Conecta inclui uma prova (presencial e opcional) para emitir um Certificado de Conclusão aos que obtiverem nota >= 7.',
      images: [{
        url: `${targetImageLocation}/projetos/conecta.jpg`,
        alternativeText:
          'Integrantes do PET Informática junto à estudantes de ensino médio que participaram do conecta pet. Ao fundo, o centro de informática da universidade federal de pernambuco.',
      }],
    },
    {
      title: 'Palestras e Workshops',
      text:
          'Buscando dar aos alunos do CIn novos conhecimentos, o PET Informática realiza periodicamente palestras de temas relacionados tanto à computação quanto à temas diversificados, possibilitando uma troca de conhecimentos de uma grande variedade de assuntos. Você pode acompanhar tudo isso pelas nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="#contato">redes sociais</a>.',
      images: [{
        url: `${targetImageLocation}/projetos/palestras.jpg`,
        alternativeText:
          'Estudantes em uma sala com computadores assistindo à uma workshop.',
      }],
    },
    {
      title: 'Manual de Sobrevivência',
      text:
          'Manual criado para auxiliar as pessoas calouras nos seus primeiros dias no Centro de Informática, explicando principalmente o passo a passo de atividades e as oportunidades do Centro e da Universidade de maneira simples e direta.',
      images: [{
        url: `${targetImageLocation}/projetos/manual.jpg`,
        alternativeText:
          'Logo do Manual de Sobrevivência',
      }],
      callToAction: {
        text: 'Acesse o manual',
        url: 'https://pet.cin.ufpe.br/manual/',
      },
    },
    {
      title: 'PETLib',
      text:
          'O PETLib é uma iniciativa criada pelo grupo para facilitar os estudos das pessoas alunas da graduação, possibilitando acesso rápido a materiais de estudo disponibilizados por outras pessoas alunas e professoras.',
      images: [{
        url: `${targetImageLocation}/projetos/petlib.jpg`,
        alternativeText:
          'Logo do PETLib',
      }],
      callToAction: {
        text: 'Acesse a biblioteca',
        url: 'https://cin.ufpe.br/~pet/lib',
      },
    },
    {
      title: 'Secomp UFPE',
      text:
          'A Secomp UFPE é um evento anual que visa promover um ambiente de aprendizado, discussão e troca de experiências, abrangendo desde temas técnicos e especializados até discussões sobre as implicações sociais da tecnologia.',
      images: [{
        url: `${targetImageLocation}/projetos/secomp.jpg`,
        alternativeText:
          'Jovem sorrindo durante uma palestra da semana da computação que aconteceu no anfiteatro do contro de informática da UFPE.',
      }],
      callToAction: {
        text: 'Acesse o site',
        url: 'https://secomp.cin.ufpe.br/'
      }
    },
    {
      title: 'Hemope',
      text:
          'Durante dois dias, o PET Informática da UFPE em parceria com o DACIn e o CITi, promove uma campanha de doação de sangue junto ao Hemope. Nos dois dias de campanha, montamos um posto provisório no Centro de Informática aberto para o público em geral.',
      images: [{
        url: `${targetImageLocation}/projetos/hemope.jpg`,
        alternativeText:
          'Pessoas participantes da organização do HEMOPE, membros do grupo do DACIn, CITi e PET Informática felizes por mais uma campanha realizada.',
      }],
    },
    {
      title: 'CInWiki',
      text:
          'Site colaborativo feito pelo PET Informática no formato Wiki com informações sobre os cursos, disciplinas e quaisquer atividades relacionadas ao Centro de Informática. Contribuições são mais que bem-vindas!',
      images: [{
        url: `${targetImageLocation}/projetos/cinwiki.jpg`,
        alternativeText:
          'Logo do CInWiki',
      }],
      callToAction: {
        text: 'Acesse o site',
        url: 'https://pet.cin.ufpe.br/wiki/',
      },
    },
  ],
  members: [
    {
      name: 'Rinaldo Junior',
      type: PetMemberType.Egress,
      cinLogin: 'rsbj',
      photoUrl:  `${targetImageLocation}/pessoas/rinaldo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/rinaldosbj/',
    },
    {
      name: 'Alice Sales',
      type: PetMemberType.Current,
      cinLogin: 'avss2',
      photoUrl:  `${targetImageLocation}/pessoas/alice.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/alice-sales123/',
    },
    {
      name: 'Beatriz Freire',
      type: PetMemberType.Egress,
      cinLogin: 'bfpc',
      photoUrl:  `${targetImageLocation}/pessoas/beatriz.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/beatriz-freire-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-89b803225/',
    },
    {
      name: 'Beatriz Oliveira',
      type: PetMemberType.Current,
      cinLogin: 'bob',
      photoUrl:  `${targetImageLocation}/pessoas/beatriz_oliveira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/beatriz-oliveira-2834531a1/',
    },
    {
      name: 'Guilherme Rigaud',
      type: PetMemberType.Current,
      cinLogin: 'glr2',
      photoUrl:  `${targetImageLocation}/pessoas/guilherme-rigaud.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/guilherme-rigaud/',
    },
    {
      name: 'João Melo',
      type: PetMemberType.Current,
      cinLogin: 'jvmb2',
      photoUrl:  `${targetImageLocation}/pessoas/joao_melo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/joaovicmelobez/',
    },
    {
      name: 'Luiza Diniz',
      type: PetMemberType.Current,
      cinLogin: 'ldmml',
      photoUrl:  `${targetImageLocation}/pessoas/luiza_diniz.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/luiza-diniz-3aa429246/',
    },
    {
      name: 'Carlos Henrique',
      type: PetMemberType.Current,
      cinLogin: 'chgs3',
      photoUrl:  `${targetImageLocation}/pessoas/carlos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/chgs3/',
    },
    {
      name: 'Bruno Lima',
      type: PetMemberType.Egress,
      cinLogin: 'bfl3',
      photoUrl: `${targetImageLocation}/pessoas/bruno.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/bruno-lima-91835a230',
    },
    
    {
      name: 'Eliab Bernardino',
      type: PetMemberType.Current,
      cinLogin: 'ebpj',
      photoUrl: `${targetImageLocation}/pessoas/eliab.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/eliab-bernardino-a58748205/',
    },
    {
      name: 'Ernesto Gonçalves',
      type: PetMemberType.Current,
      cinLogin: 'egln',
      photoUrl: `${targetImageLocation}/pessoas/ernesto.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ergdln/',
    },
    {
      name: 'Fernanda Pascoal',
      type: PetMemberType.Egress,
      cinLogin: 'falp',
      photoUrl: `${targetImageLocation}/pessoas/fernanda-pascoal.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernandapascoal/',
    },
    {
      name: 'Gabriela Pinheiro',
      type: PetMemberType.Egress,
      cinLogin: 'mgpc',
      photoUrl: `${targetImageLocation}/pessoas/gabriela.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gabrielapinheiroc/',
    },
    {
      name: 'Josué Fidelis',
      type: PetMemberType.Egress,
      cinLogin: 'jfon',
      photoUrl: `${targetImageLocation}/pessoas/josue-fidelis.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/josu%C3%A9-fidelis-2059411a2/',
    },
    {
      name: 'João Victor',
      type: PetMemberType.Current,
      cinLogin: 'jvsf',
      photoUrl: `${targetImageLocation}/pessoas/joao_victor.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/jo%C3%A3o-victor-25b434235/',
      personalWebsiteUrl: 'https://jvs-portifolio.vercel.app/',
    },
    {
      name: 'Lucas Leonardo',
      type: PetMemberType.Egress,
      cinLogin: 'llbs',
      photoUrl: `${targetImageLocation}/pessoas/lucas-leonardo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lucasleonardobs/',
    },
    {
      name: 'Marcelo Santana',
      type: PetMemberType.Current,
      cinLogin: 'maos3',
      photoUrl: `${targetImageLocation}/pessoas/marcelo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marcelo-santana/',
    },
    {
      name: 'Matheus Alves',
      type: PetMemberType.Egress,
      cinLogin: 'maa2',
      photoUrl: `${targetImageLocation}/pessoas/matheus-alves.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/matheus-alves-almeida-0a2947180/',
    },
    {
      name: 'Monyque Lima',
      type: PetMemberType.Current,
      cinLogin: 'mgbl',
      photoUrl: `${targetImageLocation}/pessoas/monyque.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/mgbl4/',
    },
    {
      name: 'Robson Fidalgo',
      type: PetMemberType.Tutor,
      cinLogin: 'rdnf',
      photoUrl: `${targetImageLocation}/pessoas/robson-fidalgo.jpg`,
    },
    {
      name: 'Robson Oliveira',
      type: PetMemberType.Egress,
      cinLogin: 'ropj',
      photoUrl: `${targetImageLocation}/pessoas/robson-oliveira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ropj/',
    },
    {
      name: 'Rodrigo Moura',
      type: PetMemberType.Current,
      cinLogin: 'jrsm',
      photoUrl: `${targetImageLocation}/pessoas/rodrigo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/rodrigo-moura-101413224/',
    }, 
    {        
      name: 'Rubens Lima',
      type: PetMemberType.Egress,
      cinLogin: 'rnl2',
      photoUrl: `${targetImageLocation}/pessoas/rubens-lima.jpg`,
    },
    {
      name: 'Tomás Nascimento',
      type: PetMemberType.Egress,
      cinLogin: 'tnpb',
      photoUrl: `${targetImageLocation}/pessoas/tomas-nascimento.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/tom%C3%A1s-nascimento-4a2260200/',
    },
    {        
      name: 'Victor Luiz',
      type: PetMemberType.Current,
      cinLogin: 'vlpl',
      photoUrl:  `${targetImageLocation}/pessoas/victor.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/victor-luiz-9462501a2',
    },
    {
      name: 'Gabriel Nogueira',
      type: PetMemberType.Egress,
      cinLogin: 'gnl2',
      photoUrl: `${targetImageLocation}/pessoas/gabriel-nogueira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gabriel-n-132451122/',
      personalWebsiteUrl: 'https://gabrielnogueiralt.github.io/',
    },
    {
      name: 'César Silva',
      type: PetMemberType.Egress,
      cinLogin: 'accs2',
      photoUrl: `${targetImageLocation}/pessoas/cesar-silva.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/acesarsilva2/',
    },
    {
      name: 'Aline Gouveia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/aline-gouveia.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/aline-gouveia/',
    },
    {
      name: 'André Vasconcelos',
      type: PetMemberType.Egress,
      cinLogin: 'alpvj',
      photoUrl: `${targetImageLocation}/pessoas/andre-luis-vasconcelos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/andrevas86/',
    },
    {
      name: 'Marconi Gomes',
      type: PetMemberType.Egress,
      cinLogin: 'mgrf',
      photoUrl: `${targetImageLocation}/pessoas/marconi_gomes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/MarconiGRF/',
      personalWebsiteUrl: 'https://marconi.dev.br/',
    },
    {
      name: 'Simone Santos',
      type: PetMemberType.Egress,
      cinLogin: 'scs',
      photoUrl: `${targetImageLocation}/pessoas/simone-santos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-santos-0562a228/',
      personalWebsiteUrl: 'http://lattes.cnpq.br/3675858428545219',
    },
    {
      name: 'Pedro Basilio',
      type: PetMemberType.Egress,
      cinLogin: 'pcsb',
      photoUrl: `${targetImageLocation}/pessoas/pedro-basilio.jpg`,
    },
    {
      name: 'Luan Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/luan-brito.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/luan-brito-1b802a152/',
    },
    {
      name: 'José Bezerra',
      type: PetMemberType.Egress,
      cinLogin: 'jbmn2',
      photoUrl: `${targetImageLocation}/pessoas/jose-bezerra.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/j0s3bezerra/',
    },
    {
      name: 'Erick Almeida',
      type: PetMemberType.Egress,
      cinLogin: 'eaor',
      photoUrl: `${targetImageLocation}/pessoas/erick-riso.jpg`,
      linkedinUrl: 'https://linkedin.com/in/risodev',
      personalWebsiteUrl: 'https://riso.dev/',
    },
    {
      name: 'Aline Correia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/aline-correia.jpg`,
    },
    {
      name: 'Camila Brendel',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/camila-brendel.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/camila-brendel-931a6210b/',
    },
    {
      name: 'Danilo Ribeiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/danilo-ribeiro.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/danilodnr2/',
    },
    {
      name: 'Divino Neto',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/divino-neto.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/dgmneto/',
    },
    {
      name: 'Edjan Michiles',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/edjan-michiles.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edjanmichiles/',
    },
    {
      name: 'Éden Ernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/eden-ernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edensantana/',
    },
    {
      name: 'Ermano Arruda',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/ermano-arruda.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ermanoarruda/',
    },
    {
      name: 'Felipe Araújo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/felipe-araujo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/felipeb-maraujo/',
    },
    {
      name: 'Fernando Fonseca',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/fernando-fonseca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Filipe Fernando',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/filipe-fernando.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Henrique Caúla',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/henrique-caula.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/henrique-ca%C3%BAla-561312169/',
    },
    {
      name: 'Higor Cavalcanti',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/higor-cavalcanti.jpg`,
    },
    {
      name: 'Larícia Mota',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/laricia-mota.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lariciamota/',
    },
    {
      name: 'Lucas Cardoso',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/lucas-cardoso.jpg`,
    },
    {
      name: 'Lavínia Paganini',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/lavinia-paganini.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lavinia-paganini/',
    },
    {
      name: 'Lunara Santana',
      type: PetMemberType.Egress,
      photoUrl:  `${targetImageLocation}/pessoas/lunara.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lunara/',
    },
    {
      name: 'Leonardo Andrade',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/leonardo-andrade.jpg`,
    },
    {
      name: 'Gus Stor',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/gus-stor.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gus-stor-746597b4/',
    },
    {
      name: 'Leonardo Galdino',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/leonardo-galdino.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/leonardo-galdino-81969814b/',
    },
    {
      name: 'Lucas Valença',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/lucas-valenca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lvrma/',
    },
    {
      name: 'Marcela Azevedo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/marcela-azevedo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marcela-azevedo-b64a5013b/',
    },
    {
      name: 'Maria Gabriela',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/maria-gabriela.jpg`,
      linkedinUrl:
        'https://www.linkedin.com/in/maria-gabriela-cardoso-002506b5/',
    },
    {
      name: 'Claudio Carvalho',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/claudio-carvalho.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/claudiocarvalhoo/',
    },
    {
      name: 'Ramon Saboya',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/ramon-saboya.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ramonsaboya/',
    },
    {
      name: 'Rodrigo Rodrigues',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/rodrigo-rodrigues.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/rods/'
    },
    {
      name: 'Ullayne Fernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/ullayne-fernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ullayne/'
    },
    {
      name: 'Marlon Reghert',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/marlon-reghert.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marlon-alves-325315b9',
    },
    {
      name: 'Maria Luiza Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/maria-luiza-vieira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/maria-luiza-menezes-vieira-44662a152',
    },
    {
      name: 'Marina Haack',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/marina-haack.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marinahaack',
    },
    {
      name: 'Maria Júlia Godoy',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/maria-julia-godoy.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/mariajuliagodoy',
    },
    {
      name: 'Matheus Borba',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/matheus-borba.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/borba-matheus/',
    },
    {
      name: 'Pedro Rossi',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/pedro-rossi.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/pgrr97/',
    },
    {
      name: 'Pedro Torres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/pedro-torres.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/pedrootorres/',
    },
    {
      name: 'Pedro Tôrres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/pedro-torres-2.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/t0rr3sp3dr0',
    },
    {
      name: 'Rafael Nunes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/rafael-nunes.jpg`,
    },
    {
      name: 'Rodrigo Calegario',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/rodrigo-calegario.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/rodrigo-calegario-32b7aa38/',
    },
    {
      name: 'Ruy Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/ruy-brito.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ruy-brito/',
    },
    {
      name: 'Simone Cohen',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/simone-cohen.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-cohen-3b14a614a/',
    },
    {
      name: 'Tomer Simis',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/tomer-simis.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/tomersimis/',
    },
    {
      name: 'Valdemiro Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/valdemiro-vieira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/vrvs/',
    },
    {
      name: 'Victor Monteiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/victor-monteiro.jpg`,
    },
    {
      name: 'Wilton Ramos',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/pessoas/wilton-ramos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/wilton-ramos/',
    },
  ],
  faqEntries: [
    {
      question: 'O que é o PET?',
      answer:
        'O <strong>Programa de Educação Tutorial</strong> foi criado para apoiar atividades que integram ensino, pesquisa e extensão. O PET proporciona às pessoas alunas, sob orientação de uma pessoa tutora, a realização de atividades extracurriculares que complementem a formação acadêmica da comunidade estudantil e, ao mesmo tempo, atendam necessidades do próprio curso de graduação.',
    },
    {
      question: 'O que é o PET Informática?',
      answer:
        '<strong>PET Informática</strong> é o PET do curso de Ciência da Computação da Universidade Federal de Pernambuco, composto por pessoas alunas bolsistas e não bolsistas, sob a orientação de uma pessoa professora tutora — atualmente o professor <strong>Robson Fidalgo</strong>.',
    },
    {
      question: 'Como entro no PET?',
      answer:
        'Periodicamente, com a saída de antigos integrantes, são abertas novas vagas para o grupo. A abertura do processo seletivo é divulgada nas nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="#contato">redes sociais</a> através do lançamento do Edital de Convocação. O processo seletivo se resume em três etapas: a primeira, onde as pessoas inscritas enviam currículos e outros documentos sobre a vida acadêmica, e outras duas, onde são realizadas dinâmicas em grupo e entrevistas. O processo é aberto para pessoas alunas de Ciência da Computação da UFPE que estejam entre o 1º e o 7º período.',
    },
    {
      question: 'Quem pode participar do PET?',
      answer:
        'Diretamente, apenas pessoas alunas de Ciência da Computação que não tenham nenhuma reprovação pendente no histórico escolar. Entretanto, integrantes de outros cursos, servidores e a comunidade em geral são mais do que convidadas a participarem como voluntários de atividades (como a OPEI) conosco, além de assistirem às palestras e aos workshops.',
    },
    {
      question:
        'Por que pessoas alunas de Engenharia da Computação e de Sistemas de Informação não podem participar do PET?',
      answer:
        'Quando um grupo PET é criado, ele fica associado a um curso de graduação da Universidade e fica restrito àquele curso. Quando o PET Informática foi criado, ele foi associado ao antigo curso de Informática, que foi substituído pelo curso de Ciência da Computação. Por este motivo, o grupo só pode receber pessoas alunas desse curso.',
    },
    {
      question: 'Como agendar uma visita institucional?',
      answer:
        'Para agendar uma visita, a pessoa professora que deseja trazer a turma ao centro precisa preencher <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" target = "blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdKJB2H0mqj7a7nkDeBYc42l-HsPXs1MJo-vRy6S_L9jZyCjw/viewform?usp=sf_link">este form</a> informando a instituição, o tamanho da turma e o dia e horários desejados. Nós, em conjunto com o Centro, avaliaremos a possibilidade da vaga e confirmaremos a visita.',
    },
    {
      question: 'Como participo da OPEI?',
      answer:
        '<strong>Se você é uma pessoa aluna:</strong> a inscrição para a OPEI é realizada por intermédio de uma pessoa professora responsável. Caso você queira participar, verifique com a escola se existe uma pessoa professora responsável pelo cadastro de estudantes. Caso não tenha, procure uma pessoa professora que possa se responsabilizar pelo cadastro da escola através do formulário disponível no <a target = "blank" class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a>. É importante que o regulamento seja seguido pelas pessoas alunas e professoras.<br><br><strong>Se você é uma pessoa professora ou diretora:</strong> Leia o regulamento que está disponível na aba "Quero me inscrever" no <a target = "blank" class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a> e cadastre a sua escola.',
    },
    {
      question: 'Como entro em contato?',
      answer:
        'Você pode entrar em contato com o PET Informática através das nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark" href="#contato">redes sociais</a> ou mandar um e-mail para a gente: <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:pet@cin.ufpe.br">pet@cin.ufpe.br</a>. No CIn, você pode visitar a nossa sala que fica no Bloco A, pertinho da Copa. Você também pode falar diretamente com qualquer pessoa petiana pelos corredores ou redes sociais.',
    },
  ],
  contactUrls: [
    {
      name: 'Instagram',
      label: '@petinformatica',
      icon: 'ri-instagram-fill',
      url: 'https://instagr.am/petinformatica',
    },
    {
      name: 'GitHub',
      label: 'petinformatica',
      icon: 'ri-github-fill',
      url: 'https://github.com/petinformatica',
    },
    {
      name: 'E-mail',
      label: 'pet@cin.ufpe.br',
      icon: 'ri-mail-fill',
      url: 'mailto:pet@cin.ufpe.br',
    },
  ],
  externalLinks: [
    {
      text: 'Secomp UFPE',
      url: 'https://secomp.cin.ufpe.br/',
    },
    {
      text: 'CInWiki',
      url: 'https://pet.cin.ufpe.br/wiki/',
    },
    {
      text: 'OPEI',
      url: 'https://opei.cin.ufpe.br/',
    },
    {
      text: 'Manual de Sobrevivência',
      url: 'https://pet.cin.ufpe.br/manual',
    },
    {
      text: 'PETLib',
      url: 'https://pet.cin.ufpe.br/lib/',
    },
  ],
}
