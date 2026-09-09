const projects = [
  {
    slug: 'voice-assistant',
    name: 'Voice AI Assistant',
    category: 'ai',
    blurb:
      'Voice-controlled AI assistant with a wake word, Whisper speech-to-text, agent tool-calling, and Orpheus text-to-speech, streamed over SSE.',
    long:
      'A voice-controlled AI assistant with a wake word, streaming speech-to-text via Whisper, an agent loop with tool-calling, and Orpheus text-to-speech \u2014 all streamed to the browser over Server-Sent Events. Deployable to Render or Vercel.',
    tags: ['React', 'FastAPI', 'Groq', 'Whisper'],
    repo: 'https://github.com/DataMiningSoftware/voice-assistant',
    features: [
      { name: 'Wake word + STT', desc: 'Hands-free activation with Whisper speech-to-text.' },
      { name: 'Agent tool-calling', desc: 'Calls tools instead of guessing, via an agent loop.' },
      { name: 'Streaming TTS', desc: 'Orpheus text-to-speech streamed back in real time.' }
    ]
  },
  {
    slug: 'rag-app',
    name: 'RAG App',
    category: 'ai',
    blurb:
      'Retrieval-augmented generation app with a from-scratch BM25 retriever (no vector DB) and grounded, streaming LLM answers behind a chat UI.',
    long:
      'A retrieval-augmented generation app with a from-scratch BM25 retriever \u2014 no vector database \u2014 and grounded, streaming answers. Documents are chunked and ranked by keyword relevance before the LLM composes a cited answer.',
    tags: ['Python', 'FastAPI', 'Groq'],
    repo: 'https://github.com/DataMiningSoftware/rag-app',
    features: [
      { name: 'BM25 retriever', desc: 'Keyword relevance ranking built from scratch.' },
      { name: 'Grounded streaming', desc: 'Answers stream in with retrieved sources shown.' },
      { name: 'Chat UI', desc: 'A clean chat interface with source citations.' }
    ]
  },
  {
    slug: 'pii-guard',
    name: 'PII Guard',
    category: 'ai',
    blurb:
      'Privacy library that masks PII and secrets into typed placeholders before an LLM call and restores the real values in the reply.',
    long:
      'A privacy layer for LLM prompts. It detects PII and secrets with regex (and optional spaCy NER), replaces them with typed placeholders, sends the masked text to the model, then restores the real values in the reply.',
    tags: ['Python', 'Streamlit', 'LLM'],
    repo: 'https://github.com/DataMiningSoftware/pii-guard',
    badge: { text: 'tested', type: 'ok' },
    features: [
      { name: 'Masking', desc: 'Emails, phones, cards and keys become typed placeholders.' },
      { name: 'Animated masking', desc: 'Watch each PII value flip to a placeholder live.' },
      { name: 'Unmask round-trip', desc: 'Real values are restored in the model\u2019s reply.' }
    ]
  },
  {
    slug: 'car-coach',
    name: 'Car Coach',
    category: 'ai',
    blurb:
      'Malaysia-market AI car companion combining RAG Q&A, modification advice with legal checks, and PII-masked document OCR.',
    long:
      'A Malaysia-market AI car companion. It answers car questions with RAG, gives modification advice with local legal checks, and reads documents via OCR \u2014 masking any PII before it reaches the model.',
    tags: ['React', 'FastAPI', 'Groq', 'OCR'],
    repo: 'https://github.com/DataMiningSoftware/car-coach',
    features: [
      { name: 'RAG Q&A', desc: 'Grounded answers about cars and maintenance.' },
      { name: 'Modification advice', desc: 'Suggestions with local legality checks.' },
      { name: 'PII-masked OCR', desc: 'Document upload with automatic redaction.' }
    ]
  },
  {
    slug: 'league-coach',
    name: 'League Live Coach',
    category: 'ai',
    blurb:
      'Real-time LoL coach reading Riot\u2019s Live Client Data API \u2014 heuristic-first, invoking the LLM only on event triggers to minimise latency and token cost.',
    long:
      'A real-time League of Legends coach that reads Riot\u2019s Live Client Data API. It is heuristic-first \u2014 rules fire instantly on in-game events, and the LLM is invoked only for higher-level commentary, keeping latency and token cost low.',
    tags: ['Python', 'FastAPI', 'Groq', 'Riot API'],
    repo: 'https://github.com/DataMiningSoftware/league-coach',
    features: [
      { name: 'Live game events', desc: 'Reads real-time state from the League client.' },
      { name: 'Heuristic rules', desc: 'Instant, deterministic in-game triggers.' },
      { name: 'LLM commentary', desc: 'Called only when higher-level context is needed.' }
    ]
  },
  {
    slug: 'hardware-diagnostician',
    name: 'Hardware Diagnostician',
    category: 'ai',
    blurb:
      'Read-only system diagnostics that turn live OS / CPU / RAM / disk telemetry into plain-language findings and fixes via an LLM.',
    long:
      'A read-only system diagnostics agent. It collects a snapshot of CPU, memory, disk, temperature and processes, flags problems with heuristics, and turns the telemetry into plain-language findings and fixes via an LLM.',
    tags: ['Python', 'Groq', 'Streamlit'],
    repo: 'https://github.com/DataMiningSoftware/hardware-diagnostician',
    features: [
      { name: 'System snapshot', desc: 'CPU / RAM / disk / temperature metrics and charts.' },
      { name: 'Heuristic flags', desc: 'Rule-based detection of likely issues.' },
      { name: 'AI diagnosis', desc: 'Plain-language findings and fixes.' }
    ]
  },
  {
    slug: 'warframe-assistant',
    name: 'Warframe Assistant',
    category: 'ai',
    blurb:
      'Voice-controlled desktop overlay (Electron) answering spoken questions via GPT-4o tool-calling: a deterministic damage calculator, live market prices, a RAG knowledge base, and news.',
    long:
      'A voice-controlled desktop overlay for Warframe. Ask questions out loud while playing \u2014 it transcribes with Whisper, answers via GPT-4o tool-calling, and speaks back. Backed by a deterministic damage calculator, live warframe.market prices, a RAG knowledge base and news.',
    tags: ['Electron', 'React', 'GPT-4o', 'Whisper'],
    repo: 'https://github.com/DataMiningSoftware/warframe-assistant',
    badge: { text: 'tested', type: 'ok' },
    features: [
      { name: 'Voice overlay', desc: 'Transparent in-game overlay with push-to-talk.' },
      { name: 'Damage calculator', desc: 'Exact damage math, computed not hallucinated.' },
      { name: 'Market prices', desc: 'Live warframe.market prices and trends.' }
    ]
  },
  {
    slug: 'cnn-api',
    name: 'CNN Fine-tune + API',
    category: 'ml',
    blurb:
      'Fine-tuned MobileNetV2 classifier (90.45% test accuracy on Flowers-102) served behind a FastAPI endpoint returning top-k predictions with confidence.',
    long:
      'Fine-tune a pretrained MobileNetV2 via transfer learning and serve it behind a FastAPI endpoint. Trained on Flowers-102 to 90.45% test accuracy; the API returns top-k predictions with confidence from a single image upload.',
    tags: ['PyTorch', 'FastAPI', 'Transfer learning'],
    repo: 'https://github.com/DataMiningSoftware/cnn-api',
    badge: { text: '90.45% acc', type: 'ok' },
    features: [
      { name: 'Transfer learning', desc: 'MobileNetV2 head fine-tuned on a custom dataset.' },
      { name: 'Evaluation', desc: '90.45% test accuracy with a full confusion matrix.' },
      { name: 'Prediction API', desc: 'FastAPI endpoint returning top-k classes.' }
    ]
  },
  {
    slug: 'monitoring',
    name: 'Monitoring & Logging',
    category: 'backend',
    blurb:
      'Containerized observable FastAPI service with structured JSON logging and Prometheus metrics, visualised in Grafana via Docker Compose.',
    long:
      'A containerized, observable FastAPI service. It emits structured JSON logs and Prometheus metrics, with a Grafana dashboard \u2014 all wired together with Docker Compose for a one-command observability stack.',
    tags: ['FastAPI', 'Prometheus', 'Grafana', 'Docker'],
    repo: 'https://github.com/DataMiningSoftware/monitoring',
    features: [
      { name: 'Structured logging', desc: 'JSON logs ready for ingestion.' },
      { name: 'Prometheus metrics', desc: 'Request, error and latency counters exposed.' },
      { name: 'Grafana dashboard', desc: 'Pre-built dashboards in Docker Compose.' }
    ]
  },
  {
    slug: 'order-book-engine',
    name: 'Order Book Engine',
    category: 'backend',
    blurb:
      'Price-time priority limit order book and matching engine built from scratch using heaps, deques, and O(1) lazy cancellation.',
    long:
      'A price-time priority limit order book and matching engine built from scratch. Uses heaps for best bid/ask, deques for FIFO within a price level, and lazy deletion for O(1) cancels. Ships with tests and a throughput benchmark.',
    tags: ['Python', 'Data structures', 'Stdlib'],
    repo: 'https://github.com/DataMiningSoftware/order-book-engine',
    badge: { text: 'tested', type: 'ok' },
    features: [
      { name: 'Order matching', desc: 'Limit and market orders with price-time priority.' },
      { name: 'O(1) cancel', desc: 'Lazy deletion keeps cancellation constant-time.' },
      { name: 'Benchmarks', desc: 'Unit tests plus a throughput benchmark.' }
    ]
  },
  {
    slug: 'mobile-feature',
    name: 'Biometric Auth',
    category: 'mobile',
    blurb:
      'Native biometric authentication (Face ID / fingerprint) demonstrated from a cross-platform Expo app.',
    long:
      'A single-feature Expo app demonstrating native biometric authentication (Face ID / fingerprint) via expo-local-authentication, including hardware and enrollment checks plus success and failure paths.',
    tags: ['Expo', 'React Native'],
    repo: 'https://github.com/DataMiningSoftware/mobile-feature',
    badge: { text: 'browser demo', type: 'accent' },
    features: [
      { name: 'Biometric prompt', desc: 'Native Face ID / fingerprint dialog.' },
      { name: 'Availability checks', desc: 'Handles missing hardware or enrollment.' },
      { name: 'Browser demo', desc: 'A simulation for sharing without a device.' }
    ]
  },
  {
    slug: 'solo-mobile-app',
    name: 'Habit Tracker',
    category: 'mobile',
    blurb:
      'Habit-tracking app shipped solo: full CRUD, local persistence (AsyncStorage), a streak counter, and a 7-day view with a custom-built UI.',
    long:
      'A habit-tracking app built and owned end-to-end. Full CRUD with local persistence (AsyncStorage), a real streak counter, a 7-day history view, and a custom dark UI \u2014 plus a zero-dependency browser demo.',
    tags: ['Expo', 'React Native', 'AsyncStorage'],
    repo: 'https://github.com/DataMiningSoftware/solo-mobile-app',
    badge: { text: 'browser demo', type: 'accent' },
    features: [
      { name: 'Habit CRUD', desc: 'Add, toggle and delete habits.' },
      { name: 'Streaks + 7-day view', desc: 'Current streak and a week of history.' },
      { name: 'Browser demo', desc: 'A single-file demo, no install needed.' }
    ]
  },
  {
    slug: 'design-portfolio',
    name: 'Design Portfolio',
    category: 'design',
    blurb:
      'This site \u2014 a responsive portfolio tying every project together in one place.',
    long:
      'This site \u2014 a single-page portfolio tying every project together. A filterable project grid, click-through detail views for each project, and a dark responsive design, deployable as a static site.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/DataMiningSoftware/design-portfolio',
    live: 'https://dataminingsoftware.github.io/design-portfolio/',
    badge: { text: 'live', type: 'accent' },
    features: [
      { name: 'Project grid', desc: 'All projects in one filterable grid.' },
      { name: 'Detail views', desc: 'Click a project for full details.' },
      { name: 'Static deploy', desc: 'Plain HTML / CSS / JS on GitHub Pages.' }
    ]
  },
  {
    slug: 'roomiematch',
    name: 'RoomieMatch',
    category: 'team',
    blurb:
      'Led a 5-person team to build a Flutter roommate-matching app with swipe matching, E2E-encrypted chat, and a FastAPI + SuperTokens + MySQL + Docker backend.',
    long:
      'A Flutter roommate-matching app built with a 5-person team I led. Swipe-based matching, filters, end-to-end encrypted chat, push notifications, and a FastAPI + SuperTokens + MySQL + Docker backend with a recommendation model.',
    tags: ['Flutter', 'FastAPI', 'MySQL', 'Docker'],
    repo: 'https://github.com/DataMiningSoftware/RoomieMatch',
    badge: { text: 'team project', type: 'accent' },
    features: [
      { name: 'Swipe matching', desc: 'Swipe right or left on potential roommates.' },
      { name: 'E2E-encrypted chat', desc: 'Secure messaging between matches.' },
      { name: 'Recommendation model', desc: 'Match quality improves over time.' }
    ]
  },
  {
    slug: 'job-hunter',
    name: 'Job Hunter',
    category: 'private',
    blurb:
      'Semi-automated job-search pipeline: CV parsing, embedding-based matching, tailored cover letters, and human-reviewed auto-fill (stops before submit).',
    long:
      'A semi-automated job-search pipeline: parse your CV into a structured profile, ingest job postings, score your fit with embeddings, generate tailored applications, and auto-fill forms \u2014 with a human-reviewed step before anything is submitted.',
    tags: ['FastAPI', 'Claude', 'Playwright'],
    repo: 'https://github.com/DataMiningSoftware/job-hunter',
    badge: { text: 'private', type: 'muted' },
    features: [
      { name: 'CV parsing', desc: 'PDF / DOCX / TXT into a structured profile.' },
      { name: 'Job matching', desc: 'Embedding-based fit scoring.' },
      { name: 'Tailored letters', desc: 'Generated cover letters with human review.' }
    ]
  },
  {
    slug: 'quant-trader',
    name: 'Quant Trader',
    category: 'private',
    blurb:
      'Automated trading system with interchangeable signal engines, an event-driven backtester, and layered risk controls.',
    long:
      'A rule-based, ML-ready automated trading system for US equities via Futu OpenAPI. Interchangeable signal engines, an event-driven backtester, and layered risk controls (stops, kill switches, position sizing).',
    tags: ['Python', 'futu-api', 'Streamlit'],
    repo: 'https://github.com/DataMiningSoftware/quant-trader',
    badge: { text: 'private', type: 'muted' },
    features: [
      { name: 'Signal engines', desc: 'Swappable rule-based and ML signals.' },
      { name: 'Backtester', desc: 'Event-driven backtesting on demo data.' },
      { name: 'Risk controls', desc: 'Stops, kill switches and position sizing.' }
    ]
  }
];

