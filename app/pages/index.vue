<script setup lang="ts">
useHead({
  title: 'ORIA Solutions — Expertise SAP & S/4HANA',
  meta: [
    { name: 'description', content: 'ORIA Solutions accompagne les entreprises industrielles sur SAP & S/4HANA. Fonctionnel, technique et cloud, avec sens du jeu collectif.' }
  ]
})

const scrolled = ref(false)
if (import.meta.client) {
  const onScroll = () => { scrolled.value = window.scrollY > 20 }
  onMounted(() => {
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce && 'IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' })

      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => io.observe(el))
    } else {
      document.querySelectorAll('.reveal, .reveal-stagger').forEach((el) => el.classList.add('is-visible'))
    }
  })
  onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
}

const openFaq = ref<number | null>(null)
const toggleFaq = (i: number) => { openFaq.value = openFaq.value === i ? null : i }

const faqItems = [
  {
    q: 'Travaillez-vous uniquement sur des projets complets ?',
    a: '[À compléter] Réponse courte indiquant les modalités d\'intervention : missions longues, audits, expertises ponctuelles, renforts d\'équipe projet.'
  },
  {
    q: 'Intervenez-vous sur S/4HANA ?',
    a: '[À compléter] Préciser le périmètre S/4HANA couvert : Greenfield, Brownfield, optimisation d\'existant.'
  },
  {
    q: 'Faites-vous uniquement du développement ?',
    a: '[À compléter] Rappeler que l\'équipe couvre à la fois le fonctionnel et le développement sur-mesure.'
  },
  {
    q: 'L\'IA fait-elle déjà partie de vos offres ?',
    a: '[À compléter] Expliquer l\'approche IA : cadrage des cas d\'usage, intégration Joule / DOX / ML embarqué.'
  },
  {
    q: 'Travaillez-vous uniquement pour des clients industriels ?',
    a: '[À compléter] Préciser les secteurs adressés et l\'ouverture à d\'autres filières.'
  }
]

const submitNote = ref('')
const onSubmit = (e: Event) => {
  e.preventDefault()
  submitNote.value = 'Message envoyé — merci.'
}

const phases = [
  { n: '01', title: 'Observer', body: 'Prendre la température du terrain' },
  { n: '02', title: 'Cadrer', body: 'Poser la bonne stratégie' },
  { n: '03', title: 'Déployer', body: 'Passer à l\'action' },
  { n: '04', title: 'Faire durer', body: 'Rester dans le match sur la durée' }
]

const iaSteps = [
  'Observer les systèmes existants',
  'Détecter les pertes de valeur',
  'Identifier des cas métiers concrets',
  'Tester, ajuster, intégrer, développer',
  'Analyser et vous accompagner'
]

const stats = [
  { n: '25', suffix: '+', label: 'Années d\'expérience cumulée' },
  { n: '35', suffix: '+', label: 'Projets réalisés' },
  { n: '9', label: 'Implémentations S/4HANA Greenfield' },
  { n: '3', label: 'Conversions S/4HANA Brownfield' }
]
</script>

