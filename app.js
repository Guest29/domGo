const ASSET = "assets/";
const DETECT_DELAY_MS = 2000;

const scenarios = [
  {
    id: "lesnaya",
    label: "Ролик 1",
    video: `${ASSET}demo-1.mp4`,
    building: {
      id: "forest-14",
      address: "ул. Лесная, 14",
      district: "Северный квартал",
      type: "монолитный дом",
      year: 2018,
      floors: 17,
      image: `${ASSET}house-1.png`,
      confidence: 96,
      relevance: 92,
      avgPrice: "17,4 млн ₽",
      summary: "Тихий дом рядом с метро, школами и зелёной зоной. Хорошо подходит для семейного сценария и ежедневных поездок по городу.",
      infrastructure: { metro: 6, kindergartens: 5, schools: 3, parks: 2 },
      apartments: [
        { id: "f1", image: `${ASSET}apartment-1.png`, title: "2-комнатная с видом во двор", price: 16900000, marketLow: 15800000, marketHigh: 18100000, rooms: 2, area: 54, floor: 8, floors: 17, metro: 6, repair: "ready", schools: true, park: true, balcony: true, parking: true, relevance: 94, description: "Светлая квартира с изолированными комнатами, свежим ремонтом и тихими окнами во двор." },
        { id: "f2", image: `${ASSET}apartment-2.png`, title: "3-комнатная для семьи", price: 22300000, marketLow: 20700000, marketHigh: 23800000, rooms: 3, area: 74, floor: 12, floors: 17, metro: 7, repair: "cosmetic", schools: true, park: true, balcony: true, parking: true, relevance: 97, description: "Большая кухня-гостиная, два санузла, вид на парк и закрытый двор." },
        { id: "f3", image: `${ASSET}apartment-3.png`, title: "1-комнатная у метро", price: 13600000, marketLow: 12800000, marketHigh: 14500000, rooms: 1, area: 42, floor: 5, floors: 17, metro: 5, repair: "ready", schools: false, park: true, balcony: false, parking: false, relevance: 83, description: "Компактный вариант для одного человека или пары с быстрым выходом к метро." }
      ]
    }
  },
  {
    id: "mira",
    label: "Ролик 2",
    video: `${ASSET}demo-2.mp4`,
    building: {
      id: "mir-18",
      address: "пр. Мира, 18",
      district: "Деловой центр",
      type: "кирпичный дом",
      year: 2012,
      floors: 12,
      image: `${ASSET}house-2.png`,
      confidence: 93,
      relevance: 86,
      avgPrice: "14,8 млн ₽",
      summary: "Дом в активной части района: транспорт, кафе, офисы и быстрый выезд на ключевые магистрали.",
      infrastructure: { metro: 11, kindergartens: 2, schools: 2, parks: 1 },
      apartments: [
        { id: "m1", image: `${ASSET}apartment-4.png`, title: "2-комнатная с хорошей ценой", price: 14200000, marketLow: 13900000, marketHigh: 16400000, rooms: 2, area: 54, floor: 4, floors: 12, metro: 11, repair: "cosmetic", schools: true, park: false, balcony: true, parking: false, relevance: 88, description: "Базовый ремонт, удобный выезд на проспект и хорошая цена за метр." },
        { id: "m2", image: `${ASSET}apartment-5.png`, title: "3-комнатная на высоком этаже", price: 18100000, marketLow: 16900000, marketHigh: 19400000, rooms: 3, area: 64, floor: 9, floors: 12, metro: 10, repair: "ready", schools: true, park: false, balcony: true, parking: true, relevance: 84, description: "Три изолированные комнаты, балкон и хорошие виды на город." },
        { id: "m3", image: `${ASSET}apartment-6.png`, title: "Студия для старта", price: 9200000, marketLow: 8800000, marketHigh: 10300000, rooms: 1, area: 31, floor: 6, floors: 12, metro: 9, repair: "none", schools: false, park: false, balcony: false, parking: false, relevance: 76, description: "Небольшая квартира с потенциалом ремонта под себя и низким входным бюджетом." }
      ]
    }
  },
  {
    id: "sadovaya",
    label: "Ролик 3",
    video: `${ASSET}demo-3.mp4`,
    building: {
      id: "sadovaya-7",
      address: "ул. Садовая, 7",
      district: "Парковый район",
      type: "сталинский дом",
      year: 1961,
      floors: 8,
      image: `${ASSET}house-3.png`,
      confidence: 89,
      relevance: 90,
      avgPrice: "20,6 млн ₽",
      summary: "Зелёный район, высокие потолки и просторные квартиры рядом с парком и школами.",
      infrastructure: { metro: 15, kindergartens: 4, schools: 4, parks: 3 },
      apartments: [
        { id: "s1", image: `${ASSET}apartment-7.png`, title: "3-комнатная у парка", price: 19700000, marketLow: 18600000, marketHigh: 21400000, rooms: 3, area: 72, floor: 3, floors: 8, metro: 15, repair: "cosmetic", schools: true, park: true, balcony: false, parking: false, relevance: 96, description: "Высокие потолки, две спальни и окна на зелёный двор." },
        { id: "s2", image: `${ASSET}apartment-8.png`, title: "4-комнатная для большой семьи", price: 24900000, marketLow: 23200000, marketHigh: 26300000, rooms: 4, area: 88, floor: 6, floors: 8, metro: 15, repair: "designer", schools: true, park: true, balcony: true, parking: false, relevance: 98, description: "Редкий просторный формат: кабинет, две спальни и большая гостиная." },
        { id: "s3", image: `${ASSET}apartment-9.png`, title: "2-комнатная в зелёном районе", price: 15400000, marketLow: 15000000, marketHigh: 17600000, rooms: 2, area: 53, floor: 2, floors: 8, metro: 14, repair: "none", schools: true, park: true, balcony: false, parking: false, relevance: 87, description: "Баланс цены и района: хороший вариант для ремонта под себя." }
      ]
    }
  }
];

