/* ---------- portrait icon motifs (unique per profile) ---------- */
function motif(kind){
  switch(kind){
    case 'bird': // Nise — animal therapy
      return `<path d="M120 60c-14-6-30-2-38 10-4-10-16-16-27-13 6 3 11 9 13 16-9-2-19 2-24 10 9-1 17 2 22 8-11 3-19 12-21 22 8-6 18-9 27-8-3 10 0 21 8 28 2-11 9-20 18-24-2 10 3 20 12 25 0-11 5-21 14-27-3 9 0 19 8 24 2-12 10-22 21-27-2-9-9-16-18-19 9-2 16-8 20-16-11 2-21-1-28-9 8 0 15-4 19-11-11 3-22 0-30-8z" fill="var(--wine-bright)" opacity="0.9"/>`;
    case 'feather': // Sônia — indigenous leadership
      return `<path d="M150 40c-30 6-52 30-58 60-4 20 2 42 16 56l8-8c-10-22-8-46 4-64 10-16 26-28 44-32-4 18-14 34-28 46l8 8c16-12 26-30 30-50 2-10-14-18-24-16z" fill="var(--wine-bright)" opacity="0.9"/><line x1="112" y1="102" x2="80" y2="150" stroke="var(--wine-bright)" stroke-width="2" opacity="0.7"/>`;
    case 'wave': // Elza — music
      return `<path d="M40 110 q15 -40 30 0 t30 0 t30 0 t30 0" stroke="var(--wine-bright)" stroke-width="4" fill="none" opacity="0.9" stroke-linecap="round"/><path d="M40 128 q15 -22 30 0 t30 0 t30 0 t30 0" stroke="var(--wine-bright)" stroke-width="2.5" fill="none" opacity="0.55" stroke-linecap="round"/>`;
    case 'scale': // Maria da Penha — justice
      return `<line x1="100" y1="30" x2="100" y2="140" stroke="var(--wine-bright)" stroke-width="2" opacity="0.85"/><line x1="55" y1="55" x2="145" y2="55" stroke="var(--wine-bright)" stroke-width="2" opacity="0.85"/><path d="M55 55 l-20 40 a20 14 0 0 0 40 0 z" fill="none" stroke="var(--wine-bright)" stroke-width="2" opacity="0.7"/><path d="M145 55 l-20 40 a20 14 0 0 0 40 0 z" fill="none" stroke="var(--wine-bright)" stroke-width="2" opacity="0.7"/><line x1="72" y1="140" x2="128" y2="140" stroke="var(--wine-bright)" stroke-width="2" opacity="0.85"/>`;
    case 'rose': // Marielle — carnation/rose, favela, feminism
      return `<circle cx="100" cy="55" r="20" fill="none" stroke="var(--wine-bright)" stroke-width="2" opacity="0.85"/><circle cx="100" cy="55" r="10" fill="var(--wine-bright)" opacity="0.6"/><path d="M100 75 C 90 105, 90 130, 100 150" stroke="var(--wine-bright)" stroke-width="2" fill="none" opacity="0.85"/><path d="M100 105 c -16 -4 -22 6 -22 14" stroke="var(--wine-bright)" stroke-width="2" fill="none" opacity="0.7"/>`;
  }
}

/* small transparent overlay: just the ribbon + motif, drawn on top of a real photo */
function motifOverlaySVG(motifKind, seed){
  return `
  <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMax slice" xmlns="http://www.w3.org/2000/svg">
    <!-- ribbon accent diagonal -->
    <path d="M40 40 C 140 90, 180 60, 260 150 C 300 190, 250 230, 210 200 C 170 170, 210 140, 250 170" stroke="var(--wine)" stroke-width="14" fill="none" opacity="0.85" stroke-linecap="round"/>
    <path d="M40 40 C 140 90, 180 60, 260 150 C 300 190, 250 230, 210 200 C 170 170, 210 140, 250 170" stroke="var(--wine-bright)" stroke-width="4" fill="none" opacity="0.9" stroke-linecap="round"/>
    <!-- motif -->
    <g transform="translate(230,60) scale(0.85)">${motif(motifKind)}</g>
  </svg>`;
}

/* large hero portrait: real photo + duotone tint */
function portraitPhoto(photoSrc, motifKind, name, seed, focus){
  const focusAttr = focus ? ` style="--focus:${focus}"` : '';
  return `
    <img class="portrait-img" src="${photoSrc}" alt="Retrato de ${name}"${focusAttr}>
    <div class="portrait-tint"></div>
  `;
}

/* small round thumbnail for the numbered strip */
function thumbPhoto(photoSrc, name, focus){
  const focusAttr = focus ? ` style="--focus:${focus}"` : '';
  return `<img class="thumb-img" src="${photoSrc}" alt="Retrato de ${name}"${focusAttr}>`;
}

