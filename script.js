const projects = [
  {
    slug: 'voice-assistant',
    name: 'Voice AI Assistant',
    category: 'ai',
    blurb:
      'Voice-controlled AI assistant with a wake word, Whisper speech-to-text, agent tool-calling, and Orpheus text-to-speech, streamed over SSE.',
    tags: ['React', 'FastAPI', 'Groq', 'Whisper'],
    repo: 'https://github.com/DataMiningSoftware/voice-assistant'
  },
  {
    slug: 'rag-app',
    name: 'RAG App',
    category: 'ai',
    blurb:
      'Retrieval-augmented generation app with a from-scratch BM25 retriever (no vector DB) and grounded, streaming LLM answers behind a chat UI.',
    tags: ['Python', 'FastAPI', 'Groq'],
    repo: 'https://github.com/DataMiningSoftware/rag-app'
  },
  {
    slug: 'pii-guard',
    name: 'PII Guard',
    category: 'ai',
    blurb:
      'Privacy library that masks PII and secrets into typed placeholders before an LLM call and restores the real values in the reply.',
    tags: ['Python', 'Streamlit', 'LLM'],
    repo: 'https://github.com/DataMiningSoftware/pii-guard',
    badge: { text: 'tested', type: 'ok' }
  },
  {
    slug: 'car-coach',
    name: 'Car Coach',
    category: 'ai',
    blurb:
      'Malaysia-market AI car companion combining RAG Q&A, modification advice with legal checks, and PII-masked document OCR.',
    tags: ['React', 'FastAPI', 'Groq', 'OCR'],
    repo: 'https://github.com/DataMiningSoftware/car-coach'
  },
  {
    slug: 'league-coach',
    name: 'League Live Coach',
    category: 'ai',
    blurb:
      'Real-time LoL coach reading Riot\u2019s Live Client Data API \u2014 heuristic-first, invoking the LLM only on event triggers to minimise latency and token cost.',
    tags: ['Python', 'FastAPI', 'Groq', 'Riot API'],
    repo: 'https://github.com/DataMiningSoftware/league-coach'
  },
  {
    slug: 'hardware-diagnostician',
    name: 'Hardware Diagnostician',
    category: 'ai',
    blurb:
      'Read-only system diagnostics that turn live OS / CPU / RAM / disk telemetry into plain-language findings and fixes via an LLM.',
    tags: ['Python', 'Groq', 'Streamlit'],
    repo: 'https://github.com/DataMiningSoftware/hardware-diagnostician'
  },
  {
    slug: 'warframe-assistant',
    name: 'Warframe Assistant',
    category: 'ai',
    blurb:
      'Voice-controlled desktop overlay (Electron) answering spoken questions via GPT-4o tool-calling: a deterministic damage calculator, live market prices, a RAG knowledge base, and news.',
    tags: ['Electron', 'React', 'GPT-4o', 'Whisper'],
    repo: 'https://github.com/DataMiningSoftware/warframe-assistant',
    badge: { text: 'tested', type: 'ok' }
  },
  {
    slug: 'cnn-api',
    name: 'CNN Fine-tune + API',
    category: 'ml',
    blurb:
      'Fine-tuned MobileNetV2 classifier (90.45% test accuracy on Flowers-102) served behind a FastAPI endpoint returning top-k predictions with confidence.',
    tags: ['PyTorch', 'FastAPI', 'Transfer learning'],
    repo: 'https://github.com/DataMiningSoftware/cnn-api',
    badge: { text: '90.45% acc', type: 'ok' }
  },
  {
    slug: 'monitoring',
    name: 'Monitoring & Logging',
    category: 'backend',
    blurb:
      'Containerized observable FastAPI service with structured JSON logging and Prometheus metrics, visualised in Grafana via Docker Compose.',
    tags: ['FastAPI', 'Prometheus', 'Grafana', 'Docker'],
    repo: 'https://github.com/DataMiningSoftware/monitoring'
  },
  {
    slug: 'order-book-engine',
    name: 'Order Book Engine',
    category: 'backend',
    blurb:
      'Price-time priority limit order book and matching engine built from scratch using heaps, deques, and O(1) lazy cancellation.',
    tags: ['Python', 'Data structures', 'Stdlib'],
    repo: 'https://github.com/DataMiningSoftware/order-book-engine',
    badge: { text: 'tested', type: 'ok' }
  },
  {
    slug: 'mobile-feature',
    name: 'Biometric Auth',
    category: 'mobile',
    blurb:
      'Native biometric authentication (Face ID / fingerprint) demonstrated from a cross-platform Expo app.',
    tags: ['Expo', 'React Native'],
    repo: 'https://github.com/DataMiningSoftware/mobile-feature',
    badge: { text: 'browser demo', type: 'accent' }
  },
  {
    slug: 'solo-mobile-app',
    name: 'Habit Tracker',
    category: 'mobile',
    blurb:
      'Habit-tracking app shipped solo: full CRUD, local persistence (AsyncStorage), a streak counter, and a 7-day view with a custom-built UI.',
    tags: ['Expo', 'React Native', 'AsyncStorage'],
    repo: 'https://github.com/DataMiningSoftware/solo-mobile-app',
    badge: { text: 'browser demo', type: 'accent' }
  },
  {
    slug: 'design-portfolio',
    name: 'Design Portfolio',
    category: 'design',
    blurb:
      'This site \u2014 a responsive portfolio tying every project together in one place.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/DataMiningSoftware/design-portfolio',
    live: 'https://dataminingsoftware.github.io/design-portfolio/',
    badge: { text: 'live', type: 'accent' }
  },
  {
    slug: 'roomiematch',
    name: 'RoomieMatch',
    category: 'team',
    blurb:
      'Led a 5-person team to build a Flutter roommate-matching app with swipe matching, E2E-encrypted chat, and a FastAPI + SuperTokens + MySQL + Docker backend.',
    tags: ['Flutter', 'FastAPI', 'MySQL', 'Docker'],
    repo: 'https://github.com/DataMiningSoftware/RoomieMatch',
    badge: { text: 'team project', type: 'accent' }
  },
  {
    slug: 'job-hunter',
    name: 'Job Hunter',
    category: 'private',
    blurb:
      'Semi-automated job-search pipeline: CV parsing, embedding-based matching, tailored cover letters, and human-reviewed auto-fill (stops before submit).',
    tags: ['FastAPI', 'Claude', 'Playwright'],
    repo: 'https://github.com/DataMiningSoftware/job-hunter',
    badge: { text: 'private', type: 'muted' }
  },
  {
    slug: 'quant-trader',
    name: 'Quant Trader',
    category: 'private',
    blurb:
      'Automated trading system with interchangeable signal engines, an event-driven backtester, and layered risk controls.',
    tags: ['Python', 'futu-api', 'Streamlit'],
    repo: 'https://github.com/DataMiningSoftware/quant-trader',
    badge: { text: 'private', type: 'muted' }
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

function badgeHtml(badge) {
  if (!badge) return '';
  return `<span class="badge badge-${badge.type}">${badge.text}</span>`;
}

function cardHtml(p) {
  const initials = INITIALS[p.slug] || p.slug.slice(0, 2).toUpperCase();
  const live = p.live
    ? `<a class="btn btn-primary btn-sm" href="${p.live}" target="_blank" rel="noopener">Live</a>`
    : '';
  return `
    <article class="card" data-category="${p.category}">
      <figure class="thumb thumb-${p.category}">
        <span class="thumb-initials">${initials}</span>
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
        </div>
      </div>
    </article>
  `;
}

function render(filter = 'all') {
  const list = projects.filter((p) => filter === 'all' || p.category === filter);
  grid.innerHTML = list.map(cardHtml).join('');
  document.getElementById('grid').setAttribute('aria-label', `${list.length} projects`);
}

document.querySelectorAll('.filter').forEach((btn) => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach((b) => b.classList.remove('is-active'));
    btn.classList.add('is-active');
    render(btn.dataset.filter);
  });
});

render('all');
