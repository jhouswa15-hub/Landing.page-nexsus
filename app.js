/**
 * NEXSUS GLOBAL — Official Corporate Web Application Logic
 * Controls:
 * 1. Sticky Navbar scroll state & Mobile hamburger drawer
 * 2. Product Portfolio modal ("Conocer producto")
 * 3. Oficina Virtual interactive SaaS mockup tabs (Dashboard, Volumen, Activaciones, Comisiones, Organización, Historial, Billetera, Perfil)
 * 4. FAQ Accordion transitions
 * 5. Progressive Scroll Reveal animations
 */

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
      { label: 'Nivel deAcceso', val: 'Distribuidor' },
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
  initProductModal();
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
   2. Product Modal ("Conocer producto")
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
   3. Interactive Oficina Virtual Mockup
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
   4. FAQ Accordion
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
   5. Progressive Scroll Reveal
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