const refs = {
  liveCamera: document.querySelector("#liveCamera"),
  demoVideo: document.querySelector("#demoVideo"),
  scanStatus: document.querySelector("#scanStatus"),
  startActions: document.querySelector("#startActions"),
  startDemoButton: document.querySelector("#startDemoButton"),
  demoSelector: document.querySelector("#demoSelector"),
  demoOptions: document.querySelector("#demoOptions"),
  returnCameraButton: document.querySelector("#returnCameraButton"),
  foundPanel: document.querySelector("#foundPanel"),
  fullUi: document.querySelector("#fullUi"),
  buildingContent: document.querySelector("#buildingContent"),
  closeFullUi: document.querySelector("#closeFullUi"),
  apartmentDrawer: document.querySelector("#apartmentDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerCard: document.querySelector("#drawerCard"),
  aiPanel: document.querySelector("#aiPanel"),
  aiBackdrop: document.querySelector("#aiBackdrop"),
  closeAi: document.querySelector("#closeAi"),
  aiOutput: document.querySelector("#aiOutput"),
  appPush: document.querySelector("#appPush"),
  pushOpenButton: document.querySelector("#pushOpenButton")
};

const state = {
  activeScenario: null,
  activeApartment: null,
  detectTimer: null,
  filtersOpen: false,
  aiTimer: null,
  filters: {
    preset: "any",
    minRooms: 1,
    metroMax: 20,
    repair: "any",
    schools: false,
    park: false,
    balcony: false,
    parking: false,
    middleFloor: false
  }
};

function money(value) {
  return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
}

function priceShort(value) {
  return (value / 1_000_000).toFixed(value % 1_000_000 === 0 ? 0 : 1).replace(".", ",") + " млн ₽";
}

function repairLabel(value) {
  return {
    any: "любой",
    none: "без ремонта",
    cosmetic: "косметический",
    ready: "готово к заселению",
    designer: "дизайнерский"
  }[value] || value;
}

function clamp(num, min, max) {
  return Math.max(min, Math.min(max, num));
}

function getMarket(apartment) {
  const min = apartment.marketLow;
  const max = apartment.marketHigh;
  const price = apartment.price;
  const pos = clamp(((price - min) / (max - min)) * 52 + 24, 4, 96);
  const type = price < min ? "low" : price > max ? "high" : "mid";
  const label = type === "low" ? "ниже рынка" : type === "high" ? "выше рынка" : "рыночная цена";
  return { pos, type, label };
}

function calcMatch(apartment) {
  let score = apartment.relevance;
  const f = state.filters;
  if (apartment.rooms < Number(f.minRooms)) score -= 14;
  if (apartment.metro > Number(f.metroMax)) score -= 12;
  if (f.repair !== "any" && apartment.repair !== f.repair) score -= 10;
  if (f.schools && !apartment.schools) score -= 10;
  if (f.park && !apartment.park) score -= 8;
  if (f.balcony && !apartment.balcony) score -= 6;
  if (f.parking && !apartment.parking) score -= 6;
  if (f.middleFloor && (apartment.floor === 1 || apartment.floor === apartment.floors)) score -= 8;
  return clamp(Math.round(score), 52, 99);
}

function matchCircle(percent, size = "") {
  return `<div class="match-circle ${size}" style="--percent:${percent}"><div><strong>${percent}%</strong><span>совпадение</span></div></div>`;
}

function marketGauge(apartment) {
  const market = getMarket(apartment);
  return `
    <div class="market-gauge market-${market.type}">
      <div class="market-head"><span>Оценка цены</span><strong>${market.label}</strong></div>
      <div class="market-labels"><span>низкая</span><span>рыночная цена</span><span>высокая</span></div>
      <div class="market-track"><span class="market-dot" style="left:${market.pos}%"><b>${priceShort(apartment.price)}</b></span></div>
      <div class="market-values"><span>${priceShort(apartment.marketLow)}</span><span>${priceShort(apartment.marketHigh)}</span></div>
    </div>
  `;
}

function setVisible(el, visible) {
  el.classList.toggle("is-hidden", !visible);
}

async function startCamera() {
  if (!navigator.mediaDevices?.getUserMedia) {
    refs.scanStatus.textContent = "Камера недоступна. Можно запустить демо.";
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: "environment" } }, audio: false });
    refs.liveCamera.srcObject = stream;
    await refs.liveCamera.play();
    refs.scanStatus.textContent = "Наведите камеру на дом";
  } catch (error) {
    refs.scanStatus.textContent = "Камера не запущена. Проверьте разрешение браузера.";
  }
}