<template>
  <div class="atelier-root">
    <nav :class="['nav', { 'is-scrolled': scrolled }]">
      <div class="nav-inner">
        <a href="#" class="brand" aria-label="ORIA Solutions">
          <img
            src="/assets/img/logo-horizontal.png"
            alt="ORIA Solutions"
            class="brand-logo"
          />
        </a>
        <div class="nav-links">
          <a href="#approche">Approche</a>
          <a href="#expertises">Expertises</a>
          <a href="#ia">Intelligence artificielle</a>
          <a href="#references">Références</a>
          <a href="#equipe">Équipe</a>
        </div>
        <a href="#contact" class="nav-cta">
          Nous contacter
          <span class="btn-arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </nav>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text reveal">
          <span class="hero-pill">ORIA Solutions — Saison 2026</span>
          <h1 class="hero-title">
            Nous faisons avancer vos <em>projets SAP</em> avec précision, engagement et sens du jeu collectif.
          </h1>
          <p class="hero-lede">
            Expertise fonctionnelle, développement sur mesure, vision terrain : ORIA Solutions accompagne les entreprises industrielles à chaque étape de leurs projets SAP &amp; S/4HANA.
          </p>
          <div class="hero-actions">
            <a class="btn btn-ghost" href="#contact">
              Nous contacter
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div class="hero-photo reveal">
          <div class="hero-photo-frame">
            <NuxtImg
              src="/assets/img/Code.png"
              alt=""
              width="1400"
              height="1600"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ APPROCHE ============ -->
    <section id="approche" class="section approche">
      <div class="wrap">
        <header class="sec-head reveal">
          <span class="sec-num serif-italic">01</span>
          <div>
            <h2 class="sec-eyebrow">Approche</h2>
            <h3 class="sec-title">Notre <em>terrain</em> de jeu.</h3>
          </div>
        </header>

        <p class="sec-intro sec-intro-blue reveal">
          De l'analyse métier au développement technique, ORIA Solutions intervient là où il faut, avec le bon niveau d'expertise et le bon tempo.
        </p>

        <div class="play-grid play-grid-spaced reveal-stagger">
          <article class="play">
            <div class="play-tag">Play 01 — Fonctionnel</div>
            <h4>Lecture métier &amp; expertise fonctionnelle</h4>
            <p>
              Spécialisée sur les modules <strong>QM</strong> et <strong>eWM</strong>, ORIA Solutions accompagne les équipes dans l'analyse de leurs processus, la compréhension des irritants terrain et la traduction des besoins métier dans SAP.
            </p>
            <ul class="tag-list">
              <li>Analyse des besoins métier</li>
              <li>Cadrage fonctionnel</li>
              <li>Ateliers &amp; workshops</li>
              <li class="tag-solid">QM</li>
              <li class="tag-solid">eWM</li>
              <li class="tag-solid">S/4HANA</li>
            </ul>
          </article>

          <article class="play">
            <div class="play-tag">Play 02 — Technique</div>
            <h4>Développement SAP sur mesure</h4>
            <p>
              SAP propose un cadre robuste, mais chaque environnement industriel a ses spécificités. Lorsque le standard atteint ses limites, nous concevons des développements sur mesure.
            </p>
            <ul class="tag-list">
              <li>Développements custom</li>
              <li>Adaptation de l'existant</li>
              <li>Nouvelles fonctionnalités</li>
              <li>Solutions maintenables</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ============ EXPERTISES ============ -->
    <section id="expertises" class="section expertises">
      <div class="wrap">
        <header class="sec-head reveal">
          <span class="sec-num serif-italic">02</span>
          <div>
            <h2 class="sec-eyebrow">Expertises</h2>
            <h3 class="sec-title">Du terrain à la <em>mise en œuvre.</em></h3>
          </div>
        </header>

        <p class="sec-intro reveal">
          Un bon projet SAP, ce n'est pas une suite de slides. C'est un enchaînement fluide entre compréhension, décision, exécution et amélioration continue.
        </p>

        <ol class="phases reveal-stagger">
          <li v-for="p in phases" :key="p.n">
            <span class="phase-num serif-italic">{{ p.n }}</span>
            <h4>{{ p.title }}</h4>
            <p>{{ p.body }}</p>
          </li>
        </ol>

        <article class="deep reveal">
          <header>
            <span class="deep-eyebrow">— Au cœur de l'ERP</span>
            <h4>L'excellence <em>S/4HANA.</em></h4>
          </header>
          <div class="deep-body">
            <p>
              <strong>Conviction :</strong> la technologie n'a de sens que si elle facilite le quotidien de l'utilisateur métier. La quasi-totalité de vos flux critiques se déroulent dans S/4HANA : nous vous accompagnons sur l'implémentation et l'optimisation de vos processus QM et eWM, en tirant parti des standards SAP les plus récents.
            </p>
            <p>
              Pour éviter l'ancien code complexe et coûteux à maintenir, nous privilégions une approche moderne, et exploitons le Machine Learning embarqué quand il apporte un gain concret — ERP plus intelligent et réactif.
            </p>
            <ul class="tech">
              <li>RAP (RESTful ABAP)</li>
              <li>Modélisation CDS</li>
              <li>Applications Fiori natives</li>
              <li>ML embarqué</li>
            </ul>
          </div>
        </article>


        <article class="deep reveal">
          <header>
            <span class="deep-eyebrow">— Autour de l'ERP</span>
            <h4>L'agilité avec <em>SAP BTP</em> (Cloud).</h4>
          </header>
          <div class="deep-body">
            <p>
              Pour répondre à vos besoins spécifiques <strong>sans modifier le standard S/4HANA</strong> (stratégie Clean Core), nous concevons des extensions sur SAP BTP : Pro-Code via Business Application Studio, applications mobiles et workflows en Low-Code avec SAP Build, portail d'entreprise centralisé.
            </p>
            <p>
              Lorsque c'est pertinent, nous intégrons des services IA de la BTP comme <strong>Joule</strong> ou le <strong>Document Information Extractor</strong>. Objectif constant : une technologie au service du métier, jamais l'inverse.
            </p>
            <ul class="tech">
              <li>Business Application Studio</li>
              <li>SAP Build</li>
              <li>Portail entreprise</li>
              <li>Joule</li>
              <li>Document Information Extractor</li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- ============ IA ============ -->
    <section id="ia" class="section ia">
      <div class="wrap">
        <header class="sec-head reveal">
          <span class="sec-num serif-italic">03</span>
          <div>
            <h2 class="sec-eyebrow">Intelligence artificielle</h2>
            <h3 class="sec-title sec-title-sm">L'IA, <em>partie intégrante</em> de SAP pour aller plus loin.</h3>
          </div>
        </header>

        <div class="ia-grid">
          <div class="ia-photo reveal">
            <div class="ia-photo-frame">
              <NuxtImg
                src="/assets/img/webdev.webp"
                alt=""
                width="1400"
                height="1700"
                loading="lazy"
              />
            </div>
            <div class="ia-photo-tag" aria-hidden="true">
              <span class="ia-photo-tag-dot"></span>
              <span>Joule · DOX · ML embarqué</span>
            </div>
          </div>

          <div class="ia-content">
            <p class="ia-lede reveal">
              Avant de déployer l'IA, il faut identifier les bons cas d'usage. Analyser l'existant, détecter les frictions, puis proposer des cas métiers crédibles et activables.
            </p>

            <div class="ia-approach">
              <span class="ia-approach-eyebrow reveal">— Notre approche</span>
              <ol class="ia-timeline reveal-stagger">
                <li v-for="(s, i) in iaSteps" :key="i">
                  <span class="ia-timeline-num serif-italic">0{{ i + 1 }}</span>
                  <span class="ia-timeline-text">{{ s }}</span>
                </li>
              </ol>
            </div>

            <div class="ia-foot reveal">
              <a href="#contact" class="btn btn-ghost">
                Échanger sur un cas d'usage
                <span class="btn-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ REFERENCES ============ -->
    <section id="references" class="section refs">
      <div class="wrap">
        <header class="refs-head reveal">
          <span class="sec-num serif-italic">04</span>
          <h2 class="sec-eyebrow">Références</h2>
          <h3 class="refs-title">
            Le vrai bilan de match, ce sont nos <em>clients</em> qui le racontent.
          </h3>
        </header>

        <div class="testi-row reveal-stagger">
          <article class="testi-photo">
            <NuxtImg
              src="/assets/img/equipe.webp"
              alt=""
              width="900"
              height="1200"
              loading="lazy"
            />
          </article>

          <article class="testi-card">
            <blockquote class="testi-quote">
              Une collaboration fiable, fluide et transparente, avec une vraie compréhension de nos enjeux métier.
            </blockquote>
            <div class="testi-foot">
              <div class="testi-cite">
                <div class="testi-name">Prénom Nom</div>
                <div class="testi-role">Poste · Viseo</div>
              </div>
            </div>
            <a href="#" class="testi-mark" aria-label="Voir Viseo">
              <NuxtImg
                src="/assets/img/Viseo_logo.svg.webp"
                alt="Viseo"
                width="120"
                height="120"
                loading="lazy"
              />
            </a>
          </article>

          <article class="testi-card">
            <blockquote class="testi-quote">
              ORIA Solutions apporte une expertise solide, avec une approche pragmatique et adaptée à la réalité du terrain.
            </blockquote>
            <div class="testi-foot">
              <div class="testi-cite">
                <div class="testi-name">Prénom Nom</div>
                <div class="testi-role">Poste · Sodiaal</div>
              </div>
            </div>
            <a href="#" class="testi-mark" aria-label="Voir Sodiaal">
              <NuxtImg
                src="/assets/img/csm_Sodiaal_90b80d9a06.webp"
                alt="Sodiaal"
                width="120"
                height="120"
                loading="lazy"
              />
            </a>
          </article>
        </div>

        <div class="stats reveal">
          <div v-for="s in stats" :key="s.label" class="stat">
            <div class="stat-num">
              {{ s.n }}<em v-if="s.suffix">{{ s.suffix }}</em>
            </div>
            <div class="stat-label">{{ s.label }}</div>
          </div>
          <div class="stat stat-wide">
            <div class="stat-label-mini">Interventions</div>
            <div class="stat-cities">France · Singapour · USA · Mexique · Belgique · Suisse</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ ÉQUIPE ============ -->
    <section id="equipe" class="section team">
      <div class="wrap">
        <header class="sec-head reveal">
          <span class="sec-num serif-italic">05</span>
          <div>
            <h2 class="sec-eyebrow">Équipe</h2>
            <h3 class="sec-title">Notre duo <em>sur le terrain.</em></h3>
          </div>
        </header>

        <div class="duo reveal-stagger">
          <article class="player">
            <div class="player-photo">
              <NuxtImg
                src="/assets/img/Duo Delphine.jpg"
                alt="Portrait Delphine Pfleger"
                width="900"
                height="1125"
                loading="lazy"
              />
            </div>
            <div class="player-meta">
              <div class="player-role">L'attaquante</div>
              <h4 class="player-name">Delphine <span class="player-name-last">PFLEGER</span></h4>
              <p class="player-tag serif-italic">— lecture métier, cadrage fonctionnel</p>
              <p class="player-text">
                Delphine accompagne les équipes industrielles dans la lecture du besoin métier et la traduction des enjeux terrain dans SAP. Spécialiste des modules <strong>QM</strong> et <strong>eWM</strong>, elle intervient du cadrage fonctionnel aux ateliers de conception, avec une attention constante à la cohérence des processus et à l'adoption. Elle accompagne aussi les transformations <strong>S/4HANA</strong>, en aidant à arbitrer, prioriser et sécuriser la trajectoire projet.
              </p>
              <p class="player-text">
                Mais ne vous trompez pas — <strong>joueuse de hockey sur glace semi-professionnelle depuis 15 ans,</strong> pour Delphine chaque projet est un match qu'elle aime remporter haut la main.
              </p>
            </div>
          </article>

          <article class="player">
            <div class="player-photo">
              <NuxtImg
                src="/assets/img/Duo Fabrice.png"
                alt="Portrait Fabrice Garnier"
                width="900"
                height="1125"
                loading="lazy"
              />
            </div>
            <div class="player-meta">
              <div class="player-role">Le défenseur</div>
              <h4 class="player-name">Fabrice <span class="player-name-last">GARNIER</span></h4>
              <p class="player-tag serif-italic">— précision technique, exécution</p>
              <p class="player-text">
                Fabrice conçoit et développe des solutions SAP sur mesure, avec une approche très technique et une vraie culture du <strong>Cloud</strong>. Son mantra est simple : <strong>S/4HANA est le cœur</strong> du système, et on ne doit jamais l'oublier. On ne fait pas du développement « pour faire joli ». Ici, chaque choix doit servir le métier, pas l'inverse.
              </p>
              <p class="player-text">
                Curieux et très <strong>geek</strong>, Fabrice est toujours à fond sur les nouvelles technologies : il teste, explore et challenge les tendances du moment, avec un œil particulièrement affûté sur les usages <strong>IA</strong>.
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section id="contact" class="section contact">
      <div class="wrap">
        <div class="contact-card reveal">
          <div class="contact-side">
            <h3 class="contact-title">Prenons la <em>mise au jeu.</em></h3>
            <p class="contact-lead">
              Vous avez une problématique métier, un besoin d'évolution SAP, un sujet S/4HANA ou une réflexion logicielle autour de l'IA ? Parlons-en.
            </p>
            <dl class="contact-details">
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:contact@oria-solutions.fr">contact@oria-solutions.fr</a></dd>
              </div>
              <div>
                <dt>Siège</dt>
                <dd>Lyon, France</dd>
              </div>
              <div>
                <dt>LinkedIn</dt>
                <dd>/company/oria-solutions</dd>
              </div>
            </dl>
          </div>

          <form class="oria-form" @submit="onSubmit">
            <div class="row-2">
              <label>
                Prénom
                <input type="text" name="fn" placeholder="Prénom" required />
              </label>
              <label>
                Nom
                <input type="text" name="ln" placeholder="Nom" required />
              </label>
            </div>
            <label>
              Email professionnel
              <input type="email" name="email" placeholder="email@entreprise.com" required />
            </label>
            <label>
              Société
              <input type="text" name="co" placeholder="Nom de l'entreprise" />
            </label>
            <label>
              Sujet
              <select name="topic">
                <option>Projet S/4HANA</option>
                <option>Module QM / eWM</option>
                <option>Développement sur-mesure</option>
                <option>SAP BTP &amp; IA</option>
                <option>Autre</option>
              </select>
            </label>
            <label>
              Votre message
              <textarea name="msg" rows="4" placeholder="Parlez-nous de votre projet" required></textarea>
            </label>
            <div class="form-foot">
              <span class="form-note">{{ submitNote }}</span>
              <button type="submit" class="btn btn-rust">
                Envoyer
                <span class="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section faq">
      <div class="wrap faq-grid reveal">
        <header class="faq-head">
          <span class="sec-num serif-italic">07</span>
          <h2 class="sec-eyebrow">FAQ</h2>
          <h3 class="sec-title sec-title-sm"><em>Petites</em> questions, vraies réponses.</h3>
          <p class="faq-side">
            Vous ne trouvez pas votre réponse ?<br>
            Écrivez-nous directement.
          </p>
        </header>
        <ul class="faq-list">
          <li
            v-for="(item, i) in faqItems"
            :key="i"
            :class="['faq-item', { open: openFaq === i }]"
          >
            <button class="faq-q" :aria-expanded="openFaq === i" @click="toggleFaq(i)">
              <span>{{ item.q }}</span>
              <span class="plus" aria-hidden="true"></span>
            </button>
            <div class="faq-a">
              <p>{{ item.a }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="footer">
      <div class="wrap">
        <div class="footer-top">
          <div class="footer-brand">
            <img
              src="/assets/img/logo-horizontal.png"
              alt="ORIA Solutions"
              class="footer-brand-logo"
            />
          </div>
          <p class="footer-tag">
            Expertise SAP &amp; S/4HANA pour l'industrie. Fonctionnel, technique et cloud — avec sens du jeu collectif.
          </p>
        </div>

        <div class="footer-cols">
          <div class="col">
            <h5>Navigation</h5>
            <a href="#approche">Approche</a>
            <a href="#expertises">Expertises</a>
            <a href="#ia">IA</a>
            <a href="#references">Références</a>
            <a href="#equipe">Équipe</a>
          </div>
          <div class="col">
            <h5>Contact</h5>
            <a href="mailto:contact@oria-solutions.fr">contact@oria-solutions.fr</a>
            <a href="#">LinkedIn →</a>
            <a href="#">Prendre rendez-vous →</a>
          </div>
          <div class="col">
            <h5>Coordonnées</h5>
            <p>Lyon, France<br>Interventions internationales</p>
          </div>
        </div>

        <div class="footer-bottom">
          <span>© 2026 ORIA Solutions · Tous droits réservés</span>
          <span>Mentions légales · Confidentialité</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.atelier-root {
  --bone: #ffffff;
  --cream: #f5f7fa;
  --paper: #ffffff;
  --ink: #0f1424;
  --ink-soft: #2a3142;
  --ink-mute: #6b7280;
  --line: #e3e7ec;
  --rust: #0061ea;
  --rust-soft: #00b3d8;
  --espresso: #00007f;
  --brand-navy: #00007f;
  --brand-blue: #0061ea;
  --brand-cyan: #00b3d8;
  --brand-aqua: #00d4d2;
  --ice: #eaf1fb;
  --ice-line: #cfdcef;

  --max: 1920px;
  --gutter: clamp(1.25rem, 3vw, 3rem);
  --section-y: clamp(5rem, 11vw, 10rem);

  /* --font-sans: "Century Gothic", "Apple Gothic", "URW Gothic", "ITC Avant Garde Gothic", "Avant Garde", "Futura", ui-sans-serif, sans-serif; */
  --font-sans: "Inter Tight", ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-serif: "Instrument Serif", "Iowan Old Style", Georgia, "Times New Roman", serif;

  font-family: var(--font-sans);
  background: var(--bone);
  color: var(--ink);
  font-size: 16.5px;
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  overflow-x: hidden;
  min-height: 100vh;
}

.atelier-root *,
.atelier-root *::before,
.atelier-root *::after { box-sizing: border-box; }

.atelier-root a { text-decoration: none; }
.atelier-root a:not(.btn):not(.nav-cta) { color: inherit; }
.atelier-root img, .atelier-root :deep(img) { display: block; max-width: 100%; }
.atelier-root h1, .atelier-root h2, .atelier-root h3, .atelier-root h4, .atelier-root h5, .atelier-root p, .atelier-root ul, .atelier-root ol, .atelier-root dl, .atelier-root dd, .atelier-root figure, .atelier-root blockquote { margin: 0; padding: 0; }
.atelier-root ul, .atelier-root ol { list-style: none; }
.atelier-root button { font: inherit; cursor: pointer; border: 0; }
.atelier-root button:not(.btn) { background: none; color: inherit; }
.atelier-root input, .atelier-root textarea, .atelier-root select { font: inherit; }

.serif-italic { font-family: var(--font-serif); font-style: italic; font-weight: 400; letter-spacing: -0.005em; }

.wrap { max-width: var(--max); margin: 0 auto; padding-inline: var(--gutter); }

.section { padding-block: var(--section-y); }

/* ============ NAV ============ */
.nav {
  position: sticky; top: 0; z-index: 50;
  background: color-mix(in srgb, var(--bone) 86%, transparent);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color .2s ease;
}
.nav-inner {
  max-width: var(--max);
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 20px var(--gutter);
  gap: 1.5rem;
}
.nav.is-scrolled { border-bottom-color: var(--line); }

.brand {
  display: inline-flex; align-items: center;
  color: var(--ink);
}
.brand-logo {
  height: 72px;
  width: auto;
  display: block;
}

.nav-links {
  display: none;
  justify-content: center;
  gap: 44px;
  font-size: 14.5px;
  color: var(--ink-soft);
}
.nav-links a {
  position: relative;
  padding: 8px 14px;
  border-radius: 999px;
  transition: color .2s ease, background-color .2s ease;
}
.nav-links a:hover {
  color: var(--rust);
  background: rgba(0, 0, 0, 0.04);
}

.nav-cta {
  display: none;
  align-items: center;
  gap: 10px;
  padding: 11px 22px;
  border-radius: 999px;
  background: var(--brand-blue);
  color: var(--bone);
  font-size: 13.5px;
  font-weight: 500;
  transition: background .2s ease;
}
.nav-cta:hover { background: var(--brand-navy); }
.nav-cta .btn-arrow { background: var(--bone); color: var(--brand-blue); }
.nav-cta:hover .btn-arrow { color: var(--brand-navy); }

@media (min-width: 920px) {
  .nav-links { display: inline-flex; align-items: center; }
  .nav-cta { display: inline-flex; align-items: center; }
}

/* ============ BUTTONS ============ */
.btn {
  display: inline-flex; align-items: center;
  gap: 10px;
  padding: 14px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.005em;
  transition: background .2s ease, transform .2s ease, color .2s ease, border-color .2s ease;
}
.btn:hover { transform: translateY(-1px); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  border-radius: 999px;
  background: var(--bone);
  color: var(--brand-blue);
  font-size: 12px;
  margin-right: -8px;
  transition: color .2s ease, background .2s ease;
}

/* Primary (important): blue → navy */
.btn-dark { background: var(--brand-blue); color: #fff; }
.btn-dark:hover { background: var(--brand-navy); }
.btn-dark .btn-arrow { color: var(--brand-blue); }
.btn-dark:hover .btn-arrow { color: var(--brand-navy); }

.btn-rust { background: var(--brand-blue); color: #fff; }
.btn-rust:hover { background: var(--brand-navy); }
.btn-rust .btn-arrow { color: var(--brand-blue); }
.btn-rust:hover .btn-arrow { color: var(--brand-navy); }

/* Secondary (less important): navy → blue */
.btn-ghost {
  background: var(--brand-navy);
  color: #fff;
  border: 1px solid var(--brand-navy);
}
.btn-ghost:hover { background: var(--brand-blue); border-color: var(--brand-blue); }
.btn-ghost .btn-arrow { color: var(--brand-navy); }
.btn-ghost:hover .btn-arrow { color: var(--brand-blue); }

/* ============ SECTION HEAD ============ */
.sec-head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 32px;
  align-items: end;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--line);
  margin-bottom: 48px;
}
.sec-num {
  font-size: clamp(64px, 8vw, 120px);
  line-height: 0.85;
  color: var(--rust);
  letter-spacing: -0.02em;
}
.sec-eyebrow {
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 14px;
}
.sec-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(36px, 5.5vw, 72px);
  line-height: 1;
  letter-spacing: -0.02em;
  max-width: 22ch;
}
.sec-title em { font-style: italic; color: var(--rust); }
.sec-title-sm { font-size: clamp(32px, 4vw, 52px); }

