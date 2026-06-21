const DB = {
  lucas: {
    av:'LF', cls:'av-b', name:'Lucas Ferreira', city:'Salvador, BA',
    sub:'1,4 km · Técnico de TI · Formatação e Redes', badge:'top',
    about:'4 anos formatando PCs e configurando redes Wi-Fi em Salvador. Atendo em domicílio com peças em estoque. Nota fiscal disponível.',
    rating:4.9, count:53, price:80, unit:'hora',
    tags:['Formatação','Redes Wi-Fi','Câmeras CFTV','Impressoras','Suporte remoto'],
    portfolio:['💻','🖥️','📡','🖨️','📷','🔌'],
    portfolioColors:['pi-a','pi-b','pi-c','pi-d','pi-e','pi-f'],
    reviews:[
      {a:'Tiago M.', stars:'★★★★★', t:'Resolveu a rede da minha empresa em menos de 1h. Muito profissional e ágil.'},
      {a:'Cláudia R.', stars:'★★★★★', t:'Formatou meu notebook e instalou tudo certinho. Super recomendo!'},
      {a:'Paulo F.', stars:'★★★★☆', t:'Bom serviço, atencioso. Só demorou um pouco mais que o previsto.'}
    ]
  },
  marina: {
    av:'MC', cls:'av-d', name:'Marina Castro', city:'Online',
    sub:'Online · Designer Gráfica · Social Media', badge:'verified',
    about:'Designer com 5 anos de experiência em identidade visual e marketing digital. Entrego em até 24h com revisões inclusas.',
    rating:5.0, count:29, price:60, unit:'peça',
    tags:['Logo','Posts','Canva / Figma','Flyer','Stories'],
    portfolio:['🎨','🖌️','🪄','📱','🗂️','✏️'],
    portfolioColors:['pi-d','pi-a','pi-b','pi-c','pi-e','pi-f'],
    reviews:[
      {a:'André N.', stars:'★★★★★', t:'Fez a logo da minha empresa em poucas horas. Ficou incrível.'},
      {a:'Isabela P.', stars:'★★★★★', t:'Posts do meu Instagram ficaram lindos! Prazo rapidíssimo.'},
      {a:'Roberta M.', stars:'★★★★★', t:'Entregou antes do prazo e com qualidade excepcional.'}
    ]
  },
  joao: {
    av:'JP', cls:'av-c', name:'João Pereira', city:'Salvador, BA',
    sub:'2,1 km · Montador · Eletricista Residencial', badge:'',
    about:'Montador e eletricista com 8 anos de experiência. Trabalho com móveis planejados, tomadas, iluminação e ar-condicionado.',
    rating:4.8, count:41, price:100, unit:'visita',
    tags:['Móveis','Tomadas','Ar-condicionado','Suporte TV','Iluminação'],
    portfolio:['🔧','💡','🪑','🛋️','❄️','🔩'],
    portfolioColors:['pi-c','pi-b','pi-a','pi-f','pi-e','pi-d'],
    reviews:[
      {a:'Marcos A.', stars:'★★★★★', t:'Montou meu guarda-roupa e instalou o suporte da TV. Mão de obra perfeita.'},
      {a:'Fernanda L.', stars:'★★★★☆', t:'Chegou no horário combinado, trabalho bem feito.'}
    ]
  },
  priya: {
    av:'PR', cls:'av-a', name:'Priya Rodrigues', city:'Online / Presencial',
    sub:'Online / Presencial · Inglês e Espanhol', badge:'top',
    about:'Professora certificada com mais de 10 anos de experiência. Preparação para IELTS, TOEFL e conversação do zero ao avançado.',
    rating:4.9, count:88, price:70, unit:'aula',
    tags:['Conversação','IELTS/TOEFL','Básico ao Avançado','Negócios','Espanhol'],
    portfolio:['📚','🗣️','✏️','🌍','📝','🎓'],
    portfolioColors:['pi-a','pi-b','pi-c','pi-d','pi-e','pi-f'],
    reviews:[
      {a:'Bruno S.', stars:'★★★★★', t:'Professora incrível, me deu muito mais confiança na conversação.'},
      {a:'Lúcia M.', stars:'★★★★★', t:'Passei no IELTS com a nota que eu precisava graças às aulas dela.'},
      {a:'Carlos T.', stars:'★★★★★', t:'Metodologia ótima, muito paciente. Já indiquei para três amigos.'}
    ]
  },
  rafael: {
    av:'RS', cls:'av-e', name:'Rafael Silva', city:'Salvador, BA',
    sub:'0,8 km · Motorista · Entregas e Mudanças', badge:'verified',
    about:'Motorista com van própria para entregas e pequenas mudanças em Salvador e região metropolitana. Rápido e cuidadoso.',
    rating:4.7, count:34, price:50, unit:'corrida',
    tags:['Van própria','Entregas SSA','Pequenas mudanças','Embalagem inclusa'],
    portfolio:['🚐','📦','🗃️','🔄','📍','✅'],
    portfolioColors:['pi-e','pi-c','pi-a','pi-b','pi-d','pi-f'],
    reviews:[
      {a:'Pedro K.', stars:'★★★★★', t:'Entregou meu produto no mesmo dia, rápido e cuidadoso.'},
      {a:'Silvia T.', stars:'★★★★☆', t:'Boa comunicação, chegou no prazo acordado.'}
    ]
  },
  bianca: {
    av:'BN', cls:'av-f', name:'Bianca Nunes', city:'Salvador, BA',
    sub:'1,9 km · Cabeleireira · Manicure a Domicílio', badge:'',
    about:'Cabeleireira e manicure com atendimento a domicílio. Trago todo o material. Especialista em escova, corte e nail art.',
    rating:4.8, count:57, price:45, unit:'serviço',
    tags:['Manicure','Escova','Corte','Sobrancelha','Nail art'],
    portfolio:['✂️','💅','💇','🪥','💄','🌸'],
    portfolioColors:['pi-f','pi-d','pi-b','pi-a','pi-e','pi-c'],
    reviews:[
      {a:'Roberta A.', stars:'★★★★★', t:'Fez minha manicure em casa, muito cuidadosa e rápida. Adorei!'},
      {a:'Carla F.', stars:'★★★★★', t:'Escova perfeita, durou bastante. Com certeza vou chamar de novo.'},
      {a:'Beatriz S.', stars:'★★★★☆', t:'Bom serviço, gostei do resultado.'}
    ]
  }
};

let currentWorker = null;
let currentRating = 0;

// ── NAVIGATION ──
function goTo(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s-' + id).classList.add('active');
  // só os 3 botões públicos do nav
  const navMap = ['home','register'];
  document.querySelectorAll('.nav-btn').forEach((b,i) => b.classList.toggle('active', navMap[i] === id));
  window.scrollTo(0,0);
  if (id === 'prodash' && typeof loadProDash === 'function') loadProDash();
  if (id === 'account') renderAccount();
  if (id === 'admin') loadAdminEscrow();
  if (id === 'admin' || id === 'owner') {
    // telas de admin nunca marcam nenhum nav-btn como ativo
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  }
}

// ── CATEGORY / CHIPS ──
function selCat(el, cat) {
  document.querySelectorAll('.cat-btn').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const cards = document.querySelectorAll('#cards-list .worker-card');
  let visible = 0;
  cards.forEach(card => {
    const show = cat === 'Todos' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });
  document.getElementById('list-title').textContent = cat === 'Todos' ? 'Disponíveis agora' : cat;
  document.getElementById('list-count').textContent = visible + ' profissional' + (visible !== 1 ? 'is' : '');
}
function selChip(el) {
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('sel'));
  el.classList.add('sel');
  const txt = el.textContent.trim();
  if (txt.includes('próximo')) {
    if (userLat) {
      updateDistanceBadges();
      sortCardsByDistance();
    } else {
      toast('📍 Ative sua localização primeiro!');
      document.getElementById('geo-banner').style.display = 'flex';
    }
  }
}

// ── SEARCH ──
function doSearch() {
  const q = document.getElementById('search-input').value.trim().toLowerCase();
  if (!q) { toast('Digite o que você precisa!'); return; }
  const cards = document.querySelectorAll('#cards-list .worker-card');
  let found = 0;
  cards.forEach(card => {
    const show = card.innerText.toLowerCase().includes(q);
    card.style.display = show ? '' : 'none';
    if (show) found++;
  });
  document.getElementById('list-title').textContent = 'Resultados para "' + q + '"';
  document.getElementById('list-count').textContent = found + ' encontrado' + (found !== 1 ? 's' : '');
  document.getElementById('cards-list').scrollIntoView({behavior:'smooth', block:'start'});
  if (!found) { toast('Nenhum resultado — mostrando todos'); selCat(document.querySelector('.cat-btn'), 'Todos'); }
}
document.getElementById('search-input').addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });

// ── CHECKOUT ──
function goToCheckout(wid) {
  const w = getWorker(wid); currentWorker = wid;
  const fee = Math.round(w.price * 0.15);
  const total = w.price + fee;
  document.getElementById('checkout-summary').innerHTML = `
    <div class="checkout-card-title">Resumo do pedido</div>
    <div class="price-row"><span>${w.name} — ${w.sub.split(' · ').slice(1).join(' · ')}</span><span>R$${w.price}</span></div>
    <div class="price-row"><span>Taxa de serviço BicoAgora <span class="fee">(15%)</span></span><span>R$${fee}</span></div>
    <div class="price-row"><span>Total</span><span>R$${total}</span></div>`;
  document.getElementById('sched-date').value = new Date().toISOString().split('T')[0];
  goTo('checkout');
}
function selPay(el) {
  document.querySelectorAll('.pay-opt').forEach(e => e.classList.remove('sel'));
  el.classList.add('sel');
  el.querySelector('input').checked = true;
}

// ════════════════════════════════════════
//  PERSISTÊNCIA — Firebase (Auth + Firestore)
// ════════════════════════════════════════
//
// Esta seção espera que as credenciais do Firebase já tenham sido
// preenchidas no <head> (objeto firebaseConfig). Sem credenciais
// reais, o site continua funcionando visualmente, mas login,
// cadastro, pedidos e avaliações vão mostrar erro ao tentar salvar.

let fb = null;               // referência ao objeto window.fb assim que estiver pronto
let currentSession = null;   // { uid, name, email, isPro, proId }
let firestoreUnsub = [];      // guarda listeners ativos para limpar se precisar

function waitForFirebase() {
  return new Promise(resolve => {
    if (window.fbReady) return resolve(window.fb);
    window.addEventListener('firebase-ready', () => resolve(window.fb), { once: true });
  });
}

// ── WORKER LOOKUP ──
// Primeiro olha no DB de demonstração (perfis fictícios que já vinham
// no site), depois procura no Firestore (profissionais reais cadastrados).
const _proCache = {}; // cache simples em memória para evitar buscas repetidas
function getWorker(wid) {
  if (DB[wid]) return DB[wid];
  return _proCache[wid] || null;
}
async function fetchWorker(wid) {
  if (DB[wid]) return DB[wid];
  if (_proCache[wid]) return _proCache[wid];
  if (!fb) return null;
  try {
    const snap = await fb.getDoc(fb.doc(fb.db, 'pros', wid));
    if (snap.exists()) {
      const data = { id: wid, ...snap.data() };
      _proCache[wid] = data;
      return data;
    }
  } catch (err) { console.error('Erro ao buscar profissional:', err); }
  return null;
}

// ── BOOKING MODAL ──
async function openBookingModal(wid) {
  const w = await fetchWorker(wid); currentWorker = wid;
  if (!w) { toast('Profissional não encontrado.'); return; }
  const av = document.getElementById('m-av');
  av.className = 'modal-av ' + w.cls; av.textContent = w.av;
  document.getElementById('m-name').textContent = w.name;
  document.getElementById('m-sub').textContent = w.sub;
  document.getElementById('m-rating').textContent = w.rating;
  document.getElementById('m-count').textContent = w.count;
  document.getElementById('m-reviews').innerHTML = (w.reviews||[]).map(r =>
    `<div class="modal-review">
      <div class="modal-rev-author">${r.a} <span style="color:var(--yellow)">${r.stars}</span></div>
      <div class="modal-rev-text">${r.t}</div>
    </div>`).join('') || '<p style="color:var(--ink-3);font-size:13px">Ainda sem avaliações.</p>';
  document.querySelectorAll('.slot').forEach((s,i) => s.classList.toggle('sel', i===0));
  document.getElementById('booking-modal').classList.add('open');
}
function closeBookingModal() { document.getElementById('booking-modal').classList.remove('open'); }
function closeBookingOutside(e) { if (e.target===document.getElementById('booking-modal')) closeBookingModal(); }
function selSlot(el) {
  document.querySelectorAll('.slot').forEach(s => s.classList.remove('sel'));
  el.classList.add('sel');
}

// ── RATING MODAL ──
async function openRating(wid) {
  const w = await fetchWorker(wid);
  if (!w) return;
  currentRating = 0;
  document.getElementById('rating-pro-name').textContent = 'Avalie ' + w.name;
  document.querySelectorAll('#rating-stars i').forEach(s => s.classList.remove('lit'));
  document.querySelector('.rating-comment').value = '';
  document.getElementById('rating-overlay').classList.add('open');
}
function closeRatingOutside(e) {
  if (e.target===document.getElementById('rating-overlay'))
    document.getElementById('rating-overlay').classList.remove('open');
}
function setRating(n) {
  currentRating = n;
  document.querySelectorAll('#rating-stars i').forEach((s,i) => s.classList.toggle('lit', i < n));
}

// ── SESSION (Firebase Auth) ──
function applySession() {
  const btn = document.getElementById('btn-login-nav');
  const pub = document.getElementById('btn-publish-nav');
  if (currentSession) {
    const first = currentSession.name.split(' ')[0];
    btn.textContent = '● ' + first;
    btn.classList.add('logged');
    btn.onclick = () => goTo('account');
    pub.style.display = currentSession.isPro ? '' : 'none';
  } else {
    btn.textContent = 'Entrar';
    btn.classList.remove('logged');
    btn.onclick = openAuth;
    pub.style.display = 'none';
  }
}

