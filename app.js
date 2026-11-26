/**
 * NEXSUS GLOBAL — Official Corporate Web Application Logic
 * v4: Adapted with HyperFrames Skills (motion-doctrine, cut-the-curve, seam-craft,
 *     oversized-cursor, captions-overlay, cuboid-carousel/orbit-card 3D physics)
 *
 * Controls:
 * 1. Sticky Navbar scroll state & Mobile hamburger drawer
 * 2. HyperFrames Waterfall Word Entry (§6 In-Scene Arrival)
 * 3. Hero Storyboard with Cut-the-Curve velocity-matched transitions (§3 Cut the Curve)
 * 4. Portfolio Filter Tabs + 3D Cuboid Tilt & Glare Physics (cuboid-carousel / orbit-card)
 * 5. Product Detail Modal with Inverse Zoom-Through Arrival (§2 Inverse Zoom-Through)
 * 6. "Why Choose Us" Tabs with DSLR Rack-Focus Blur-Cut (§5 Rack-Focus)
 * 7. Oficina Virtual (Nexsus eWorld) with Oversized Cursor Protagonist + Lower-Third Caption Rail
 * 8. FAQ Accordion transitions
 * 9. Progressive Scroll Reveal wave animations
 */

const HERO_SLIDES = [
  {
    subtitle: 'Conecta con una comunidad global, descubre productos de bienestar y desarrolla una nueva forma de emprender.',
    image: 'assets/hero-lifestyle.jpg',
    alt: 'Comunidad de emprendedores Nexsus Global colaborando en un entorno moderno',
    floatTitle: 'Ecosistema Corporativo Nexsus',
    floatDesc: 'Bienestar, formación y tecnología bajo la visión Un Mundo, Un Mercado'
  },
  {
    subtitle: 'Forma parte de una organización conectada mediante un único código digital en nuestra plataforma Nexsus eWorld, con soporte y expansión desde Perú.',
    image: 'assets/corporate-center.jpg',
    alt: 'Sede corporativa y centro de atención a distribuidores Nexsus Global',
    floatTitle: 'Red Comercial en Expansión',
    floatDesc: 'Centros de atención, logística nacional y Oficina Virtual disponible 24/7'
  },
  {
    subtitle: 'Fórmulas funcionales en polvo con hongos adaptógenos (Ganoderma y Chaga) y superalimentos peruanos de alta pureza para tu nutrición diaria.',
    image: 'assets/natural-ingredients.jpg',
    alt: 'Materias primas naturales: Ganoderma, Chaga, Cacao, Maca Negra y Café',
    floatTitle: '100% Materias Primas Naturales',
    floatDesc: 'Micafé, Minegro, Lanzate y Alokate en prácticos sachets individuales'
  }
];

const WHY_CHOOSE_TABS = {
  plan: {
    title: 'Modelo Flexible de Comercialización y Red',
    desc: 'Un sistema estructurado que combina distribución directa, programas de activación y bonificaciones por desarrollo de organización con total transparencia.'
  },
  viajes: {
    title: 'Experiencias, Eventos y Convivencias de Liderazgo',
    desc: 'Reconocemos la constancia y el liderazgo mediante encuentros corporativos, seminarios de formación y experiencias diseñadas para nuestra comunidad.'
  },
  portafolio: {
    title: 'Productos Funcionales de Consumo Diario',
    desc: 'Fórmulas de alta rotación elaboradas con Ganoderma, Chaga, Maca Negra, Camu Camu, Cacao y Sacha Inchi que se integran naturalmente en cada hogar.'
  },
  vision: {
    title: 'Construcción Patrimonial y Desarrollo Sostenible',
    desc: 'Desarrolla habilidades empresariales reales respaldadas por nuestro ecosistema digital Nexsus eWorld para construir una organización sólida a largo plazo.'
  }
};