.sec-intro {
  font-size: 18px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 60ch;
  margin-bottom: 80px;
}

/* ============ HERO ============ */
.hero {
  min-height: calc(100svh - 80px);
  padding-top: clamp(2rem, 4vw, 3rem);
  padding-bottom: clamp(4rem, 8vw, 7rem);
}

.hero-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: center;
}
@media (min-width: 980px) {
  .hero-grid { grid-template-columns: 1fr 1fr; }
}

.hero-text { display: grid; gap: 28px; align-content: center; }

.hero-pill {
  justify-self: start;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-mute);
  background: rgba(28,24,20,0.05);
  border: 1px solid var(--line);
  padding: 7px 14px;
  border-radius: 999px;
}

.hero-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(34px, 4.4vw, 64px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 22ch;
}
.hero-title em { font-style: italic; color: var(--rust); }

.hero-lede {
  font-size: 17px;
  line-height: 1.55;
  color: var(--ink-soft);
  max-width: 48ch;
}

.hero-actions {
  display: flex; flex-wrap: wrap; gap: 12px;
  margin-top: 4px;
}

.hero-bottom {
  display: flex; align-items: center; gap: 18px;
  margin-top: 24px;
  flex-wrap: wrap;
}
.avatars { display: inline-flex; }
.ava {
  width: 36px; height: 36px;
  border-radius: 999px;
  border: 2px solid #fff;
  margin-left: -10px;
}
.ava:first-child { margin-left: 0; }
.ava-1 { background: linear-gradient(135deg, var(--brand-navy), var(--brand-blue)); }
.ava-2 { background: linear-gradient(135deg, var(--brand-blue), var(--brand-cyan)); }
.ava-3 { background: linear-gradient(135deg, var(--brand-cyan), var(--brand-aqua)); }
.ava-4 { background: linear-gradient(135deg, var(--brand-navy), #4b0084); }
.hero-trust { font-size: 14.5px; color: var(--ink-soft); }
.hero-trust strong { color: var(--ink); font-weight: 600; }
.hero-trust .muted { color: var(--ink-mute); }

.hero-photo { position: relative; }
.hero-photo-frame {
  position: relative;
  max-height: calc(100svh - 260px);
  border-radius: 18px;
  overflow: hidden;
  background: var(--cream);
}
.hero-photo-frame :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
}

/* ============ APPROCHE ============ */
.approche { background: var(--bone); }

.sec-intro-blue { color: var(--brand-blue); }
.play-grid-spaced { margin-top: clamp(2.5rem, 5vw, 4rem); }

.play-grid {
  display: grid;
  gap: clamp(2rem, 4vw, 3.5rem);
}
@media (min-width: 880px) {
  .play-grid { grid-template-columns: 1fr 1fr; }
}

.play { display: grid; gap: 18px; align-content: start; }
.play-tag {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rust);
  font-weight: 500;
}
.play h4 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(28px, 3.4vw, 40px);
  line-height: 1.05;
  letter-spacing: -0.015em;
  max-width: 18ch;
}
.play p {
  font-size: 16px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 44ch;
}
.tag-list {
  display: flex; flex-wrap: wrap; gap: 8px;
  margin-top: 8px;
}
.tag-list li {
  padding: 7px 14px;
  border: 1px solid var(--line);
  border-radius: 999px;
  font-size: 13px;
  color: var(--ink-soft);
  background: transparent;
}
.tag-list li.tag-solid {
  background: var(--brand-navy);
  color: var(--bone);
  border-color: var(--brand-navy);
}