async function doLogout() {
  try { await fb.signOut(fb.auth); } catch (err) { console.error(err); }
  currentSession = null;
  applySession();
  goTo('home');
  toast('Você saiu da conta.');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ── AUTH UI ──
function openAuth() {
  document.getElementById('auth-overlay').classList.add('open');
  clearAuthErrors();
}
function closeAuth() { document.getElementById('auth-overlay').classList.remove('open'); }
function closeAuthOutside(e) { if (e.target===document.getElementById('auth-overlay')) closeAuth(); }
function switchAuthTab(btn, tab) {
  document.querySelectorAll('.auth-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
  document.getElementById('auth-' + tab).classList.add('active');
  clearAuthErrors();
}
function clearAuthErrors() {
  document.querySelectorAll('.auth-error').forEach(el => el.remove());
}
function showAuthError(formId, msg) {
  clearAuthErrors();
  const form = document.getElementById(formId);
  const div = document.createElement('div');
  div.className = 'auth-error';
  div.style.cssText = 'color:#C72828;font-size:12px;font-weight:700;margin:-6px 0 12px';
  div.textContent = msg;
  form.querySelector('.btn-auth').insertAdjacentElement('beforebegin', div);
}
// Traduz os códigos de erro do Firebase para mensagens em português
function translateFirebaseError(code) {
  const map = {
    'auth/email-already-in-use': 'Este e-mail já está cadastrado.',
    'auth/invalid-email': 'Digite um e-mail válido.',
    'auth/weak-password': 'Senha muito fraca — use ao menos 6 caracteres.',
    'auth/user-not-found': 'E-mail ou senha incorretos.',
    'auth/wrong-password': 'E-mail ou senha incorretos.',
    'auth/invalid-credential': 'E-mail ou senha incorretos.',
    'auth/too-many-requests': 'Muitas tentativas. Aguarde um pouco e tente de novo.',
    'auth/network-request-failed': 'Falha de conexão. Verifique sua internet.',
  };
  return map[code] || 'Não foi possível completar a operação. Tente novamente.';
}

async function doLogin() {
  const email = document.getElementById('auth-login').querySelector('input[type=email]').value.trim().toLowerCase();
  const pw    = document.getElementById('auth-login').querySelector('input[type=password]').value;
  if (!email || !pw) { showAuthError('auth-login', 'Preencha e-mail e senha.'); return; }
  if (!isValidEmail(email)) { showAuthError('auth-login', 'Digite um e-mail válido.'); return; }
  if (!fb) { showAuthError('auth-login', 'Firebase não configurado ainda — veja o topo do arquivo.'); return; }

  try {
    const cred = await fb.signInWithEmailAndPassword(fb.auth, email, pw);
    await loadSessionFromUser(cred.user);
    closeAuth();
    toast('Bem-vindo(a) de volta, ' + currentSession.name.split(' ')[0] + '!');
  } catch (err) {
    showAuthError('auth-login', translateFirebaseError(err.code));
  }
}

async function doSignup() {
  const nameEl  = document.getElementById('auth-signup').querySelector('input[type=text]');
  const emailEl = document.getElementById('auth-signup').querySelector('input[type=email]');
  const pwEl    = document.getElementById('auth-signup').querySelectorAll('input[type=password]')[0];
  const name  = nameEl.value.trim();
  const email = emailEl.value.trim().toLowerCase();
  const pw    = pwEl.value;

  if (!name || !email || !pw) { showAuthError('auth-signup', 'Preencha todos os campos.'); return; }
  if (name.length < 2) { showAuthError('auth-signup', 'Digite seu nome completo.'); return; }
  if (!isValidEmail(email)) { showAuthError('auth-signup', 'Digite um e-mail válido.'); return; }
  if (pw.length < 6) { showAuthError('auth-signup', 'Senha precisa ter mínimo 6 caracteres.'); return; }
  if (!fb) { showAuthError('auth-signup', 'Firebase não configurado ainda — veja o topo do arquivo.'); return; }

  try {
    const cred = await fb.createUserWithEmailAndPassword(fb.auth, email, pw);
    await fb.updateProfile(cred.user, { displayName: name });
    // cria o documento do usuário no Firestore (coleção "users")
    await fb.setDoc(fb.doc(fb.db, 'users', cred.user.uid), {
      name, email, isPro: false, proId: null, createdAt: fb.serverTimestamp()
    });
    await loadSessionFromUser(cred.user, { name, email, isPro: false, proId: null });
    closeAuth();
    toast('✓ Conta criada! Bem-vindo(a), ' + name.split(' ')[0] + '!');
  } catch (err) {
    showAuthError('auth-signup', translateFirebaseError(err.code));
  }
}

// Carrega os dados do Firestore do usuário autenticado e monta currentSession
async function loadSessionFromUser(user, fallback = null) {
  try {
    const snap = await fb.getDoc(fb.doc(fb.db, 'users', user.uid));
    const data = snap.exists() ? snap.data() : (fallback || { name: user.displayName || 'Usuário', email: user.email, isPro: false, proId: null });
    currentSession = { uid: user.uid, name: data.name, email: data.email, isPro: data.isPro, proId: data.proId || null };
  } catch (err) {
    console.error('Erro ao carregar sessão:', err);
    currentSession = { uid: user.uid, name: user.displayName || 'Usuário', email: user.email, isPro: false, proId: null };
  }
  applySession();
}

// ── REGISTER (cadastro de profissional) ──
async function submitRegister() {
  const name    = document.getElementById('r-name').value.trim();
  const phone   = document.getElementById('r-phone').value.trim();
  const bairro  = document.getElementById('r-bairro')?.value.trim() || '';
  const cidadeEl= document.getElementById('r-cidade');
  const city    = cidadeEl ? cidadeEl.value.trim() : '';
  const cep     = document.getElementById('r-cep')?.value.trim() || '';
  const priceEl = document.querySelector('#s-register input[type=number]');
  const about   = document.querySelector('#s-register .ftextarea').value.trim();
  const selects = document.querySelectorAll('#s-register .fselect');
  const cat     = selects[0].value;
  const modal   = selects[1].value;

  if (!currentSession) { toast('Você precisa entrar na sua conta antes de se cadastrar.'); openAuth(); return; }
  if (!name) { toast('Preencha seu nome para continuar.'); return; }
  if (!phone){ toast('Informe seu WhatsApp.'); return; }
  if (!fb)   { toast('Firebase não configurado ainda — veja o topo do arquivo.'); return; }

  const initials = name.split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase();
  const clsList  = ['av-a','av-b','av-c','av-d','av-e','av-f'];
  const cls      = clsList[Math.floor(Math.random()*clsList.length)];
  const price    = parseInt(priceEl.value) || 80;

  const svcSel = [];
  document.querySelectorAll('#s-register .svc-opt.on').forEach(el => svcSel.push(el.textContent.trim()));

  // captura coordenadas do profissional (se disponível)
  const geoCoords = await getProGeoCoords();

  const pro = {
    ownerUid: currentSession.uid,
    av: initials, cls, name,
    city: city || 'Salvador, BA',
    bairro: bairro || '',
    cep: cep || '',
    sub: (bairro || city || 'Salvador') + ' · ' + cat + ' · ' + modal,
    badge: '', about: about || 'Profissional cadastrado na BicoAgora.',
    rating: 5.0, count: 0, price, unit: 'serviço',
    tags: svcSel.length ? svcSel : [cat],
    portfolio: ['⭐','🔧','💼','✅','📋','🗓️'],
    portfolioColors: ['pi-a','pi-b','pi-c','pi-d','pi-e','pi-f'],
    reviews: [], phone,
    ...(geoCoords ? { lat: geoCoords.lat, lng: geoCoords.lng } : {}),
    createdAt: fb.serverTimestamp()
  };

  try {
    // cria o documento do profissional na coleção "pros"
    const ref = await fb.addDoc(fb.collection(fb.db, 'pros'), pro);
    const id  = ref.id;

    // atualiza o usuário para isPro = true
    await fb.updateDoc(fb.doc(fb.db, 'users', currentSession.uid), { isPro: true, proId: id });
    currentSession.isPro = true;
    currentSession.proId = id;
    applySession();

    toast('✓ Perfil criado! Você já aparece na listagem.');
    renderCards();
    setTimeout(() => goTo('home'), 1800);
  } catch (err) {
    console.error(err);
    toast('Erro ao criar perfil. Verifique sua conexão e tente novamente.');
  }
}

// ── ORDERS (pedidos) ──
async function saveOrder(wid) {
  if (!currentSession) { toast('Você precisa entrar na sua conta para contratar.'); openAuth(); return; }
  if (!fb) { toast('Firebase não configurado ainda.'); return; }
  const w = await fetchWorker(wid);
  if (!w) return;
  const fee = Math.round(w.price * 0.15);
  try {
    const ref = await fb.addDoc(fb.collection(fb.db, 'orders'), {
      clientUid: currentSession.uid,
      clientEmail: currentSession.email,
      proId: wid, proName: w.name,
      service: w.sub.split(' · ').slice(1).join(' · '),
      price: w.price, fee, total: w.price + fee,
      // ── ESCROW: dinheiro fica retido até cliente confirmar ──
      status: 'held',          // held → in_progress → released | disputed
      escrowStatus: 'held',    // held | released | disputed
      paymentHeldAt: fb.serverTimestamp(),
      createdAt: fb.serverTimestamp()
    });
    return ref.id;
  } catch (err) {
    console.error('Erro ao salvar pedido:', err);
    toast('Não foi possível registrar o pedido. Tente novamente.');
  }
}

// ── ESCROW: cliente confirma recebimento → libera pagamento ao profissional ──
async function confirmDelivery(orderId) {
  if (!fb) return;
  try {
    await fb.updateDoc(fb.doc(fb.db, 'orders', orderId), {
      status: 'released',
      escrowStatus: 'released',
      releasedAt: fb.serverTimestamp()
    });
    toast('✅ Serviço confirmado! Pagamento liberado ao profissional.');
    renderAccount();
  } catch (err) {
    console.error('Erro ao confirmar entrega:', err);
    toast('Erro ao confirmar. Tente novamente.');
  }
}

// ── ESCROW: cliente abre disputa → valor fica retido, plataforma medeia ──
async function openDispute(orderId) {
  if (!fb) return;
  const reason = prompt('Descreva brevemente o problema (será enviado para mediação):');
  if (reason === null) return; // cancelou
  try {
    await fb.updateDoc(fb.doc(fb.db, 'orders', orderId), {
      status: 'disputed',
      escrowStatus: 'disputed',
      disputeReason: reason || '(sem descrição)',
      disputedAt: fb.serverTimestamp()
    });
    toast('⚠️ Disputa aberta. Nossa equipe vai analisar e entrar em contato.');
    renderAccount();
  } catch (err) {
    console.error('Erro ao abrir disputa:', err);
    toast('Erro ao abrir disputa. Tente novamente.');
  }
}

// ── ADMIN: resolve disputa liberando ou estornando ──
async function resolveDispute(orderId, decision) {
  if (!fb) return;
  const newStatus = decision === 'release' ? 'released' : 'refunded';
  try {
    await fb.updateDoc(fb.doc(fb.db, 'orders', orderId), {
      status: newStatus,
      escrowStatus: newStatus,
      resolvedAt: fb.serverTimestamp()
    });
    toast(decision === 'release' ? '✅ Pagamento liberado ao profissional.' : '↩️ Estorno aprovado ao cliente.');
  } catch (err) {
    toast('Erro ao resolver disputa.');
  }
}

// ── RATINGS (avaliações persistentes no Firestore) ──
async function submitRating() {
  if (!currentRating) { toast('Selecione uma nota de 1 a 5 estrelas.'); return; }
  if (!fb) { toast('Firebase não configurado ainda.'); return; }
  const comment = document.querySelector('.rating-comment').value.trim();
  const wid     = currentWorker;

  const stars  = '★'.repeat(currentRating) + '☆'.repeat(5-currentRating);
  const review = {
    a: currentSession ? currentSession.name.split(' ')[0] + ' (você)' : 'Usuário',
    stars, t: comment || 'Serviço excelente!',
    ts: Date.now()
  };

  // perfis de demonstração (DB fixo) só atualizam em memória, não persistem
  if (DB[wid]) {
    DB[wid].reviews.unshift(review);
    const total = DB[wid].reviews.reduce((s,r) => s + r.stars.split('★').length - 1, 0);
    DB[wid].rating = Math.round(total / DB[wid].reviews.length * 10) / 10;
    DB[wid].count  = DB[wid].reviews.length;
  } else {
    // profissionais reais: lê o documento atual, soma a nova avaliação e grava de volta
    try {
      const ref  = fb.doc(fb.db, 'pros', wid);
      const snap = await fb.getDoc(ref);
      if (snap.exists()) {
        const data = snap.data();
        const reviews = [review, ...(data.reviews || [])];
        const total = reviews.reduce((s,r) => s + r.stars.split('★').length - 1, 0);
        const rating = Math.round(total / reviews.length * 10) / 10;
        await fb.updateDoc(ref, { reviews, rating, count: reviews.length });
        delete _proCache[wid]; // força buscar dados atualizados na próxima vez
      }
    } catch (err) {
      console.error('Erro ao salvar avaliação:', err);
      toast('Não foi possível salvar a avaliação.');
      return;
    }
  }

  document.getElementById('rating-overlay').classList.remove('open');
  toast('⭐ Avaliação salva! Obrigado pelo feedback.');
  renderCards();
}

// ── RENDER CARDS (busca profissionais reais no Firestore) ──
async function renderCards() {
  const list = document.getElementById('cards-list');
  if (!list || !fb) return;

  let pros = [];
  try {
    const snap = await fb.getDocs(fb.collection(fb.db, 'pros'));
    snap.forEach(docSnap => {
      const data = { id: docSnap.id, ...docSnap.data() };
      _proCache[data.id] = data;
      pros.push(data);
    });
  } catch (err) {
    console.error('Erro ao carregar profissionais:', err);
    return;
  }

  let extra = '';
  pros.forEach(p => {
    const avail = '<span class="badge-now"><i class="fa-solid fa-circle" style="font-size:7px"></i> Disponível agora</span>';
    let distText = p.city || 'Salvador, BA';
    if (userLat && p.lat && p.lng) {
      const km = haversine(userLat, userLng, p.lat, p.lng);
      distText = `${km} km de você`;
    }
    const locCls = (userLat && p.lat) ? 'badge-dist has-km' : 'badge-dist';
    const loc   = `<span class="${locCls}"><i class="fa-solid fa-location-dot"></i>${distText}</span>`;
    const tagsHtml = (p.tags||[]).map(t=>`<span class="tag">${t}</span>`).join('');
    extra += `
    <div class="worker-card" data-cat="Todos" onclick="showProfile('${p.id}')">
      <div class="card-top">
        <div class="avatar ${p.cls}">${p.av}</div>
        <div class="card-meta">
          <div class="card-name">${p.name}</div>
          <div class="card-role">${p.sub}</div>
          <div class="badges">${avail}${loc}</div>
        </div>
        <div class="stars-sm"><i class="fa-solid fa-star"></i> ${p.rating.toFixed(1)} <span style="color:var(--ink-3)">(${p.count})</span></div>
      </div>
      <div class="tags">${tagsHtml}</div>
      <div class="card-footer">
        <div class="price"><strong>R$ ${p.price}</strong> <small>/ ${p.unit}</small></div>
        <button class="btn-book" onclick="event.stopPropagation();showProfile('${p.id}')">Ver perfil</button>
      </div>
    </div>`;
  });

  list.querySelectorAll('.worker-card-user').forEach(el => el.remove());
  if (extra) {
    const div = document.createElement('div');
    div.className = 'worker-card-user';
    div.style.display = 'contents';
    div.innerHTML = extra;
    list.appendChild(div);
  }

  const count = list.querySelectorAll('.worker-card').length;
  const sc = document.querySelector('.section-count');
  if (sc) sc.textContent = count + ' profissionais';
}

// ── showProfile (busca tanto perfis demo quanto reais) ──
async function showProfile(wid) {
  const w = await fetchWorker(wid);
  if (!w) { toast('Profissional não encontrado.'); return; }
  currentWorker = wid;

  const starsHtml = (n) => '★'.repeat(Math.round(n)) + '☆'.repeat(5-Math.round(n));
  const fee   = Math.round(w.price * 0.15);
  const total = w.price + fee;
  const portfolioHtml = (w.portfolio||[]).map((e,i) =>
    `<div class="portfolio-item ${w.portfolioColors[i]}">${e}</div>`).join('');
  const reviewsHtml = (w.reviews||[]).map(r =>
    `<div class="review-item">
      <div class="rev-header"><span class="rev-author">${r.a}</span><span class="rev-stars">${r.stars}</span></div>
      <div class="rev-text">${r.t}</div>
    </div>`).join('') || '<p style="color:var(--ink-3);font-size:13px">Ainda sem avaliações.</p>';

  document.getElementById('profile-content').innerHTML = `
    <div class="profile-hero-bar">
      <div class="profile-av ${w.cls}">${w.av}</div>
      <div class="profile-info">
        <h2>${w.name}</h2>
        <div class="pro-location"><i class="fa-solid fa-location-dot" style="margin-right:4px"></i>${w.city}</div>
        <div class="profile-stars">${starsHtml(w.rating)} <span>(${w.count} avaliações · ${w.rating.toFixed(1)} média)</span></div>
      </div>
    </div>
    <div class="profile-body">
      <div class="profile-card">
        <div class="profile-card-title">Sobre</div>
        <p>${w.about}</p>
      </div>
      <div class="profile-card">
        <div class="profile-card-title">Portfólio</div>
        <div class="portfolio-grid">${portfolioHtml}</div>
      </div>
      <div class="profile-card">
        <div class="profile-card-title">Valor e contratação</div>
        <div class="profile-price-row">
          <div>
            <div class="profile-price-val">R$${w.price} <small>/ ${w.unit}</small></div>
            <div class="price-fee-note">+ R$${fee} taxa de serviço (15%) · Total: R$${total}</div>
          </div>
          <button class="btn-contratar" onclick="goToCheckout('${wid}')">Contratar agora</button>
        </div>
      </div>
      <div class="profile-card">
        <div class="profile-card-title">Avaliações (${w.count})</div>
        <div class="reviews-list">${reviewsHtml}</div>
      </div>
      <button class="btn-full" onclick="openBookingModal('${wid}')">
        <i class="fa-solid fa-calendar-check"></i> Agendar para hoje
      </button>
    </div>`;
  goTo('profile');
}

// ── confirmOrder (salva pedido + pagamento + WhatsApp) ──
async function confirmOrder() {
  const wid = currentWorker;
  const w   = await fetchWorker(wid);
  if (!w) return;

  const fee   = Math.round(w.price * 0.15);
  const total = w.price + fee;
  const obs   = document.querySelector('#s-checkout .ftextarea')?.value?.trim() || '';
  const dateEl = document.getElementById('sched-date');
  const timeEl = document.querySelector('#s-checkout select');
  const dateTxt = dateEl ? new Date(dateEl.value + 'T12:00').toLocaleDateString('pt-BR', {weekday:'long',day:'2-digit',month:'long'}) : '';
  const timeTxt = timeEl ? timeEl.value : '';
  const service = w.sub.split(' · ').slice(1).join(' · ');

  // 1. Pagamento
  const payBtn = document.querySelector('#s-checkout .btn-full');
  if (payBtn) { payBtn.disabled = true; payBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processando…'; }

  let payResult;
  try {
    payResult = await processPayment({
      total, proId: wid, proName: w.name, service,
      clientEmail: currentSession?.email || 'anonimo@bicoagora.app'
    });
  } catch (err) {
    toast('❌ Falha no pagamento. Tente novamente.');
    if (payBtn) { payBtn.disabled = false; payBtn.innerHTML = '<i class="fa-brands fa-whatsapp"></i> Confirmar e contatar pelo WhatsApp'; }
    return;
  }

  // 2. Salva pedido no Firestore
  await saveOrder(wid);

  // 3. Abre WhatsApp do profissional
  const msgExtra = obs ? `\n\nObservações: ${obs}` : '';
  const obsMsg = `${service} — ${dateTxt} (${timeTxt})${msgExtra}`;
  let wppAbriu = false;
  if (w.phone) {
    wppAbriu = openWhatsApp(w.phone, w.name, obsMsg, dateTxt);
  }

  if (payBtn) { payBtn.disabled = false; payBtn.innerHTML = '<i class="fa-solid fa-lock"></i> Pagar com segurança (escrow)'; }

  goTo('home');

  if (payResult?.mode === 'demo') {
    toast('🔒 Pedido confirmado! Pagamento retido — libere após receber o serviço.');
  } else {
    toast('💳 Pagamento retido! ' + (wppAbriu ? 'WhatsApp aberto.' : w.name + ' foi notificado.') + ' Libere após o serviço.');
  }

  setTimeout(() => openRating(wid), 8000);
}

// ── confirmBooking (salva pedido + WhatsApp) ──
async function confirmBooking() {
  const wid = currentWorker;
  const w   = await fetchWorker(wid);
  await saveOrder(wid);
  closeBookingModal();

  const service = w ? w.sub.split(' · ').slice(1).join(' · ') : 'serviço';
  const slot = document.querySelector('.slot.sel')?.textContent?.trim() || 'hoje';

  let wppAbriu = false;
  if (w?.phone) {
    wppAbriu = openWhatsApp(w.phone, w.name, service, slot);
  }

  if (wppAbriu) {
    toast('✓ Pedido salvo! WhatsApp de ' + (w?.name || 'profissional') + ' aberto.');
  } else {
    toast('✓ Pedido salvo! ' + (w ? w.name : 'O profissional') + ' será notificado.');
  }
  setTimeout(() => openRating(wid), 7000);
}

// ── PRO DASH dinâmico (busca pedidos reais no Firestore) ──
async function loadProDash() {
  if (!currentSession || !currentSession.proId || !fb) return;
  const w = await fetchWorker(currentSession.proId);
  if (!w) return;

  let orders = [];
  try {
    const q = fb.query(fb.collection(fb.db, 'orders'), fb.where('proId', '==', currentSession.proId));
    const snap = await fb.getDocs(q);
    snap.forEach(d => orders.push({ id: d.id, ...d.data() }));
  } catch (err) { console.error('Erro ao buscar pedidos do profissional:', err); }

  const ganhos = orders.reduce((s,o) => s + (o.price||0), 0);

  document.querySelector('.pro-dash-av').textContent      = w.av;
  document.querySelector('.pro-dash-av').className        = 'pro-dash-av ' + w.cls;
  document.querySelector('.pro-dash-info h3').textContent = w.name;
  document.querySelector('.pro-dash-info p').textContent  = w.sub.split(' · ').slice(1).join(' · ') + ' · ' + w.city;

  const kpis = document.querySelectorAll('.kpi-value');
  if (kpis[0]) kpis[0].textContent = 'R$' + ganhos.toLocaleString('pt-BR');
  if (kpis[1]) kpis[1].textContent = orders.length;
  if (kpis[2]) kpis[2].textContent = w.rating.toFixed(1) + ' ★';
  if (kpis[3]) kpis[3].textContent = orders.length ? '100%' : '—';

  if (orders.length) {
    const ordersHtml = orders.slice().reverse().slice(0,8).map(o => {
      const statusMap = {
        held:       ['o-held',     '🔒 Aguardando confirmação'],
        in_progress:['o-progress', 'Em andamento'],
        released:   ['o-ok',       '✅ Pagto liberado'],
        disputed:   ['o-disputed', '⚠️ Em disputa'],
        refunded:   ['o-pending',  '↩️ Estornado'],
        pending:    ['o-pending',  'Aguardando'],
        progress:   ['o-progress', 'Em andamento'],
        done:       ['o-ok',       'Concluído'],
      };
      const [cls,label] = statusMap[o.status] || statusMap.held;
      const ts = o.createdAt && o.createdAt.toDate ? o.createdAt.toDate() : new Date();
      const date = ts.toLocaleDateString('pt-BR', {day:'2-digit',month:'2-digit'});
      return `<div class="order-card">
        <div class="order-card-icon">📋</div>
        <div class="order-card-info">
          <div class="order-card-name">${o.clientEmail.split('@')[0]} — ${o.service}</div>
          <div class="order-card-sub">${date}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:6px">
          <div class="order-card-val">R$${o.price}</div>
          <span class="o-status ${cls}">${label}</span>
        </div>
      </div>`;
    }).join('');
    document.querySelectorAll('.pro-dash .order-card').forEach(el => el.remove());
    document.querySelector('.pro-orders-title').insertAdjacentHTML('afterend', ordersHtml);
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', async () => {
  applySession(); // estado "deslogado" inicial enquanto o Firebase carrega
  fb = await waitForFirebase();

  // observa mudanças de login/logout em tempo real
  fb.onAuthStateChanged(fb.auth, async (user) => {
    if (user) await loadSessionFromUser(user);
    else { currentSession = null; applySession(); }
  });

  renderCards();

  // ── GEOLOCALIZAÇÃO: exibe banner ou restaura posição da sessão ──
  const savedGeo = sessionStorage.getItem(GEO_KEY);
  if (savedGeo) {
    try {
      const { lat, lng } = JSON.parse(savedGeo);
      userLat = lat; userLng = lng;
      setTimeout(updateDistanceBadges, 600); // aguarda cards renderizarem
    } catch {}
  } else {
    // Exibe banner pedindo permissão
    const banner = document.getElementById('geo-banner');
    if (banner) banner.style.display = 'flex';
    // Tenta permissão silenciosa (se já foi concedida antes)
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' }).then(perm => {
        if (perm.state === 'granted') {
          banner.style.display = 'none';
          requestGeo();
        }
      }).catch(() => {});
    }
  }
});