/* ---------- data ---------- */
const profiles = [
  {
    num:'01', name:'Nise da Silveira', kicker:'Psiquiatra e humanista',
    role:'Psiquiatra — 1905–1999', category:'Ciência & Medicina', legacy:'Reforma psiquiátrica',
    motif:'bird', photo:'img/imgs1.jpeg', focus:'80% 30%',
    teaser:'Pioneira na luta contra o confinamento psiquiátrico no Brasil, trocou choques elétricos e lobotomias por terapia através da arte e dos animais.',
    bio:[
      'Nise da Silveira nasceu em Maceió, estado de Alagoas. Cursou a Faculdade de Medicina da Bahia, sendo a única mulher de sua turma. No Rio de Janeiro, passou a trabalhar como psiquiatra no Hospital da Praia Vermelha. Foi presa em 1936, na Ditadura Vargas, por pertencer à União Feminina Brasileira.',
      'Anistiada em 1944, retornou ao trabalho no Centro Psiquiátrico Nacional, hoje Instituto Municipal Nise da Silveira. Opondo-se ao confinamento e às práticas psiquiátricas que considerava agressivas — choques elétricos, lobotomia — propôs novas formas de tratamento.',
      'Foi pioneira na utilização de animais em terapia. Seu contato com o psiquiatra suíço Carl G. Jung introduziu a psicologia junguiana na América Latina. Criou também, em 1956, a Casa das Palmeiras, uma clínica de reabilitação para egressos de instituições psiquiátricas em regime de externato, a primeira do Brasil.',
      'Suas pesquisas e estudos deram origem a exposições, cursos, simpósios, publicações e outras produções intelectuais, recebendo inúmeros prêmios, homenagens e títulos em diferentes áreas do saber. Seu espírito profundamente humanista exerceu forte influência na cultura brasileira como um todo.',
      'Após sua morte, seu arquivo pessoal recebeu o Registro Internacional no Programa Memória do Mundo da UNESCO.'
    ]
  },
  {
    num:'02', name:'Sônia Guajajara', kicker:'Liderança indígena',
    role:'Ministra dos Povos Indígenas', category:'Ativismo Indígena', legacy:'Direitos dos povos originários',
    motif:'feather', photo:'img/imgs2.jpg',
    teaser:'Do Maranhão aos órgãos internacionais de direitos humanos, tornou-se a voz mais reconhecida da luta indígena no Brasil contemporâneo.',
    bio:[
      'Sônia Guajajara tem 50 anos e é uma liderança indígena extremamente conhecida no país, atualmente ocupando o cargo de Ministra dos Povos Indígenas no Brasil. Ela tem desempenhado uma defesa extremamente ativa dos direitos indígenas, lutando contra ameaças à demarcação de terras indígenas e lutando contra o desmatamento que afeta as comunidades indígenas no país. Não só isso, ela também tem participado de debates nacionais e internacionais para dar visibilidade às questões indígenas.',
      'Sônia é do povo Guajajara que sempre habitou as terras do Maranhão. Seus pais eram analfabetos, porém, aos 10 anos de idade, Sônia saiu de sua terra para estudar na cidade de Imperatriz, onde se localiza a universidade de sua formação. Ela trabalhou em casas de família em troca de moradia, onde aos 15 anos, contrariou os seus pais indo morar em Minas Gerais para estudar o ensino médio com o suporte da FUNAI. Ela foi ganhando mais visibilidade devido ao fato de conquistar espaços com sua militância e ganhando projeções em órgãos internacionais, como no Conselho de Direitos Humanos da ONU.',
      'No âmbito acadêmico, Sônia Guajajara possui graduação em Letras e Enfermagem, e é especialista em Educação Especial pela Universidade Estadual do Maranhão, tendo reconhecimento internacional na defesa dos povos originários, seus territórios e causas socioambientais, e sendo eleita uma das 100 pessoas mais influentes de 2022 pela revista TIME.'
    ]
  },
  {
    num:'03', name:'Elza Soares', kicker:'Cantora e ícone da MPB',
    role:'Cantora — 1930–2022', category:'Música & Cultura', legacy:'A voz do milênio',
    motif:'wave', photo:'img/imgs3.jpg',
    teaser:'De um casamento forçado aos 13 anos a setenta anos de carreira, ela se tornou, nas palavras da BBC de Londres, a cantora brasileira do milênio.',
    bio:[
      'Elza foi obrigada pelo pai a abandonar os estudos e casar-se com Lourdes Antônio. Elza sofreu muito neste matrimônio arranjado, por conta da violência doméstica e sexual a qual era constantemente submetida. Aos treze anos de idade deu à luz seu primeiro filho.',
      'Ao longo de 70 anos de carreira, teve inúmeras músicas no topo das listas de sucesso no Brasil.',
      'Em 1999, foi eleita pela Rádio BBC de Londres como a cantora brasileira do milênio.',
      'Em 2002, o álbum Do Cóccix até o Pescoço garantiu-lhe uma indicação ao Grammy.',
      'No ano de 2015, Elza Soares lançou o seu disco A Mulher do Fim do Mundo, primeiro álbum em sua carreira só com músicas inéditas. O Pitchfork, um dos sites de música mais importantes do mundo, o elegeu como melhor novo álbum. No artigo, o site afirma que Elza desenvolveu uma das vozes mais distintas da MPB.',
      'Em 20 de janeiro de 2022, a assessoria de Elza Soares informou que a cantora havia falecido de causas naturais, em sua casa, aos 91 anos de idade. A morte de Elza repercutiu no meio cultural, artístico e político.',
      'A Mocidade Independente de Padre Miguel, escola de samba do coração de Elza, decretou luto oficial e escreveu em suas redes sociais: "Você foi uma das maiores deste país. Só podemos agradecer por tudo."'
    ]
  },
  {
    num:'04', name:'Maria da Penha', kicker:'Farmacêutica e ativista',
    role:'Farmacêutica bioquímica', category:'Direitos Humanos', legacy:'Lei Maria da Penha (2006)',
    motif:'scale', photo:'img/imgs4.jpg',
    teaser:'Sobreviveu a duas tentativas de feminicídio e transformou sua luta pessoal na lei que redefiniu o combate à violência doméstica no Brasil.',
    bio:[
      'Maria da Penha Maia Fernandes, natural do Ceará, é farmacêutica bioquímica, se formou pela Universidade Federal do Ceará em 1966 e concluiu seu mestrado em Parasitologia em Análises Clínicas na Faculdade de Ciências Farmacêuticas da Universidade de São Paulo em 1977.',
      'Foi nesta faculdade paulista que conheceu Marco Antonio Heredia Viveros. Começaram a namorar e, como em qualquer começo de namoro, Marco Antonio sempre demonstrava ser muito amável, educado e solidário, e em 1976 se casaram.',
      'Quando Marco Antonio conseguiu a cidadania brasileira e sua estabilidade, começou a ser violento com a esposa. Tornou-se um homem intolerante, prepotente, com comportamentos explosivos, não só com Maria, mas também com suas filhas.',
      'Em 1983, Maria da Penha foi vítima de duas tentativas de femicídio por parte de seu marido. Na primeira, ele deu um tiro em suas costas enquanto ela dormia, o que a deixou paraplégica devido a lesões irreversíveis na terceira e quarta vértebras torácicas, laceração na dura-máter e destruição de um terço da medula à esquerda.',
      'Quando souberam desta situação, amigos e familiares de Maria da Penha conseguiram dar apoio jurídico a ela e providenciaram a sua saída de casa sem que isso pudesse configurar abandono de lar. A mulher, juntando as forças que ainda tinha, recorreu novamente ao judiciário, buscando obter alguma providência.',
      'Por incrível que pareça, apenas em 1991 aconteceu o primeiro julgamento de Marco Antonio, oito anos após o cometimento do crime. Ele foi sentenciado a 15 anos de prisão, mas, devido a recursos solicitados pela sua defesa, saiu do fórum em liberdade.',
      'Com isso, em 2002 foi formado um Consórcio de ONGs Feministas para a elaboração de uma lei de combate à violência doméstica e familiar contra a mulher.',
      'Após debates com os Poderes Legislativos e Executivos e também com a sociedade, o projeto dessa lei foi levado à Câmara dos Deputados e depois ao Senado Federal, sendo aprovado por unanimidade em ambas as Casas. Dessa forma, em 7 de agosto de 2006, o presidente da época, Luiz Inácio Lula da Silva, sancionou a Lei N. 11.340, que recebeu o nome "Maria da Penha" como forma de homenagem e reconhecimento da luta desta mulher.',
      'Houve também a fundação do Instituto Maria da Penha (IMP), uma organização não governamental e sem fins lucrativos, onde Maria da Penha segue o seu trabalho, promovendo ações de enfrentamento à violência contra a mulher. Também exerce pressão junto às autoridades para que haja o cumprimento total da Lei n. 11.340/2006.'
    ]
  },
  {
    num:'05', name:'Marielle Franco', kicker:'Socióloga e vereadora',
    role:'Vereadora — 1979–2018', category:'Política & Cidadania', legacy:'Voz das favelas no poder público',
    motif:'rose', photo:'img/imgs5.jpg',
    teaser:'Da Maré ao plenário da Câmara Municipal do Rio, dedicou sua vida à defesa dos direitos humanos, das mulheres e das comunidades periféricas.',
    bio:[
      'Marielle se formou pela PUC-Rio, e fez mestrado em Administração Pública pela Universidade Federal Fluminense (UFF). Sua dissertação teve como tema: "UPP: a redução da favela a três letras".',
      'Trabalhou em organizações da sociedade civil como a Brasil Foundation e o Centro de Ações Solidárias da Maré (Ceasm). Coordenou a Comissão de Defesa dos Direitos Humanos e Cidadania da Assembleia Legislativa do Rio de Janeiro (Alerj) e construía diversos coletivos e movimentos feministas, negros e de favelas.',
      'Era filiada ao Partido Socialismo e Liberdade (PSOL), e elegeu-se vereadora do Rio de Janeiro para a Legislatura 2017–2020 durante a eleição municipal de 2016, com a quinta maior votação. Marielle defendia o feminismo e os direitos humanos, e criticava a intervenção federal no Rio de Janeiro e a atuação da Polícia Militar, tendo denunciado vários casos de abuso de autoridade por parte de policiais contra moradores de comunidades carentes.',
      'Em 14 de março de 2018, foi assassinada a tiros junto de seu motorista, Anderson Pedro Mathias Gomes. No dia 24 de março de 2024, os irmãos Domingos Brazão e Chiquinho Brazão, com o delegado Rivaldo Barbosa, foram presos, acusados de serem os mandantes do atentado contra Marielle Franco em março de 2018.'
    ]
  }
];

