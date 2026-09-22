const COMPONENTS = {
  cognitive: {
    ru: "Когнитивный",
    uz: "Kognitiv",
    uzc: "Когнитив",
    en: "Cognitive"
  },
  social: {
    ru: "Социально-коммуникативный",
    uz: "Ijtimoiy-kommunikativ",
    uzc: "Ижтимоий-коммуникатив",
    en: "Socio-communicative"
  },
  digital: {
    ru: "Цифровая грамотность",
    uz: "Raqamli savodxonlik",
    uzc: "Рақамли саводхонлик",
    en: "Digital literacy"
  },
  reflective: {
    ru: "Рефлексивно-регулятивный",
    uz: "Refleksiv-regulyativ",
    uzc: "Рефлексив-регулятив",
    en: "Reflective-regulatory"
  }
};

const CASE = {
  id: "case-01",
  context: {
    ru: "2 класс · групповая работа · до конца урока 10 минут",
    uz: "2-sinf · guruhli ish · dars tugashiga 10 daqiqa",
    uzc: "2-синф · гуруҳли иш · дарс тугашига 10 дақиқа",
    en: "Grade 2 · group work · 10 minutes left"
  },
  title: {
    ru: "Групповая работа остановилась",
    uz: "Guruhli ish to‘xtab qoldi",
    uzc: "Гуруҳли иш тўхтаб қолди",
    en: "The group activity has stalled"
  },
  text: {
    ru: "Во время группового задания один ученик перестал участвовать, второй спорит с одноклассниками, а группа теряет время. Вы понимаете, что вмешательство необходимо, но причины поведения пока неясны.",
    uz: "Guruhli topshiriq vaqtida bir o‘quvchi ishtirok etmay qo‘ydi, ikkinchisi sinfdoshlari bilan bahslashmoqda, guruh esa vaqtni yo‘qotmoqda. Aralashish kerak, ammo xatti-harakatlarning sababi hali aniq emas.",
    uzc: "Гуруҳли топшириқ вақтида бир ўқувчи иштирок этмай қўйди, иккинчиси синфдошлари билан баҳслашмоқда, гуруҳ эса вақтни йўқотмоқда. Аралашиш керак, аммо хатти-ҳаракатларнинг сабаби ҳали аниқ эмас.",
    en: "During group work, one pupil stops participating, another begins arguing with classmates, and the group is losing time. You need to intervene, but the reasons behind the behaviour are not yet clear."
  },
  prompt: {
    ru: "Какое действие вы выберете первым?",
    uz: "Avval qaysi harakatni tanlaysiz?",
    uzc: "Аввал қайси ҳаракатни танлайсиз?",
    en: "What would you do first?"
  }
};

const CHOICES = [
  {
    text: {
      ru: "Сразу остановить работу и строго распределить роли.",
      uz: "Darhol ishni to‘xtatib, rollarni qat’iy taqsimlash.",
      uzc: "Дарҳол ишни тўхтатиб, ролларни қатъий тақсимлаш.",
      en: "Stop the activity and immediately assign roles."
    },
    note: {
      ru: "Быстро восстанавливает порядок, но причины конфликта остаются неясными.",
      uz: "Tartib tez tiklanadi, lekin ziddiyat sabablari ochilmay qolishi mumkin.",
      uzc: "Тартиб тез тикланади, лекин зиддият сабаблари очилмай қолиши мумкин.",
      en: "It may restore order quickly, but the cause of the conflict remains unclear."
    },
    scores: { cognitive: 2, social: 1, digital: 1, reflective: 1 }
  },
  {
    text: {
      ru: "Коротко выяснить позиции участников и задать группе уточняющий вопрос.",
      uz: "Ishtirokchilarning pozitsiyasini qisqa aniqlab, guruhga aniqlashtiruvchi savol berish.",
      uzc: "Иштирокчиларнинг позициясини қисқа аниқлаб, гуруҳга аниқлаштирувчи савол бериш.",
      en: "Briefly clarify the participants’ positions and ask the group a probing question."
    },
    note: {
      ru: "Сначала собирает информацию, после чего решение можно адаптировать к ситуации.",
      uz: "Avval ma’lumot yig‘iladi, keyin yechim vaziyatga moslashtiriladi.",
      uzc: "Аввал маълумот йиғилади, кейин ечим вазиятга мослаштирилади.",
      en: "It gathers information first, allowing the response to be adapted to the situation."
    },
    scores: { cognitive: 3, social: 3, digital: 1, reflective: 2 }
  },
  {
    text: {
      ru: "Сразу открыть цифровой ресурс с готовым упражнением на сотрудничество.",
      uz: "Darhol hamkorlik bo‘yicha tayyor mashq uchun raqamli resursni ochish.",
      uzc: "Дарҳол ҳамкорлик бўйича тайёр машқ учун рақамли ресурсни очиш.",
      en: "Immediately open a digital resource with a ready-made cooperation activity."
    },
    note: {
      ru: "Цифровой инструмент полезен, если выбран ради конкретной педагогической цели.",
      uz: "Raqamli vosita aniq pedagogik maqsadga xizmat qilsa foydali bo‘ladi.",
      uzc: "Рақамли восита аниқ педагогик мақсадга хизмат қилса фойдали бўлади.",
      en: "A digital tool helps when it serves a clear pedagogical purpose."
    },
    scores: { cognitive: 2, social: 2, digital: 3, reflective: 1 }
  },
  {
    text: {
      ru: "Понаблюдать ещё несколько секунд, зафиксировать признаки проблемы и затем вмешаться.",
      uz: "Yana bir necha soniya kuzatib, muammo belgilarini qayd etib, keyin aralashish.",
      uzc: "Яна бир неча сония кузатиб, муаммо белгиларини қайд этиб, кейин аралашиш.",
      en: "Observe for a few more seconds, note the signs of the problem, then intervene."
    },
    note: {
      ru: "Добавляет диагностическую информацию, но требует контроля времени и ситуации.",
      uz: "Qo‘shimcha diagnostik ma’lumot beradi, ammo vaqt va vaziyatni nazorat qilishni talab qiladi.",
      uzc: "Қўшимча диагностик маълумот беради, аммо вақт ва вазиятни назорат қилишни талаб қилади.",
      en: "It adds diagnostic information but requires careful control of time and the situation."
    },
    scores: { cognitive: 3, social: 2, digital: 1, reflective: 3 }
  }
];