const PORTFOLIO_PRODUCTS = {
  micafe: {
    name: 'Micafé',
    badge: 'Equilibrio Perfecto',
    image: 'assets/mockup_micafe_bolsa.png',
    desc: 'Mezcla en polvo para preparar café gourmet funcional instantáneo, formulada para acompañar un estilo de vida saludable con el sabor del café, cacao y superalimentos.',
    ingredients: 'Café, Ganoderma, Cacao, Yacón, Sacha Inchi, Algarrobo, Coco, Cebada y Estevia.',
    presentation: 'Bolsa Doypack con 30 sachets · Peso Neto 480g',
    usage: 'Disolver 1 sachet en una taza de agua caliente (180 ml) y mezclar hasta integrar por completo.'
  },
  minegro: {
    name: 'Minegro',
    badge: 'Bienestar Intenso',
    image: 'assets/mockup_minegro_bolsa.png',
    desc: 'Mezcla en polvo para preparar café gourmet instantáneo de carácter intenso, enriquecida con hongos funcionales y fibras vegetales para tu rutina diaria.',
    ingredients: 'Café Gourmet, Ganoderma, Hongo Chaga, Cebada, Noni, Tamarindo y Linaza.',
    presentation: 'Bolsa Doypack con 30 sachets · Peso Neto 300g',
    usage: 'Verter 1 sachet en 180 ml de agua caliente y disfrutar en cualquier momento del día.'
  },
  lanzate: {
    name: 'Lanzate',
    badge: 'Formulación Avanzada',
    image: 'assets/mockup_lanzate_bolsa.png',
    desc: 'Fórmula en polvo a base de plantas funcionales y superalimentos pensada para acompañar la nutrición diaria y promover una sensación de ligereza y bienestar.',
    ingredients: 'Anís, yacón, estevia, manzanilla, uña de gato, noni, ciruela, pitahaya, tamarindo, cardo santo, cardo bendito, jengibre, papaya, hojas de sen, hongo ganoderma y hongo chaga.',
    presentation: 'Bolsa Doypack con 30 sachets · Peso Neto 300g',
    usage: 'Disolver 1 sachet en 200 ml de agua tibia o fría como parte de tus hábitos de bienestar.'
  },
  alokate: {
    name: 'Alokate',
    badge: 'Energizante Vital',
    image: 'assets/mockup_alokate_bolsa.png',
    desc: 'Fórmula en polvo para preparar bebida refrescante a base de aminoácidos y extractos vegetales que acompañan jornadas activas y estilo de vida dinámico.',
    ingredients: 'Maca Negra, Camu Camu, Arándanos, Noni, Yacón, Aminoácidos y Estevia.',
    presentation: 'Bolsa Doypack con 30 sachets · Peso Neto 360g',
    usage: 'Mezclar 1 sachet en 250 ml de agua fría antes o durante tus actividades diarias.'
  }
};