/* ============ EXPERTISES ============ */
.expertises {
  background: var(--ice);
  color: var(--ink);
}
.expertises .wrap { max-width: 1280px; }
.expertises .sec-head {
  border-bottom-color: var(--ice-line);
}
.expertises .sec-num { color: var(--brand-blue); }
.expertises .sec-eyebrow { color: var(--ink-mute); }
.expertises .sec-title em { color: var(--brand-blue); }
.expertises .sec-intro { color: var(--ink-soft); }
.expertises .sec-head { border-bottom: 0; }
.expertises .phases { border-top: 0; }
.expertises .phases li { border-right: 0; }

.phases {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  border-top: 1px solid var(--ice-line);
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
.phases li {
  padding: 32px 28px 32px 0;
  border-right: 1px solid var(--ice-line);
  display: grid;
  gap: 14px;
  align-content: start;
}
.phases li:last-child { border-right: 0; }
.phase-num {
  font-size: 36px;
  color: var(--brand-blue);
  line-height: 1;
}
.phases h4 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: 28px;
  line-height: 1;
}
.phases p {
  color: var(--ink-mute);
  font-size: 13.5px;
}

.deep {
  background: #fff;
  border: 1px solid var(--ice-line);
  border-radius: 18px;
  padding: clamp(2rem, 4vw, 3.5rem);
  margin-bottom: 24px;
  display: grid;
  gap: clamp(2rem, 4vw, 4rem);
  box-shadow: 0 12px 30px rgba(15,20,36,0.04);
}
@media (min-width: 880px) {
  .deep { grid-template-columns: 1fr 1.4fr; }
}
.deep header { display: grid; gap: 16px; align-content: start; }
.deep-eyebrow {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--brand-blue);
  font-weight: 500;
}
.deep h4 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(30px, 3.5vw, 44px);
  line-height: 1.04;
  letter-spacing: -0.015em;
}
.deep h4 em { font-style: italic; color: var(--brand-blue); }
.deep-body {
  color: var(--ink-soft);
  font-size: 16px;
  line-height: 1.65;
}
.deep-body p + p { margin-top: 16px; }
.deep-body strong { color: var(--ink); font-weight: 500; }
.tech {
  display: flex; flex-wrap: wrap; gap: 8px;
  margin-top: 24px;
}
.tech li {
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--ice-line);
  background: var(--ice);
  color: var(--ink-soft);
  font-size: 13px;
}