const CATEGORY_LABEL = {
  ai: 'AI / LLM',
  ml: 'Machine Learning',
  backend: 'Backend',
  mobile: 'Mobile',
  design: 'Design',
  team: 'Team',
  private: 'Private'
};

const INITIALS = {
  'voice-assistant': 'VA',
  'rag-app': 'RAG',
  'pii-guard': 'PII',
  'car-coach': 'CC',
  'league-coach': 'LC',
  'hardware-diagnostician': 'HD',
  'warframe-assistant': 'WF',
  'cnn-api': 'CNN',
  monitoring: 'MON',
  'order-book-engine': 'OBE',
  'mobile-feature': 'BIO',
  'solo-mobile-app': 'HT',
  'design-portfolio': 'PF',
  roomiematch: 'RM',
  'job-hunter': 'JH',
  'quant-trader': 'QT'
};

const grid = document.getElementById('grid');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');

function badgeHtml(badge) {
  if (!badge) return '';
  return `<span class="badge badge-${badge.type}">${badge.text}</span>`;
}

function initials(slug) {
  return INITIALS[slug] || slug.slice(0, 2).toUpperCase();
}

function cardHtml(p) {
  const live = p.live
    ? `<a class="btn btn-primary btn-sm" href="${p.live}" target="_blank" rel="noopener">Live</a>`
    : '';
  return `
    <article class="card" data-slug="${p.slug}">
      <figure class="thumb thumb-${p.category}">
        <span class="thumb-initials">${initials(p.slug)}</span>
        <img src="assets/${p.slug}.png" alt="${p.name} screenshot" loading="lazy" onerror="this.remove()" />
      </figure>
      <div class="card-body">
        <div class="card-head">
          <h2>${p.name}</h2>
          ${badgeHtml(p.badge)}
        </div>
        <p class="card-blurb">${p.blurb}</p>
        <ul class="tags">
          ${p.tags.map((t) => `<li>${t}</li>`).join('')}
        </ul>
        <div class="card-actions">
          <a class="btn btn-sm" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>
          ${live}
          <span class="card-more">View details</span>
        </div>
      </div>
    </article>
  `;
}

