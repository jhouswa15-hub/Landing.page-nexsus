/**
 * NEXSUS GLOBAL - Interactive UI Controller
 * Manages Hero Dynamic Showcase, Wellness Recommender, Network Commission Simulator,
 * Digital Ecosystem Preview, Country Selector, and Product Modals.
 */

const PRODUCTS_DATA = [
  {
    id: 'lanzate',
    name: 'LanzaTe · Digestión y Detox',
    shortName: 'LanzaTe',
    badge: 'Formulación Avanzada',
    weight: '30 Sachets · 300g',
    image: 'assets/mockup_lanzate_bolsa.png',
    desc: 'Fórmula en polvo a base de plantas funcionales, yacón, noni, ganoderma y chaga.',
    fullDesc: 'Fórmula en polvo a base de plantas funcionales y superalimentos diseñada para favorecer el tránsito intestinal, la depuración natural y el equilibrio digestivo diario.',
    ingredients: 'Anís, yacón, estevia, manzanilla, uña de gato, noni, ciruela, pitahaya, tamarindo, cardo santo, cardo bendito, jengibre, papaya, hojas de sen, hongo ganoderma y hongo chaga.',
    presentation: 'Bolsa Doypack con 30 sachets (Peso Neto 300g)',
    usage: 'Disolver 1 sachet (10g) en 200 ml de agua tibia o fría, preferiblemente después de los alimentos.',
    accent: '#009e1a',
    accentSoft: '#e8f7eb',
    surface: '#f4fbf6'
  },
  {
    id: 'alokate',
    name: 'ALOKATE · Energizante Vital',
    shortName: 'ALOKATE',
    badge: 'Energizante Vital',
    weight: '30 Sachets · 360g',
    image: 'assets/mockup_alokate_bolsa.png',
    desc: 'Fórmula en polvo a base de aminoácidos, maca negra, camu camu y arándanos.',
    fullDesc: 'Fórmula en polvo para preparar bebida funcional a base de aminoácidos y extractos vegetales que elevan la energía física, la resistencia y la concentración sin picos artificiales.',
    ingredients: 'Maca Negra, Camu Camu, Arándanos, Noni, Yacón, Aminoácidos esenciales y Estevia.',
    presentation: 'Bolsa Doypack con 30 sachets (Peso Neto 360g)',
    usage: 'Mezclar 1 sachet (12g) en 250 ml de agua fría antes de iniciar tu jornada o entrenamiento físico.',
    accent: '#d9141d',
    accentSoft: '#fceaea',
    surface: '#fdf5f5'
  },
  {
    id: 'minegro',
    name: 'MINEGRO · Bienestar Intenso',
    shortName: 'MINEGRO',
    badge: 'Bienestar Intenso',
    weight: '30 Sachets · 300g',
    image: 'assets/mockup_minegro_bolsa.png',
    desc: 'Café gourmet instantáneo con ganoderma, hongo chaga, cebada, noni y linaza.',
    fullDesc: 'Mezcla en polvo para preparar café gourmet instantáneo de tueste selecto, potenciado con hongos adaptógenos milenarios y fibras naturales para un bienestar intenso.',
    ingredients: 'Café Gourmet, Ganoderma, Hongo Chaga, Cebada, Noni, Tamarindo y Linaza.',
    presentation: 'Bolsa Doypack con 30 sachets (Peso Neto 300g)',
    usage: 'Verter 1 sachet (10g) en una taza de agua caliente (180 ml) y disfrutar en cualquier momento del día.',
    accent: '#17171a',
    accentSoft: '#e6e6eb',
    surface: '#f4f4f7'
  },
  {
    id: 'micafe',
    name: 'MICAFÉ · Equilibrio Perfecto',
    shortName: 'MICAFÉ',
    badge: 'Equilibrio Perfecto',
    weight: '30 Sachets · 480g',
    image: 'assets/mockup_micafe_bolsa.png',
    desc: 'Café gourmet funcional con ganoderma, cacao, sacha inchi, algarrobo y coco.',
    fullDesc: 'Mezcla en polvo para preparar café gourmet funcional instantáneo que armoniza el sabor del café y cacao con superalimentos ricos en omegas y antioxidantes.',
    ingredients: 'Café, Ganoderma, Cacao, Yacón, Sacha Inchi, Algarrobo, Coco, Cebada y Estevia.',
    presentation: 'Bolsa Doypack con 30 sachets (Peso Neto 480g)',
    usage: 'Disolver 1 sachet (16g) en 180 ml de agua caliente o leche vegetal para una textura cremosa y nutritiva.',
    accent: '#b34200',
    accentSoft: '#fdf0e6',
    surface: '#fcf6f0'
  }
];