.band {
  margin: 24px 0;
  border-radius: 6px;
  overflow: hidden;
  aspect-ratio: 21 / 9;
  background: #fff;
}
.band :deep(img) { width: 100%; height: 100%; object-fit: cover; }

/* ============ IA ============ */
.ia { background: var(--bone); }
.ia .wrap { max-width: 1280px; }

.ia-grid {
  display: grid;
  gap: clamp(3rem, 5vw, 5rem);
  align-items: start;
}
@media (min-width: 980px) {
  .ia-grid { grid-template-columns: 1fr 1fr; align-items: center; }
}

.ia-text { display: grid; gap: 24px; align-content: start; }

.ia-lede {
  font-size: 17px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 50ch;
}

.ia-cta { padding: 12px 22px; justify-self: start; }

.ia-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-top: 24px;
  padding-top: 32px;
  border-top: 1px solid var(--line);
}
.ia-feature { display: grid; gap: 10px; }
.ia-feature-icon {
  width: 36px; height: 36px;
  border-radius: 8px;
  background: rgba(0,97,234,0.08);
  color: var(--brand-blue);
  display: inline-flex; align-items: center; justify-content: center;
  margin-bottom: 6px;
}
.ia-feature-icon svg { width: 18px; height: 18px; }
.ia-feature h4 {
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
}
.ia-feature p {
  font-size: 14.5px;
  line-height: 1.55;
  color: var(--ink-mute);
}

/* photo + floating phase card */
.ia-photo {
  position: relative;
  aspect-ratio: 4 / 3;
  max-height: calc(100svh - 200px);
  --notch-r: 22px;
}

.ia-photo-frame {
  position: absolute; inset: 0;
  border-radius: 18px;
  overflow: hidden;
  background: var(--cream);
}
.ia-photo-frame :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
}

.phase-card {
  position: absolute;
  left: clamp(8%, 8%, 12%);
  bottom: clamp(8%, 8%, 12%);
  width: min(74%, 320px);
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 18px 40px rgba(15,20,36,0.18), 0 4px 8px rgba(15,20,36,0.06);
  padding: 8px;
  z-index: 2;
}
.phase-card-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 12px 12px;
}
.phase-card-label {
  font-size: 12.5px;
  font-weight: 500;
  color: var(--ink);
}
.phase-card-chev {
  width: 22px; height: 22px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-mute);
}
.phase-card-chev svg { width: 16px; height: 16px; }

