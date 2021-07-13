import { PetWebsiteData, PetMemberType, PetColorScheme } from './content-model'

export const petDefaultDescriptionsLibrary = {
  model:
    'Composto por estudantes de Ciência da Computação do Centro de Informática da Universidade Federal de Pernambuco e uma professora tutora, temos como objetivo aproximar as pessoas da computação em suas diversas vertentes — seja com atividades voltadas ao público externo que ainda não ingressou na área ou direcionadas a estudantes do centro.',
  head:
    'O PET-Informática é um programa da Universidade Federal de Pernambuco formado por pessoas alunas de Ciência da Computação. Organizamos cursos, palestras, workshops e olimpíadas para as pessoas alunas da graduação e toda a comunidade local.',
  website:
    'Somos pessoas alunas do Centro de Informática da Universidade Federal de Pernambuco que estão envolvidas em atividades de ensino, pesquisa e extensão, buscando melhorar a experiência da graduação para toda a comunidade acadêmica.',
}

export const imageLocations = {
  local: 'images',
  cdn: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1613622178/pet-website',
}

export const targetImageLocation = imageLocations.cdn;

export const petWebsiteData: PetWebsiteData = {
  announcement: {
    visible: true,
    colorScheme: PetColorScheme.BondiBlue,
    shortDescription: 'A seleção de novas petianas 2021.1 do PET está aberta!',
    longDescription:
      'Inscreva-se até o dia 25 de julho.',
    callToAction: {
      text: 'Inscreva-se',
      url: 'https://pet.cin.ufpe.br/selecao',
    },
  },
  hero: {
    title: null,
    text: null,
    circleImage: {
      url: `${targetImageLocation}/photos/opei-1.jpg`,
      alternativeText:
        'Equipe da Olimpíada Pernambucana de Informática, organizada pelo PET-Informática.',
    },
    presentationImage: {
      url: `${targetImageLocation}/photos/presentation.jpg`,
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
        'Ocorrendo desde 2015, a Olimpíada Pernambucana de Informática tem como objetivo despertar o interesse em Ciência da Computação em estudantes do ensino fundamental e médio, além de motivar estudantes do primeiro ano do ensino superior, através de problemas de raciocínio lógico e matemática. Para o ensino médio e superior, a OPEI conta também com modalidade prática de programação, com linguagens como <i>Java</i>, <i>C/C++</i> e <i>Python</i>.',
      images: [{
        url: `${targetImageLocation}/photos/opei-2.jpg`,
        alternativeText:
          'Sala com estudantes realizando a avaliação prática da OPEI em computadores. Ao centro, uma pessoa da equipe de voluntários da OPEI. Ao fundo, um relógio digital projetado no quadro da sala.',
      }],
      callToAction: {
        text: 'Saiba mais no site oficial',
        url: 'https://opei.cin.ufpe.br/',
      },
    },
    {
      title: 'Visita de Colégios',
      text:
        'Em parceria com o CIn, o PET-Informática organiza visitas para qualquer colégio que esteja interessado em mostrar o Centro para sua turma, a fim de ajudar na escolha profissional! Para marcar a visita da sua escola, veja o processo na seção <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="#perguntas-frequentes">Perguntas Frequentes</a>. Durante a visita, vamos fazer um tour com as pessoas alunas pelos prédios do CIn, e também fazer uma apresentação do curso!',
      images: [{
        url: `${targetImageLocation}/photos/visita.jpg`,
        alternativeText:
          'Estudantes e integrantes do PET-Informática em frente do Centro de Informática sorrindo e fazendo poses divertidas após uma visita.',
      }],
    },
    {
      title: 'Férias.py',
      text:
          'No período das férias escolares, o PET-Informática ministra aulas de programação para estudantes de ensino médio, para estimular o estudo da Ciência da Computação pelas pessoas alunas e ajudá-las a desenvolverem uma base sólida de programação. É um curso de introdução à linguagem de programação <i>Python</i>.',
      images: [{
        url: `${targetImageLocation}/photos/feriaspy.jpg`,
        alternativeText:
          'Integrantes do PET-Informática junto à estudantes de ensino médio que participaram do curso Férias.py. Ao fundo, o site do Férias.py projetado no quadro da sala.',
      }],
      callToAction: {
        text: 'Acesse o site',
        url: 'https://pet.cin.ufpe.br/ferias.py/',
      },
    },
    {
      title: 'Palestras e Workshops',
      text:
          'Buscando dar aos alunos do CIn novos conhecimentos, o PET-Informática realiza periodicamente palestras de temas relacionados tanto à computação quanto à temas diversificados, possibilitando uma troca de conhecimentos de uma grande variedade de assuntos. Muitas vezes, os workshops também são voltados para a descontração, criando uma oportunidade de diversão e engajamento para fugir da rotina!',
      images: [{
        url: `${targetImageLocation}/photos/workshops.png`,
        alternativeText:
          'Estudantes em uma sala com computadores assistindo à uma workshop. Ao fundo, uma pessoa ministrando a workshop, com uma apresentação projetada no quadro da sala.',
      }],
    },
    {
      title: 'Manual de Sobrevivência',
      text:
          'Manual criado para auxiliar as pessoas calouras nos seus primeiros dias no Centro de Informática, explicando principalmente o passo-a-passo de atividades e as oportunidades do Centro e da Universidade de maneira simples e direta.',
      images: [{
        url: `${targetImageLocation}/artworks/manual-de-sobrevivencia.png`,
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
        url: `${targetImageLocation}/artworks/petlib.png`,
        alternativeText:
          'Logo do PETLib',
      }],
      callToAction: {
        text: 'Acesse a biblioteca',
        url: 'https://cin.ufpe.br/~pet/lib',
      },
    },
    {
      title: 'PETLab',
      text:
          'O PETLab é uma inciativa do PET-Informática que propõe um período de intercâmbio em laboratórios de tecnologia e grupos de pesquisa da UFPE, onde as pessoas alunas envolvidas deverão desenvolver projetos relacionados com as áreas de pesquisa por onde passarão.',
      images: [{
        url: `${targetImageLocation}/artworks/petlab.png`,
        alternativeText:
          'Logo do PETLab',
      }],
      callToAction: {
        text: 'Acesse o site',
        url: 'https://pet.cin.ufpe.br/lab/'
      }
    },
    {
      title: 'HackaPET',
      text:
          'O HackaPET é uma iniciativa do PET-Informática que consiste em promover um hackathon para as pessoas alunas do CIn do 1º ao 5º período, com o objetivo de promover o trabalho em equipe a confiança das pessoas alunas nas suas habilidades de programação.',
      images: [{
        url: `${targetImageLocation}/photos/hackapet.jpg`,
        alternativeText:
          'Em primeiro plano, duas pessoas conversando. Ao fundo, pessoas concentradas. Todas as pessoas estão vestindo a camisa do HackaPET.',
      }],
      callToAction: {
        text: 'Acesse o site',
        url: 'https://pet.cin.ufpe.br/hacka/'
      }
    },
    {
      title: 'CInWiki',
      text:
          'Site colaborativo feito pelo PET-Informática no formato Wiki com informações sobre os cursos, disciplinas e quaisquer atividades relacionadas ao Centro de Informática. Contribuições são mais que bem-vindas!',
      images: [{
        url: `${targetImageLocation}/artworks/cinwiki.png`,
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
      name: 'Tomás Nascimento',
      type: PetMemberType.Current,
      cinLogin: 'tnpb',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794460/pet-website/members/tomas-nascimento.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/tom%C3%A1s-nascimento-4a2260200/',
    },
    {
      name: 'Ernesto Gonçalves',
      type: PetMemberType.Current,
      cinLogin: 'egln',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794238/pet-website/members/ernesto-goncalves.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ergdln/',
    },
    {
      name: 'Josué Fidelis',
      type: PetMemberType.Current,
      cinLogin: 'jfon',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794084/pet-website/members/josue-fidelis.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/josu%C3%A9-fidelis-2059411a2/',
    },
    {
      name: 'Robson Oliveira',
      type: PetMemberType.Current,
      cinLogin: 'ropj',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794459/pet-website/members/robson-oliveira.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/ropj/',
    },
    {
      name: 'Matheus Alves',
      type: PetMemberType.Current,
      cinLogin: 'maa2',
      photoUrl: 'https://res.cloudinary.com/dkbuneg9h/image/upload/v1620794305/pet-website/members/matheus-alves.jpg',
      linkedinUrl: 'https://www.linkedin.com/in/matheus-alves-almeida-0a2947180/',
    },
    {
      name: 'Aline Gouveia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/aline-gouveia.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/aline-gouveia/',
    },
    {
      name: 'André Vasconcelos',
      type: PetMemberType.Current,
      cinLogin: 'alpvj',
      photoUrl: `${targetImageLocation}/members/andre-luis-vasconcelos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/andrevas86/',
    },
    {
      name: 'César Silva',
      type: PetMemberType.Current,
      cinLogin: 'accs2',
      photoUrl: `${targetImageLocation}/members/cesar-silva.jpg`,
    },
    {
      name: 'Marconi Gomes',
      type: PetMemberType.Current,
      cinLogin: 'mgrf',
      photoUrl: `${targetImageLocation}/members/marconi-gomes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/MarconiGRF/',
      personalWebsiteUrl: 'https://marconi.dev.br/',
    },
    {
      name: 'Simone Santos',
      type: PetMemberType.Tutor,
      cinLogin: 'scs',
      photoUrl: `${targetImageLocation}/members/simone-santos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-santos-0562a228/',
      personalWebsiteUrl: 'http://lattes.cnpq.br/3675858428545219',
    },
    {
      name: 'Pedro Basilio',
      type: PetMemberType.Current,
      cinLogin: 'pcsb',
      photoUrl: `${targetImageLocation}/members/pedro-basilio.jpg`,
    },
    {
      name: 'Luan Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/luan-brito.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/luan-brito-1b802a152/',
    },
    {
      name: 'José Bezerra',
      type: PetMemberType.Current,
      cinLogin: 'jbmn2',
      photoUrl: `${targetImageLocation}/members/jose-bezerra.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/j0s3bezerra/',
    },
    {
      name: 'Gabriel Nogueira',
      type: PetMemberType.Current,
      cinLogin: 'gnl2',
      photoUrl: `${targetImageLocation}/members/gabriel-nogueira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gabriel-n-132451122/',
      personalWebsiteUrl: 'https://gabrielnogueiralt.github.io/',
    },
    {
      name: 'Erick Almeida',
      type: PetMemberType.Current,
      cinLogin: 'eaor',
      photoUrl: `${targetImageLocation}/members/erick-almeida.jpg`,
      linkedinUrl: 'https://linkedin.com/in/risodev',
      personalWebsiteUrl: 'https://riso.dev/',
    },
    {
      name: 'Aline Correia',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/aline-correia.jpg`,
    },
    {
      name: 'Camila Brendel',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/camila-brendel.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/camila-brendel-931a6210b/',
    },
    {
      name: 'Danilo Ribeiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/danilo-ribeiro.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/danilodnr2/',
    },
    {
      name: 'Divino Neto',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/divino-neto.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/dgmneto/',
    },
    {
      name: 'Edjan Michiles',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/edjan-michiles.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edjanmichiles/',
    },
    {
      name: 'Éden Ernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/eden-ernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/edensantana/',
    },
    {
      name: 'Ermano Arruda',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ermano-arruda.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ermanoarruda/',
    },
    {
      name: 'Felipe Araújo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/felipe-araujo.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/felipeb-maraujo/',
    },
    {
      name: 'Fernando Fonseca',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/fernando-fonseca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Filipe Fernando',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/filipe-fernando.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/fernando-fonseca-b6007333/',
    },
    {
      name: 'Henrique Caúla',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/henrique-caula.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/henrique-ca%C3%BAla-561312169/',
    },
    {
      name: 'Higor Cavalcanti',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/higor-cavalcanti.jpg`,
    },
    {
      name: 'Larícia Mota',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/laricia-mota.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lariciamota/',
    },
    {
      name: 'Lucas Cardoso',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-cardoso.jpg`,
    },
    {
      name: 'Lavínia Paganini',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lavinia-paganini.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lavinia-paganini/',
    },
    {
      name: 'Lucas Santana',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-santana.png`,
      linkedinUrl: 'https://www.linkedin.com/in/lcssantana/',
    },
    {
      name: 'Leonardo Andrade',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/leonardo-andrade.jpg`,
    },
    {
      name: 'Gus Stor',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/gus-stor.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/gus-stor-746597b4/',
    },
    {
      name: 'Leonardo Galdino',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/leonardo-galdino.png`,
      linkedinUrl: 'https://www.linkedin.com/in/leonardo-galdino-81969814b/',
    },
    {
      name: 'Lucas Valença',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/lucas-valenca.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/lvrma/',
    },
    {
      name: 'Marcela Azevedo',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marcela-azevedo.png`,
      linkedinUrl: 'https://www.linkedin.com/in/marcela-azevedo-b64a5013b/',
    },
    {
      name: 'Maria Gabriela',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-gabriela.jpg`,
      linkedinUrl:
        'https://www.linkedin.com/in/maria-gabriela-cardoso-002506b5/',
    },
    {
      name: 'Claudio Carvalho',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/claudio-carvalho.png`,
      linkedinUrl: 'https://www.linkedin.com/in/claudiocarvalhoo/',
    },
    {
      name: 'Ramon Saboya',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ramon-saboya.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ramonsaboya/',
    },
    {
      name: 'Rodrigo Rodrigues',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rodrigo-rodrigues.png`,
      linkedinUrl: 'https://www.linkedin.com/in/rods/'
    },
    {
      name: 'Ullayne Fernandes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ullayne-fernandes.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/ullayne/'
    },
    {
      name: 'Marlon Reghert',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marlon-reghert.png`,
      linkedinUrl: 'https://www.linkedin.com/in/marlon-alves-325315b9',
    },
    {
      name: 'Maria Luiza Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-luiza-vieira.png`,
      linkedinUrl: 'https://www.linkedin.com/in/maria-luiza-menezes-vieira-44662a152',
    },
    {
      name: 'Marina Haack',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/marina-haack.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/marinahaack',
    },
    {
      name: 'Maria Júlia Godoy',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/maria-julia-godoy.png`,
      linkedinUrl: 'https://www.linkedin.com/in/mariajuliagodoy',
    },
    {
      name: 'Matheus Borba',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/matheus-borba.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/borba-matheus/',
    },
    {
      name: 'Pedro Rossi',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-rossi.png`,
      linkedinUrl: 'https://www.linkedin.com/in/pgrr97/',
    },
    {
      name: 'Pedro Torres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-torres.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/pedrootorres/',
    },
    {
      name: 'Pedro Tôrres',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/pedro-torres-2.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/t0rr3sp3dr0',
    },
    {
      name: 'Rafael Nunes',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rafael-nunes.png`,
    },
    {
      name: 'Rodrigo Calegario',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/rodrigo-calegario.png`,
      linkedinUrl: 'https://www.linkedin.com/in/rodrigo-calegario-32b7aa38/',
    },
    {
      name: 'Ruy Brito',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/ruy-brito.png`,
      linkedinUrl: 'https://www.linkedin.com/in/ruy-brito/',
    },
    {
      name: 'Simone Cohen',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/simone-cohen.png`,
      linkedinUrl: 'https://www.linkedin.com/in/simone-cohen-3b14a614a/',
    },
    {
      name: 'Tomer Simis',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/tomer-simis.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/tomersimis/',
    },
    {
      name: 'Valdemiro Vieira',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/valdemiro-vieira.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/vrvs/',
    },
    {
      name: 'Victor Monteiro',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/victor-monteiro.jpg`,
    },
    {
      name: 'Wilton Ramos',
      type: PetMemberType.Egress,
      photoUrl: `${targetImageLocation}/members/wilton-ramos.jpg`,
      linkedinUrl: 'https://www.linkedin.com/in/wilton-ramos/',
    }
  ],
  faqEntries: [
    {
      question: 'O que é o PET?',
      answer:
        'O <strong>Programa de Educação Tutorial</strong> foi criado para apoiar atividades que integram ensino, pesquisa e extensão. O PET proporciona às pessoas alunas, sob orientação de uma pessoa tutora, a realização de atividades extracurriculares que complementem a formação acadêmica da comunidade estudantil e, ao mesmo tempo, atendam necessidades do próprio curso de graduação.',
    },
    {
      question: 'O que é o PET-Informática?',
      answer:
        '<strong>PET-Informática</strong> é o PET do curso de Ciência da Computação da Universidade Federal de Pernambuco, composto por pessoas alunas bolsistas e não bolsistas, sob a orientação de uma pessoa professora tutora — atualmente a professora <strong>Simone Santos</strong>.',
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
        'Quando um grupo PET é criado, ele fica associado a um curso de graduação da Universidade e fica restrito àquele curso. Quando o PET-Informática foi criado, ele foi associado ao antigo curso de Informática, que foi substituído pelo curso de Ciência da Computação. Por este motivo, o grupo só pode receber pessoas alunas desse curso.',
    },
    {
      question: 'Como agendar uma visita institucional?',
      answer:
        'Para agendar uma visita, a pessoa professora que deseja trazer a turma ao centro precisa mandar um e-mail para o CIn através de <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:ncsf@cin.ufpe.br">ncsf@cin.ufpe.br</a> ou <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:rvsj2@cin.ufpe.br">rvsj2@cin.ufpe.br</a> informando a instituição, o tamanho da turma e o dia e horários desejados. Nós, em conjunto com o Centro, veremos a possibilidade da vaga e confirmamos a visita.',
    },
    {
      question: 'Como participo da OPEI?',
      answer:
        '<strong>Se você é uma pessoa aluna:</strong> a inscrição para a OPEI é realizada por intermédio de uma pessoa professora responsável. Caso você queira participar, verifique com a escola se existe uma pessoa professora responsável pelo cadastro de estudantes. Caso não tenha, procure uma pessoa professora que possa se responsabilizar pelo cadastro da escola através do formulário disponível no <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a>. É importante que o regulamento seja seguido pelas pessoas alunas e professoras.<br><br><strong>Se você é uma pessoa professora ou diretora:</strong> Leia o regulamento que está disponível na aba "Quero me inscrever" no <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="https://opei.cin.ufpe.br/">site da OPEI</a> e cadastre a sua escola.',
    },
    {
      question: 'Como entro em contato?',
      answer:
        'Você pode entrar em contato com o PET-Informática através das nossas <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark" href="#contato">redes sociais</a> ou mandar um e-mail para a gente: <a class="font-bold text-laranja-internacional hover:text-laranja-internacional-dark transition-colors" href="mailto:pet@cin.ufpe.br">pet@cin.ufpe.br</a>. No CIn, você pode visitar a nossa sala que fica no Bloco A, pertinho da Copa. Você também pode falar diretamente com qualquer pessoa petiana pelos corredores ou redes sociais.',
    },
  ],
  contactUrls: [
    {
      name: 'Facebook',
      label: '@petinformatica',
      icon: 'ri-facebook-circle-fill',
      url: 'https://fb.me/petinformatica',
    },
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
      text: 'Férias.py',
      url: 'https://pet.cin.ufpe.br/ferias.py',
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