const PORTAL_MODULES = [
  {
    title: 'Red de Distribuidores & Afiliación',
    kpis: [
      { label: 'Estado de Cuenta', val: 'Activo · 100%', color: '#4cd99c' },
      { label: 'Socios Directos', val: '24 Afiliados', color: '#ffffff' },
      { label: 'Volumen Grupal', val: '4,850 PTS', color: '#ffffff' }
    ],
    rows: [
      { text: 'Nueva afiliación registrada · Nivel 1', status: 'Completado' },
      { text: 'Activación mensual Pack Bienestar (LanzaTe + Alokate)', status: 'Acreditado' },
      { text: 'Bono de expansión multinivel liquidado', status: 'Disponible' }
    ]
  },
  {
    title: 'Gestión de Pedidos & Activaciones',
    kpis: [
      { label: 'Puntos Personales', val: '180 PTS', color: '#4cd99c' },
      { label: 'Pedidos del Mes', val: '14 Órdenes', color: '#ffffff' },
      { label: 'Despacho Logístico', val: 'Prioritario', color: '#ffffff' }
    ],
    rows: [
      { text: 'Orden #NX-4092 · 6 Bolsas ALOKATE + 4 LanzaTe', status: 'Entregado' },
      { text: 'Orden #NX-4118 · 8 Bolsas MICAFÉ + 4 MINEGRO', status: 'En Ruta' },
      { text: 'Reconsumo automático de activación quincenal', status: 'Programado' }
    ]
  },
  {
    title: 'Control de Comisiones e Incentivos',
    kpis: [
      { label: 'Bono Patrocinio', val: '$340 USD', color: '#4cd99c' },
      { label: 'Regalías Multinivel', val: '$980 USD', color: '#ffffff' },
      { label: 'Próximo Rango', val: '92% Completado', color: '#f482d4' }
    ],
    rows: [
      { text: 'Comisión Residual Red Nivel 1 a Nivel 5', status: 'Liquidado' },
      { text: 'Bono de Inicio Rápido por 4 nuevos distribuidores', status: 'Acreditado' },
      { text: 'Calificación a Convivencia Internacional Nexsus', status: 'Calificado' }
    ]
  }
];

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initCountrySelector();
  initHeroProductStage();
  initProductFilters();
  initWellnessRecommender();
  initCommissionSimulator();
  initDigitalEcosystemTabs();
  initProductModal();
  initAnimatedCounters();
});

/* --------------------------------------------------------------------------
   1. Sticky Header & Mobile Navigation
   -------------------------------------------------------------------------- */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mainNav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 24) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }, { passive: true });

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });

    mainNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('is-open');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. International Country Selector (Kromasol Style)
   -------------------------------------------------------------------------- */
function initCountrySelector() {
  const selector = document.getElementById('country-selector');
  const btn = document.getElementById('country-selector-btn');
  const label = document.getElementById('selected-country-label');
  const options = document.querySelectorAll('.country-option');

  if (!selector || !btn) return;

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = selector.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });

  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('is-active'));
      opt.classList.add('is-active');
      label.textContent = opt.getAttribute('data-country');
      selector.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    selector.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  });
}

/* --------------------------------------------------------------------------
   3. Dynamic Hero Product Stage & Ambient Theme Switcher
   -------------------------------------------------------------------------- */