.phase-list {
  display: grid;
  border-top: 1px solid var(--line);
  padding-top: 4px;
}
.phase-list li {
  display: flex; align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 13.5px;
  color: var(--ink-soft);
}
.phase-list li.is-active { background: rgba(0,97,234,0.08); color: var(--ink); }
.phase-icon {
  width: 22px; height: 22px;
  display: inline-flex; align-items: center; justify-content: center;
  color: var(--ink-mute);
  flex-shrink: 0;
}
.phase-list li.is-active .phase-icon { color: var(--brand-blue); }
.phase-icon svg { width: 16px; height: 16px; }
.phase-text { font-weight: 500; }

/* IA — proposition 3 (avec photo) */
.ia .sec-title em { color: var(--brand-blue); }

.ia .ia-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 4.5rem);
  align-items: start;
}
@media (min-width: 980px) {
  .ia .ia-grid { grid-template-columns: 5fr 6fr; align-items: start; }
}

.ia .ia-photo {
  position: sticky;
  top: 100px;
  align-self: start;
}
.ia .ia-photo-frame {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  background: var(--cream);
  aspect-ratio: 4 / 5;
  max-height: 70vh;
  box-shadow: 0 30px 60px -30px rgba(0,0,127,0.25);
}
.ia .ia-photo-frame :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
}
.ia-photo-tag {
  position: absolute;
  bottom: 18px;
  left: 18px;
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(10px);
  padding: 9px 16px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: var(--brand-navy);
  border: 1px solid rgba(255,255,255,0.6);
  box-shadow: 0 6px 20px -8px rgba(0,0,127,0.25);
}
.ia-photo-tag-dot {
  width: 8px; height: 8px;
  border-radius: 999px;
  background: var(--brand-blue);
  box-shadow: 0 0 0 4px rgba(0,97,234,0.18);
}

.ia-content {
  display: grid;
  gap: clamp(2rem, 3.5vw, 2.75rem);
  align-content: start;
}
.ia-content .ia-lede {
  font-size: 19px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 56ch;
}

.ia-approach { display: grid; gap: 20px; }
.ia-approach-eyebrow {
  display: block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brand-blue);
}

.ia-timeline {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
}
.ia-timeline li {
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 20px;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--ice-line);
  transition: padding-left .25s ease, color .25s ease;
}
.ia-timeline li:first-child { padding-top: 4px; }
.ia-timeline li:last-child { border-bottom: 0; }
.ia-timeline li:hover { padding-left: 10px; }
.ia-timeline-num {
  font-size: 30px;
  line-height: 1;
  color: var(--brand-blue);
  transition: color .25s ease;
}
.ia-timeline li:hover .ia-timeline-num { color: var(--brand-navy); }
.ia-timeline-text {
  font-size: 16px;
  line-height: 1.45;
  color: var(--ink);
  font-weight: 500;
}

.ia-foot { display: flex; }

@media (max-width: 979px) {
  .ia .ia-photo { position: relative; top: auto; }
}

@media (max-width: 720px) {
  .ia-features { grid-template-columns: 1fr; }
  .ia-photo { aspect-ratio: 4 / 5; }
  .phase-card { width: min(86%, 320px); }
}

/* ============ REFERENCES ============ */
.refs { background: var(--cream); }

.refs-head {
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 18px;
  margin-bottom: clamp(3rem, 5vw, 4.5rem);
}
.refs-head .sec-num { line-height: 0.85; }
.refs-head .sec-eyebrow { margin-bottom: 0; }
.refs-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(36px, 5.2vw, 68px);
  line-height: 1.04;
  letter-spacing: -0.02em;
  max-width: 22ch;
}
.refs-title em { font-style: italic; color: var(--brand-blue); }
.refs-cta { padding: 12px 22px; }

.testi-row {
  display: grid;
  gap: 24px;
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
@media (min-width: 720px) {
  .testi-row { grid-template-columns: 1fr 1fr; }
}
@media (min-width: 1080px) {
  .testi-row { grid-template-columns: 1fr 1fr 1fr; }
}

.testi-photo {
  border-radius: 14px;
  overflow: hidden;
  background: var(--cream);
  aspect-ratio: 4 / 3;
}
.testi-photo :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 1079px) { .testi-photo { aspect-ratio: 16 / 10; } }

.testi-card {
  position: relative;
  background: var(--paper);
  border-radius: 14px;
  padding: clamp(28px, 3.2vw, 40px);
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 28px;
}

.testi-quote {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(20px, 2.1vw, 26px);
  line-height: 1.3;
  letter-spacing: -0.01em;
  color: var(--ink);
}
.testi-quote::before { content: '« '; color: var(--brand-blue); font-style: italic; }
.testi-quote::after  { content: ' »'; color: var(--brand-blue); font-style: italic; }

.testi-foot {
  display: flex; align-items: end; justify-content: space-between;
  gap: 16px;
  padding-right: 116px;
}
.testi-cite { display: grid; gap: 4px; }
.testi-name {
  font-size: 15.5px;
  font-weight: 500;
  color: var(--ink);
}
.testi-role {
  font-size: 12.5px;
  letter-spacing: 0.06em;
  color: var(--ink-mute);
}

