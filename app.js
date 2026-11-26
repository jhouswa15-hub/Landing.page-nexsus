/**
 * NEXSUS GLOBAL — Official Corporate Web Application Logic (v3: DXN "One World One Market" Structure)
 * Controls:
 * 1. Sticky Navbar scroll state & Mobile hamburger drawer
 * 2. DXN-Inspired 3-Slide Interactive Hero Switcher
 * 3. DXN-Inspired Lifestyle Benefit Product Filter Tabs
 * 4. Product Portfolio modal ("Conocer producto")
 * 5. DXN-Inspired "Why Choose Us" Interactive Tabs
 * 6. Oficina Virtual (Nexsus eWorld) interactive SaaS mockup tabs (8 modules)
 * 7. FAQ Accordion transitions
 * 8. Progressive Scroll Reveal animations
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
  initHeroSlides();
  initPortfolioFilterTabs();
  initProductModal();
  initWhyChooseTabs();
  initVirtualOfficeMockup();
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
   2. DXN-Inspired 3-Slide Hero Switcher
   -------------------------------------------------------------------------- */
function initHeroSlides() {
  const tabs = document.querySelectorAll('[data-hero-slide]');
  const subtitleEl = document.getElementById('hero-dynamic-subtitle');
  const imgEl = document.getElementById('hero-stage-image');
  const floatTitleEl = document.getElementById('hero-float-title');
  const floatDescEl = document.getElementById('hero-float-desc');

  if (!tabs.length || !imgEl) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = parseInt(tab.getAttribute('data-hero-slide'), 10);
      const slide = HERO_SLIDES[idx];
      if (!slide) return;

      tabs.forEach(t => t.classList.remove('is-active'));
      tab.classList.add('is-active');

      imgEl.style.opacity = '0.35';
      setTimeout(() => {
        subtitleEl.textContent = slide.subtitle;
        imgEl.src = slide.image;
        imgEl.alt = slide.alt;
        floatTitleEl.textContent = slide.floatTitle;
        floatDescEl.textContent = slide.floatDesc;
        imgEl.style.opacity = '1';
      }, 160);
    });
  });
}

/* --------------------------------------------------------------------------
   3. DXN-Inspired Lifestyle Benefit Product Filter Tabs
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
   4. Product Modal ("Conocer producto")
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
   5. DXN-Inspired "Why Choose Us" Interactive Tabs
   -------------------------------------------------------------------------- */
function initWhyChooseTabs() {
  const btns = document.querySelectorAll('[data-why-tab]');
  const titleEl = document.getElementById('why-panel-title');
  const descEl = document.getElementById('why-panel-desc');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-why-tab');
      const info = WHY_CHOOSE_TABS[key];
      if (!info) return;

      btns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');

      titleEl.textContent = info.title;
      descEl.textContent = info.desc;
    });
  });
}

/* --------------------------------------------------------------------------
   6. Interactive Oficina Virtual Mockup
   -------------------------------------------------------------------------- */
function initVirtualOfficeMockup() {
  const triggers = document.querySelectorAll('[data-office-tab]');
  const titleEl = document.getElementById('saas-panel-title');
  const badgeEl = document.getElementById('saas-panel-badge');
  const rowsContainer = document.getElementById('saas-activity-rows');

  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabKey = btn.getAttribute('data-office-tab');
      const mod = OFFICE_MODULES[tabKey];
      if (!mod) return;

      triggers.forEach(t => {
        t.classList.toggle('is-active', t.getAttribute('data-office-tab') === tabKey);
      });

      titleEl.textContent = mod.title;
      badgeEl.textContent = mod.badge;

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
    });
  });
}

/* --------------------------------------------------------------------------
   7. FAQ Accordion
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
   8. Progressive Scroll Reveal
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