function initHeroProductStage() {
  const tabs = document.querySelectorAll('.stage-tab');
  const badge = document.getElementById('stage-badge');
  const weight = document.getElementById('stage-weight');
  const img = document.getElementById('stage-image');
  const name = document.getElementById('stage-name');
  const desc = document.getElementById('stage-desc');
  const root = document.documentElement;

  let currentIdx = 0;
  let autoRotateTimer = null;

  function setHeroProduct(index) {
    const prod = PRODUCTS_DATA[index];
    if (!prod) return;
    currentIdx = index;

    tabs.forEach((t, i) => {
      t.classList.toggle('is-active', i === index);
    });

    root.style.setProperty('--active-accent', prod.accent);
    root.style.setProperty('--active-accent-soft', prod.accentSoft);
    root.style.setProperty('--active-surface', prod.surface);

    img.style.opacity = '0.25';
    img.style.transform = 'scale(0.95)';

    setTimeout(() => {
      badge.textContent = prod.badge;
      weight.textContent = prod.weight;
      img.src = prod.image;
      img.alt = prod.name;
      name.textContent = prod.name;
      desc.textContent = prod.desc;
      img.style.opacity = '1';
      img.style.transform = 'scale(1)';
    }, 150);
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-product-idx'), 10);
      setHeroProduct(idx);
      resetAutoRotate();
    });
  });

  function startAutoRotate() {
    autoRotateTimer = setInterval(() => {
      const next = (currentIdx + 1) % PRODUCTS_DATA.length;
      setHeroProduct(next);
    }, 5500);
  }

  function resetAutoRotate() {
    if (autoRotateTimer) clearInterval(autoRotateTimer);
    startAutoRotate();
  }

  startAutoRotate();
}

/* --------------------------------------------------------------------------
   4. Product Catalog Filtering
   -------------------------------------------------------------------------- */
function initProductFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Wellness Recommender
   -------------------------------------------------------------------------- */
function initWellnessRecommender() {
  const goalBtns = document.querySelectorAll('.goal-btn');
  const recImg = document.getElementById('rec-img');
  const recTag = document.getElementById('rec-tag');
  const recTitle = document.getElementById('rec-title');
  const recText = document.getElementById('rec-text');

  goalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-goal'), 10);
      const prod = PRODUCTS_DATA[idx];
      if (!prod) return;

      goalBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      recImg.src = prod.image;
      recImg.alt = prod.shortName;
      recTag.textContent = `Fórmula Recomendada · ${prod.weight}`;
      recTitle.textContent = `${prod.shortName} · ${prod.badge}`;
      recText.textContent = `${prod.fullDesc} Ingredientes clave: ${prod.ingredients}`;
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Multilevel & Direct Sales Commission Simulator
   -------------------------------------------------------------------------- */
function initCommissionSimulator() {
  const directRange = document.getElementById('direct-sales-range');
  const networkRange = document.getElementById('network-members-range');
  const directValLabel = document.getElementById('direct-sales-val');
  const networkValLabel = document.getElementById('network-members-val');

  const simRank = document.getElementById('sim-rank');
  const simTotal = document.getElementById('sim-total');
  const simDirect = document.getElementById('sim-direct');
  const simNetwork = document.getElementById('sim-network');

  if (!directRange || !networkRange) return;

  function updateSimulation() {
    const bags = parseInt(directRange.value, 10);
    const members = parseInt(networkRange.value, 10);

    directValLabel.textContent = `${bags} bolsas`;
    networkValLabel.textContent = `${members} socios`;

    // Direct margin calculation ($14 USD avg profit per pouch)
    const directIncome = bags * 14;
    // Network residual commission ($45 USD avg monthly volume royalty per active distributor)
    const networkIncome = members * 45;
    const totalIncome = directIncome + networkIncome;

    let rank = 'Distribuidor Activo';
    if (totalIncome >= 8000) {
      rank = 'Rango Estimado: Embajador Corona Nexsus';
    } else if (totalIncome >= 4000) {
      rank = 'Rango Estimado: Director Diamante';
    } else if (totalIncome >= 1800) {
      rank = 'Rango Estimado: Líder Zafiro';
    } else if (totalIncome >= 800) {
      rank = 'Rango Estimado: Líder Ejecutivo';
    }

    simRank.textContent = rank;
    simDirect.textContent = `$${directIncome.toLocaleString('en-US')} USD`;
    simNetwork.textContent = `$${networkIncome.toLocaleString('en-US')} USD`;
    simTotal.textContent = `$${totalIncome.toLocaleString('en-US')} USD / mes`;
  }

  directRange.addEventListener('input', updateSimulation);
  networkRange.addEventListener('input', updateSimulation);
  updateSimulation();
}

/* --------------------------------------------------------------------------
   7. Digital Ecosystem Interactive Window Tabs
   -------------------------------------------------------------------------- */
function initDigitalEcosystemTabs() {
  const btns = document.querySelectorAll('.platform-feature-btn');
  const paneTitle = document.getElementById('portal-pane-title');
  const kpi1Label = document.getElementById('kpi-1-label');
  const kpi1Val = document.getElementById('kpi-1-val');
  const kpi2Label = document.getElementById('kpi-2-label');
  const kpi2Val = document.getElementById('kpi-2-val');
  const kpi3Label = document.getElementById('kpi-3-label');
  const kpi3Val = document.getElementById('kpi-3-val');
  const activityList = document.getElementById('portal-activity-list');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-module'), 10);
      const mod = PORTAL_MODULES[idx];
      if (!mod) return;

      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      paneTitle.textContent = mod.title;
      kpi1Label.textContent = mod.kpis[0].label;
      kpi1Val.textContent = mod.kpis[0].val;
      kpi1Val.style.color = mod.kpis[0].color;

      kpi2Label.textContent = mod.kpis[1].label;
      kpi2Val.textContent = mod.kpis[1].val;
      kpi2Val.style.color = mod.kpis[1].color;

      kpi3Label.textContent = mod.kpis[2].label;
      kpi3Val.textContent = mod.kpis[2].val;
      kpi3Val.style.color = mod.kpis[2].color;

      activityList.innerHTML = mod.rows
        .map(
          r => `
        <div class="portal-activity-row">
          <span>${r.text}</span>
          <span class="portal-activity-row__status">${r.status}</span>
        </div>
      `
        )
        .join('');
    });
  });
}