function showPush() {
  window.setTimeout(() => setVisible(refs.appPush, true), 800);
}

function renderDemoButtons() {
  refs.demoOptions.innerHTML = scenarios.map((item, index) => `
    <button class="demo-option" type="button" data-scenario="${item.id}">${index + 1}</button>
  `).join("");
}

function startDemo() {
  setVisible(refs.startActions, false);
  setVisible(refs.demoSelector, true);
  selectScenario(scenarios[0].id);
}

function selectScenario(id) {
  const scenario = scenarios.find((item) => item.id === id) || scenarios[0];
  state.activeScenario = scenario;
  state.activeApartment = null;
  window.clearTimeout(state.detectTimer);
  setVisible(refs.foundPanel, false);
  refs.demoOptions.querySelectorAll("button").forEach((btn) => btn.classList.toggle("is-active", btn.dataset.scenario === scenario.id));
  refs.scanStatus.textContent = "Загружаем ролик…";
  refs.demoVideo.classList.add("is-visible");
  refs.demoVideo.loop = false;
  refs.demoVideo.pause();
  refs.demoVideo.removeAttribute("src");
  refs.demoVideo.src = scenario.video;
  refs.demoVideo.currentTime = 0;
  refs.demoVideo.load();
  const startPlayback = async () => {
    refs.demoVideo.removeEventListener("canplay", startPlayback);
    try {
      await refs.demoVideo.play();
      refs.scanStatus.textContent = "Сканируем дом…";
      state.detectTimer = window.setTimeout(() => showFoundPanel(), DETECT_DELAY_MS);
    } catch (error) {
      refs.scanStatus.textContent = `Не удалось запустить видео: ${scenario.video}`;
    }
  };
  refs.demoVideo.addEventListener("canplay", startPlayback);
}

function returnToCamera() {
  window.clearTimeout(state.detectTimer);
  state.activeScenario = null;
  setVisible(refs.demoSelector, false);
  setVisible(refs.foundPanel, false);
  setVisible(refs.startActions, true);
  closeFullUi();
  closeDrawer();
  closeAi();
  refs.demoVideo.pause();
  refs.demoVideo.removeAttribute("src");
  refs.demoVideo.classList.remove("is-visible");
  refs.scanStatus.textContent = "Наведите камеру на дом";
}

