const DEMO_RECOGNITION_DELAY = 2000;

const buildings = [
  {
    id: "forest-14",
    address: "ул. Лесная, 14",
    district: "Северный квартал",
    type: "монолитный дом",
    year: 2016,
    avgPrice: "17,4 млн ₽",
    relevance: 92,
    confidence: 96,
    image: "assets/house-1.png",
    video: "assets/demo-1.mp4",
    summary: "Тихий дом рядом с метро, школами и зелёной зоной. Хорошо подходит для семейного сценария.",
    infrastructure: { kindergartens: 5, schools: 3, metro: 6, parks: 2 },
    apartments: [
      { id: "f1", image: "assets/apartment-1.png", title: "Светлая 2-комнатная квартира", price: "16,9 млн ₽", ppm: "312 тыс. ₽/м²", rooms: 2, area: 54, floor: 8, floors: 17, metro: 6, repair: "ready", balcony: true, parking: true, schools: true, park: true, market: 46, relevance: 94, desc: "Окна во двор, свежий ремонт, удобная планировка с изолированными комнатами.", pluses: ["6 минут пешком до метро", "Детский сад во дворе", "Окна на тихую сторону"], minuses: ["Нет отдельной гардеробной", "Средняя цена за метр выше района"] },
      { id: "f2", image: "assets/apartment-2.png", title: "3-комнатная квартира для семьи", price: "22,3 млн ₽", ppm: "301 тыс. ₽/м²", rooms: 3, area: 74, floor: 12, floors: 17, metro: 8, repair: "cosmetic", balcony: true, parking: true, schools: true, park: true, market: 38, relevance: 97, desc: "Большая кухня-гостиная, два санузла, вид на парк и закрытый двор.", pluses: ["3 школы в радиусе 900 м", "Парк в 4 минутах", "Подземный паркинг"], minuses: ["Высокий этаж может не подойти всем", "Нужна косметика в спальнях"] },
      { id: "f3", image: "assets/apartment-3.png", title: "1-комнатная рядом с метро", price: "13,6 млн ₽", ppm: "324 тыс. ₽/м²", rooms: 1, area: 42, floor: 5, floors: 17, metro: 5, repair: "ready", balcony: false, parking: true, schools: false, park: true, market: 68, relevance: 82, desc: "Компактная квартира для одного человека или пары. Быстрый выход к метро.", pluses: ["Лучшее время до метро", "Готова к заселению", "Вид во двор"], minuses: ["Мало места для семьи", "Один санузел"] }
    ]
  },
  {
    id: "mir-18",
    address: "пр. Мира, 18",
    district: "Деловой центр",
    type: "кирпичный дом",
    year: 2008,
    avgPrice: "14,8 млн ₽",
    relevance: 84,
    confidence: 93,
    image: "assets/house-2.png",
    video: "assets/demo-2.mp4",
    summary: "Дом в активной части района: много транспорта, кафе и офисов. Подходит тем, кому важна мобильность.",
    infrastructure: { kindergartens: 2, schools: 2, metro: 11, parks: 1 },
    apartments: [
      { id: "m1", image: "assets/apartment-4.png", title: "2-комнатная с хорошей ценой", price: "14,2 млн ₽", ppm: "263 тыс. ₽/м²", rooms: 2, area: 54, floor: 4, floors: 12, metro: 11, repair: "cosmetic", balcony: true, parking: false, schools: true, park: false, market: 24, relevance: 89, desc: "Базовый ремонт, окна на улицу, удобный выезд на проспект.", pluses: ["Хорошая цена за метр", "Рядом остановки", "Кирпичные стены"], minuses: ["До метро 11 минут", "Шумнее, чем во дворах"] },
      { id: "m2", image: "assets/apartment-5.png", title: "3-комнатная на высоком этаже", price: "18,1 млн ₽", ppm: "282 тыс. ₽/м²", rooms: 3, area: 64, floor: 9, floors: 12, metro: 12, repair: "none", balcony: true, parking: false, schools: true, park: false, market: 55, relevance: 82, desc: "Три изолированные комнаты, балкон, хорошие виды на город.", pluses: ["Подходит семье с ребёнком", "Балкон", "Много магазинов рядом"], minuses: ["Нужен ремонт", "Парк не у дома"] },
      { id: "m3", image: "assets/apartment-6.png", title: "Студия в центре района", price: "10,8 млн ₽", ppm: "300 тыс. ₽/м²", rooms: 1, area: 36, floor: 6, floors: 12, metro: 9, repair: "design", balcony: false, parking: false, schools: false, park: false, market: 64, relevance: 76, desc: "Компактный вариант для жизни рядом с офисной и транспортной инфраструктурой.", pluses: ["Центр района", "Дизайнерский ремонт", "Ликвидный формат"], minuses: ["Мало площади", "Нет паркинга"] }
    ]
  },
  {
    id: "sadovaya-7",
    address: "ул. Садовая, 7",
    district: "Парковый район",
    type: "сталинский дом",
    year: 1958,
    avgPrice: "20,6 млн ₽",
    relevance: 88,
    confidence: 89,
    image: "assets/house-3.png",
    video: "assets/demo-3.mp4",
    summary: "Зелёный район, высокие потолки и просторные квартиры. Сильный вариант для тех, кто ценит тишину и парк.",
    infrastructure: { kindergartens: 4, schools: 4, metro: 15, parks: 3 },
    apartments: [
      { id: "s1", image: "assets/apartment-7.png", title: "3-комнатная у парка", price: "19,7 млн ₽", ppm: "274 тыс. ₽/м²", rooms: 3, area: 72, floor: 3, floors: 8, metro: 15, repair: "cosmetic", balcony: true, parking: false, schools: true, park: true, market: 35, relevance: 93, desc: "Высокие потолки, две спальни, окна на зелёный двор.", pluses: ["Парк через дорогу", "4 школы рядом", "Потолки 3,1 м"], minuses: ["До метро 15 минут", "Нет подземного паркинга"] },
      { id: "s2", image: "assets/apartment-8.png", title: "Просторная 4-комнатная", price: "24,9 млн ₽", ppm: "283 тыс. ₽/м²", rooms: 4, area: 88, floor: 6, floors: 8, metro: 16, repair: "ready", balcony: true, parking: false, schools: true, park: true, market: 72, relevance: 91, desc: "Редкий формат для большой семьи: кабинет, две спальни и большая гостиная.", pluses: ["Много комнат", "Тихий двор", "Сильная школьная инфраструктура"], minuses: ["Самый высокий бюджет", "Метро не рядом"] },
      { id: "s3", image: "assets/apartment-9.png", title: "2-комнатная в зелёном районе", price: "15,4 млн ₽", ppm: "291 тыс. ₽/м²", rooms: 2, area: 53, floor: 2, floors: 8, metro: 14, repair: "none", balcony: false, parking: false, schools: true, park: true, market: 29, relevance: 86, desc: "Квартира под ремонт с видом на двор, хороший баланс цены и района.", pluses: ["Рядом парк", "Невысокий этаж", "Хороший бюджет для района"], minuses: ["Нужна замена кухни", "Метро 14 минут"] }
    ]
  }
];