let current = 0;
let animating = false;

const els = {
  heroName: document.getElementById('heroName'),
  heroKicker: document.getElementById('heroKicker'),
  heroTeaser: document.getElementById('heroTeaser'),
  portraitFrame: document.getElementById('portraitFrame'),
  captionName: document.getElementById('captionName'),
  captionRole: document.getElementById('captionRole'),
  bioIndex: document.getElementById('bioIndex'),
  bioSideName: document.getElementById('bioSideName'),
  bioSideRole: document.getElementById('bioSideRole'),
  metaCat: document.getElementById('metaCat'),
  metaLegacy: document.getElementById('metaLegacy'),
  bioBody: document.getElementById('bioBody'),
  stripList: document.getElementById('stripList'),
  footerCounter: document.getElementById('footerCounter'),
};

const fadeTargets = [
  document.getElementById('heroTitle'),
  els.heroKicker, els.heroTeaser,
  els.portraitFrame, document.getElementById('portraitCaption'),
  document.getElementById('bioSide'), els.bioBody
];

function buildStrip(){
  els.stripList.innerHTML = profiles.map((p,i)=>`
    <div class="strip-item${i===current?' active':''}" data-i="${i}" onclick="selectProfile(${i})">
      <div class="strip-top">
        <span class="strip-num">${p.num}</span>
        <div class="strip-thumb">${thumbPhoto(p.photo, p.name, p.focus)}</div>
      </div>
      <div class="strip-name">${p.name}</div>
      <div class="strip-kicker">${p.kicker}</div>
    </div>
  `).join('');
}