function showFoundPanel() {
  if (!state.activeScenario) return;
  const building = state.activeScenario.building;
  refs.foundPanel.innerHTML = `
    <button class="found-panel-button" type="button" aria-label="Открыть меню дома">
      <img src="${building.image}" alt="${building.address}" draggable="false" />
      <div class="found-panel-text">
        <span>Дом найден</span>
        <strong>${building.address}</strong>
        <small>${building.apartments.length} квартиры в продаже · ${building.district}</small>
      </div>
      ${matchCircle(building.relevance, "small")}
    </button>
  `;
  refs.scanStatus.textContent = "Дом найден. Откройте карточку или выберите другой ролик.";
  setVisible(refs.foundPanel, true);
}

function openFullUi() {
  if (!state.activeScenario) return;
  renderBuilding();
  refs.fullUi.classList.add("is-open");
  refs.fullUi.setAttribute("aria-hidden", "false");
}

function closeFullUi() {
  refs.fullUi.classList.remove("is-open");
  refs.fullUi.setAttribute("aria-hidden", "true");
}

function applyPreset(preset) {
  const presets = {
    any: { minRooms: 1, metroMax: 20, repair: "any", schools: false, park: false, balcony: false, parking: false, middleFloor: false },
    family: { minRooms: 2, metroMax: 15, repair: "any", schools: true, park: true, balcony: true, parking: false, middleFloor: true },
    metro: { minRooms: 1, metroMax: 8, repair: "any", schools: false, park: false, balcony: false, parking: false, middleFloor: false },
    ready: { minRooms: 1, metroMax: 20, repair: "ready", schools: false, park: false, balcony: false, parking: false, middleFloor: false },
    parking: { minRooms: 1, metroMax: 20, repair: "any", schools: false, park: false, balcony: false, parking: true, middleFloor: false }
  };
  Object.assign(state.filters, presets[preset] || presets.any, { preset });
  renderBuilding();
}

function getFilteredApartments(building) {
  const f = state.filters;
  return building.apartments
    .filter((apt) => apt.rooms >= Number(f.minRooms))
    .filter((apt) => apt.metro <= Number(f.metroMax))
    .filter((apt) => f.repair === "any" || apt.repair === f.repair)
    .filter((apt) => !f.schools || apt.schools)
    .filter((apt) => !f.park || apt.park)
    .filter((apt) => !f.balcony || apt.balcony)
    .filter((apt) => !f.parking || apt.parking)
    .filter((apt) => !f.middleFloor || (apt.floor !== 1 && apt.floor !== apt.floors))
    .sort((a, b) => calcMatch(b) - calcMatch(a));
}

function filterChipText() {
  const f = state.filters;
  const chips = [`от ${f.minRooms} комн.`, `метро до ${f.metroMax} мин`];
  if (f.repair !== "any") chips.push(repairLabel(f.repair));
  if (f.schools) chips.push("школы рядом");
  if (f.park) chips.push("парк рядом");
  if (f.balcony) chips.push("балкон");
  if (f.parking) chips.push("паркинг");
  if (f.middleFloor) chips.push("не крайний этаж");
  return chips.map((chip) => `<span>${chip}</span>`).join("");
}