/* notch in bottom-right with logo "biting" into the card */
.testi-mark {
  --notch: 14px;
  position: absolute;
  right: 0; bottom: 0;
  width: 132px; height: 132px;
  padding: var(--notch) 0 0 var(--notch);
  background: var(--cream);
  border-top-left-radius: 22px;
  display: flex; align-items: center; justify-content: center;
}
.testi-mark::before,
.testi-mark::after {
  content: '';
  position: absolute;
  width: 22px; height: 22px;
  background: var(--cream);
  pointer-events: none;
}
.testi-mark::before {
  top: -22px; left: 0;
  -webkit-mask: radial-gradient(circle at 0 100%, transparent 22px, #000 22.5px);
          mask: radial-gradient(circle at 0 100%, transparent 22px, #000 22.5px);
}
.testi-mark::after {
  left: -22px; bottom: 0;
  -webkit-mask: radial-gradient(circle at 100% 0, transparent 22px, #000 22.5px);
          mask: radial-gradient(circle at 100% 0, transparent 22px, #000 22.5px);
}
.testi-mark :deep(img) {
  width: 100%; height: 100%;
  object-fit: contain;
  background: #fff;
  border-radius: 12px;
  padding: 10px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
@media (min-width: 720px) { .stats { grid-template-columns: repeat(4, 1fr) 1.4fr; } }

.stat {
  padding: clamp(28px, 3.5vw, 44px) 24px;
  border-right: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
@media (min-width: 720px) {
  .stat { border-bottom: 0; }
  .stat:last-child { border-right: 0; }
}
.stat-num {
  font-family: var(--font-serif);
  font-size: clamp(54px, 6vw, 84px);
  line-height: 1;
  letter-spacing: -0.02em;
  color: var(--brand-blue);
  margin-bottom: 14px;
}
.stat-num em { font-style: italic; color: var(--brand-cyan); }
.stat-label {
  font-size: 13.5px;
  color: var(--ink-soft);
  line-height: 1.4;
  max-width: 20ch;
}
.stat-wide { grid-column: 1 / -1; }
@media (min-width: 720px) { .stat-wide { grid-column: auto; border-right: 0; } }

.stat-label-mini {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  margin-bottom: 16px;
  font-weight: 500;
}
.stat-cities {
  font-family: var(--font-serif);
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: -0.01em;
}

/* ============ EQUIPE ============ */
.team {
  position: relative;
  background: var(--bone);
  overflow: hidden;
}
.team .wrap { max-width: 1280px; }

.team-callout {
  position: relative;
  background: var(--brand-navy);
  color: var(--bone);
  border-radius: 28px;
  padding: clamp(1.75rem, 3vw, 2.5rem);
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  margin-bottom: clamp(3rem, 5vw, 4.5rem);
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,127,0.18), 0 8px 20px rgba(0,0,127,0.08);
}
@media (min-width: 880px) {
  .team-callout {
    grid-template-columns: 1fr 1fr;
    align-items: stretch;
    padding: clamp(2.5rem, 4vw, 4rem);
    gap: clamp(2rem, 4vw, 4rem);
  }
}

.team-callout-text {
  display: grid;
  align-content: space-between;
  gap: clamp(2rem, 3vw, 3rem);
  padding: clamp(0.5rem, 1vw, 1rem) 0;
}
.team-callout-eyebrow {
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.55);
  font-weight: 500;
}
.team-callout-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(34px, 4.4vw, 60px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 14ch;
  color: var(--bone);
}
.team-callout-title em { font-style: italic; color: var(--brand-cyan); }

.team-callout-body {
  font-size: 15.5px;
  line-height: 1.6;
  color: rgba(255,255,255,0.78);
  max-width: 50ch;
}

.team-callout-cta { justify-self: start; }
.btn-ice {
  background: #fff;
  color: var(--ink);
}
.btn-ice:hover { background: var(--brand-cyan); color: var(--brand-navy); }
.btn-ice .btn-arrow { background: var(--ink); color: #fff; }
.btn-ice:hover .btn-arrow { background: var(--brand-navy); color: var(--brand-cyan); }

.team-callout-photo {
  position: relative;
  border-radius: 18px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  background: rgba(255,255,255,0.04);
}
@media (min-width: 880px) {
  .team-callout-photo { aspect-ratio: auto; min-height: 360px; }
}
.team-callout-photo :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
}

.duo {
  display: grid;
  gap: clamp(3rem, 5vw, 5rem);
  margin-bottom: clamp(3rem, 6vw, 5rem);
}
@media (min-width: 980px) { .duo { grid-template-columns: 1fr 1fr; } }

.player { display: grid; gap: 28px; }
.player-photo {
  position: relative;
  height: clamp(320px, 36vw, 520px);
  border-radius: 14px;
  overflow: hidden;
  background: var(--cream);
}
.player-photo :deep(picture),
.player-photo :deep(img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.player-meta { display: grid; gap: 14px; }
.player-role {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--rust);
  font-weight: 500;
}
.player-name {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(36px, 4vw, 52px);
  line-height: 1;
  letter-spacing: -0.02em;
}
.player-name-last {
  font-family: var(--font-sans);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  font-size: 0.78em;
  margin-left: 0.25em;
}
.player-tag {
  font-size: clamp(18px, 2vw, 22px);
  color: var(--rust);
}
.player-text {
  font-size: 15.5px;
  line-height: 1.65;
  color: var(--ink-soft);
}
.player-text strong { color: var(--ink); font-weight: 500; }
.player-text + .player-text { margin-top: 8px; }

.team-conclusion {
  font-family: var(--font-serif);
  font-size: clamp(28px, 3.5vw, 44px);
  line-height: 1.15;
  letter-spacing: -0.015em;
  max-width: 24ch;
  border-top: 1px solid var(--line);
  padding-top: clamp(2rem, 4vw, 3rem);
}
.team-conclusion em { font-style: italic; color: var(--rust); }

/* ============ CONTACT ============ */
.contact {
  position: relative;
  color: var(--ink);
  background:
    radial-gradient(ellipse 60% 40% at 12% 10%, rgba(0,212,210,0.32), transparent 65%),
    radial-gradient(ellipse 55% 35% at 88% 18%, rgba(75,0,132,0.22), transparent 65%),
    radial-gradient(ellipse 70% 50% at 50% 95%, rgba(0,97,234,0.28), transparent 65%),
    radial-gradient(ellipse 50% 35% at 95% 80%, rgba(0,179,216,0.22), transparent 65%),
    var(--bone);
  overflow: hidden;
}

.contact-card {
  background: var(--cream);
  border-radius: clamp(20px, 2.5vw, 32px);
  padding: clamp(2rem, 4vw, 4rem);
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
  box-shadow: 0 30px 80px rgba(15,20,36,0.08), 0 8px 20px rgba(15,20,36,0.04);
}
@media (min-width: 880px) {
  .contact-card { grid-template-columns: 1fr 1.05fr; align-items: start; }
}

.contact-side {
  display: grid;
  gap: 24px;
  align-content: start;
}
.contact-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(36px, 4.4vw, 60px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  max-width: 14ch;
}
.contact-title em { font-style: italic; color: var(--brand-blue); }

.contact-lead {
  font-size: 17px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 44ch;
}
.contact-details {
  margin-top: 16px;
  display: grid;
  gap: 0;
}
.contact-details > div {
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 20px;
  padding: 16px 0;
  border-top: 1px solid var(--ice-line);
  align-items: baseline;
}
.contact-details > div:last-child { border-bottom: 1px solid var(--ice-line); }
.contact-details dt {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
}
.contact-details dd { font-size: 15px; color: var(--ink); }
.contact-details a:hover { color: var(--brand-blue); }

.oria-form {
  display: grid;
  gap: 18px;
}
.oria-form label {
  display: grid;
  gap: 8px;
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
}
.oria-form input,
.oria-form textarea,
.oria-form select {
  width: 100%;
  background: rgba(15,20,36,0.04);
  border: 1px solid transparent;
  border-radius: 12px;
  color: var(--ink);
  font-size: 15px;
  padding: 14px 16px;
  outline: none;
  text-transform: none;
  letter-spacing: 0;
  transition: background .2s ease, border-color .2s ease;
}
.oria-form input::placeholder,
.oria-form textarea::placeholder { color: var(--ink-mute); }
.oria-form input:focus,
.oria-form textarea:focus,
.oria-form select:focus {
  background: #fff;
  border-color: var(--brand-blue);
}
.oria-form textarea { resize: vertical; min-height: 110px; }
.oria-form select { appearance: none; cursor: pointer; }

.row-2 { display: grid; gap: 18px; }
@media (min-width: 600px) { .row-2 { grid-template-columns: 1fr 1fr; } }

.form-foot {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
  margin-top: 8px;
}
.form-note {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
}
.oria-form .btn-rust {
  border-radius: 999px;
  padding: 14px 22px;
}
.oria-form .btn-rust .btn-arrow {
  background: #fff;
  color: var(--brand-blue);
}

/* ============ FAQ ============ */
.faq { background: var(--bone); }
.faq-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
}
@media (min-width: 880px) { .faq-grid { grid-template-columns: 1fr 1.4fr; align-items: start; } }

.faq-head { display: grid; gap: 14px; }
.faq-head .sec-num { font-size: clamp(64px, 8vw, 110px); }
.faq-head .sec-eyebrow { margin-bottom: 0; }
.faq-side {
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--ink-mute);
  line-height: 1.7;
  margin-top: 16px;
}

.faq-list { display: grid; }
.faq-item { border-top: 1px solid var(--line); }
.faq-item:last-child { border-bottom: 1px solid var(--line); }
.faq-q {
  width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  gap: 32px;
  padding: 26px 0;
  text-align: left;
  transition: color .2s ease;
}
.faq-q span:first-child {
  font-family: var(--font-sans);
  font-size: clamp(18px, 1.8vw, 21px);
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.005em;
}
.faq-item:hover .faq-q span:first-child { color: var(--rust); }

.plus {
  position: relative;
  width: 32px; height: 32px;
  border-radius: 999px;
  border: 1px solid var(--line);
  flex-shrink: 0;
  transition: background .2s ease, border-color .2s ease, transform .3s ease;
}
.plus::before, .plus::after {
  content: '';
  position: absolute;
  background: var(--ink);
  inset: 0;
  margin: auto;
  transition: transform .2s ease, background .2s ease;
}
.plus::before { width: 12px; height: 1.5px; }
.plus::after { width: 1.5px; height: 12px; }
.faq-item.open .plus { background: var(--ink); border-color: var(--ink); transform: rotate(45deg); }
.faq-item.open .plus::before, .faq-item.open .plus::after { background: var(--bone); }

.faq-a {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .3s ease;
}
.faq-a > p {
  overflow: hidden;
  font-size: 15px;
  line-height: 1.65;
  color: var(--ink-soft);
  padding-bottom: 0;
}
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-item.open .faq-a > p { padding-bottom: 26px; }

/* ============ FOOTER ============ */
.footer {
  background: var(--ice);
  color: var(--ink-soft);
  padding-top: clamp(3rem, 6vw, 5rem);
  padding-bottom: 32px;
  border-top: 1px solid var(--ice-line);
}
.footer .wrap { max-width: 1280px; }

.footer-top {
  display: grid;
  gap: 16px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--ice-line);
  margin-bottom: 40px;
  max-width: 56ch;
}
.footer-brand {
  display: inline-flex; align-items: center;
}
.footer-brand-logo {
  height: 96px;
  width: auto;
  display: block;
}
.footer-tag { font-size: 14.5px; line-height: 1.6; color: var(--ink-soft); }

.footer-cols {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 32px;
  padding-bottom: 60px;
}
.footer-cols .col h5 {
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
  margin-bottom: 18px;
}
.footer-cols .col a {
  display: block;
  color: var(--ink);
  font-size: 14px;
  margin-bottom: 10px;
}
.footer-cols .col a:hover { color: var(--brand-blue); }
.footer-cols .col p { font-size: 14px; line-height: 1.6; color: var(--ink-soft); }

.footer-mega {
  font-size: clamp(72px, 14vw, 200px);
  line-height: 0.85;
  color: rgba(0,0,127,0.08);
  letter-spacing: -0.04em;
  padding: 12px 0 20px;
}

.footer-bottom {
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px;
  padding-top: 24px;
  border-top: 1px solid var(--ice-line);
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
}

@media (max-width: 720px) {
  .sec-head { grid-template-columns: 1fr; gap: 18px; }
  .sec-num { font-size: 56px; }
  .hero-meta > div { grid-template-columns: 1fr; gap: 4px; }
  .contact-details > div { grid-template-columns: 1fr; gap: 4px; }
}

/* ============ ANIMATIONS ============ */
.atelier-root .reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity .85s cubic-bezier(.22,.61,.36,1),
    transform .85s cubic-bezier(.22,.61,.36,1);
  will-change: opacity, transform;
}
.atelier-root .reveal.is-visible {
  opacity: 1;
  transform: none;
}