// ════════════════════════════════════════
//  MINHA CONTA
// ════════════════════════════════════════
function openAccount() {
  if (!currentSession) {
    openAuth();
    return;
  }
  goTo('account');
}

async function renderAccount() {
  const guest  = document.getElementById('account-guest');
  const logged = document.getElementById('account-logged');
  if (!currentSession) {
    guest.style.display  = 'block';
    logged.style.display = 'none';
    return;
  }
  guest.style.display  = 'none';
  logged.style.display = 'block';

  // Preenche dados do usuário
  const initials = currentSession.name.split(' ').map(p=>p[0]).slice(0,2).join('').toUpperCase();
  document.getElementById('account-av').textContent    = initials;
  document.getElementById('account-name').textContent  = currentSession.name;
  document.getElementById('account-email').textContent = currentSession.email;
  const badge = document.getElementById('account-type-badge');
  badge.textContent = currentSession.isPro ? '⭐ Profissional' : 'Cliente';

  // Card de painel profissional
  const proCard = document.getElementById('account-pro-card');
  proCard.style.display = currentSession.isPro ? 'block' : 'none';

  // Pedidos do cliente
  const listEl = document.getElementById('account-orders-list');
  const emptyEl = document.getElementById('account-orders-empty');
  if (!fb) return;

  let orders = [];
  try {
    const q = fb.query(
      fb.collection(fb.db, 'orders'),
      fb.where('clientUid', '==', currentSession.uid)
    );
    const snap = await fb.getDocs(q);
    snap.forEach(d => orders.push({ id: d.id, ...d.data() }));
  } catch (err) { console.error('Erro ao buscar pedidos do cliente:', err); }

  // Remove cards anteriores (mantém o empty)
  listEl.querySelectorAll('.order-card').forEach(el => el.remove());

  if (orders.length === 0) {
    emptyEl.style.display = 'block';
    return;
  }
  emptyEl.style.display = 'none';

  const statusMap = {
    pending:   ['o-pending',  'Aguardando'],
    held:      ['o-held',     '🔒 Pagamento retido'],
    in_progress:['o-progress','Em andamento'],
    released:  ['o-released', '✅ Concluído'],
    disputed:  ['o-disputed', '⚠️ Em disputa'],
    refunded:  ['o-pending',  '↩️ Estornado'],
    done:      ['o-ok',       'Concluído'],
  };

  // Mapa dos passos visuais do escrow por status
  function escrowSteps(status) {
    const steps = ['Pago', 'Retido', 'Serviço', 'Liberado'];
    const doneMap = {
      held:       [true,  true,  false, false],
      in_progress:[true,  true,  true,  false],
      released:   [true,  true,  true,  true ],
      disputed:   [true,  true,  false, false],
      refunded:   [true,  false, false, false],
      pending:    [true,  false, false, false],
      done:       [true,  true,  true,  true ],
    };
    const active = doneMap[status] || doneMap.held;
    let html = '';
    steps.forEach((label, i) => {
      const isDone   = active[i];
      const isActive = !isDone && (i === 0 || active[i-1]);
      const dotCls   = isDone ? 'done' : (isActive ? 'active' : 'idle');
      const lblCls   = (isDone || isActive) ? 'active' : '';
      if (i > 0) html += `<div class="escrow-line${isDone ? ' done' : ''}"></div>`;
      html += `<div class="escrow-step"><div class="escrow-dot ${dotCls}">${isDone ? '✓' : i+1}</div><div class="escrow-label ${lblCls}">${label}</div></div>`;
    });
    return html;
  }

  orders.slice().reverse().forEach(o => {
    const [cls, label] = statusMap[o.status] || statusMap.held;
    const ts   = o.createdAt?.toDate ? o.createdAt.toDate() : new Date();
    const date = ts.toLocaleDateString('pt-BR', { day:'2-digit', month:'2-digit' });

    // Botões de ação do escrow (só para status que precisam de ação do cliente)
    let actionsHtml = '';
    if (o.status === 'held' || o.status === 'in_progress') {
      actionsHtml = `
        <div class="escrow-actions">
          <button class="btn-confirm-delivery" onclick="confirmDelivery('${o.id}')">
            <i class="fa-solid fa-check"></i> Recebi — liberar pagamento
          </button>
          <button class="btn-dispute" onclick="openDispute('${o.id}')">
            <i class="fa-solid fa-flag"></i> Problema
          </button>
        </div>`;
    } else if (o.status === 'disputed') {
      actionsHtml = `<div style="font-size:12px;color:#C72828;margin-top:8px;font-weight:600"><i class="fa-solid fa-hourglass-half"></i> Em mediação pela BicoAgora — aguarde contato.</div>`;
    }

    const card = document.createElement('div');
    card.className = 'escrow-card';
    card.innerHTML = `
      <div class="escrow-header">
        <div>
          <div class="escrow-title">${o.proName} — ${o.service}</div>
          <div class="escrow-sub">${date}</div>
        </div>
        <div>
          <div class="escrow-amount">R$${o.price}</div>
          <span class="o-status ${cls}" style="font-size:11px;padding:3px 8px;border-radius:50px;display:inline-block;margin-top:4px">${label}</span>
        </div>
      </div>
      <div class="escrow-steps">${escrowSteps(o.status)}</div>
      <div style="font-size:11px;color:var(--ink-3);text-align:center;margin-top:2px">
        💡 O dinheiro fica retido na BicoAgora e só é liberado quando você confirmar o serviço.
      </div>
      ${actionsHtml}`;
    listEl.insertBefore(card, emptyEl);
  });
}