function render(i){
  const p = profiles[i];
  els.heroName.textContent = p.name;
  els.heroKicker.textContent = p.kicker;
  els.heroTeaser.textContent = p.teaser;
  els.portraitFrame.innerHTML = portraitPhoto(p.photo, p.motif, p.name, 'h'+i, p.focus);
  els.captionName.textContent = p.name;
  els.captionRole.textContent = p.role;
  els.bioIndex.innerHTML = `${p.num} &mdash; Cinco`;
  els.bioSideName.textContent = p.name;
  els.bioSideRole.textContent = p.kicker;
  els.metaCat.textContent = p.category;
  els.metaLegacy.textContent = p.legacy;
  els.bioBody.innerHTML = p.bio.map(t=>`<p>${t}</p>`).join('');
  els.bioBody.scrollTop = 0;
  els.footerCounter.textContent = `${p.num} / 05`;

  document.querySelectorAll('.strip-item').forEach((el,idx)=>{
    el.classList.toggle('active', idx===i);
  });
  document.querySelectorAll('.cat-link').forEach(a=>{
    a.classList.toggle('active', a.dataset.cat===p.category);
  });
}

function selectProfile(i){
  if(animating || i===current) return;
  animating = true;
  fadeTargets.forEach(el=>el.classList.add('fade-out'));
  setTimeout(()=>{
    current = i;
    render(current);
    fadeTargets.forEach(el=>el.classList.remove('fade-out'));
    setTimeout(()=>{ animating = false; }, 360);
  }, 340);
}

document.querySelectorAll('.cat-link').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const idx = profiles.findIndex(p=>p.category===a.dataset.cat);
    if(idx>-1) selectProfile(idx);
  });
});

function scrollToBio(){
  document.getElementById('bio').scrollIntoView({behavior:'smooth', block:'start'});
}

buildStrip();
render(0);