const OFFICE_MODULES = {
  dashboard: {
    title: 'Dashboard · Resumen General',
    badge: 'Período Activo',
    caption: 'Vista en vivo: <strong>Dashboard General</strong> · Control de volumen, activaciones y organización.',
    cursorPos: { left: '14%', top: '18%' },
    kpis: [
      { label: 'Estado de Cuenta', val: 'Activo' },
      { label: 'Volumen Personal', val: '240 PV' },
      { label: 'Volumen Grupal', val: '3,450 GV' },
      { label: 'Organización', val: '28 Socios' }
    ],
    rows: [
      { text: 'Activación de pedido · Portafolio Bienestar (Micafé + Lanzate)', tag: 'Verificado' },
      { text: 'Nuevo registro en Organización · Línea Directa', tag: 'Completado' },
      { text: 'Actualización de estado en Billetera y Comisiones', tag: 'Sincronizado' }
    ]
  },
  volumen: {
    title: 'Volumen · Indicadores de Red',
    badge: 'Cálculo en Tiempo Real',
    caption: 'Módulo activo: <strong>Volumen de Red</strong> · Trazabilidad de puntos personales (PV) y grupales (GV).',
    cursorPos: { left: '14%', top: '28%' },
    kpis: [
      { label: 'Puntos Personales', val: '240 PV' },
      { label: 'Volumen Grupal', val: '3,450 GV' },
      { label: 'Líneas Activas', val: '4 Líneas' },
      { label: 'Crecimiento Mensual', val: '+18.4%' }
    ],
    rows: [
      { text: 'Volumen acumulado Línea 1 · Lima, Perú', tag: '1,420 GV' },
      { text: 'Volumen acumulado Línea 2 · Arequipa, Perú', tag: '1,180 GV' },
      { text: 'Volumen acumulado Línea 3 · Trujillo, Perú', tag: '850 GV' }
    ]
  },
  activaciones: {
    title: 'Activaciones · Control de Período',
    badge: 'Estado: Calificado',
    caption: 'Módulo activo: <strong>Activaciones</strong> · Confirmación automática de compras y calificación mensual.',
    cursorPos: { left: '14%', top: '38%' },
    kpis: [
      { label: 'Estatus Mensual', val: 'Calificado' },
      { label: 'Fecha de Activación', val: 'Día 04' },
      { label: 'Próximo Ciclo', val: '18 Días' },
      { label: 'Pedidos del Ciclo', val: '3 Órdenes' }
    ],
    rows: [
      { text: 'Pack Bienestar Integral (Micafé + Minegro + Alokate)', tag: 'Acreditado' },
      { text: 'Reconsumo quincenal · 2 bolsas Lanzate', tag: 'Acreditado' },
      { text: 'Puntos de activación aplicados al período actual', tag: 'Confirmado' }
    ]
  },
  comisiones: {
    title: 'Comisiones · Liquidaciones y Bonos',
    badge: 'Transparencia Total',
    caption: 'Módulo activo: <strong>Comisiones</strong> · Desglose transparente de bonos directos y de organización.',
    cursorPos: { left: '14%', top: '48%' },
    kpis: [
      { label: 'Ciclo Actual', val: 'En Curso' },
      { label: 'Bonos Directos', val: 'Habilitados' },
      { label: 'Bonos de Red', val: 'Nivel 1 - 5' },
      { label: 'Estado de Pago', val: 'Al Día' }
    ],
    rows: [
      { text: 'Liquidación de comisiones por comercialización directa', tag: 'Procesado' },
      { text: 'Bonificación por desarrollo de organización comercial', tag: 'Acreditado' },
      { text: 'Reporte detallado disponible en estado de cuenta', tag: 'Disponible' }
    ]
  },
  organizacion: {
    title: 'Organización · Estructura de Comunidad',
    badge: '28 Integrantes',
    caption: 'Módulo activo: <strong>Organización</strong> · Visualización jerárquica de socios y retención comunitaria.',
    cursorPos: { left: '14%', top: '58%' },
    kpis: [
      { label: 'Afiliados Directos', val: '9 Socios' },
      { label: 'Red Total', val: '28 Socios' },
      { label: 'Tasa de Retención', val: '92%' },
      { label: 'Nuevos del Mes', val: '+5 Socios' }
    ],
    rows: [
      { text: 'Registro verificado · Nuevo distribuidor en Lima', tag: 'Nivel 1' },
      { text: 'Activación completada · Distribuidor en Cusco', tag: 'Nivel 2' },
      { text: 'Nuevo socio integrado a programa de formación', tag: 'Nivel 1' }
    ]
  },
  historial: {
    title: 'Historial · Registro de Pedidos y Actividad',
    badge: 'Trazabilidad 24/7',
    caption: 'Módulo activo: <strong>Historial</strong> · Seguimiento logístico de órdenes y comprobantes digitales.',
    cursorPos: { left: '14%', top: '68%' },
    kpis: [
      { label: 'Órdenes Totales', val: '19 Pedidos' },
      { label: 'Entregas Exitosas', val: '100%' },
      { label: 'Último Pedido', val: 'Hace 3 días' },
      { label: 'Comprobantes', val: 'Digitales' }
    ],
    rows: [
      { text: 'Orden #NX-2048 · 2 Micafé + 2 Alokate · Envío Nacional', tag: 'Entregado' },
      { text: 'Orden #NX-1984 · 3 Lanzate + 1 Minegro · Envío Nacional', tag: 'Entregado' },
      { text: 'Orden #NX-1910 · Pack Inicio Bienestar Nexsus Global', tag: 'Entregado' }
    ]
  },
  billetera: {
    title: 'Billetera · Gestión Financiera',
    badge: 'Seguridad Encriptada',
    caption: 'Módulo activo: <strong>Billetera</strong> · Administración segura de saldos y transferencias a cuenta titular.',
    cursorPos: { left: '14%', top: '78%' },
    kpis: [
      { label: 'Estado de Billetera', val: 'Verificada' },
      { label: 'Movimientos', val: 'Auditados' },
      { label: 'Cuenta Bancaria', val: 'Vinculada' },
      { label: 'Disponibilidad', val: 'Inmediata' }
    ],
    rows: [
      { text: 'Transferencia de liquidación de ciclo a cuenta titular', tag: 'Completado' },
      { text: 'Abono por bonificación de periodo comercial', tag: 'Registrado' },
      { text: 'Validación de seguridad de perfil financiero', tag: 'Verificado' }
    ]
  },
  perfil: {
    title: 'Perfil · Datos del Distribuidor',
    badge: 'Cuenta Verificada',
    caption: 'Módulo activo: <strong>Perfil</strong> · Membresía única bajo la visión Un Mundo, Un Mercado.',
    cursorPos: { left: '14%', top: '86%' },
    kpis: [
      { label: 'Código Nexsus', val: 'NX-PE-0842' },
      { label: 'País Base', val: 'Perú' },
      { label: 'Membresía', val: 'Un Mundo' },
      { label: 'Seguridad 2FA', val: 'Activa' }
    ],
    rows: [
      { text: 'Documentación de identidad y titularidad validada', tag: 'Aprobado' },
      { text: 'Enlace personal de patrocinio y registro habilitado', tag: 'Activo' },
      { text: 'Notificaciones de pedidos y comunidad configuradas', tag: 'Activo' }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initWaterfallHeroHeadline();
  initHeroSlides();
  initPortfolioFilterTabs();
  initCuboidProductTilt();
  initProductModal();
  initWhyChooseTabs();
  initVirtualOfficeWithOversizedCursor();
  initFaqAccordion();
  initScrollReveal();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect & Mobile Menu
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('is-scrolled');
    } else {
      navbar.classList.remove('is-scrolled');
    }
  }, { passive: true });

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}