// ════════════════════════════════════════
//  BACKSTAGE — Acesso admin/dono oculto
//  Acesse via: duplo-clique no logo
//  ou URL: coloque #backstage na barra
// ════════════════════════════════════════
let backstageClicks = 0, backstageTimer;
function triggerBackstage() {
  backstageClicks++;
  clearTimeout(backstageTimer);
  backstageTimer = setTimeout(() => { backstageClicks = 0; }, 1500);
  if (backstageClicks >= 2) {
    backstageClicks = 0;
    openAdminLogin('owner');
  }
}

// Acesso por hash na URL: bicoagora.html#backstage
window.addEventListener('hashchange', handleHash);
function handleHash() {
  const h = location.hash;
  if (h === '#backstage' || h === '#admin') {
    history.replaceState(null, '', location.pathname); // limpa o hash da URL
    openAdminLogin(h === '#backstage' ? 'owner' : 'admin');
  }
}
// verifica na carga inicial também
document.addEventListener('DOMContentLoaded', () => { handleHash(); });
const ADMIN_PASSWORD = 'admin123';
let adminLoginTarget = 'admin';

function openAdminLogin(target = 'admin') {
  adminLoginTarget = target;
  document.getElementById('admin-pw-input').value = '';
  document.getElementById('admin-pw-error').style.display = 'none';
  document.getElementById('admin-login-overlay').classList.add('open');
  setTimeout(() => document.getElementById('admin-pw-input').focus(), 100);
}
function closeAdminLogin() { document.getElementById('admin-login-overlay').classList.remove('open'); }
function closeAdminLoginOutside(e) { if (e.target === document.getElementById('admin-login-overlay')) closeAdminLogin(); }
function toggleAdminPwVis() {
  const inp = document.getElementById('admin-pw-input');
  const ico = document.getElementById('admin-pw-eye').querySelector('i');
  if (inp.type === 'password') { inp.type = 'text'; ico.className = 'fa-solid fa-eye-slash'; }
  else { inp.type = 'password'; ico.className = 'fa-solid fa-eye'; }
}
function checkAdminPw() {
  const val = document.getElementById('admin-pw-input').value;
  if (val === ADMIN_PASSWORD) {
    closeAdminLogin();
    if (adminLoginTarget === 'owner') { renderOwnerDash(); goTo('owner'); }
    else goTo('admin');
  } else {
    document.getElementById('admin-pw-error').style.display = 'block';
    document.getElementById('admin-pw-input').focus();
  }
}