const I18N = {
  ru: {
    eyebrow: "ИНТЕРАКТИВНАЯ ПЕДАГОГИЧЕСКАЯ СИТУАЦИЯ",
    heroTitle: "Сначала пойми ситуацию. <em>Потом принимай решение.</em>",
    heroText: "Transversal Lab превращает профессиональную ситуацию в пространство анализа, действия и рефлексии — без готового «правильного ответа» на старте.",
    startCta: "Открыть педагогическую ситуацию",
    howLink: "Как это работает",
    demoNote: "Демонстрационный MVP. Оценочные веса и пороги в научной версии будут уточняться по результатам апробации.",
    caseTitle: "Разберись в ситуации и выбери своё действие.",
    continue: "Продолжить →"
  },
  uz: {
    eyebrow: "INTERAKTIV PEDAGOGIK VAZIYAT",
    heroTitle: "Avval vaziyatni tushuning. <em>Keyin pedagogik qaror qabul qiling.</em>",
    heroText: "Transversal Lab kasbiy vaziyatni tahlil, harakat va refleksiya makoniga aylantiradi — boshida tayyor «to‘g‘ri javob» bermaydi.",
    startCta: "Pedagogik vaziyatni ochish",
    howLink: "Bu qanday ishlaydi",
    demoNote: "Namoyish MVP. Baholash og‘irliklari va chegaralari aprobatsiya natijalariga ko‘ra aniqlashtiriladi.",
    caseTitle: "Vaziyatni tushunib, o‘z harakatingizni tanlang.",
    continue: "Davom etish →"
  },
  uzc: {
    eyebrow: "ИНТЕРАКТИВ ПЕДАГОГИК ВАЗИЯТ",
    heroTitle: "Аввал вазиятни тушунинг. <em>Кейин педагогик қарор қабул қилинг.</em>",
    heroText: "Transversal Lab касбий вазиятни таҳлил, ҳаракат ва рефлексия маконига айлантиради — бошида тайёр «тўғри жавоб» бермайди.",
    startCta: "Педагогик вазиятни очиш",
    howLink: "Бу қандай ишлайди",
    demoNote: "Намойиш MVP. Баҳолаш оғирликлари ва чегаралари апробация натижаларига кўра аниқлаштирилади.",
    caseTitle: "Вазиятни тушуниб, ўз ҳаракатингизни танланг.",
    continue: "Давом этиш →"
  },
  en: {
    eyebrow: "INTERACTIVE PEDAGOGICAL SITUATION",
    heroTitle: "Understand the situation. <em>Then make a pedagogical decision.</em>",
    heroText: "Transversal Lab turns a professional situation into a space for analysis, action and reflection — without a ready-made «correct answer» at the start.",
    startCta: "Open the pedagogical situation",
    howLink: "How it works",
    demoNote: "Demonstration MVP. Assessment weights and thresholds will be refined through piloting.",
    caseTitle: "Understand the situation and choose your response.",
    continue: "Continue →"
  }
};