function renderBuilding() {
  const building = state.activeScenario.building;
  const apartments = getFilteredApartments(building);
  refs.buildingContent.innerHTML = `
    <section class="building-hero">
      <img src="${building.image}" alt="${building.address}" draggable="false" />
      <div class="building-hero-info">
        <p class="eyebrow">Найденный дом</p>
        <h1>${building.address}</h1>
        <p>${building.summary}</p>
        <div class="building-stats">
          <span>${building.type}</span><span>${building.year}</span><span>${building.floors} этажей</span><span>${building.avgPrice}</span>
        </div>
      </div>
      ${matchCircle(building.relevance, "large")}
    </section>

    <section class="infra-grid">
      <article><strong>${building.infrastructure.metro} мин</strong><span>до метро</span></article>
      <article><strong>${building.infrastructure.kindergartens}</strong><span>детсадов</span></article>
      <article><strong>${building.infrastructure.schools}</strong><span>школы</span></article>
      <article><strong>${building.infrastructure.parks}</strong><span>парка</span></article>
    </section>

    <section class="filters-card ${state.filtersOpen ? "is-open" : ""}">
      <button class="filters-toggle" type="button" id="filtersToggle">
        <span>${state.filtersOpen ? "Скрыть фильтры" : "Открыть фильтры"}</span>
        <b>${apartments.length} из ${building.apartments.length}</b>
      </button>
      <div class="filter-chips">${filterChipText()}</div>
      <div class="filters-body" id="filtersBody">
        <div class="preset-row">
          ${[
            ["any", "Любые"], ["family", "Для семьи"], ["metro", "У метро"], ["ready", "Готовый ремонт"], ["parking", "С паркингом"]
          ].map(([id, label]) => `<button class="preset ${state.filters.preset === id ? "is-active" : ""}" type="button" data-preset="${id}">${label}</button>`).join("")}
        </div>
        <div class="filter-grid">
          <label>Комнат минимум<select data-filter="minRooms"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></label>
          <label>Метро не дальше<select data-filter="metroMax"><option value="8">8 минут</option><option value="12">12 минут</option><option value="15">15 минут</option><option value="20">20 минут</option></select></label>
          <label>Ремонт<select data-filter="repair"><option value="any">любой</option><option value="none">без ремонта</option><option value="cosmetic">косметический</option><option value="ready">готово к заселению</option><option value="designer">дизайнерский</option></select></label>
        </div>
        <div class="check-grid">
          <label><input type="checkbox" data-filter="schools" /> школы и детсады рядом</label>
          <label><input type="checkbox" data-filter="park" /> парк рядом</label>
          <label><input type="checkbox" data-filter="balcony" /> балкон/лоджия</label>
          <label><input type="checkbox" data-filter="parking" /> паркинг</label>
          <label><input type="checkbox" data-filter="middleFloor" /> не первый и не последний этаж</label>
        </div>
      </div>
    </section>

    <section class="apartments-section">
      <div class="section-title"><h2>Квартиры в этом доме</h2><span>${apartments.length} вариантов</span></div>
      <div class="apartment-list">
        ${apartments.length ? apartments.map((apt, index) => renderApartmentCard(apt, index)).join("") : `<div class="empty-state">Под выбранные фильтры ничего не найдено. Попробуйте ослабить параметры.</div>`}
      </div>
    </section>
  `;

  refs.buildingContent.querySelectorAll("[data-filter]").forEach((input) => {
    const key = input.dataset.filter;
    if (input.type === "checkbox") input.checked = Boolean(state.filters[key]);
    else input.value = state.filters[key];
  });
}

function renderApartmentCard(apt, index) {
  const match = calcMatch(apt);
  return `
    <article class="apartment-card" style="--delay:${index * 60}ms">
      <img src="${apt.image}" alt="${apt.title}" draggable="false" />
      <div class="apartment-info">
        <h3>${apt.title}</h3>
        <p class="apartment-price">${money(apt.price)}</p>
        <div class="apartment-meta"><span>${apt.rooms}-комн.</span><span>${apt.area} м²</span><span>${apt.floor}/${apt.floors} этаж</span><span>${apt.metro} мин до метро</span></div>
        ${marketGauge(apt)}
        <p>${apt.description}</p>
        <div class="apartment-actions"><button type="button" data-open-apartment="${apt.id}">Подробнее</button><button type="button" data-ai="${apt.id}">Обзор от ИИ</button></div>
      </div>
      ${matchCircle(match)}
    </article>
  `;
}

function findApartment(id) {
  const building = state.activeScenario?.building;
  return building?.apartments.find((apt) => apt.id === id);
}