/* --------------------------------------------------------------------------
   2. HyperFrames §6 Waterfall Entry on Hero Headline
   -------------------------------------------------------------------------- */
function initWaterfallHeroHeadline() {
  const h1 = document.getElementById('hero-main-headline');
  if (!h1) return;
  const text = h1.textContent.trim();
  const words = text.split(/\s+/);
  h1.innerHTML = words
    .map((word, idx) => `<span class="hf-word" style="--w-idx:${idx}">${word}</span>`)
    .join(' ');
}

/* --------------------------------------------------------------------------
   3. HyperFrames §3 Cut-The-Curve 3-Slide Hero Switcher
   -------------------------------------------------------------------------- */
function initHeroSlides() {
  const tabs = document.querySelectorAll('[data-hero-slide]');
  const subtitleEl = document.getElementById('hero-dynamic-subtitle');
  const imgEl = document.getElementById('hero-stage-image');
  const floatCardEl = document.getElementById('hero-floating-card');
  const floatTitleEl = document.getElementById('hero-float-title');
  const floatDescEl = document.getElementById('hero-float-desc');

  if (!tabs.length || !imgEl) return;

  let currentIdx = 0;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-hero-slide'), 10);
      if (idx === currentIdx) return;
      const slide = HERO_SLIDES[idx];
      if (!slide) return;
      currentIdx = idx;

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      // Phase 1: Accelerate out to the left (power4.in + 10px blur)
      [subtitleEl, imgEl, floatCardEl].forEach(el => {
        if (el) el.classList.add('is-cutting-out');
      });

      setTimeout(() => {
        // Phase 2: Mid-motion hard swap at peak velocity (+42px offset)
        subtitleEl.textContent = slide.subtitle;
        imgEl.src = slide.image;
        imgEl.alt = slide.alt;
        floatTitleEl.textContent = slide.floatTitle;
        floatDescEl.textContent = slide.floatDesc;

        [subtitleEl, imgEl, floatCardEl].forEach(el => {
          if (!el) return;
          el.classList.remove('is-cutting-out');
          el.classList.add('is-cutting-in-prep');
          void el.offsetWidth; // Force reflow at cut frame
          // Phase 3: Decelerate in along same vector (power4.out)
          el.classList.remove('is-cutting-in-prep');
        });
      }, 170);
    });
  });
}

/* --------------------------------------------------------------------------
   4. DXN-Inspired Lifestyle Benefit Product Filter Tabs
   -------------------------------------------------------------------------- */
