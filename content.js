/* ============================================================
   NOCLIP – CONTENU DU SITE  (le seul fichier à modifier)
   ------------------------------------------------------------
   AJOUTER UNE CATÉGORIE : copie un bloc { ... } de la liste, colle-le à la
   suite (avec la virgule) et change slug + textes. Chaque catégorie a un
   bloc par langue : fr, en, ar (si en/ar manquent, le français s'affiche).
   AJOUTER UNE LANGUE : ajoute-la dans NOCLIP_UI.langs, ajoute ses textes
   dans NOCLIP_UI.ui, puis un bloc de cette langue dans chaque catégorie.
   Dans `content`, écris librement :
     # Gros titre          ## Titre moyen        ### Petit titre
     Un texte normal (une ligne vide = nouveau paragraphe)
     - une puce            > un encart important
     **gras**              ---  (ligne de séparation)
   ============================================================ */
/* ---- Textes de l'interface ---- */
/* IMAGES : chaque catégorie a  card:'…'  (image de sa carte sur l'accueil) et  banner:'…'  (bandeau de sa page).
   Remplace simplement les fichiers de assets/img/ en gardant le même nom (voir assets/img/LISEZMOI.txt). */
window.NOCLIP_UI = {
  hero: 'assets/img/hero.jpg',
  site: { name: 'NoClip — Moroccan Roleplay Server', author: 'Aimino', year: 2026 },
  langs: [{ code: 'fr', label: 'Français' }, { code: 'en', label: 'English' }, { code: 'ar', label: 'العربية' }],
  ui: {
    fr: { tagline: `Ta ville. Tes règles.`, intro: `Choisis ton rôle. Connais tes règles.`, read: `Lire`, home: `Accueil`, next: `Suivant`, back: `Retour`, nf: `Cette page n'existe pas.`, footer: `NoClip — serveur RP`, menu: `Menu`, scroll: `Scroll` },
    en: { tagline: `Your city. Your rules.`, intro: `Pick your role. Know your rules.`, read: `Read`, home: `Home`, next: `Next`, back: `Back`, nf: `This page does not exist.`, footer: `NoClip — RP server`, menu: `Menu`, scroll: `Scroll` },
    ar: { tagline: `مدينتك. قواعدك.`, intro: `اختر دورك. اعرف قواعدك.`, read: `اقرأ`, home: `الرئيسية`, next: `التالي`, back: `رجوع`, nf: `هذه الصفحة غير موجودة.`, footer: `NoClip — سيرفر رول بلاي`, menu: `القائمة`, scroll: `مرّر` }
  }
};