const repairLabels = {
  any: "любой",
  none: "без ремонта",
  cosmetic: "косметический",
  ready: "готово к заселению",
  design: "дизайнерский"
};

const state = {
  mode: "camera",
  activeDemo: 0,
  activeBuildingId: null,
  foundByCamera: false,
  filtersOpen: false,
  aiTimer: null,
  demoTimer: null,
  filters: {
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

const refs = {
  arLayer: document.querySelector("#arLayer"),
  arScene: document.querySelector("#arScene"),
  marker: document.querySelector("#domgoMarker"),
  demoVideo: document.querySelector("#demoVideo"),
  scanStatus: document.querySelector("#scanStatus"),
  startDemoButton: document.querySelector("#startDemoButton"),
  demoPanel: document.querySelector("#demoPanel"),
  returnCameraButton: document.querySelector("#returnCameraButton"),
  foundPanel: document.querySelector("#foundPanel"),
  fullUi: document.querySelector("#fullUi"),
  closeFullUi: document.querySelector("#closeFullUi"),
  buildingContent: document.querySelector("#buildingContent"),
  apartmentDrawer: document.querySelector("#apartmentDrawer"),
  drawerBackdrop: document.querySelector("#drawerBackdrop"),
  drawerCard: document.querySelector("#drawerCard"),
  aiPanel: document.querySelector("#aiPanel"),
  aiBackdrop: document.querySelector("#aiBackdrop"),
  closeAi: document.querySelector("#closeAi"),
  aiOutput: document.querySelector("#aiOutput")
};

function getBuilding(id = state.activeBuildingId) {
  return buildings.find((building) => building.id === id) || buildings[0];
}

function getApartment(apartmentId) {
  for (const building of buildings) {
    const apartment = building.apartments.find((item) => item.id === apartmentId);
    if (apartment) return { building, apartment };
  }
  return { building: buildings[0], apartment: buildings[0].apartments[0] };
}

function matchCircle(value, extraClass = "") {
  const safe = Math.max(0, Math.min(100, Number(value) || 0));
  return `
    <div class="match-circle ${extraClass}" style="--value:${safe}">
      <div class="match-circle-inner">
        <strong class="match-value">${safe}%</strong>
        <span class="match-label">совпадение</span>
      </div>
    </div>`;
}

function marketMeta(value) {
  if (value < 34) return { label: "ниже рынка", color: "var(--green)" };
  if (value < 67) return { label: "рыночная цена", color: "var(--yellow)" };
  return { label: "выше рынка", color: "var(--orange)" };
}

function marketMeter(apartment) {
  const meta = marketMeta(apartment.market);
  return `
    <div class="market-meter" style="--market:${apartment.market}; --marker-color:${meta.color}">
      <div class="market-labels"><span>низкая</span><span>рыночная цена</span><span>высокая</span></div>
      <div class="market-track"><span class="market-marker"></span></div>
      <span class="market-note">${meta.label}</span>
    </div>`;
}

function setStatus(text, type = "") {
  refs.scanStatus.textContent = text;
  refs.scanStatus.classList.toggle("is-success", type === "success");
  refs.scanStatus.classList.toggle("is-muted", type === "muted");
}

function showFoundPanel(building, source = "camera") {
  state.activeBuildingId = building.id;
  state.foundByCamera = source === "camera";
  refs.foundPanel.innerHTML = `
    <div class="found-card">
      <img class="found-image" src="${building.image}" alt="${building.address}" draggable="false" />
      <div class="found-info">
        <span class="found-kicker">Дом найден</span>
        <h2>${building.address}</h2>
        <p>${building.district} · ${building.apartments.length} квартиры в продаже</p>
        <button class="open-house-button" type="button" data-open-house="${building.id}">Посмотреть квартиры</button>
      </div>
      ${matchCircle(building.relevance)}
    </div>`;
  refs.foundPanel.classList.remove("is-hidden");
  setStatus("Дом найден", "success");
}

function hideFoundPanel() {
  refs.foundPanel.classList.add("is-hidden");
  refs.foundPanel.innerHTML = "";
}

function setMode(mode) {
  state.mode = mode;
  document.body.classList.toggle("demo-mode", mode === "demo");
  refs.arLayer.classList.toggle("is-hidden", mode !== "camera");
  refs.demoVideo.classList.toggle("is-hidden", mode !== "demo");
  refs.startDemoButton.classList.toggle("is-hidden", mode !== "camera");
  refs.demoPanel.classList.toggle("is-hidden", mode !== "demo");
}

function startDemo(index = 0) {
  window.clearTimeout(state.demoTimer);
  state.activeDemo = Number(index) || 0;
  state.foundByCamera = false;
  const building = buildings[state.activeDemo] || buildings[0];
  state.activeBuildingId = building.id;
  hideFoundPanel();
  setMode("demo");
  setStatus("Воспроизводится демо-ролик", "muted");
  document.querySelectorAll(".demo-button").forEach((button) => {
    button.classList.toggle("is-active", Number(button.dataset.demo) === state.activeDemo);
  });
  refs.demoVideo.pause();
  refs.demoVideo.loop = false;
  refs.demoVideo.src = building.video;
  refs.demoVideo.currentTime = 0;
  refs.demoVideo.load();
  const playPromise = refs.demoVideo.play();
  if (playPromise?.catch) playPromise.catch(() => setStatus("Нажмите на экран, чтобы запустить видео", "muted"));
  state.demoTimer = window.setTimeout(() => {
    if (state.mode === "demo" && state.activeDemo === index) showFoundPanel(building, "demo");
  }, DEMO_RECOGNITION_DELAY);
}

function returnToCamera() {
  window.clearTimeout(state.demoTimer);
  refs.demoVideo.pause();
  refs.demoVideo.removeAttribute("src");
  refs.demoVideo.load();
  hideFoundPanel();
  state.activeBuildingId = null;
  state.foundByCamera = false;
  setMode("camera");
  setStatus("Наведите камеру на объект", "");
}

function openFullUi(buildingId = state.activeBuildingId) {
  state.activeBuildingId = buildingId || buildings[0].id;
  renderBuildingUi();
  refs.fullUi.classList.add("is-open");
  refs.fullUi.setAttribute("aria-hidden", "false");
}

function closeFullUi() {
  refs.fullUi.classList.remove("is-open");
  refs.fullUi.setAttribute("aria-hidden", "true");
}

function scoreApartment(apartment) {
  let score = apartment.relevance;
  if (apartment.rooms < state.filters.minRooms) score -= 18;
  if (apartment.metro > state.filters.metroMax) score -= 16;
  if (state.filters.repair !== "any" && apartment.repair !== state.filters.repair) score -= 12;
  if (state.filters.schools && !apartment.schools) score -= 10;
  if (state.filters.park && !apartment.park) score -= 8;
  if (state.filters.balcony && !apartment.balcony) score -= 8;
  if (state.filters.parking && !apartment.parking) score -= 8;
  if (state.filters.middleFloor && (apartment.floor === 1 || apartment.floor === apartment.floors)) score -= 8;
  return Math.max(42, Math.min(99, score));
}

function passesFilters(apartment) {
  return apartment.rooms >= state.filters.minRooms
    && apartment.metro <= state.filters.metroMax
    && (state.filters.repair === "any" || apartment.repair === state.filters.repair)
    && (!state.filters.schools || apartment.schools)
    && (!state.filters.park || apartment.park)
    && (!state.filters.balcony || apartment.balcony)
    && (!state.filters.parking || apartment.parking)
    && (!state.filters.middleFloor || (apartment.floor !== 1 && apartment.floor !== apartment.floors));
}

function activeFilterChips() {
  const chips = [`от ${state.filters.minRooms} комн.`, `метро до ${state.filters.metroMax} мин`];
  if (state.filters.repair !== "any") chips.push(repairLabels[state.filters.repair]);
  if (state.filters.schools) chips.push("школы и детсады");
  if (state.filters.park) chips.push("парк рядом");
  if (state.filters.balcony) chips.push("балкон");
  if (state.filters.parking) chips.push("паркинг");
  if (state.filters.middleFloor) chips.push("не первый/последний");
  return chips.map((chip) => `<span class="active-filter-chip">${chip}</span>`).join("");
}

function renderBuildingUi() {
  const building = getBuilding();
  const sortedApartments = [...building.apartments]
    .map((apartment) => ({ apartment, score: scoreApartment(apartment), passes: passesFilters(apartment) }))
    .sort((a, b) => Number(b.passes) - Number(a.passes) || b.score - a.score);

  refs.buildingContent.innerHTML = `
    <section class="building-hero">
      <article class="building-main-card">
        <img class="building-photo" src="${building.image}" alt="${building.address}" draggable="false" />
        <div>
          <p class="eyebrow">Найденный объект</p>
          <h1>${building.address}</h1>
          <p class="muted">${building.summary}</p>
          <div class="building-meta">
            <span class="meta-chip">${building.district}</span>
            <span class="meta-chip">${building.type}</span>
            <span class="meta-chip">${building.year}</span>
            <span class="meta-chip">средняя цена ${building.avgPrice}</span>
          </div>
        </div>
      </article>
      <aside class="building-score-card">
        ${matchCircle(building.relevance, "is-large")}
        <p>Оценка дома по расположению, инфраструктуре и доступным квартирам.</p>
      </aside>
    </section>

    <section class="info-grid">
      <div class="info-card"><strong>${building.infrastructure.kindergartens}</strong><span>детсадов рядом</span></div>
      <div class="info-card"><strong>${building.infrastructure.schools}</strong><span>школ рядом</span></div>
      <div class="info-card"><strong>${building.infrastructure.metro} мин</strong><span>до метро</span></div>
      <div class="info-card"><strong>${building.infrastructure.parks}</strong><span>парков рядом</span></div>
    </section>

    <section class="filters-shell ${state.filtersOpen ? "is-open" : ""}" id="filtersShell">
      <div class="filters-top">
        <div class="filters-title">
          <h3>Фильтры</h3>
          <p>Настройки подбора квартир</p>
        </div>
        <button class="toggle-filters" type="button" data-toggle-filters>${state.filtersOpen ? "Скрыть фильтры" : "Открыть фильтры"}</button>
      </div>
      <div class="filters-body">
        <div class="filters-inner">
          <div class="filters-grid">
            <div class="filter-card">
              <label>Количество комнат минимум
                <span>${state.filters.minRooms}</span>
                <input type="range" min="1" max="4" step="1" value="${state.filters.minRooms}" data-filter="minRooms" />
              </label>
            </div>
            <div class="filter-card">
              <label>Метро не дальше
                <span>${state.filters.metroMax} мин</span>
                <input type="range" min="5" max="25" step="1" value="${state.filters.metroMax}" data-filter="metroMax" />
              </label>
            </div>
            <div class="filter-card">
              <label>Ремонт
                <select data-filter="repair">
                  ${Object.entries(repairLabels).map(([value, label]) => `<option value="${value}" ${state.filters.repair === value ? "selected" : ""}>${label}</option>`).join("")}
                </select>
              </label>
            </div>
            <div class="checks">
              ${[
                ["schools", "Школы и детсады рядом"],
                ["park", "Парк рядом"],
                ["balcony", "Балкон/лоджия"],
                ["parking", "Паркинг"],
                ["middleFloor", "Не первый и не последний этаж"]
              ].map(([key, label]) => `
                <label class="check-row"><input type="checkbox" data-filter="${key}" ${state.filters[key] ? "checked" : ""}/><span>${label}</span></label>
              `).join("")}
            </div>
          </div>
          <div class="active-filters">${activeFilterChips()}</div>
        </div>
      </div>
    </section>

    <section class="apartments-section">
      <header class="section-head">
        <div>
          <p class="eyebrow">Квартиры в доме</p>
          <h2>${building.apartments.length} варианта</h2>
        </div>
        <span class="meta-chip">сортировка по совпадению</span>
      </header>
      <div class="apartment-list">
        ${sortedApartments.map(({ apartment, score }) => apartmentCard(apartment, score)).join("")}
      </div>
    </section>`;
}

function apartmentCard(apartment, score) {
  return `
    <article class="apartment-card">
      <img class="apartment-image" src="${apartment.image}" alt="${apartment.title}" draggable="false" />
      <div class="apartment-content">
        <h3>${apartment.title}</h3>
        <div class="apartment-price"><strong>${apartment.price}</strong><span>${apartment.ppm}</span></div>
        <p class="muted">${apartment.desc}</p>
        <div class="apartment-tags">
          <span class="tag">${apartment.rooms} комн.</span>
          <span class="tag">${apartment.area} м²</span>
          <span class="tag">${apartment.floor}/${apartment.floors} этаж</span>
          <span class="tag">метро ${apartment.metro} мин</span>
          <span class="tag">${repairLabels[apartment.repair]}</span>
        </div>
        ${marketMeter(apartment)}
        <div class="card-actions">
          <button class="more-button" type="button" data-open-apartment="${apartment.id}">Подробнее</button>
          <button class="ai-button" type="button" data-ai-apartment="${apartment.id}">Обзор от ИИ</button>
        </div>
      </div>
      ${matchCircle(score)}
    </article>`;
}

function openApartment(apartmentId) {
  const { building, apartment } = getApartment(apartmentId);
  const score = scoreApartment(apartment);
  refs.drawerCard.innerHTML = `
    <section class="drawer-hero">
      <img src="${apartment.image}" alt="${apartment.title}" draggable="false" />
      <div>
        <p class="eyebrow">${building.address}</p>
        <h2>${apartment.title}</h2>
        <p class="muted">${apartment.desc}</p>
        ${marketMeter(apartment)}
      </div>
      ${matchCircle(score, "is-large")}
    </section>
    <section class="drawer-meta">
      <div><strong>${apartment.price}</strong><span>стоимость</span></div>
      <div><strong>${apartment.area} м²</strong><span>площадь</span></div>
      <div><strong>${apartment.floor}/${apartment.floors}</strong><span>этаж</span></div>
      <div><strong>${apartment.metro} мин</strong><span>до метро</span></div>
    </section>
    <section class="drawer-section"><h3>Почему подходит</h3><ul class="bullet-list">${apartment.pluses.map((x) => `<li>✓ ${x}</li>`).join("")}</ul></section>
    <section class="drawer-section"><h3>Что учесть</h3><ul class="bullet-list">${apartment.minuses.map((x) => `<li>— ${x}</li>`).join("")}</ul></section>
    <div class="drawer-actions">
      <button class="ai-button" type="button" data-ai-apartment="${apartment.id}">Обзор от ИИ</button>
      <button class="ghost-button" type="button" data-close-drawer>Закрыть</button>
    </div>`;
  refs.apartmentDrawer.classList.add("is-open");
  refs.apartmentDrawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  refs.apartmentDrawer.classList.remove("is-open");
  refs.apartmentDrawer.setAttribute("aria-hidden", "true");
}

function openAi(apartmentId) {
  const { building, apartment } = getApartment(apartmentId);
  const score = scoreApartment(apartment);
  const market = marketMeta(apartment.market).label;
  const text = `Квартира показывает ${score}% совпадение с выбранными параметрами. Главные преимущества — ${apartment.pluses.join(", ").toLowerCase()}. Цена относительно рынка: ${market}.\n\nПо инфраструктуре объект сильный: ${building.infrastructure.schools} школ рядом, ${building.infrastructure.kindergartens} детсадов и метро примерно за ${apartment.metro} минут. ${apartment.rooms >= state.filters.minRooms ? "По комнатности вариант подходит под текущий фильтр." : "По комнатности вариант ниже выбранного фильтра, но может быть интересен по цене."}\n\nИИ-рекомендация: рассмотреть квартиру как один из приоритетных вариантов и сравнить её с соседними предложениями по цене за метр и состоянию ремонта.`;
  refs.aiOutput.textContent = "";
  refs.aiPanel.classList.add("is-open");
  refs.aiPanel.setAttribute("aria-hidden", "false");
  window.clearInterval(state.aiTimer);
  let index = 0;
  state.aiTimer = window.setInterval(() => {
    refs.aiOutput.textContent = text.slice(0, index++);
    if (index > text.length) window.clearInterval(state.aiTimer);
  }, 18);
}

function closeAi() {
  refs.aiPanel.classList.remove("is-open");
  refs.aiPanel.setAttribute("aria-hidden", "true");
  window.clearInterval(state.aiTimer);
}

function updateFilter(target) {
  const key = target.dataset.filter;
  if (!key) return;
  if (target.type === "checkbox") state.filters[key] = target.checked;
  else if (target.type === "range") state.filters[key] = Number(target.value);
  else state.filters[key] = target.value;
  renderBuildingUi();
}

function bindEvents() {
  refs.startDemoButton.addEventListener("click", () => startDemo(0));
  refs.returnCameraButton.addEventListener("click", returnToCamera);
  refs.demoPanel.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-demo]");
    if (!button) return;
    startDemo(Number(button.dataset.demo));
  });
  refs.foundPanel.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-open-house]");
    if (!button) return;
    openFullUi(button.dataset.openHouse);
  });
  refs.closeFullUi.addEventListener("click", closeFullUi);
  refs.buildingContent.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-toggle-filters]");
    if (toggle) { state.filtersOpen = !state.filtersOpen; renderBuildingUi(); return; }
    const apartmentButton = event.target.closest("[data-open-apartment]");
    if (apartmentButton) { openApartment(apartmentButton.dataset.openApartment); return; }
    const aiButton = event.target.closest("[data-ai-apartment]");
    if (aiButton) { openAi(aiButton.dataset.aiApartment); return; }
  });
  refs.buildingContent.addEventListener("input", (event) => updateFilter(event.target));
  refs.buildingContent.addEventListener("change", (event) => updateFilter(event.target));
  refs.drawerBackdrop.addEventListener("click", closeDrawer);
  refs.drawerCard.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-drawer]")) closeDrawer();
    const aiButton = event.target.closest("[data-ai-apartment]");
    if (aiButton) openAi(aiButton.dataset.aiApartment);
  });
  refs.closeAi.addEventListener("click", closeAi);
  refs.aiBackdrop.addEventListener("click", closeAi);
  document.addEventListener("contextmenu", (event) => event.preventDefault());
  document.addEventListener("dragstart", (event) => event.preventDefault());
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") { closeDrawer(); closeAi(); closeFullUi(); }
  });
  document.addEventListener("touchmove", (event) => {
    if (!event.target.closest(".full-ui-content, .drawer-card, .ai-card")) event.preventDefault();
  }, { passive: false });
  refs.demoVideo.addEventListener("ended", () => setStatus("Ролик завершён", "muted"));
  refs.demoVideo.addEventListener("click", () => refs.demoVideo.paused && refs.demoVideo.play().catch(() => {}));
}

function bindArMarker() {
  if (!refs.marker) return;
  refs.marker.addEventListener("markerFound", () => {
    if (state.mode !== "camera") return;
    showFoundPanel(buildings[0], "camera");
  });
  refs.marker.addEventListener("markerLost", () => {
    if (state.mode !== "camera") return;
    // Панель намеренно оставляем, чтобы пользователь успел открыть объект.
  });
  const scene = refs.arScene;
  scene?.addEventListener("camera-init", () => setStatus("Наведите камеру на объект", ""));
  scene?.addEventListener("camera-error", () => setStatus("Камера не запустилась. Проверьте доступ к камере.", "muted"));
  window.setTimeout(() => {
    if (state.mode === "camera" && !document.querySelector("video")) {
      setStatus("AR.js не загрузил камеру. Проверьте интернет и разрешение камеры.", "muted");
    }
  }, 3500);
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  navigator.serviceWorker.register("sw.js").catch(() => {});
}

function init() {
  setMode("camera");
  bindEvents();
  bindArMarker();
  registerServiceWorker();
}

init();