// ── Dados simulados de mercado (base) por período ──
const OWNER_DATA = {
  7:  { gmv: 29400,  receita: 4410,  pedidos: 178,  pros_novos: 3,  taxa_media: 15, crescimento: 12 },
  30: { gmv: 112000, receita: 16800, pedidos: 689,  pros_novos: 14, taxa_media: 15, crescimento: 23 },
  90: { gmv: 310000, receita: 46500, pedidos: 1980, pros_novos: 38, taxa_media: 15, crescimento: 41 },
};
const OWNER_CATS = [
  { nome: 'Tecnologia', pct: 31 }, { nome: 'Reformas', pct: 22 }, { nome: 'Aulas', pct: 19 },
  { nome: 'Beleza', pct: 13 }, { nome: 'Entregas', pct: 9 }, { nome: 'Design', pct: 6 },
];

function fmtMoney(n) {
  if (n >= 1000) return 'R$' + (n/1000).toFixed(1).replace('.',',') + 'k';
  return 'R$' + Math.round(n).toLocaleString('pt-BR');
}

async function renderOwnerDash() {
  const period = parseInt(document.getElementById('owner-period').value);
  const base = OWNER_DATA[period];

  // pedidos reais salvos no Firestore (somamos tudo, independente do período simulado)
  let realOrders = [];
  if (fb) {
    try {
      const snap = await fb.getDocs(fb.collection(fb.db, 'orders'));
      snap.forEach(d => realOrders.push({ id: d.id, ...d.data() }));
    } catch (err) { console.error('Erro ao buscar pedidos para o painel do dono:', err); }
  }
  const realGmv = realOrders.reduce((s,o) => s + (o.price||0), 0);
  const realFee = realOrders.reduce((s,o) => s + (o.fee||0), 0);

  const gmv     = base.gmv + realGmv;
  const receita = base.receita + realFee;
  const pedidos = base.pedidos + realOrders.length;

  document.getElementById('owner-kpis').innerHTML = `
    <div class="metric"><div class="metric-l">Volume total (GMV)</div><div class="metric-v">${fmtMoney(gmv)}</div><div class="metric-c">↑ ${base.crescimento}% vs período anterior</div></div>
    <div class="metric"><div class="metric-l">Sua receita (taxa)</div><div class="metric-v">${fmtMoney(receita)}</div><div class="metric-c">Split automático</div></div>
    <div class="metric"><div class="metric-l">Pedidos concluídos</div><div class="metric-v">${pedidos.toLocaleString('pt-BR')}</div><div class="metric-c">${realOrders.length} reais no Firestore</div></div>
    <div class="metric"><div class="metric-l">Profissionais novos</div><div class="metric-v">${base.pros_novos}</div><div class="metric-c">no período simulado</div></div>
    <div class="metric"><div class="metric-l">Taxa de plataforma</div><div class="metric-v">${base.taxa_media}%</div><div class="metric-c">de cada serviço</div></div>
    <div class="metric"><div class="metric-l">Ticket médio</div><div class="metric-v">${fmtMoney(gmv/Math.max(pedidos,1))}</div><div class="metric-c">por serviço</div></div>
  `;

  const maxPct = Math.max(...OWNER_CATS.map(c => c.pct));
  document.getElementById('owner-cat-bars').innerHTML = OWNER_CATS.map(c => {
    const val = Math.round(receita * c.pct / 100);
    return `<div class="cat-bar-row">
      <div class="cat-bar-label">${c.nome}</div>
      <div class="cat-bar-track"><div class="cat-bar-fill" style="width:${(c.pct/maxPct*100).toFixed(0)}%"></div></div>
      <div class="cat-bar-val">${fmtMoney(val)}</div>
    </div>`;
  }).join('');

  // pedidos reais na tabela
  const ordersContainer = document.getElementById('owner-real-orders');
  if (realOrders.length) {
    ordersContainer.innerHTML = realOrders.slice().reverse().slice(0,10).map(o => `
      <div class="adm-row">
        <strong>${o.clientEmail.split('@')[0]}</strong>
        <span>${o.proName}</span>
        <span>R$${o.price}</span>
        <span>R$${o.fee}</span>
      </div>`).join('');
  } else {
    ordersContainer.innerHTML = `<div class="adm-row" style="grid-template-columns:1fr"><span style="color:var(--ink-3)">Nenhum pedido real registrado ainda no Firestore.</span></div>`;
  }

  const alerts = [
    { type:'warn', icon:'💳', text:'Pagamento em modo demo. Para produção: defina PAYMENT_MODE = "pagarme" ou "stripe" e configure a Cloud Function em /api/checkout.' },
    { type: fb ? 'ok' : 'warn', icon: fb ? '🔐' : '⚠️', text: fb
        ? 'Autenticação real via Firebase Auth — login e senha não ficam mais no navegador.'
        : 'Firebase ainda não configurado — preencha o firebaseConfig no topo do arquivo.' },
    { type:'ok', icon:'📍', text: userLat ? `Geolocalização ativa — distâncias calculadas em tempo real (Haversine + Nominatim).` : 'Geolocalização disponível — usuário não ativou ainda.' },
    { type:'ok', icon:'💬', text:'WhatsApp real ativo — botão "Confirmar" abre wa.me com mensagem pré-preenchida.' },
    realOrders.length
      ? { type:'ok', icon:'✅', text: realOrders.length + ' pedido(s) real(is) já registrados no Firestore.' }
      : { type:'warn', icon:'⚠️', text:'Ainda não há pedidos reais — faça um agendamento de teste para ver os dados aparecerem aqui.' },
  ];
  document.getElementById('owner-alerts').innerHTML = alerts.map(a =>
    `<div class="alert-card ${a.type}"><span class="alert-icon">${a.icon}</span><span class="alert-text">${a.text}</span></div>`
  ).join('');

  calcSplit();
}