function initPortfolioFilterTabs() {
  const filterBtns = document.querySelectorAll('[data-portfolio-filter]');
  const cards = document.querySelectorAll('.product-card[data-categories]');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-portfolio-filter');
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      cards.forEach(card => {
        const cats = card.getAttribute('data-categories').split(' ');
        if (cats.includes(cat)) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. HyperFrames 3D Cuboid & Orbit Card Physics on Product Cards
   -------------------------------------------------------------------------- */
function initCuboidProductTilt() {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const nx = (x / rect.width) - 0.5;
      const ny = (y / rect.height) - 0.5;

      const rx = (-ny * 7).toFixed(2);
      const ry = (nx * 9).toFixed(2);
      const gx = ((x / rect.width) * 100).toFixed(1);
      const gy = ((y / rect.height) * 100).toFixed(1);

      card.style.setProperty('--rx', `${rx}deg`);
      card.style.setProperty('--ry', `${ry}deg`);
      card.style.setProperty('--gx', `${gx}%`);
      card.style.setProperty('--gy', `${gy}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
    });
  });
}

/* --------------------------------------------------------------------------
   6. Product Modal ("Conocer producto")
   -------------------------------------------------------------------------- */
function initProductModal() {
  const backdrop = document.getElementById('product-modal-backdrop');
  const closeBtn = document.getElementById('modal-close-btn');
  const triggers = document.querySelectorAll('[data-product-modal]');

  const imgEl = document.getElementById('modal-product-img');
  const badgeEl = document.getElementById('modal-product-badge');
  const nameEl = document.getElementById('modal-product-name');
  const descEl = document.getElementById('modal-product-desc');
  const metaEl = document.getElementById('modal-product-meta');

  if (!backdrop) return;

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-product-modal');
      const prod = PORTFOLIO_PRODUCTS[key];
      if (!prod) return;

      imgEl.src = prod.image;
      imgEl.alt = prod.name;
      badgeEl.textContent = prod.badge;
      nameEl.textContent = prod.name;
      descEl.textContent = prod.desc;

      metaEl.innerHTML = `
        <div><strong>Ingredientes principales:</strong> ${prod.ingredients}</div>
        <div><strong>Presentación:</strong> ${prod.presentation}</div>
        <div><strong>Modo de preparación:</strong> ${prod.usage}</div>
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
   7. HyperFrames §5 Rack-Focus Blur-Cut on "Why Choose Us" Tabs
   -------------------------------------------------------------------------- */
function initWhyChooseTabs() {
  const btns = document.querySelectorAll('[data-why-tab]');
  const panelEl = document.getElementById('why-tab-panel');
  const titleEl = document.getElementById('why-panel-title');
  const descEl = document.getElementById('why-panel-desc');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-why-tab');
      const info = WHY_CHOOSE_TABS[key];
      if (!info) return;

      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      if (panelEl) panelEl.classList.add('is-pulling-focus');
      setTimeout(() => {
        titleEl.textContent = info.title;
        descEl.textContent = info.desc;
        if (panelEl) panelEl.classList.remove('is-pulling-focus');
      }, 140);
    });
  });
}

/* --------------------------------------------------------------------------
   8. HyperFrames Oversized Cursor Protagonist + Captions-Overlay Rail in Oficina Virtual
   -------------------------------------------------------------------------- */
function initVirtualOfficeWithOversizedCursor() {
  const triggers = document.querySelectorAll('[data-office-tab]');
  const stageEl = document.getElementById('saas-main-stage');
  const titleEl = document.getElementById('saas-panel-title');
  const badgeEl = document.getElementById('saas-panel-badge');
  const rowsContainer = document.getElementById('saas-activity-rows');
  const cursorEl = document.getElementById('hf-oversized-cursor');
  const captionRailEl = document.getElementById('hf-caption-rail');
  const tourBtn = document.getElementById('saas-tour-btn');
  const tourLabel = document.getElementById('saas-tour-btn-label');
  const mockupWindow = document.getElementById('saas-mockup-window');

  const moduleKeys = Object.keys(OFFICE_MODULES);
  let currentKey = 'dashboard';
  let tourInterval = null;
  let isTourActive = true;

  function applyOfficeModule(tabKey, viaOversizedCursor = false) {
    const mod = OFFICE_MODULES[tabKey];
    if (!mod) return;
    currentKey = tabKey;

    if (viaOversizedCursor && cursorEl) {
      // 1. Glide oversized cursor to target button center
      cursorEl.style.left = mod.cursorPos.left;
      cursorEl.style.top = mod.cursorPos.top;

      // 2. Asymmetric 1:2 tap compress/expand on tip (21% 14%) & click ignites beat
      setTimeout(() => {
        cursorEl.classList.add('is-tapping');
        const targetNav = document.getElementById(`saas-nav-${tabKey}`);
        if (targetNav) targetNav.classList.add('is-cursor-pressed');

        // Rack-focus blur-cut ignited same-frame by the click
        if (stageEl) stageEl.classList.add('is-pulling-focus');

        setTimeout(() => {
          cursorEl.classList.remove('is-tapping');
          if (targetNav) targetNav.classList.remove('is-cursor-pressed');
          commitModuleContent(tabKey, mod);
          if (stageEl) stageEl.classList.remove('is-pulling-focus');

          // 3. Drift cursor aside during reading beat so it never sits frozen over text
          setTimeout(() => {
            if (cursorEl && isTourActive) {
              cursorEl.style.left = '78%';
              cursorEl.style.top = '22%';
            }
          }, 320);
        }, 140);
      }, 640);
    } else {
      if (stageEl) stageEl.classList.add('is-pulling-focus');
      setTimeout(() => {
        commitModuleContent(tabKey, mod);
        if (stageEl) stageEl.classList.remove('is-pulling-focus');
      }, 130);
    }
  }

  function commitModuleContent(tabKey, mod) {
    triggers.forEach(t => {
      t.classList.toggle('is-active', t.getAttribute('data-office-tab') === tabKey);
    });

    titleEl.textContent = mod.title;
    badgeEl.textContent = mod.badge;
    if (captionRailEl) captionRailEl.innerHTML = mod.caption;

    mod.kpis.forEach((kpi, idx) => {
      const lEl = document.getElementById(`saas-kpi-${idx + 1}-label`);
      const vEl = document.getElementById(`saas-kpi-${idx + 1}-val`);
      if (lEl && vEl) {
        lEl.textContent = kpi.label;
        vEl.textContent = kpi.val;
      }
    });

    rowsContainer.innerHTML = mod.rows
      .map(
        r => `
      <div class="saas-table__row">
        <span>${r.text}</span>
        <span class="saas-table__tag">${r.tag}</span>
      </div>
    `
      )
      .join('');
  }

  function startCursorTour() {
    if (tourInterval) clearInterval(tourInterval);
    isTourActive = true;
    if (tourBtn) tourBtn.classList.add('is-running');
    if (tourLabel) tourLabel.textContent = 'Recorrido Guiado: Activo';

    // Physical entry from off-screen bottom (top: 118% -> resting spot)
    if (cursorEl) {
      cursorEl.style.left = '78%';
      cursorEl.style.top = '22%';
    }

    tourInterval = setInterval(() => {
      const nextIdx = (moduleKeys.indexOf(currentKey) + 1) % moduleKeys.length;
      applyOfficeModule(moduleKeys[nextIdx], true);
    }, 3800);
  }

  function stopCursorTour() {
    isTourActive = false;
    if (tourInterval) clearInterval(tourInterval);
    tourInterval = null;
    if (tourBtn) tourBtn.classList.remove('is-running');
    if (tourLabel) tourLabel.textContent = 'Iniciar Recorrido con Cursor';
    // Physical exit off-screen below (never opacity fade in place)
    if (cursorEl) {
      cursorEl.style.left = '52%';
      cursorEl.style.top = '118%';
    }
  }

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      stopCursorTour();
      const tabKey = btn.getAttribute('data-office-tab');
      applyOfficeModule(tabKey, false);
    });
  });

  if (tourBtn) {
    tourBtn.addEventListener('click', () => {
      if (isTourActive) {
        stopCursorTour();
      } else {
        const nextIdx = (moduleKeys.indexOf(currentKey) + 1) % moduleKeys.length;
        startCursorTour();
        applyOfficeModule(moduleKeys[nextIdx], true);
      }
    });
  }

  // Trigger cursor entry when Oficina Virtual enters viewport
  if (mockupWindow && 'IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCursorTour();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    obs.observe(mockupWindow);
  }
}

/* --------------------------------------------------------------------------
   9. FAQ Accordion
   -------------------------------------------------------------------------- */
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');

  items.forEach(item => {
    const btn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');

      items.forEach(other => {
        other.classList.remove('is-open');
        other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        other.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   10. Progressive Scroll Reveal (HyperFrames Wave Cascade)
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}