.atelier-root .reveal-stagger > * {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity .7s cubic-bezier(.22,.61,.36,1),
    transform .7s cubic-bezier(.22,.61,.36,1);
}
.atelier-root .reveal-stagger.is-visible > * { opacity: 1; transform: none; }
.atelier-root .reveal-stagger.is-visible > *:nth-child(1) { transition-delay: 0s; }
.atelier-root .reveal-stagger.is-visible > *:nth-child(2) { transition-delay: .08s; }
.atelier-root .reveal-stagger.is-visible > *:nth-child(3) { transition-delay: .16s; }
.atelier-root .reveal-stagger.is-visible > *:nth-child(4) { transition-delay: .24s; }
.atelier-root .reveal-stagger.is-visible > *:nth-child(5) { transition-delay: .32s; }

/* image hover zoom (subtle) */
.hero-photo-frame :deep(img),
.testi-photo :deep(img),
.player-photo :deep(img),
.ia-photo-frame :deep(img),
.band :deep(img) {
  transition: transform 1.1s cubic-bezier(.2,.7,.2,1);
}
.hero-photo:hover .hero-photo-frame :deep(img),
.testi-photo:hover :deep(img),
.player-photo:hover :deep(img),
.ia-photo:hover .ia-photo-frame :deep(img),
.band:hover :deep(img) { transform: scale(1.04); }

/* card lift on hover */
.play, .testi-card, .deep, .ia-feature {
  transition: transform .35s cubic-bezier(.22,.61,.36,1);
}
.testi-card:hover { transform: translateY(-4px); }
.ia-feature:hover { transform: translateY(-3px); }

/* phase card gentle float */
.phase-card { animation: oria-float 7s ease-in-out infinite; }
@keyframes oria-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

/* avatars subtle stagger appear in hero */
.hero-text.is-visible .ava {
  animation: oria-pop .7s cubic-bezier(.22,.61,.36,1) both;
}
.hero-text.is-visible .ava-1 { animation-delay: .35s; }
.hero-text.is-visible .ava-2 { animation-delay: .42s; }
.hero-text.is-visible .ava-3 { animation-delay: .49s; }
.hero-text.is-visible .ava-4 { animation-delay: .56s; }
@keyframes oria-pop {
  0% { opacity: 0; transform: scale(.6); }
  100% { opacity: 1; transform: scale(1); }
}

/* faq plus rotation already styled, keep */

/* respect motion preferences */
@media (prefers-reduced-motion: reduce) {
  .atelier-root .reveal,
  .atelier-root .reveal-stagger > * {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
  }
  .phase-card { animation: none; }
  .hero-text.is-visible .ava { animation: none; }
}
</style>