function openApartment(id) {
  const apt = findApartment(id);
  if (!apt) return;
  state.activeApartment = apt;
  refs.drawerCard.innerHTML = `
    <button class="drawer-close" type="button" data-close-drawer>Закрыть</button>
    <img src="${apt.image}" alt="${apt.title}" draggable="false" />
    <div class="drawer-content">
      <div class="drawer-title"><div><p class="eyebrow">Квартира</p><h2>${apt.title}</h2><strong>${money(apt.price)}</strong></div>${matchCircle(calcMatch(apt), "large")}</div>
      <div class="apartment-meta"><span>${apt.rooms}-комн.</span><span>${apt.area} м²</span><span>${apt.floor}/${apt.floors} этаж</span><span>${repairLabel(apt.repair)}</span></div>
      ${marketGauge(apt)}
      <p>${apt.description}</p>
      <button class="ai-main-button" type="button" data-ai="${apt.id}">Обзор от ИИ</button>
    </div>
  `;
  refs.apartmentDrawer.classList.add("is-open");
  refs.apartmentDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  refs.apartmentDrawer.classList.remove("is-open");
  refs.apartmentDrawer.setAttribute("aria-hidden", "true");
}

function openAi(id) {
  const apt = findApartment(id) || state.activeApartment;
  if (!apt) return;
  window.clearInterval(state.aiTimer);
  refs.aiOutput.textContent = "";
  refs.aiPanel.classList.add("is-open");
  refs.aiPanel.setAttribute("aria-hidden", "false");
  const building = state.activeScenario.building;
  const text = `Эта квартира имеет ${calcMatch(apt)}% совпадение с выбранными параметрами. ${apt.rooms}-комнатный формат и площадь ${apt.area} м² подходят для текущего сценария. До метро ${apt.metro} минут, в районе ${building.infrastructure.schools} школы и ${building.infrastructure.kindergartens} детсадов. Цена оценивается как «${getMarket(apt).label}». ${apt.description}`;
  let i = 0;
  state.aiTimer = window.setInterval(() => {
    refs.aiOutput.textContent = text.slice(0, i++);
    if (i > text.length) window.clearInterval(state.aiTimer);
  }, 18);
}

function closeAi() {
  window.clearInterval(state.aiTimer);
  refs.aiPanel.classList.remove("is-open");
  refs.aiPanel.setAttribute("aria-hidden", "true");
}

function preventNativeGestures() {
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("gesturestart", (e) => e.preventDefault());
  document.addEventListener("touchmove", (e) => {
    if (!e.target.closest(".full-ui-content, .drawer-card, .ai-card")) e.preventDefault();
  }, { passive: false });
}

function bindEvents() {
  refs.startDemoButton.addEventListener("click", startDemo);
  refs.pushOpenButton.addEventListener("click", () => { setVisible(refs.appPush, false); startDemo(); });
  refs.returnCameraButton.addEventListener("click", returnToCamera);
  refs.closeFullUi.addEventListener("click", closeFullUi);
  refs.drawerBackdrop.addEventListener("click", closeDrawer);
  refs.aiBackdrop.addEventListener("click", closeAi);
  refs.closeAi.addEventListener("click", closeAi);
  refs.foundPanel.addEventListener("click", (e) => { if (e.target.closest(".found-panel-button")) openFullUi(); });
  refs.demoOptions.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-scenario]");
    if (btn) selectScenario(btn.dataset.scenario);
  });
  refs.buildingContent.addEventListener("click", (e) => {
    const toggle = e.target.closest("#filtersToggle");
    if (toggle) { state.filtersOpen = !state.filtersOpen; renderBuilding(); return; }
    const preset = e.target.closest("[data-preset]");
    if (preset) { applyPreset(preset.dataset.preset); return; }
    const openBtn = e.target.closest("[data-open-apartment]");
    if (openBtn) { openApartment(openBtn.dataset.openApartment); return; }
    const aiBtn = e.target.closest("[data-ai]");
    if (aiBtn) { openAi(aiBtn.dataset.ai); return; }
  });
  refs.buildingContent.addEventListener("change", (e) => {
    const input = e.target.closest("[data-filter]");
    if (!input) return;
    const key = input.dataset.filter;
    state.filters[key] = input.type === "checkbox" ? input.checked : input.value;
    state.filters.preset = "custom";
    renderBuilding();
  });
  refs.drawerCard.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-drawer]")) closeDrawer();
    const aiBtn = e.target.closest("[data-ai]");
    if (aiBtn) openAi(aiBtn.dataset.ai);
  });
  refs.demoVideo.addEventListener("ended", () => { refs.scanStatus.textContent = "Ролик завершён. Можно выбрать другой ролик."; });
}

function init() {
  preventNativeGestures();
  renderDemoButtons();
  bindEvents();
  startCamera();
  showPush();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
}

init();