let currentLanguage = localStorage.getItem("tl_lang") || localStorage.getItem("tl-language") || "ru";
if (currentLanguage === "uz-lat") currentLanguage = "uz";
if (currentLanguage === "uz-cyr") currentLanguage = "uzc";
if (!I18N[currentLanguage]) currentLanguage = "ru";
let selectedChoice = null;

const $ = (id) => document.getElementById(id);

function t(key) {
  return I18N[currentLanguage][key] || I18N.ru[key];
}

function applyLanguage() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.innerHTML = t(key);
  });
  $("languageSelect").value = currentLanguage;
  $("caseContext").textContent = CASE.context[currentLanguage];
  $("scenarioTitle").textContent = CASE.title[currentLanguage];
  $("scenarioText").textContent = CASE.text[currentLanguage];
  $("decisionPrompt").textContent = CASE.prompt[currentLanguage];
  $("nextBtn").textContent = t("continue");
  renderChoices();
  renderCompetencyNames();
}

function renderCompetencyNames() {
  document.querySelectorAll("[data-component-key]").forEach((el) => {
    const key = el.dataset.componentKey;
    el.textContent = COMPONENTS[key][currentLanguage];
  });
}

function renderChoices() {
  const box = $("choices");
  box.innerHTML = "";
  CHOICES.forEach((choice, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "choice" + (selectedChoice === index ? " selected" : "");
    button.innerHTML = `<span class="choice-no">ВАРИАНТ 0${index + 1}</span><strong>${choice.text[currentLanguage]}</strong><small>${choice.note[currentLanguage]}</small>`;
    button.addEventListener("click", () => {
      selectedChoice = index;
      renderChoices();
      $("nextBtn").disabled = false;
    });
    box.appendChild(button);
  });
}

function calculateResult(choice) {
  const values = Object.values(choice.scores);
  const overall = (values.reduce((a, b) => a + b, 0) / values.length).toFixed(1);
  return { overall, scores: choice.scores };
}

function renderResults() {
  const result = calculateResult(CHOICES[selectedChoice]);
  $("overallScore").textContent = result.overall;
  const barBox = $("bars");
  barBox.innerHTML = "";
  Object.entries(result.scores).forEach(([key, value]) => {
    const row = document.createElement("div");
    row.className = "bar-row";
    const percent = (value / 3) * 100;
    row.innerHTML = `<div class="bar-name">${COMPONENTS[key][currentLanguage]}</div><div class="bar-track"><div class="bar-fill" style="width:${percent}%"></div></div><div class="bar-value">${value}/3</div>`;
    barBox.appendChild(row);
  });
  $("resultSection").classList.remove("hidden");
  $("resultSection").scrollIntoView({ behavior: "smooth", block: "start" });
}

function resetAll() {
  selectedChoice = null;
  $("resultSection").classList.add("hidden");
  $("reflection").value = "";
  $("savedNote").classList.add("hidden");
  $("nextBtn").disabled = true;
  $("progressLabel").textContent = "1 / 3";
  $("progressBar").style.width = "33.333%";
  renderChoices();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

$("startBtn").addEventListener("click", () => $("case").scrollIntoView({ behavior: "smooth", block: "start" }));
$("nextBtn").addEventListener("click", () => {
  if (selectedChoice === null) return;
  $("progressLabel").textContent = "2 / 3";
  $("progressBar").style.width = "66.666%";
  localStorage.setItem("tl-lab1-case01", JSON.stringify({
    schemaVersion: "1.0",
    lab: "Lab 1",
    caseId: "CASE-01",
    lang: currentLanguage === "uz" ? "uz-lat" : currentLanguage === "uzc" ? "uz-cyr" : currentLanguage,
    completed: true,
    selectedChoice,
    reflection: $("reflection") ? $("reflection").value.trim() : "",
    completedAt: new Date().toISOString()
  }));
  renderResults();
});
$("resetBtn").addEventListener("click", resetAll);
$("languageSelect").addEventListener("change", (e) => {
  currentLanguage = e.target.value;
  localStorage.setItem("tl_lang",
    currentLanguage === "uz" ? "uz-lat" :
    currentLanguage === "uzc" ? "uz-cyr" : currentLanguage
  );
  localStorage.setItem("tl_lang",
    currentLanguage === "uz" ? "uz-lat" :
    currentLanguage === "uzc" ? "uz-cyr" : currentLanguage
  );
  localStorage.setItem("tl-language", currentLanguage);
  applyLanguage();
});
$("saveReflection").addEventListener("click", () => {
  localStorage.setItem("tl-reflection-case-01", $("reflection").value);
  $("savedNote").classList.remove("hidden");
});

$("reflection").value = localStorage.getItem("tl-reflection-case-01") || "";
applyLanguage();