/* ---- Catégories ---- */
window.NOCLIP_CATEGORIES = [
{ slug: 'discord',
  card: 'assets/img/discord-card.jpg', banner: 'assets/img/discord-banner.jpg',
  fr: { title: `Discord Rules`, quote: `Même hors de la ville, on garde les bonnes manières.`, summary: `Règles de vie sur le serveur Discord.`, content: `
# Discord
## Salons
Chaque sujet dans le bon salon. Pas de spam ni de publicité.
## Vocal
Pas de cris, de soundboard ni de nuisances sonores.
> Aucune donnée privée ne doit être diffusée sans accord.
` },
  en: { title: `Discord Rules`, quote: `Even outside the city, we keep good manners.`, summary: `House rules for the Discord server.`, content: `
# Discord
## Channels
Each topic in the right channel. No spam or advertising.
## Voice
No shouting, soundboards or noise nuisance.
> No private data may be shared without consent.
` },
  ar: { title: `قواعد ديسكورد`, quote: `حتى خارج المدينة، نحافظ على الأخلاق الحسنة.`, summary: `قواعد التعامل داخل سيرفر ديسكورد.`, content: `
# ديسكورد
## القنوات
كل موضوع في القناة المناسبة. ممنوع السبام والإعلانات.
## القنوات الصوتية
ممنوع الصراخ وأجهزة الأصوات (Soundboard) وأي إزعاج.
> يُمنع نشر أي بيانات خاصة دون موافقة صاحبها.
` }
},
{ slug: 'rules',
  card: 'assets/img/rules-card.jpg', banner: 'assets/img/rules-banner.jpg',
  fr: { title: `Rules`, quote: `Ici, tout le monde joue avec les mêmes cartes.`, summary: `Les bases du serveur, valables pour tous les joueurs.`, content: `
# Le règlement général
Bienvenue sur NoClip. Ces règles s'appliquent à **tous** les joueurs, sans exception.

## Respect
Aucune insulte, discrimination ou harcèlement HRP. Le RP n'excuse jamais le manque de respect réel.

## Fair-play
Accepte les conséquences de tes actions, que tu gagnes ou que tu perdes.
- Pas de triche ni d'exploit de bug
- Pas de métagaming
- Pas de force RP

> Cheat ou modification de fichiers = bannissement définitif.

### Crédibilité
Ton personnage tient à sa vie et réagit comme dans la réalité.
` },
  en: { title: `General Rules`, quote: `Everyone plays with the same cards here.`, summary: `The basics of the server, valid for all players.`, content: `
# General rules
Welcome to NoClip. These rules apply to **all** players, without exception.

## Respect
No insults, discrimination or OOC harassment. RP never excuses real-life disrespect.

## Fair play
Accept the consequences of your actions, whether you win or lose.
- No cheating or bug exploits
- No metagaming
- No forced RP

> Cheating or modifying game files = permanent ban.

### Believability
Your character values their life and reacts like in real life.
` },
  ar: { title: `القواعد العامة`, quote: `هنا يلعب الجميع بنفس الأوراق.`, summary: `أساسيات السيرفر، وتنطبق على جميع اللاعبين.`, content: `
# القواعد العامة
مرحبًا بك في NoClip. تُطبَّق هذه القواعد على **جميع** اللاعبين دون استثناء.

## الاحترام
ممنوع الإهانة أو التمييز أو المضايقة خارج اللعب. لا يبرّر الرول بلاي أبدًا قلة الاحترام في الواقع.

## اللعب النظيف
تقبّل عواقب أفعالك، سواء ربحت أو خسرت.
- ممنوع الغش واستغلال الثغرات
- ممنوع الميتاغيمنغ
- ممنوع فرض الرول بلاي بالقوة

> الغش أو تعديل ملفات اللعبة = حظر نهائي.

### المصداقية
شخصيتك تحرص على حياتها وتتصرف كما في الواقع.
` }
},
{ slug: 'legal',
  card: 'assets/img/legal-card.jpg', banner: 'assets/img/legal-banner.jpg',
  fr: { title: `Légal Rules`, quote: `Le badge ne te met pas au-dessus des lois.`, summary: `Métiers, entreprises et institutions.`, content: `
# Règles légales
## Cadre professionnel
En service, tu respectes la hiérarchie et les procédures de ton métier.
## Abus de fonction
Interdit d'utiliser ton métier à des fins personnelles ou pour un gain HRP.
### Interactions civiles
Les forces de l'ordre justifient toute intervention en RP.
` },
  en: { title: `Legal Rules`, quote: `The badge doesn't put you above the law.`, summary: `Jobs, businesses and institutions.`, content: `
# Legal rules
## Professional conduct
On duty, you follow the hierarchy and procedures of your job.
## Abuse of position
Using your job for personal or OOC gain is forbidden.
### Civilian interactions
Law enforcement must justify every intervention in RP.
` },
  ar: { title: `القواعد القانونية`, quote: `الشارة لا تضعك فوق القانون.`, summary: `الوظائف والشركات والمؤسسات.`, content: `
# القواعد القانونية
## الإطار المهني
أثناء الخدمة، تلتزم بتسلسل القيادة وإجراءات وظيفتك.
## إساءة استخدام المنصب
يُمنع استخدام وظيفتك لتحقيق مصلحة شخصية أو مكسب خارج اللعب.
### التعامل مع المدنيين
على قوات الأمن تبرير كل تدخّل داخل الرول بلاي.
` }
},
{ slug: 'illegal',
  card: 'assets/img/illegal-card.jpg', banner: 'assets/img/illegal-banner.jpg',
  fr: { title: `Illégal Rules`, quote: `Le crime se prépare. Il ne s'improvise pas.`, summary: `Gangs, braquages et activités illégales.`, content: `
# Activités illégales
## Raison RP
Toute action illégale nécessite un scénario RP construit.
## Prises d'otage
Autorisées uniquement avec assez de forces de l'ordre en ville.
### Pas de vengeance HRP
Ce qui se passe en RP reste en RP.
` },
  en: { title: `Illegal Rules`, quote: `Crime is planned. It isn't improvised.`, summary: `Gangs, robberies and illegal activities.`, content: `
# Illegal activities
## RP reason
Every illegal action needs a built RP storyline.
## Hostage taking
Allowed only with enough law enforcement in the city.
### No OOC revenge
What happens in RP stays in RP.
` },
  ar: { title: `القواعد غير القانونية`, quote: `الجريمة تُخطَّط، ولا تُرتجل.`, summary: `العصابات والسطو والأنشطة غير القانونية.`, content: `
# الأنشطة غير القانونية
## سبب رول بلاي
كل عمل غير قانوني يحتاج إلى سيناريو رول بلاي متكامل.
## احتجاز الرهائن
مسموح فقط عند وجود عدد كافٍ من رجال الأمن في المدينة.
### لا انتقام خارج اللعب
ما يحدث في الرول بلاي يبقى في الرول بلاي.
` }
},
{ slug: 'streamer',
  card: 'assets/img/streamer-card.jpg', banner: 'assets/img/streamer-banner.jpg',
  fr: { title: `Streamer Rules`, quote: `La ville est sous les projecteurs. Assume.`, summary: `Règles pour les créateurs de contenu.`, content: `
# Créateurs de contenu
## Stream sniping
Interdit d'exploiter un live pour obtenir des informations.
## Image du serveur
Ton contenu représente NoClip : reste respectueux.
` },
  en: { title: `Streamer Rules`, quote: `The city is in the spotlight. Own it.`, summary: `Rules for content creators.`, content: `
# Content creators
## Stream sniping
Using a live stream to gain information is forbidden.
## Server image
Your content represents NoClip: stay respectful.
` },
  ar: { title: `قواعد الستريمر`, quote: `المدينة تحت الأضواء. كن على قدر المسؤولية.`, summary: `قواعد لصنّاع المحتوى.`, content: `
# صنّاع المحتوى
## استغلال البث (Stream Sniping)
يُمنع استغلال البث المباشر للحصول على معلومات.
## صورة السيرفر
محتواك يمثّل NoClip: حافظ على الاحترام.
` }
}
];
