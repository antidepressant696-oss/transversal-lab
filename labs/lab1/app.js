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

const STATIC_I18N = {
  "brandSubtitle": {
    "ru": "педагогическая лаборатория",
    "uz": "pedagogik laboratoriya",
    "uzc": "педагогик лаборатория",
    "en": "pedagogical laboratory"
  },
  "navLaboratory": {
    "ru": "Лаборатория",
    "uz": "Laboratoriya",
    "uzc": "Лаборатория",
    "en": "Laboratory"
  },
  "navMethod": {
    "ru": "Методика",
    "uz": "Metodika",
    "uzc": "Методика",
    "en": "Methodology"
  },
  "navCompetencies": {
    "ru": "Компетенции",
    "uz": "Kompetensiyalar",
    "uzc": "Компетенциялар",
    "en": "Competences"
  },
  "navAbout": {
    "ru": "О проекте",
    "uz": "Loyiha haqida",
    "uzc": "Лойиҳа ҳақида",
    "en": "About"
  },
  "resetButton": {
    "ru": "Сбросить",
    "uz": "Qayta boshlash",
    "uzc": "Қайта бошлаш",
    "en": "Reset"
  },
  "caseIdLabel": {
    "ru": "СИТУАЦИЯ / 01",
    "uz": "VAZIYAT / 01",
    "uzc": "ВАЗИЯТ / 01",
    "en": "CASE / 01"
  },
  "sceneMinutes": {
    "ru": "≈ 3 минуты",
    "uz": "≈ 3 daqiqa",
    "uzc": "≈ 3 дақиқа",
    "en": "≈ 3 minutes"
  },
  "sceneContext": {
    "ru": "2 КЛАСС · ГРУППОВАЯ РАБОТА",
    "uz": "2-SINF · GURUHLI ISH",
    "uzc": "2-СИНФ · ГУРУҲЛИ ИШ",
    "en": "GRADE 2 · GROUP WORK"
  },
  "sceneTitle": {
    "ru": "Группа перестала работать",
    "uz": "Guruhli ish to‘xtab qoldi",
    "uzc": "Гуруҳли иш тўхтаб қолди",
    "en": "The group activity has stalled"
  },
  "sceneTimeLeft": {
    "ru": "10 мин",
    "uz": "10 daq.",
    "uzc": "10 дақ.",
    "en": "10 min"
  },
  "sceneTask": {
    "ru": "Задание: создать общий постер",
    "uz": "Topshiriq: umumiy poster yaratish",
    "uzc": "Топшириқ: умумий постер яратиш",
    "en": "Task: create a group poster"
  },
  "speechOne": {
    "ru": "Я больше не хочу.",
    "uz": "Men endi xohlamayman.",
    "uzc": "Мен энди хоҳламайман.",
    "en": "I do not want to continue."
  },
  "speechTwo": {
    "ru": "Дай сюда, ты всё испортил!",
    "uz": "Buni menga ber, hammasini buzib qo‘yding!",
    "uzc": "Буни менга бер, ҳаммасини бузиб қўйдинг!",
    "en": "Give it here, you have ruined everything!"
  },
  "speechThree": {
    "ru": "Мы не успеем.",
    "uz": "Biz ulgurmaymiz.",
    "uzc": "Биз улгурмаймиз.",
    "en": "We will not finish in time."
  },
  "teacherRole": {
    "ru": "Вы — учитель",
    "uz": "Siz — o‘qituvchisiz",
    "uzc": "Сиз — ўқитувчисиз",
    "en": "You are the teacher"
  },
  "teacherReason": {
    "ru": "Причины поведения пока неясны",
    "uz": "Xatti-harakat sabablari hali noma’lum",
    "uzc": "Хатти-ҳаракат сабаблари ҳали номаълум",
    "en": "The reasons for the behaviour are not yet clear"
  },
  "observationTitle": {
    "ru": "Сначала наблюдай",
    "uz": "Avval kuzating",
    "uzc": "Аввал кузатинг",
    "en": "Observe first"
  },
  "observationText": {
    "ru": "Что здесь факт, а что — предположение?",
    "uz": "Bu vaziyatda nima fakt, nima taxmin?",
    "uzc": "Бу вазиятда нима факт, нима тахмин?",
    "en": "What is a fact and what is an assumption?"
  },
  "miniCognitive": {
    "ru": "Когнитивный",
    "uz": "Kognitiv",
    "uzc": "Когнитив",
    "en": "Cognitive"
  },
  "miniCommunication": {
    "ru": "Коммуникация",
    "uz": "Muloqot",
    "uzc": "Мулоқот",
    "en": "Communication"
  },
  "miniReflection": {
    "ru": "Рефлексия",
    "uz": "Refleksiya",
    "uzc": "Рефлексия",
    "en": "Reflection"
  },
  "caseStatus": {
    "ru": "Демонстрация",
    "uz": "Namoyish",
    "uzc": "Намойиш",
    "en": "Demonstration"
  },
  "sideContext": {
    "ru": "КОНТЕКСТ",
    "uz": "KONTEKST",
    "uzc": "КОНТЕКСТ",
    "en": "CONTEXT"
  },
  "sideComponents": {
    "ru": "ЗАДЕЙСТВУЮТСЯ",
    "uz": "FAOLLASHADIGAN KO‘NIKMALAR",
    "uzc": "ФАОЛЛАШАДИГАН КЎНИКМАЛАР",
    "en": "SKILLS INVOLVED"
  },
  "tagAnalysis": {
    "ru": "анализ",
    "uz": "tahlil",
    "uzc": "таҳлил",
    "en": "analysis"
  },
  "tagMediation": {
    "ru": "медиация",
    "uz": "kelishtirish",
    "uzc": "келиштириш",
    "en": "mediation"
  },
  "tagDecision": {
    "ru": "решение",
    "uz": "qaror",
    "uzc": "қарор",
    "en": "decision"
  },
  "tagReflection": {
    "ru": "рефлексия",
    "uz": "refleksiya",
    "uzc": "рефлексия",
    "en": "reflection"
  },
  "pathLabel": {
    "ru": "Путь",
    "uz": "Yo‘l",
    "uzc": "Йўл",
    "en": "Path"
  },
  "scenarioLabel": {
    "ru": "Педагогическая ситуация",
    "uz": "Pedagogik vaziyat",
    "uzc": "Педагогик вазият",
    "en": "Pedagogical situation"
  },
  "hintLabel": {
    "ru": "Подсказка:",
    "uz": "Eslatma:",
    "uzc": "Эслатма:",
    "en": "Hint:"
  },
  "hintText": {
    "ru": "Выберите один из вариантов выше, чтобы продолжить. Несколько решений могут быть допустимыми; важно качество обоснования.",
    "uz": "Davom etish uchun yuqoridagi variantlardan birini tanlang. Bir nechta yechim maqbul bo‘lishi mumkin; tanlovni asoslash muhim.",
    "uzc": "Давом этиш учун юқоридаги вариантлардан бирини танланг. Бир нечта ечим мақбул бўлиши мумкин; танловни асослаш муҳим.",
    "en": "Select one of the options above to continue. Several responses may be acceptable; the quality of the rationale matters."
  },
  "resultSectionTitle": {
    "ru": "Результат — не оценка личности, а профиль следующего шага.",
    "uz": "Natija — shaxsga baho emas, keyingi qadam profili.",
    "uzc": "Натижа — шахсга баҳо эмас, кейинги қадам профили.",
    "en": "The result is not a judgment of the person, but a profile for the next step."
  },
  "summaryLabel": {
    "ru": "СВОДКА",
    "uz": "XULOSA",
    "uzc": "ХУЛОСА",
    "en": "SUMMARY"
  },
  "resultTitle": {
    "ru": "Анализ завершён",
    "uz": "Tahlil yakunlandi",
    "uzc": "Таҳлил якунланди",
    "en": "Analysis complete"
  },
  "scoreScale": {
    "ru": "Шкала 3–2–1",
    "uz": "3–2–1 shkalasi",
    "uzc": "3–2–1 шкаласи",
    "en": "Scale 3–2–1"
  },
  "resultText": {
    "ru": "Это демонстрационный профиль по четырём компонентам. В научной версии оценка будет опираться на диагностические задания и согласованные критерии.",
    "uz": "Bu to‘rt komponent bo‘yicha namoyish profili. Ilmiy versiyada baholash diagnostik topshiriqlar va kelishilgan mezonlarga asoslanadi.",
    "uzc": "Бу тўрт компонент бўйича намойиш профили. Илмий версияда баҳолаш диагностик топшириқлар ва келишилган мезонларга асосланади.",
    "en": "This is a demonstration profile across four components. The research version will use diagnostic tasks and agreed criteria."
  },
  "reflectionLabel": {
    "ru": "РЕФЛЕКСИЯ",
    "uz": "REFLEKSIYA",
    "uzc": "РЕФЛЕКСИЯ",
    "en": "REFLECTION"
  },
  "reflectionTitle": {
    "ru": "Что изменило бы ваш выбор?",
    "uz": "Tanlovingizni nima o‘zgartirishi mumkin edi?",
    "uzc": "Танловингизни нима ўзгартириши мумкин эди?",
    "en": "What might change your choice?"
  },
  "reflectionPlaceholder": {
    "ru": "Например: сначала выслушать участников, затем перераспределить роли…",
    "uz": "Masalan: avval ishtirokchilarni tinglash, keyin rollarni qayta taqsimlash…",
    "uzc": "Масалан: аввал иштирокчиларни тинглаш, кейин ролларни қайта тақсимлаш…",
    "en": "For example: listen to the participants first, then redistribute the roles…"
  },
  "saveReflection": {
    "ru": "Сохранить рефлексию",
    "uz": "Refleksiyani saqlash",
    "uzc": "Рефлексияни сақлаш",
    "en": "Save reflection"
  },
  "savedNote": {
    "ru": "Сохранено в этом браузере ✓",
    "uz": "Ushbu brauzerda saqlandi ✓",
    "uzc": "Ушбу браузерда сақланди ✓",
    "en": "Saved in this browser ✓"
  },
  "methodEyebrow": {
    "ru": "МЕТОДИКА",
    "uz": "METODIKA",
    "uzc": "МЕТОДИКА",
    "en": "METHODOLOGY"
  },
  "methodTitle": {
    "ru": "Цифровая среда повторяет логику методики.",
    "uz": "Raqamli muhit metodika mantiqini takrorlaydi.",
    "uzc": "Рақамли муҳит методика мантиғини такрорлайди.",
    "en": "The digital environment follows the logic of the methodology."
  },
  "methodDiagnosis": {
    "ru": "Диагностика",
    "uz": "Diagnostika",
    "uzc": "Диагностика",
    "en": "Diagnostics"
  },
  "methodDiagnosisText": {
    "ru": "Определить исходный уровень и мотивацию.",
    "uz": "Boshlang‘ich daraja va motivatsiyani aniqlash.",
    "uzc": "Бошланғич даража ва мотивацияни аниқлаш.",
    "en": "Identify the starting level and motivation."
  },
  "methodPractice": {
    "ru": "Практика",
    "uz": "Amaliyot",
    "uzc": "Амалиёт",
    "en": "Practice"
  },
  "methodPracticeText": {
    "ru": "Разобрать реальную или моделируемую ситуацию.",
    "uz": "Haqiqiy yoki modellashtirilgan vaziyatni tahlil qilish.",
    "uzc": "Ҳақиқий ёки моделлаштирилган вазиятни таҳлил қилиш.",
    "en": "Analyse a real or simulated situation."
  },
  "methodIntegration": {
    "ru": "Интеграция и рефлексия",
    "uz": "Integratsiya va refleksiya",
    "uzc": "Интеграция ва рефлексия",
    "en": "Integration and reflection"
  },
  "methodIntegrationText": {
    "ru": "Оценить решение и определить следующий шаг.",
    "uz": "Qarorni baholash va keyingi qadamni belgilash.",
    "uzc": "Қарорни баҳолаш ва кейинги қадамни белгилаш.",
    "en": "Evaluate the decision and define the next step."
  },
  "componentSectionLabel": {
    "ru": "4 КОМПОНЕНТА",
    "uz": "4 KOMPONENT",
    "uzc": "4 КОМПОНЕНТ",
    "en": "4 COMPONENTS"
  },
  "componentSectionTitle": {
    "ru": "Компетенции работают <em>вместе</em>, а не по отдельности.",
    "uz": "Kompetensiyalar alohida emas, <em>birgalikda</em> ishlaydi.",
    "uzc": "Компетенциялар алоҳида эмас, <em>биргаликда</em> ишлайди.",
    "en": "Competences work <em>together</em>, not in isolation."
  },
  "componentSectionText": {
    "ru": "В педагогической ситуации будущий учитель анализирует проблему, взаимодействует с участниками, при необходимости использует цифровые ресурсы и корректирует свои действия.",
    "uz": "Pedagogik vaziyatda bo‘lajak o‘qituvchi muammoni tahlil qiladi, ishtirokchilar bilan muloqot qiladi, zarur bo‘lsa raqamli resurslardan foydalanadi va harakatlarini tuzatadi.",
    "uzc": "Педагогик вазиятда бўлажак ўқитувчи муаммони таҳлил қилади, иштирокчилар билан мулоқот қилади, зарур бўлса рақамли ресурслардан фойдаланади ва ҳаракатларини тузатади.",
    "en": "In a pedagogical situation, a future teacher analyses the problem, interacts with participants, uses digital resources when appropriate and adjusts their actions."
  },
  "cognitiveTitle": {
    "ru": "Когнитивный",
    "uz": "Kognitiv",
    "uzc": "Когнитив",
    "en": "Cognitive"
  },
  "cognitiveText": {
    "ru": "Анализ ситуации, критическое мышление, поиск решений и обоснованный выбор.",
    "uz": "Vaziyatni tahlil qilish, tanqidiy fikrlash, yechim izlash va asosli tanlov.",
    "uzc": "Вазиятни таҳлил қилиш, танқидий фикрлаш, ечим излаш ва асосли танлов.",
    "en": "Situation analysis, critical thinking, solution finding and reasoned choice."
  },
  "socialTitle": {
    "ru": "Социально-коммуникативный",
    "uz": "Ijtimoiy-kommunikativ",
    "uzc": "Ижтимоий-коммуникатив",
    "en": "Socio-communicative"
  },
  "socialText": {
    "ru": "Слушание, взаимодействие, сотрудничество и согласование позиций.",
    "uz": "Tinglash, o‘zaro hamkorlik va pozitsiyalarni muvofiqlashtirish.",
    "uzc": "Тинглаш, ўзаро ҳамкорлик ва позицияларни мувофиқлаштириш.",
    "en": "Listening, interaction, collaboration and aligning positions."
  },
  "digitalTitle": {
    "ru": "Цифровая грамотность",
    "uz": "Raqamli savodxonlik",
    "uzc": "Рақамли саводхонлик",
    "en": "Digital literacy"
  },
  "digitalText": {
    "ru": "Поиск, оценка и целенаправленное использование цифровых ресурсов.",
    "uz": "Raqamli resurslarni izlash, baholash va maqsadli qo‘llash.",
    "uzc": "Рақамли ресурсларни излаш, баҳолаш ва мақсадли қўллаш.",
    "en": "Finding, evaluating and purposefully using digital resources."
  },
  "reflectiveTitle": {
    "ru": "Рефлексивно-регулятивный",
    "uz": "Refleksiv-regulyativ",
    "uzc": "Рефлексив-регулятив",
    "en": "Reflexive-regulatory"
  },
  "reflectiveText": {
    "ru": "Анализ результата, самооценка, корректировка и планирование следующего действия.",
    "uz": "Natijani tahlil qilish, o‘zini baholash, tuzatish va keyingi harakatni rejalash.",
    "uzc": "Натижани таҳлил қилиш, ўзини баҳолаш, тузатиш ва кейинги ҳаракатни режалаш.",
    "en": "Analysing results, self-assessment, adjustment and planning the next action."
  },
  "aboutEyebrow": {
    "ru": "О ПРОЕКТЕ",
    "uz": "LOYIHA HAQIDA",
    "uzc": "ЛОЙИҲА ҲАҚИДА",
    "en": "ABOUT THE PROJECT"
  },
  "aboutTitle": {
    "ru": "Не «ещё одна LMS». <br/><em>Цифровой инструмент исследования.</em>",
    "uz": "Bu yana bir LMS emas. <br/><em>Tadqiqot uchun raqamli vosita.</em>",
    "uzc": "Бу яна бир LMS эмас. <br/><em>Тадқиқот учун рақамли восита.</em>",
    "en": "Not “just another LMS”. <br/><em>A digital research tool.</em>"
  },
  "aboutText": {
    "ru": "Первый MVP не заменяет LMS и не претендует на готовую валидированную диагностическую систему. Он реализует цифровой сценарий методики и готовит основу для апробации на студентах.",
    "uz": "Dastlabki MVP LMS o‘rnini bosmaydi va tayyor validatsiyalangan diagnostika tizimi sifatida taqdim etilmaydi. U metodikaning raqamli ssenariysini amalga oshiradi va talabalar bilan sinov uchun asos yaratadi.",
    "uzc": "Дастлабки MVP LMS ўрнини босмайди ва тайёр валидatsияланган диагностика тизими сифатида тақдим этилмайди. У методиканинг рақамли сценарийсини амалга оширади ва талабалар билан синов учун асос яратади.",
    "en": "The initial MVP does not replace an LMS or claim to be a validated diagnostic system. It implements the methodology as a digital scenario and prepares a basis for student piloting."
  },
  "footerText": {
    "ru": "© 2026 · MVP без серверной части",
    "uz": "© 2026 · server qismisiz MVP",
    "uzc": "© 2026 · сервер қисмисиз MVP",
    "en": "© 2026 · MVP without a server backend"
  },
  "teacherInitial": {
    "ru": "В",
    "uz": "O",
    "uzc": "Ў",
    "en": "T"
  }
};

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
  document.querySelectorAll("[data-i18n-static]").forEach((el) => {
    const key = el.dataset.i18nStatic;
    const value = STATIC_I18N[key]?.[currentLanguage];
    if (value) el.innerHTML = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    const value = STATIC_I18N[key]?.[currentLanguage];
    if (value) el.setAttribute("placeholder", value);
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
    const optionLabel = {ru:"ВАРИАНТ",uz:"VARIANT",uzc:"ВАРИАНТ",en:"OPTION"}[currentLanguage] || "OPTION";
    button.innerHTML = `<span class="choice-no">${optionLabel} 0${index + 1}</span><strong>${choice.text[currentLanguage]}</strong><small>${choice.note[currentLanguage]}</small>`;
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
