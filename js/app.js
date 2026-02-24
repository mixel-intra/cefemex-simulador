// ============================================
// APP PRINCIPAL — Cefemex Apple Pay Style
// ============================================

const App = {
  currentStep: 0,
  selectedCategory: null,
  selectedBrand: null,
  selectedModel: null,
  loanResult: null,
  selectedKilataje: null,
  goldWeight: 5,

  // ---- INIT ----
  init() {
    this.renderCategories();
    this.bindGlobalEvents();
  },

  bindGlobalEvents() {
    document.getElementById('link-conditions')?.addEventListener('click', () => this.showConditionsDialog());
  },

  // ---- BREADCRUMB NAV ----
  updateBreadcrumb(items) {
    const bc = document.getElementById('breadcrumb');
    if (!bc) return;
    bc.innerHTML = items.map((item, i) => {
      const isLast = i === items.length - 1;
      const chevron = i > 0
        ? '<svg class="bc-chevron" width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'
        : '';
      return `${chevron}<button class="bc-item ${isLast ? 'current' : ''}" data-index="${i}">${item.label}</button>`;
    }).join('');

    bc.querySelectorAll('.bc-item:not(.current)').forEach((btn, i) => {
      btn.addEventListener('click', () => { if (items[i].action) items[i].action(); });
    });
  },

  // ---- STEP DOTS ----
  updateStepDots(step) {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active', 'completed');
      if (i < step) dot.classList.add('completed');
      if (i === step) dot.classList.add('active');
    });
  },

  // Category icon map (iOS Settings style)
  categoryIcons: {
    1:  { emoji: '💍', bg: '#FFD60A' },  // Oro y Joyas
    4:  { emoji: '📱', bg: '#34C759' },  // Celulares
    9:  { emoji: '🚗', bg: '#007AFF' },  // Autos
    3:  { emoji: '⌚', bg: '#FF9F0A' },  // Relojes
    17: { emoji: '🔌', bg: '#AF52DE' },  // Electrónicos
    11: { emoji: '💻', bg: '#5856D6' },  // Laptops
    7:  { emoji: '🏍️', bg: '#FF3B30' }, // Motos
    10: { emoji: '📺', bg: '#30B0C7' },  // Pantallas
    12: { emoji: '🎮', bg: '#FF2D55' },  // Videojuegos
    5:  { emoji: '📋', bg: '#30D158' },  // Tablets
    15: { emoji: '⌚', bg: '#5AC8FA' },  // Smartwatch
    16: { emoji: '🖥️', bg: '#64D2FF' }, // Computadoras
    99: { emoji: '📦', bg: '#8E8E93' },  // Otros
  },

  // ---- STEP 0: CATEGORY LIST ----
  renderCategories() {
    this.currentStep = 0;
    this.selectedCategory = null;
    this.selectedBrand = null;
    this.selectedModel = null;
    this.selectedKilataje = null;
    this.goldWeight = 5;
    this.loanResult = null;

    this.updateStepDots(0);
    this.updateBreadcrumb([{ label: 'Categorías' }]);

    const heroText = document.getElementById('hero-text');
    if (heroText) heroText.style.display = 'block';

    const container = document.getElementById('step-content');
    let html = '<div class="category-list">';
    CATALOGS.categories.forEach(cat => {
      const icon = this.categoryIcons[cat.id] || { emoji: '📦', bg: '#8E8E93' };
      html += `<button class="category-row" data-id="${cat.id}" data-type="${cat.type}">
        <div class="cat-icon" style="background:${icon.bg}">${icon.emoji}</div>
        <div class="row-content">
          <span class="row-label">${cat.name}</span>
        </div>
        <svg class="row-chevron" viewBox="0 0 20 20" fill="none"><path d="M7.5 5l5 5-5 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>`;
    });
    html += '</div>';
    container.innerHTML = html;

    document.getElementById('result-section').style.display = 'none';

    container.querySelectorAll('.category-row').forEach(row => {
      row.addEventListener('click', () => {
        row.classList.add('selected');
        setTimeout(() => {
          const id = parseInt(row.dataset.id) || row.dataset.id;
          const type = row.dataset.type;
          this.selectCategory(id, type);
        }, 150);
      });
    });
  },

  selectCategory(id, type) {
    const cat = CATALOGS.categories.find(c => c.id === id);
    if (!cat) return;
    this.selectedCategory = cat;

    if (type === 'redirect') {
      this.showRedirectDialog(cat);
      return;
    }
    if (cat.requirementsDialog || id === 4) {
      const key = cat.requirementsDialog || 'celulares';
      this.showRequirementsDialog(cat, key, () => this.renderForm(cat));
      return;
    }
    this.renderForm(cat);
  },

  // ---- STEP 1: FORMS ----
  renderForm(cat) {
    this.currentStep = 1;
    this.updateStepDots(1);
    this.updateBreadcrumb([
      { label: 'Categorías', action: () => this.renderCategories() },
      { label: cat.name }
    ]);

    const heroText = document.getElementById('hero-text');
    if (heroText) heroText.style.display = 'none';

    const container = document.getElementById('step-content');
    let formHTML = '';

    if (cat.type === 'oro') formHTML = this.renderGoldForm(cat);
    else if (cat.type === 'marca_modelo') formHTML = this.renderBrandModelForm(cat);
    else if (cat.type === 'electronicos') formHTML = this.renderElectronicosForm(cat);

    container.innerHTML = formHTML;
    this.bindFormEvents(cat);
  },

  renderGoldForm(cat) {
    const icon = this.categoryIcons[cat.id] || { emoji: '📦', bg: '#8E8E93' };
    return `<div class="form-panel">
      <div class="selected-article-badge">
        <span class="badge-emoji">${icon.emoji}</span>
        <span>${cat.name}</span>
      </div>
      <div class="form-field">
        <label class="field-label">Kilataje
          <button type="button" class="help-btn" id="help-kilataje">?</button>
        </label>
        <div class="segmented-control" id="kilataje-control">
          ${CATALOGS.kilatajes.map(k => `<button type="button" class="segment-btn" data-value="${k.value}">${k.text}</button>`).join('')}
        </div>
      </div>
      <div class="form-field">
        <label class="field-label">Peso en gramos</label>
        <div class="range-field">
          <input type="range" id="range-gramos" class="range-slider" min="0.5" max="100" step="0.5" value="5">
          <div class="range-value-display" id="range-value-display">5.0 g</div>
        </div>
        <div class="range-limits"><span>0.5 g</span><span>100 g</span></div>
      </div>
      <div class="form-actions">
        <button class="btn-secondary" id="btn-other-article">Cambiar artículo</button>
        <button class="btn-primary" id="btn-calculate">Calcular préstamo</button>
      </div>
    </div>`;
  },

  renderBrandModelForm(cat) {
    const icon = this.categoryIcons[cat.id] || { emoji: '📦', bg: '#8E8E93' };
    const brands = CATALOGS.brands[cat.id] || [];
    return `<div class="form-panel">
      <div class="selected-article-badge">
        <span class="badge-emoji">${icon.emoji}</span>
        <span>${cat.name}</span>
      </div>
      <div class="form-field">
        <label class="field-label">Marca</label>
        <select id="select-marca" class="form-select">
          <option value="">Selecciona una marca</option>
          ${brands.map(b => `<option value="${b.value}">${b.text}</option>`).join('')}
        </select>
      </div>
      <div class="form-field slide-field" id="modelo-group" style="display:none">
        <label class="field-label">Modelo</label>
        <select id="select-modelo" class="form-select">
          <option value="">Selecciona un modelo</option>
        </select>
      </div>
      <div class="form-actions">
        <button class="btn-secondary" id="btn-other-article">Cambiar artículo</button>
        <button class="btn-primary" id="btn-calculate">Calcular préstamo</button>
      </div>
    </div>`;
  },

  renderElectronicosForm(cat) {
    const icon = this.categoryIcons[cat.id] || { emoji: '📦', bg: '#8E8E93' };
    return `<div class="form-panel">
      <div class="selected-article-badge">
        <span class="badge-emoji">${icon.emoji}</span>
        <span>${cat.name}</span>
      </div>
      <div class="form-field">
        <label class="field-label">Artículo</label>
        <select id="select-garantia" class="form-select">
          <option value="">Seleccione un artículo</option>
          ${CATALOGS.electronicosItems.map((item, i) => `<option value="${i}">${item}</option>`).join('')}
        </select>
      </div>
      <div class="form-field slide-field" id="marca-elec-group" style="display:none">
        <label class="field-label">Marca</label>
        <select id="select-marca-elec" class="form-select">
          <option value="">Selecciona una marca</option>
          ${CATALOGS.electronicosBrands.map((b, i) => `<option value="${i}">${b}</option>`).join('')}
        </select>
      </div>
      <div class="form-field slide-field" id="valor-elec-group" style="display:none">
        <label class="field-label">Valor aproximado</label>
        <div class="value-input-combo">
          <input type="range" id="range-valor" class="range-slider" min="500" max="50000" step="500" value="5000">
          <input type="number" id="input-valor" class="form-input" placeholder="$5,000" min="100" value="5000">
        </div>
        <div class="range-limits"><span>$500</span><span>$50,000</span></div>
      </div>
      <div class="form-actions">
        <button class="btn-secondary" id="btn-other-article">Cambiar artículo</button>
        <button class="btn-primary" id="btn-calculate">Calcular préstamo</button>
      </div>
    </div>`;
  },

  bindFormEvents(cat) {
    document.getElementById('btn-other-article')?.addEventListener('click', () => this.renderCategories());
    document.getElementById('btn-calculate')?.addEventListener('click', () => this.calculate(cat));
    document.getElementById('help-kilataje')?.addEventListener('click', () => this.showKilatajeHelp());

    // Segmented control (kilataje)
    document.querySelectorAll('.segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        this.selectedKilataje = btn.dataset.value;
      });
    });

    // Range slider
    const rangeSlider = document.getElementById('range-gramos');
    const rangeDisplay = document.getElementById('range-value-display');
    if (rangeSlider && rangeDisplay) {
      const updateSlider = () => {
        const val = parseFloat(rangeSlider.value);
        this.goldWeight = val;
        rangeDisplay.textContent = `${val.toFixed(1)} g`;
        const pct = ((val - 0.5) / (100 - 0.5)) * 100;
        rangeSlider.style.background = `linear-gradient(90deg, var(--navy) 0%, var(--gold) ${pct}%, var(--separator-opaque) ${pct}%)`;
      };
      rangeSlider.addEventListener('input', updateSlider);
      updateSlider();
    }

    // Brand/Model select
    document.getElementById('select-marca')?.addEventListener('change', (e) => {
      const brand = e.target.value;
      this.selectedBrand = brand;
      if (brand) {
        this.loadModels(cat.id, brand);
        const modelGroup = document.getElementById('modelo-group');
        if (modelGroup) modelGroup.style.display = 'block';
      } else {
        const modelGroup = document.getElementById('modelo-group');
        if (modelGroup) modelGroup.style.display = 'none';
      }
    });

    // Electronics: article
    document.getElementById('select-garantia')?.addEventListener('change', (e) => {
      const marcaGroup = document.getElementById('marca-elec-group');
      if (marcaGroup) marcaGroup.style.display = e.target.value ? 'block' : 'none';
      const valorGroup = document.getElementById('valor-elec-group');
      if (valorGroup) valorGroup.style.display = 'none';
    });

    // Electronics: brand
    document.getElementById('select-marca-elec')?.addEventListener('change', (e) => {
      const valorGroup = document.getElementById('valor-elec-group');
      if (valorGroup) valorGroup.style.display = e.target.value ? 'block' : 'none';
    });

    // Electronics: range + input sync
    const rangeValor = document.getElementById('range-valor');
    const inputValor = document.getElementById('input-valor');
    if (rangeValor && inputValor) {
      const updateValorSlider = () => {
        const val = parseFloat(rangeValor.value);
        inputValor.value = val;
        const pct = ((val - 500) / (50000 - 500)) * 100;
        rangeValor.style.background = `linear-gradient(90deg, var(--navy) 0%, var(--gold) ${pct}%, var(--separator-opaque) ${pct}%)`;
      };
      rangeValor.addEventListener('input', updateValorSlider);
      inputValor.addEventListener('input', () => {
        const val = parseFloat(inputValor.value) || 0;
        rangeValor.value = Math.min(Math.max(val, 500), 50000);
        updateValorSlider();
      });
      updateValorSlider();
    }
  },

  loadModels(categoryId, brandValue) {
    const modelSelect = document.getElementById('select-modelo');
    if (!modelSelect) return;
    modelSelect.innerHTML = '<option value="">Selecciona un modelo</option>';

    const models = CATALOGS.models[categoryId]?.[brandValue];
    if (!models || models.length === 0) {
      modelSelect.innerHTML += '<option value="OTRO MODELO">OTRO MODELO</option>';
    } else {
      models.forEach(m => {
        modelSelect.innerHTML += `<option value="${m.value}">${m.text}</option>`;
      });
    }
  },

  // ---- CALCULATION ----
  calculate(cat) {
    let result;
    if (cat.type === 'oro') {
      const kilataje = this.selectedKilataje;
      const gramos = this.goldWeight;
      if (!kilataje || !gramos || gramos <= 0) {
        this.showAlert('Selecciona un kilataje e indica el peso en gramos.');
        return;
      }
      result = Calculator.calculateGold(kilataje, gramos);
    } else if (cat.type === 'marca_modelo') {
      const marca = document.getElementById('select-marca')?.value;
      const modelo = document.getElementById('select-modelo');
      const modelText = modelo?.options[modelo.selectedIndex]?.text || '';
      if (!marca || !modelText || modelText === 'Selecciona un modelo') {
        this.showAlert('Selecciona la marca y el modelo de tu artículo.');
        return;
      }
      this.selectedModel = modelText;
      result = Calculator.calculateByModel(cat.id, modelText);
    } else if (cat.type === 'electronicos') {
      const articulo = document.getElementById('select-garantia')?.value;
      const marcaElec = document.getElementById('select-marca-elec')?.value;
      const valor = parseFloat(document.getElementById('input-valor')?.value);
      if (!articulo || !marcaElec || !valor || valor <= 0) {
        this.showAlert('Completa todos los campos del formulario.');
        return;
      }
      result = Calculator.calculateElectronicos(valor);
    }

    if (!result || result.prestamo <= 0) {
      this.showAlert('No pudimos calcular tu préstamo. Intenta con otros datos.');
      return;
    }

    this.loanResult = result;
    this.renderResult(result);
  },

  // ---- STEP 2: RESULTS ----
  renderResult(result) {
    this.currentStep = 2;
    this.updateStepDots(2);
    this.updateBreadcrumb([
      { label: 'Categorías', action: () => this.renderCategories() },
      { label: this.selectedCategory.name, action: () => this.renderForm(this.selectedCategory) },
      { label: 'Resultado' }
    ]);

    document.getElementById('hero-text').style.display = 'none';
    document.getElementById('step-content').innerHTML = '';

    const resultSection = document.getElementById('result-section');
    resultSection.style.display = 'block';

    // Ring gauge — thinner, more refined
    const circumference = 2 * Math.PI * 72;
    const loanDisplay = document.getElementById('loan-display');
    loanDisplay.innerHTML = `<div class="loan-display-inner">
      <div class="ring-container">
        <svg class="ring-gauge" viewBox="0 0 160 160" width="200" height="200">
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#1B2A4A"/>
              <stop offset="100%" stop-color="#C9A84C"/>
            </linearGradient>
          </defs>
          <circle cx="80" cy="80" r="72" fill="none" stroke="#E5E5EA" stroke-width="4"/>
          <circle cx="80" cy="80" r="72" fill="none" stroke="url(#ringGrad)" stroke-width="4"
            stroke-linecap="round" class="ring-progress"
            stroke-dasharray="${circumference}"
            stroke-dashoffset="${circumference}"
            transform="rotate(-90 80 80)"/>
        </svg>
        <div class="ring-center">
          <span class="ring-label">Te prestamos hasta</span>
          <span class="loan-counter" id="loan-counter">$0</span>
        </div>
      </div>
      <div class="article-badge">
        <span class="badge-emoji">${(this.categoryIcons[this.selectedCategory.id] || {emoji:'📦'}).emoji}</span>
        <span>${this.selectedCategory.name}</span>
      </div>
    </div>`;

    // Animate ring
    const maxAmount = Math.max(result.prestamo * 2, 8000);
    const pct = Math.max(Math.min(result.prestamo / maxAmount, 1), 0.18);
    const offset = circumference * (1 - pct);
    requestAnimationFrame(() => {
      const ring = document.querySelector('.ring-progress');
      if (ring) ring.style.strokeDashoffset = offset;
    });

    // Animate counter
    this.animateCounter('loan-counter', 0, result.prestamo, 1600);

    // Render plans
    this.renderPaymentPlans(result);
  },

  animateCounter(elementId, start, end, duration) {
    const el = document.getElementById(elementId);
    if (!el) return;
    const startTime = performance.now();
    const easeOutExpo = t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(start + (end - start) * easeOutExpo(progress));
      el.textContent = formatCurrency(current);
      if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
  },

  // ---- PAYMENT PLANS ----
  renderPaymentPlans(result) {
    const tradPlan = Calculator.calculateTradicional(result.prestamo, result.categoryId, 'mensual');
    const fijoPlan = Calculator.calculateFijo(result.prestamo, result.categoryId, 'mensual');

    const container = document.getElementById('plans-comparison');
    container.innerHTML = `
      <h3 class="plans-heading">Planes de pago</h3>
      <div class="plans-grid">
        ${this.renderPlanCard('tradicional', tradPlan)}
        ${this.renderPlanCard('fijo', fijoPlan)}
      </div>
      <div class="result-actions">
        <div class="form-actions">
          <button class="btn-secondary" id="btn-new-sim">Simular otro artículo</button>
          <button class="btn-gold" id="btn-want-loan">Quiero mi préstamo</button>
        </div>
      </div>`;

    this.bindPlanCardEvents(result);
  },

  renderPlanCard(type, plan) {
    if (!plan) return '';
    const label = type === 'tradicional' ? 'Tradicional' : 'Pagos Fijos';
    const freqs = CATALOGS.paymentFrequencies[type];

    const rows = plan.payments.map(p =>
      `<tr>
        <td>${p.numero}</td><td>${p.amortizacion}</td><td>${p.interes}</td><td>${p.refrendo}</td><td>${p.desempeno}</td>
      </tr>`
    ).join('');

    return `<div class="plan-card" data-plan="${type}">
      <div class="plan-card-header">
        <h4 class="plan-type">${label}</h4>
        ${plan.plazo ? `<span class="plan-badge">${plan.plazo}</span>` : ''}
      </div>
      <div class="plan-summary">
        <div class="plan-metric">
          <span class="metric-label">Cada refrendo</span>
          <strong class="metric-value">${formatCurrency(plan.refrendo)}</strong>
        </div>
        <div class="plan-metric">
          <span class="metric-label">Último pago</span>
          <strong class="metric-value">${formatCurrency(plan.ultimoPago)}</strong>
        </div>
      </div>
      <div class="plan-frequency-select">
        <label>Frecuencia</label>
        <select class="form-select freq-select" data-plan-type="${type}">
          ${freqs.map(f => `<option value="${f.value}" ${f.value === 'mensual' ? 'selected' : ''}>${f.text}</option>`).join('')}
        </select>
      </div>
      <button class="detail-toggle" data-plan-type="${type}">
        <span>Ver detalle de pagos</span>
        <svg class="toggle-chevron" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="payment-table-wrapper" id="table-${type}">
        <table class="payment-table">
          <thead>
            <tr><th>Nº</th><th>Amort.</th><th>Interés</th><th>Refrendo</th><th>Desempeño</th></tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
  },

  bindPlanCardEvents(result) {
    // Accordion toggles
    document.querySelectorAll('.detail-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const type = btn.dataset.planType;
        const wrapper = document.getElementById(`table-${type}`);
        const isOpen = wrapper.classList.contains('open');

        document.querySelectorAll('.payment-table-wrapper').forEach(w => w.classList.remove('open'));
        document.querySelectorAll('.detail-toggle').forEach(b => b.classList.remove('active'));

        if (!isOpen) {
          wrapper.classList.add('open');
          btn.classList.add('active');
        }
      });
    });

    // Frequency change
    document.querySelectorAll('.freq-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const type = e.target.dataset.planType;
        const freq = e.target.value;
        let plan;
        if (type === 'tradicional') {
          plan = Calculator.calculateTradicional(result.prestamo, result.categoryId, freq);
        } else {
          plan = Calculator.calculateFijo(result.prestamo, result.categoryId, freq);
        }
        if (plan) this.updatePlanCardContent(type, plan);
      });
    });

    // Result action buttons
    document.getElementById('btn-new-sim')?.addEventListener('click', () => {
      document.getElementById('result-section').style.display = 'none';
      this.renderCategories();
    });
    document.getElementById('btn-want-loan')?.addEventListener('click', () => this.showLoanRequestDialog());
  },

  updatePlanCardContent(type, plan) {
    const card = document.querySelector(`.plan-card[data-plan="${type}"]`);
    if (!card) return;

    const metrics = card.querySelectorAll('.metric-value');
    if (metrics[0]) metrics[0].textContent = formatCurrency(plan.refrendo);
    if (metrics[1]) metrics[1].textContent = formatCurrency(plan.ultimoPago);

    const badge = card.querySelector('.plan-badge');
    if (badge && plan.plazo) badge.textContent = plan.plazo;

    const tbody = card.querySelector('.payment-table tbody');
    if (tbody) {
      tbody.innerHTML = plan.payments.map(p =>
        `<tr>
          <td>${p.numero}</td><td>${p.amortizacion}</td><td>${p.interes}</td><td>${p.refrendo}</td><td>${p.desempeno}</td>
        </tr>`
      ).join('');
    }
  },

  // ---- MODALS ----
  showAlert(message) {
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-card">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      <h3>Aviso</h3>
      <p style="text-align:center">${message}</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="App.closeModal()">Entendido</button>
      </div>
    </div>`;
    modal.style.display = 'flex';
  },

  showRedirectDialog(cat) {
    const modal = document.getElementById('modal');
    let content = '';

    if (cat.id === 9) { // Autos
      content = `<h3>Empeño de Autos</h3>
        <p>Selecciona el tipo de empeño que necesitas:</p>
        <div class="auto-options">
          <div class="auto-option">
            <h4>Auto Rodando</h4>
            <ul>
              <li>Sigues usando tu auto</li>
              <li>Máximo 12 años de antigüedad</li>
              <li>Debes tener 2 placas</li>
            </ul>
          </div>
          <div class="auto-option">
            <h4>Auto Resguardo</h4>
            <ul>
              <li>El auto queda en resguardo</li>
              <li>Mayor porcentaje de préstamo</li>
              <li>Máximo 15 años de antigüedad</li>
            </ul>
          </div>
        </div>
        <p class="modal-note">Para cotizar tu auto, acude a la sucursal más cercana.</p>
        <div class="modal-actions">
          <button class="btn-primary" onclick="App.closeModal()">Entendido</button>
        </div>`;
    } else if (cat.id === 3) { // Relojes
      content = `<h3>Empeño de Relojes</h3>
        <p>Para cotizar el empeño de un reloj, contáctanos por WhatsApp.</p>
        <div class="modal-actions">
          <a href="https://wa.me/5215512345678" target="_blank" class="btn-whatsapp" onclick="App.closeModal()">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.025.507 3.934 1.395 5.608L.044 23.678a.5.5 0 00.611.611l5.997-1.324A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.886 0-3.674-.507-5.218-1.44l-.375-.222-3.567.788.82-3.536-.24-.383A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/></svg>
            Contactar por WhatsApp
          </a>
        </div>`;
    } else {
      content = `<h3>Otros Artículos</h3>
        <p>Para cotizar artículos no listados, acude a tu sucursal más cercana o contáctanos.</p>
        <div class="modal-actions">
          <button class="btn-primary" onclick="App.closeModal()">Entendido</button>
        </div>`;
    }

    modal.innerHTML = `<div class="modal-card">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      ${content}
    </div>`;
    modal.style.display = 'flex';
  },

  showRequirementsDialog(cat, key, callback) {
    const reqData = CATALOGS.requirements[key] || {};
    const items = reqData.items || reqData || [];
    const itemsList = Array.isArray(items) ? items : [];
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-card">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      <h3>Requisitos para ${cat.name}</h3>
      <p>${reqData.title || 'Tu artículo debe cumplir con los siguientes requisitos:'}</p>
      <ul>
        ${itemsList.map(r => `<li>${r}</li>`).join('')}
      </ul>
      <div class="modal-actions">
        <button class="btn-primary" id="btn-continue-req">Continuar</button>
      </div>
    </div>`;
    modal.style.display = 'flex';
    document.getElementById('btn-continue-req')?.addEventListener('click', () => {
      this.closeModal();
      if (callback) callback();
    });
  },

  showLoanRequestDialog() {
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-card">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      <h3>Importante</h3>
      <p>El monto mostrado es una estimación. El valor final del préstamo puede variar dependiendo de:</p>
      <ul>
        <li><strong>Estado físico</strong> del artículo</li>
        <li><strong>Funcionamiento</strong> y accesorios</li>
        <li><strong>Valuación</strong> en sucursal</li>
      </ul>
      <p class="modal-note">Acude a tu sucursal más cercana para completar tu empeño.</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="App.closeModal()">Entendido</button>
      </div>
    </div>`;
    modal.style.display = 'flex';
  },

  showConditionsDialog() {
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-card modal-wide">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      <h3>Condiciones del Simulador</h3>
      <p>La información proporcionada en este simulador: (i) es para fines ilustrativos, (ii) está sujeta a cambios sin previo aviso, (iii) no constituye una oferta vinculante, y (iv) no genera obligación alguna para Cefemex.</p>
      <p><strong>CAT Promedio:</strong> Pagos Fijos 191.46%; Pago Tradicional 1036.58%. Sin IVA.</p>
      <p>Fecha de cálculo del CAT: 05 de julio de 2023. Fin de vigencia: 4 de enero de 2024.</p>
      <p>Período mínimo de 61 días hasta un máximo de 24 meses (renovable).</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="App.closeModal()">Cerrar</button>
      </div>
    </div>`;
    modal.style.display = 'flex';
  },

  showKilatajeHelp() {
    const modal = document.getElementById('modal');
    modal.innerHTML = `<div class="modal-card modal-wide">
      <button class="modal-close" onclick="App.closeModal()">&times;</button>
      <h3>Identificar el Kilataje</h3>
      <p>El kilataje indica la pureza del oro. Busca la marca grabada en tu joya.</p>
      <div class="table-wrapper">
        <table class="info-table">
          <thead><tr><th>Kilataje</th><th>Milésimas</th><th>% de Oro</th></tr></thead>
          <tbody>
            <tr><td>8 K</td><td>333</td><td>33.3%</td></tr>
            <tr><td>10 K</td><td>417</td><td>41.7%</td></tr>
            <tr><td>12 K</td><td>500</td><td>50.0%</td></tr>
            <tr><td>14 K</td><td>585</td><td>58.5%</td></tr>
            <tr><td>16 K</td><td>666</td><td>66.6%</td></tr>
            <tr><td>18 K</td><td>750</td><td>75.0%</td></tr>
            <tr><td>21 K</td><td>875</td><td>87.5%</td></tr>
            <tr><td>24 K</td><td>999</td><td>99.9%</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>¿Dónde buscar?</strong> En anillos: interior de la banda. En cadenas/pulseras: cerca del broche. En aretes: en el poste.</p>
      <div class="modal-actions">
        <button class="btn-primary" onclick="App.closeModal()">Entendido</button>
      </div>
    </div>`;
    modal.style.display = 'flex';
  },

  closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    modal.innerHTML = '';
  }
};

// ---- BOOT ----
document.addEventListener('DOMContentLoaded', () => App.init());