/* --------------------------------------------------------------------------
   8. Product Technical Sheet Modal
   -------------------------------------------------------------------------- */
function initProductModal() {
  const backdrop = document.getElementById('product-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('[data-modal-product]');

  const modalImg = document.getElementById('modal-img');
  const modalSubtitle = document.getElementById('modal-subtitle');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalDetails = document.getElementById('modal-details');
  const modalVisualBg = document.getElementById('modal-visual-bg');

  if (!backdrop) return;

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.getAttribute('data-modal-product'), 10);
      const prod = PRODUCTS_DATA[idx];
      if (!prod) return;

      modalImg.src = prod.image;
      modalImg.alt = prod.shortName;
      modalSubtitle.textContent = prod.badge;
      modalTitle.textContent = prod.shortName;
      modalDesc.textContent = prod.fullDesc;
      modalVisualBg.style.background = prod.surface;

      modalDetails.innerHTML = `
        <div><strong>Ingredientes:</strong> ${prod.ingredients}</div>
        <div><strong>Presentación:</strong> ${prod.presentation}</div>
        <div><strong>Modo de Uso Sugerido:</strong> ${prod.usage}</div>
      `;

      backdrop.classList.add('is-open');
    });
  });

  closeBtn.addEventListener('click', () => {
    backdrop.classList.remove('is-open');
  });

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      backdrop.classList.remove('is-open');
    }
  });
}

/* --------------------------------------------------------------------------
   9. Animated Impact Counters on Scroll
   -------------------------------------------------------------------------- */
function initAnimatedCounters() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-counter'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      const duration = 1400;
      const startTime = performance.now();

      function tick(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);
        el.textContent = current.toLocaleString('en-US') + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.textContent = target.toLocaleString('en-US') + suffix;
        }
      }

      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.35 });

  counters.forEach(c => observer.observe(c));
}