function calcSplit() {
  const total  = parseFloat(document.getElementById('split-input').value) || 0;
  const feePct = parseFloat(document.getElementById('split-fee').value) || 15;
  const minha  = Math.round(total * feePct / 100 * 100) / 100;
  const pro    = Math.round((total - minha) * 100) / 100;
  document.getElementById('split-result').innerHTML = `
    <div class="split-card">
      <div class="split-who">Profissional recebe</div>
      <div class="split-val" style="color:var(--green-dark)">R$ ${pro.toFixed(2).replace('.',',')}</div>
      <div class="split-pct">${(100-feePct)}% do valor</div>
    </div>
    <div class="split-card">
      <div class="split-who">BicoAgora (você)</div>
      <div class="split-val" style="color:var(--ink)">R$ ${minha.toFixed(2).replace('.',',')}</div>
      <div class="split-pct">${feePct}% de taxa</div>
    </div>
  `;
}

// ════════════════════════════════════════
//  1. GEOLOCALIZAÇÃO REAL (Navegador API)
// ════════════════════════════════════════
let userLat = null, userLng = null;
const GEO_KEY = 'bicoagora_geo'; // chave para localStorage

// Calcula distância em km entre dois pontos (fórmula de Haversine)
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180)*Math.cos(lat2*Math.PI/180)*Math.sin(dLng/2)**2;
  return Math.round(R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)) * 10) / 10;
}

// Geocodifica coordenadas → nome do bairro/cidade via Nominatim (OpenStreetMap)
async function reverseGeocode(lat, lng) {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=12&accept-language=pt-BR`);
    const data = await res.json();
    const addr = data.address || {};
    const bairro = addr.suburb || addr.neighbourhood || addr.quarter || addr.city_district || '';
    const cidade = addr.city || addr.town || addr.municipality || '';
    const estado = addr.state_code || addr.state || '';
    if (bairro && cidade) return `${bairro}, ${cidade}`;
    if (cidade && estado) return `${cidade}, ${estado}`;
    return cidade || 'Sua localização';
  } catch { return 'Sua localização'; }
}

// Atualiza distâncias nos cards de demonstração (DB estático com coords fixas de Salvador)
const DB_COORDS = {
  lucas:  { lat: -12.9897, lng: -38.5108 }, // Pituba
  marina: null,                              // Online
  joao:   { lat: -12.9754, lng: -38.4761 }, // Barra
  priya:  null,                              // Online
  rafael: { lat: -12.9704, lng: -38.5018 }, // Rio Vermelho
  bianca: { lat: -13.0002, lng: -38.5208 }, // Imbuí
};

function updateDistanceBadges() {
  if (!userLat) return;
  document.querySelectorAll('#cards-list .worker-card').forEach(card => {
    // tenta descobrir o ID pelo onclick
    const onclick = card.getAttribute('onclick') || '';
    const match = onclick.match(/showProfile\('([^']+)'\)/);
    if (!match) return;
    const wid = match[1];
    const coords = DB_COORDS[wid];
    const badge = card.querySelector('.badge-dist');
    if (!badge) return;
    if (!coords) {
      // Online permanece como está
      return;
    }
    const km = haversine(userLat, userLng, coords.lat, coords.lng);
    badge.innerHTML = `<i class="fa-solid fa-location-dot"></i>${km} km de você`;
    badge.classList.add('has-km');
  });
  // reordena os cards pelo chip "Mais próximo" se ativo
  const chip = document.querySelector('.chip.sel');
  if (chip && chip.textContent.trim().includes('próximo')) sortCardsByDistance();
}

function sortCardsByDistance() {
  const list = document.getElementById('cards-list');
  const cards = Array.from(list.querySelectorAll('.worker-card'));
  cards.sort((a, b) => {
    const getKm = card => {
      const badge = card.querySelector('.badge-dist');
      if (!badge) return 9999;
      const m = badge.textContent.match(/([\d.,]+)\s*km/);
      return m ? parseFloat(m[1].replace(',','.')) : (badge.textContent.toLowerCase().includes('online') ? 0.5 : 9999);
    };
    return getKm(a) - getKm(b);
  });
  cards.forEach(c => list.appendChild(c));
}

function requestGeo() {
  const banner = document.getElementById('geo-banner');
  const text   = document.getElementById('geo-text');
  text.textContent = 'Detectando sua localização…';

  if (!navigator.geolocation) {
    text.textContent = 'Geolocalização não suportada no seu navegador.';
    banner.classList.add('denied');
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      userLat = pos.coords.latitude;
      userLng = pos.coords.longitude;
      // persiste em sessionStorage para a sessão atual
      sessionStorage.setItem(GEO_KEY, JSON.stringify({ lat: userLat, lng: userLng }));
      const nome = await reverseGeocode(userLat, userLng);
      banner.style.display = 'none';
      toast(`📍 Localização ativada: ${nome}`);
      updateDistanceBadges();
    },
    (err) => {
      banner.classList.add('denied');
      if (err.code === 1) {
        text.textContent = 'Permissão negada. Ative nas configurações do navegador.';
      } else {
        text.textContent = 'Não foi possível obter sua localização.';
      }
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

// Salva lat/lng junto ao perfil do profissional ao se cadastrar
// (será adicionado em submitRegister mais abaixo)
async function getProGeoCoords() {
  if (userLat) return { lat: userLat, lng: userLng };
  return new Promise(resolve => {
    if (!navigator.geolocation) return resolve(null);
    navigator.geolocation.getCurrentPosition(
      pos => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      ()  => resolve(null),
      { enableHighAccuracy: false, timeout: 5000 }
    );
  });
}

// ════════════════════════════════════════
//  2. WHATSAPP REAL (link wa.me)
// ════════════════════════════════════════
// Formata número para o padrão internacional brasileiro (55 + DDD + número)
function formatWppNumber(raw) {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('55') && digits.length >= 12) return digits;
  if (digits.length === 11 || digits.length === 10) return '55' + digits;
  return digits; // retorna como veio se não conseguir formatar
}

// Abre o WhatsApp com mensagem pré-preenchida para o profissional
function openWhatsApp(phone, proName, service, date) {
  const num = formatWppNumber(phone);
  if (!num || num.length < 10) { toast('Número de WhatsApp inválido.'); return false; }
  const dateStr = date || new Date().toLocaleDateString('pt-BR', { weekday:'long', day:'2-digit', month:'long' });
  const msg = encodeURIComponent(
    `Olá, ${proName}! Vi seu perfil no *BicoAgora* e gostaria de contratar: *${service}*.\n\nPodemos conversar sobre disponibilidade para ${dateStr}?`
  );
  window.open(`https://wa.me/${num}?text=${msg}`, '_blank');
  return true;
}

// ════════════════════════════════════════
//  3. PAGAMENTO — Pagar.me / Stripe (stub)
// ════════════════════════════════════════
// NOTA: O processamento real acontece no backend (Cloud Functions).
// Aqui criamos o payload e fazemos a chamada ao endpoint.
// Em modo demo (sem backend), exibe confirmação visual com instruções.

const PAGARME_ENDPOINT = '/api/checkout'; // substitua pela URL da sua Cloud Function
const STRIPE_PK = 'pk_test_XXXX';        // sua chave pública do Stripe (se usar Stripe)

// Modos: 'pagarme' | 'stripe' | 'demo'
const PAYMENT_MODE = 'demo';

async function processPayment({ total, proId, proName, service, clientEmail }) {
  if (PAYMENT_MODE === 'demo') {
    // Simula delay de processamento
    await new Promise(r => setTimeout(r, 1800));
    return { success: true, transactionId: 'DEMO-' + Date.now(), mode: 'demo' };
  }

  if (PAYMENT_MODE === 'pagarme') {
    // Integração Pagar.me Marketplace
    // 1. Chama sua Cloud Function com os dados do pedido
    // 2. A Cloud Function cria a transação e retorna o link de pagamento
    const res = await fetch(PAGARME_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total, proId, proName, service, clientEmail,
        split: { marketplace_fee: Math.round(total * 0.15) } })
    });
    if (!res.ok) throw new Error('Erro no gateway de pagamento.');
    return await res.json();
  }

  if (PAYMENT_MODE === 'stripe') {
    // Integração Stripe Connect
    // Chama Cloud Function que cria um PaymentIntent e retorna client_secret
    const res = await fetch('/api/stripe-checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: total * 100, currency: 'brl', proId, service, clientEmail })
    });
    if (!res.ok) throw new Error('Erro no Stripe.');
    const { clientSecret } = await res.json();
    // Aqui você integraria o Stripe.js para coletar os dados do cartão
    // const stripe = Stripe(STRIPE_PK);
    // const result = await stripe.confirmCardPayment(clientSecret, {...});
    return { success: true, clientSecret };
  }
}