function featureHtml(p, i) {
  const f = p.features[i];
  return `
    <div class="feature">
      <figure class="feature-thumb thumb-${p.category}">
        <span class="thumb-initials">${i + 1}</span>
        <img src="assets/${p.slug}-${i + 1}.png" alt="${p.name} - ${f.name}" loading="lazy" onerror="this.remove()" />
      </figure>
      <div class="feature-body">
        <h4>${f.name}</h4>
        <p>${f.desc}</p>
      </div>
    </div>
  `;
}

function modalHtml(p) {
  const live = p.live
    ? `<a class="btn btn-primary" href="${p.live}" target="_blank" rel="noopener">Live</a>`
    : '';
  return `
    <div class="modal-head">
      <p class="modal-cat">${CATEGORY_LABEL[p.category]}</p>
      <div class="modal-title-row">
        <h2>${p.name}</h2>
        ${badgeHtml(p.badge)}
      </div>
      <ul class="tags">
        ${p.tags.map((t) => `<li>${t}</li>`).join('')}
      </ul>
    </div>
    <p class="modal-long">${p.long}</p>
    <h3 class="modal-features-title">Key features</h3>
    <div class="features">
      ${p.features.map((_, i) => featureHtml(p, i)).join('')}
    </div>
    <div class="modal-actions">
      <a class="btn" href="${p.repo}" target="_blank" rel="noopener">GitHub</a>
      ${live}
    </div>
  `;
}

function openModal(slug) {
  const p = projects.find((x) => x.slug === slug);
  if (!p) return;
  modalContent.innerHTML = modalHtml(p);
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function render(filter = 'all') {
  const list = projects.filter((p) => filter === 'all' || p.category === filter);
  grid.innerHTML = list.map(cardHtml).join('');
  grid.setAttribute('aria-label', `${list.length} projects`);
}

grid.addEventListener('click', (e) => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('.card');
  if (card) openModal(card.dataset.slug);
});

modal.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

document.querySelectorAll('.filter').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.dataset.filter);
  });
});

render('all');