// ════════════════════════════════════════
//  ADMIN — ESCROW OVERVIEW
// ════════════════════════════════════════
async function loadAdminEscrow() {
  if (!fb) return;
  let orders = [];
  try {
    const snap = await fb.getDocs(fb.collection(fb.db, 'orders'));
    snap.forEach(d => orders.push({ id: d.id, ...d.data() }));
  } catch (err) { console.error('Erro ao carregar pedidos (admin):', err); return; }

  // métricas de custódia
  const held     = orders.filter(o => o.status === 'held' || o.status === 'in_progress');
  const disputed = orders.filter(o => o.status === 'disputed');
  const heldVal  = held.reduce((s,o) => s + (o.total || 0), 0);
  const dispVal  = disputed.reduce((s,o) => s + (o.total || 0), 0);

  const heldEl = document.getElementById('adm-held-val');
  const dispEl = document.getElementById('adm-dispute-val');
  if (heldEl) heldEl.textContent = 'R$' + heldVal.toLocaleString('pt-BR');
  const heldC = document.getElementById('adm-held-c');
  if (heldC) heldC.textContent = held.length + ' pedido' + (held.length !== 1 ? 's' : '') + ' retido' + (held.length !== 1 ? 's' : '');
  if (dispEl) dispEl.textContent = disputed.length;
  const dispC = document.getElementById('adm-dispute-c');
  if (dispC) dispC.textContent = dispVal > 0 ? 'R$' + dispVal.toLocaleString('pt-BR') + ' em jogo' : 'nenhuma disputa';

  // tabela de disputas
  const rowsEl = document.getElementById('adm-disputes-rows');
  if (!rowsEl) return;
  if (disputed.length === 0) {
    rowsEl.innerHTML = '<div style="padding:14px;text-align:center;font-size:13px;color:var(--ink-3)">Nenhuma disputa em aberto. ✅</div>';
    return;
  }
  rowsEl.innerHTML = disputed.map(o => {
    const motivo = o.disputeReason ? o.disputeReason.substring(0,40) + (o.disputeReason.length > 40 ? '…' : '') : '(sem descrição)';
    return `<div class="adm-row" style="grid-template-columns:2fr 1.5fr 1fr 1.2fr;flex-wrap:wrap;gap:6px">
      <div><strong>${o.clientEmail.split('@')[0]}</strong><br><span style="font-size:11px;color:var(--ink-3)">${o.proName} · ${o.service}</span></div>
      <span style="font-size:12px">${motivo}</span>
      <span>R$${o.total || o.price}</span>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button style="padding:5px 10px;background:var(--green);color:#fff;border:none;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer" onclick="resolveDispute('${o.id}','release')">Liberar pro</button>
        <button style="padding:5px 10px;background:#FFF4F4;color:#C72828;border:1.5px solid #ffc9c9;border-radius:6px;font-size:11px;font-weight:700;cursor:pointer" onclick="resolveDispute('${o.id}','refund')">Estornar</button>
      </div>
    </div>`;
  }).join('');
}

// ════════════════════════════════════════
//  CEP — ViaCEP
// ════════════════════════════════════════

// Máscara de CEP: 00000-000
function maskCep(input) {
  let v = input.value.replace(/\D/g, '').substring(0, 8);
  if (v.length > 5) v = v.substring(0,5) + '-' + v.substring(5);
  input.value = v;
}

// Busca CEP via ViaCEP e retorna dados ou null
async function fetchCep(cep) {
  const digits = cep.replace(/\D/g, '');
  if (digits.length !== 8) return null;
  try {
    const res  = await fetch(`https://viacep.com.br/ws/${digits}/json/`);
    const data = await res.json();
    if (data.erro) return null;
    return data; // { logradouro, bairro, localidade, uf, ... }
  } catch { return null; }
}

// ── Busca na hero (tab CEP) ──
let cepAtivo = null; // { cidade, bairro, uf }

async function buscarCep() {
  const input  = document.getElementById('cep-input');
  const btn    = document.getElementById('cep-btn');
  const result = document.getElementById('cep-result');
  const pill   = document.getElementById('cep-location-text');
  const count  = document.getElementById('cep-count-text');
  const errEl  = document.getElementById('cep-error-hero');

  if (errEl) errEl.remove();
  btn.innerHTML = '<span class="cep-loading"></span>';
  btn.disabled  = true;

  const data = await fetchCep(input.value);

  btn.innerHTML = 'Buscar';
  btn.disabled  = false;

  if (!data) {
    const err = document.createElement('div');
    err.id = 'cep-error-hero';
    err.className = 'cep-error';
    err.textContent = 'CEP não encontrado. Verifique e tente novamente.';
    input.closest('.searchbar').appendChild(err);
    return;
  }

  cepAtivo = { cidade: data.localidade, bairro: data.bairro, uf: data.uf };
  const locationStr = data.bairro
    ? `${data.bairro}, ${data.localidade} — ${data.uf}`
    : `${data.localidade} — ${data.uf}`;
  pill.textContent = locationStr;
  result.style.display = 'block';

  // Filtra os cards pela cidade
  filtrarPorCidade(data.localidade, data.bairro, locationStr, count);
}

function limparCep() {
  cepAtivo = null;
  document.getElementById('cep-input').value = '';
  document.getElementById('cep-result').style.display = 'none';
  document.getElementById('cep-count-text').textContent = '';
  // Mostra todos os cards novamente
  document.querySelectorAll('#cards-list .worker-card').forEach(c => c.style.display = '');
  const sc = document.querySelector('.section-count');
  const total = document.querySelectorAll('#cards-list .worker-card').length;
  if (sc) sc.textContent = total + ' profissionais';
  document.getElementById('list-title').textContent = 'Disponíveis agora';
}

function filtrarPorCidade(cidade, bairro, locationStr, countEl) {
  const cards  = document.querySelectorAll('#cards-list .worker-card');
  let visible  = 0;

  cards.forEach(card => {
    const texto = card.innerText.toLowerCase();
    const cidadeLower  = cidade.toLowerCase();
    const bairroLower  = (bairro || '').toLowerCase();

    // Mostra se o card menciona a cidade ou o bairro
    // Cards "Online" também aparecem sempre
    const isOnline = texto.includes('online');
    const match    = isOnline
      || texto.includes(cidadeLower)
      || (bairroLower && texto.includes(bairroLower));

    card.style.display = match ? '' : 'none';
    if (match) visible++;
  });

  document.getElementById('list-title').textContent = `Profissionais em ${locationStr}`;
  const sc = document.querySelector('.section-count');
  if (sc) sc.textContent = visible + ' profissional' + (visible !== 1 ? 'is' : '');
  if (countEl) countEl.textContent = visible + ' profissional' + (visible !== 1 ? 'is' : '') + ' encontrado' + (visible !== 1 ? 's' : '');

  document.getElementById('cards-list').scrollIntoView({ behavior:'smooth', block:'start' });

  if (!visible) {
    toast('Nenhum profissional encontrado nessa região ainda. Mostrando todos.');
    limparCep();
  }
}

// ── Auto-preenchimento no cadastro de profissional ──
async function autoFillCep() {
  const cep    = document.getElementById('r-cep').value;
  const digits = cep.replace(/\D/g,'');
  if (digits.length !== 8) return;

  document.getElementById('r-cep-spinner').style.display = 'inline-block';
  const data = await fetchCep(cep);
  document.getElementById('r-cep-spinner').style.display = 'none';

  if (!data) { toast('CEP não encontrado. Preencha cidade e bairro manualmente.'); }

  // Exibe a linha de bairro/cidade sempre (com ou sem dados)
  document.getElementById('r-address-row').style.display = 'block';

  if (data) {
    document.getElementById('r-bairro').value = data.bairro  || '';
    document.getElementById('r-cidade').value = `${data.localidade}, ${data.uf}`;
    toast(`📍 CEP encontrado: ${data.bairro ? data.bairro + ', ' : ''}${data.localidade} — ${data.uf}`);
  }
}

// ── Alterna abas de busca na hero ──
function switchSearchTab(tab) {
  document.getElementById('tab-service').classList.toggle('active', tab === 'service');
  document.getElementById('tab-cep').classList.toggle('active', tab === 'cep');
  document.getElementById('search-service-box').style.display = tab === 'service' ? 'flex' : 'none';
  document.getElementById('search-cep-box').style.display     = tab === 'cep'     ? 'flex' : 'none';
  if (tab === 'service') limparCep();
}

// ── TOAST ──
let tt;
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg; el.classList.add('show');
  clearTimeout(tt); tt = setTimeout(() => el.classList.remove('show'), 3300);
}
