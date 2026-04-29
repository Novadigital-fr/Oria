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

const submitNote = ref('Réponse sous 48 h ouvrées')
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
  { n: '35', label: 'Projets réalisés' },
  { n: '9', label: 'Implémentations S/4HANA Greenfield' },
  { n: '3', label: 'Conversions S/4HANA Brownfield' }
]
</script>

<template>
  <div class="atelier-root">
    <nav :class="['nav', { 'is-scrolled': scrolled }]">
      <a href="#" class="brand" aria-label="ORIA Solutions">
        <img
          src="/assets/img/oria-logo.svg"
          alt="ORIA Solutions"
          class="brand-logo"
        />
      </a>
      <div class="nav-links">
        <a href="#approche">Approche</a>
        <a href="#expertises">Expertises</a>
        <a href="#ia">IA</a>
        <a href="#equipe">Équipe</a>
      </div>
      <a href="#contact" class="nav-cta">Nous contacter</a>
    </nav>

    <!-- ============ HERO ============ -->
    <section class="hero">
      <div class="wrap hero-grid">
        <div class="hero-text">
          <span class="hero-pill">ORIA Solutions — Saison 2026</span>
          <h1 class="hero-title">
            Nous faisons avancer vos projets SAP avec précision, engagement et <em>sens du jeu collectif.</em>
          </h1>
          <p class="hero-lede">
            Expertise fonctionnelle, développement sur mesure, vision terrain : ORIA Solutions accompagne les entreprises industrielles à chaque étape de leurs projets SAP &amp; S/4HANA.
          </p>
          <div class="hero-actions">
            <a class="btn btn-dark" href="#contact">
              Prendre la mise au jeu
              <span class="btn-arrow" aria-hidden="true">→</span>
            </a>
            <a class="btn btn-ghost" href="#equipe">Rencontrer l'équipe</a>
          </div>
          <div class="hero-bottom">
            <div class="avatars" aria-hidden="true">
              <span class="ava ava-1"></span>
              <span class="ava ava-2"></span>
              <span class="ava ava-3"></span>
              <span class="ava ava-4"></span>
            </div>
            <p class="hero-trust">
              <strong>+25 ans</strong> d'expérience cumulée — <span class="muted">35 projets SAP livrés</span>
            </p>
          </div>
        </div>

        <div class="hero-photo">
          <div class="hero-photo-frame">
            <NuxtImg
              src="/assets/img/equipe.webp"
              alt=""
              width="1400"
              height="1600"
              loading="eager"
            />
          </div>
          <a href="#references" class="case-card" aria-label="Voir les références">
            <div class="case-thumb">
              <NuxtImg
                src="/assets/img/webdev.webp"
                alt=""
                width="120"
                height="120"
                loading="eager"
              />
            </div>
            <div class="case-body">
              <p class="case-title">
                S/4HANA Greenfield&nbsp;: 9 implémentations menées en industrie agroalimentaire et tech.
              </p>
              <div class="case-foot">
                <span class="case-tag">Étude de cas</span>
                <span class="case-arr" aria-hidden="true">→</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- ============ APPROCHE ============ -->
    <section id="approche" class="section approche">
      <div class="wrap">
        <header class="sec-head">
          <span class="sec-num serif-italic">01</span>
          <div>
            <h2 class="sec-eyebrow">Approche</h2>
            <h3 class="sec-title">Notre <em>terrain</em> de jeu.</h3>
          </div>
        </header>

        <p class="sec-intro">
          De l'analyse métier au développement technique, ORIA Solutions intervient là où il faut, avec le bon niveau d'expertise et le bon tempo.
        </p>

        <div class="play-grid">
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
        <header class="sec-head">
          <span class="sec-num serif-italic">02</span>
          <div>
            <h2 class="sec-eyebrow">Expertises</h2>
            <h3 class="sec-title">De la lecture du terrain à la <em>mise en œuvre.</em></h3>
          </div>
        </header>

        <p class="sec-intro">
          Un bon projet SAP, ce n'est pas une suite de slides. C'est un enchaînement fluide entre compréhension, décision, exécution et amélioration continue.
        </p>

        <ol class="phases">
          <li v-for="p in phases" :key="p.n">
            <span class="phase-num serif-italic">{{ p.n }}</span>
            <h4>{{ p.title }}</h4>
            <p>{{ p.body }}</p>
          </li>
        </ol>

        <article class="deep">
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

        <div class="band">
          <NuxtImg
            src="/assets/img/webdev.webp"
            alt=""
            width="2400"
            height="1100"
            loading="lazy"
          />
        </div>

        <article class="deep">
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
        <header class="sec-head">
          <span class="sec-num serif-italic">03</span>
          <div>
            <h2 class="sec-eyebrow">Intelligence artificielle</h2>
            <h3 class="sec-title">L'IA, partie intégrante de SAP — pour aller <em>plus loin dans la partie.</em></h3>
          </div>
        </header>

        <div class="ia-grid">
        <div class="ia-text">
          <p class="ia-lede">
            Avant de déployer l'IA, il faut identifier les bons cas d'usage. Analyser l'existant, détecter les frictions, puis proposer des cas métiers crédibles et activables.
          </p>
          <a href="#contact" class="btn btn-ghost ia-cta">Échanger sur un cas d'usage</a>

          <div class="ia-features">
            <div class="ia-feature">
              <span class="ia-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 3v18"/>
                </svg>
              </span>
              <h4>Cadrage des cas d'usage</h4>
              <p>On part du métier, pas de la techno. Identifier les frictions à forte valeur avant de coder.</p>
            </div>
            <div class="ia-feature">
              <span class="ia-feature-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M4 7h16M4 12h10M4 17h16"/>
                  <circle cx="17" cy="12" r="2"/>
                </svg>
              </span>
              <h4>Intégration native BTP</h4>
              <p>Joule, Document Information Extractor, ML embarqué — branchés au cœur de S/4HANA, pas à côté.</p>
            </div>
          </div>
        </div>

        <div class="ia-photo">
          <div class="ia-photo-frame">
            <NuxtImg
              src="/assets/img/webdev.webp"
              alt=""
              width="1400"
              height="1400"
              loading="lazy"
            />
          </div>

          <div class="phase-card" aria-hidden="true">
            <div class="phase-card-head">
              <span class="phase-card-label">Phases du projet IA</span>
              <span class="phase-card-chev" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6">
                  <path d="M4 10l4-4 4 4"/>
                </svg>
              </span>
            </div>
            <ul class="phase-list">
              <li v-for="(s, i) in iaSteps" :key="i" :class="{ 'is-active': i === 0 }">
                <span class="phase-icon" aria-hidden="true">
                  <svg v-if="i === 0" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
                    <circle cx="8" cy="8" r="6"/>
                    <path d="M8 4v4l2.5 1.5"/>
                  </svg>
                  <svg v-else-if="i === 1" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
                    <circle cx="8" cy="8" r="5.5"/>
                    <circle cx="8" cy="8" r="2"/>
                    <path d="M8 1v2M8 13v2M1 8h2M13 8h2"/>
                  </svg>
                  <svg v-else-if="i === 2" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
                    <circle cx="7" cy="7" r="4.5"/>
                    <path d="M10.5 10.5l3 3"/>
                  </svg>
                  <svg v-else-if="i === 3" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
                    <path d="M8 2l-1.8 5.5h-4.2l3.4 2.5-1.3 4 3.9-2.7 3.9 2.7-1.3-4 3.4-2.5h-4.2z"/>
                  </svg>
                  <svg v-else viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4">
                    <path d="M2 13V3M2 13h12M5 11l3-3 2 2 4-4"/>
                  </svg>
                </span>
                <span class="phase-text">{{ s }}</span>
              </li>
            </ul>
          </div>
        </div>
        </div>
      </div>
    </section>

    <!-- ============ REFERENCES ============ -->
    <section id="references" class="section refs">
      <div class="wrap">
        <header class="refs-head">
          <span class="sec-num serif-italic">04</span>
          <h2 class="sec-eyebrow">Références</h2>
          <h3 class="refs-title">
            Le vrai bilan de match, ce sont nos <em>clients</em> qui le racontent.
          </h3>
          <a href="#contact" class="btn btn-ghost refs-cta">Nous contacter</a>
        </header>

        <div class="testi-row">
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

        <div class="stats">
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
        <header class="sec-head">
          <span class="sec-num serif-italic">05</span>
          <div>
            <h2 class="sec-eyebrow">Équipe</h2>
            <h3 class="sec-title">Notre duo <em>sur le terrain.</em></h3>
          </div>
        </header>

        <div class="duo">
          <article class="player">
            <div class="player-photo">
              <NuxtImg
                src="/assets/img/equipe.webp"
                alt="Portrait Delphine Pfleger"
                width="900"
                height="1125"
                loading="lazy"
              />
              <span class="jersey serif-italic">07</span>
            </div>
            <div class="player-meta">
              <div class="player-role">L'attaquante</div>
              <h4 class="player-name">Delphine Pfleger</h4>
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
                src="/assets/img/equipe.webp"
                alt="Portrait Fabrice Garnier"
                width="900"
                height="1125"
                loading="lazy"
              />
              <span class="jersey serif-italic">22</span>
            </div>
            <div class="player-meta">
              <div class="player-role">Le défenseur</div>
              <h4 class="player-name">Fabrice Garnier</h4>
              <p class="player-tag serif-italic">— précision technique, exécution</p>
              <p class="player-text">
                Fabrice conçoit et développe des solutions SAP sur mesure, avec une approche très technique et une vraie culture du <strong>Cloud</strong>. Son mantra est simple : <strong>S/4HANA est le cœur</strong> du système, et on ne doit jamais l'oublier. Ici, chaque choix doit servir le métier, pas l'inverse.
              </p>
              <p class="player-text">
                Pour garder sa maîtrise, Fabrice aime avoir un pied dehors : les <strong>voyages</strong> sont son terrain de jeu pour prendre du recul, s'inspirer et revenir avec de nouvelles idées.
              </p>
            </div>
          </article>
        </div>

      </div>
    </section>

    <!-- ============ CONTACT ============ -->
    <section id="contact" class="section contact">
      <div class="wrap">
        <header class="sec-head sec-head-light">
          <span class="sec-num serif-italic">06</span>
          <div>
            <h2 class="sec-eyebrow">Contact</h2>
            <h3 class="sec-title">Prenons la <em>mise au jeu.</em></h3>
          </div>
        </header>

        <div class="contact-grid">
          <div class="contact-side">
            <p class="contact-lead">
              Vous avez une problématique métier, un besoin d'évolution SAP, un sujet S/4HANA ou une réflexion logicielle autour de l'IA ? Parlons-en.
            </p>
            <dl class="contact-details">
              <div>
                <dt>Email</dt>
                <dd><a href="mailto:contact@oria-solutions.fr">contact@oria-solutions.fr</a></dd>
              </div>
              <div>
                <dt>Téléphone</dt>
                <dd>+33 (0)X XX XX XX XX</dd>
              </div>
              <div>
                <dt>Siège</dt>
                <dd>Strasbourg, France</dd>
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
                <input type="text" name="fn" required />
              </label>
              <label>
                Nom
                <input type="text" name="ln" required />
              </label>
            </div>
            <label>
              Email professionnel
              <input type="email" name="email" required />
            </label>
            <label>
              Société
              <input type="text" name="co" />
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
              <textarea name="msg" rows="3" required></textarea>
            </label>
            <div class="form-foot">
              <span class="form-note">{{ submitNote }}</span>
              <button type="submit" class="btn btn-rust">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- ============ FAQ ============ -->
    <section class="section faq">
      <div class="wrap faq-grid">
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
              src="/assets/img/oria-logo.svg"
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
            <p>Strasbourg, France<br>Interventions internationales</p>
          </div>
        </div>

        <div class="footer-mega serif-italic">Oria — 2026</div>
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

  --max: 1280px;
  --gutter: clamp(1.25rem, 4vw, 2.5rem);
  --section-y: clamp(5rem, 11vw, 10rem);

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

.atelier-root a { color: inherit; text-decoration: none; }
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
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 20px var(--gutter);
  gap: 1.5rem;
  background: color-mix(in srgb, var(--bone) 86%, transparent);
  backdrop-filter: saturate(140%) blur(14px);
  -webkit-backdrop-filter: saturate(140%) blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color .2s ease;
}
.nav.is-scrolled { border-bottom-color: var(--line); }

.brand {
  display: inline-flex; align-items: center;
  color: var(--ink);
}
.brand-logo {
  height: 38px;
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
  padding: 4px 0;
  transition: color .2s ease;
}
.nav-links a:hover { color: var(--rust); }

.nav-cta {
  display: none;
  padding: 11px 22px;
  border-radius: 999px;
  background: var(--ink);
  color: var(--bone);
  font-size: 13.5px;
  font-weight: 500;
  transition: background .2s ease;
}
.nav-cta:hover { background: var(--rust); }

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
.btn-dark { background: var(--ink); color: #fff; }
.btn-dark:hover { background: var(--brand-blue); }
.btn-arrow {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px;
  border-radius: 999px;
  background: var(--bone);
  color: var(--ink);
  font-size: 12px;
  margin-right: -8px;
}
.btn-ghost {
  background: transparent;
  color: var(--ink);
  border: 1px solid var(--line);
}
.btn-ghost:hover { background: var(--ink); color: var(--bone); border-color: var(--ink); }
.btn-rust { background: var(--brand-blue); color: #fff; border-radius: 8px; }
.btn-rust:hover { background: var(--brand-navy); }

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
  padding-top: clamp(2.5rem, 6vw, 5rem);
  padding-bottom: clamp(3rem, 7vw, 6rem);
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

/* ---- Photo with notched corner + case-study card ---- */
.hero-photo {
  position: relative;
  --notch-pad: 14px;
}
.hero-photo-frame {
  position: relative;
  aspect-ratio: 5 / 6;
  border-radius: 18px;
  overflow: hidden;
  background: var(--cream);
}
.hero-photo-frame :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
}

.case-card {
  position: absolute;
  right: 0;
  bottom: 0;
  width: min(64%, 360px);
  display: grid;
  grid-template-columns: 64px 1fr;
  gap: 14px;
  padding: var(--notch-pad) 0 0 var(--notch-pad);
  background: var(--bone);
  border-top-left-radius: 22px;
  align-items: center;
  text-decoration: none;
  color: var(--ink);
}
.case-card::before,
.case-card::after {
  content: '';
  position: absolute;
  width: 22px; height: 22px;
  background: var(--bone);
  pointer-events: none;
}
.case-card::before {
  top: -22px; left: 0;
  border-bottom-left-radius: 22px;
  box-shadow: -8px 8px 0 var(--bone);
  -webkit-mask: radial-gradient(circle at 0 100%, transparent 22px, #000 22.5px);
          mask: radial-gradient(circle at 0 100%, transparent 22px, #000 22.5px);
}
.case-card::after {
  left: -22px; bottom: 0;
  border-top-right-radius: 22px;
  -webkit-mask: radial-gradient(circle at 100% 0, transparent 22px, #000 22.5px);
          mask: radial-gradient(circle at 100% 0, transparent 22px, #000 22.5px);
}

.case-thumb {
  aspect-ratio: 1;
  border-radius: 10px;
  overflow: hidden;
  background: var(--cream);
}
.case-thumb :deep(img) { width: 100%; height: 100%; object-fit: cover; }

.case-body { display: grid; gap: 8px; padding-right: 4px; }
.case-title {
  font-size: 13px;
  line-height: 1.35;
  color: var(--ink);
  font-weight: 500;
}
.case-foot { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.case-tag {
  font-size: 10px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-mute);
  background: rgba(28,24,20,0.04);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 4px 10px;
  font-weight: 500;
}
.case-arr {
  width: 26px; height: 26px;
  border-radius: 999px;
  border: 1px solid var(--line);
  display: inline-flex; align-items: center; justify-content: center;
  font-size: 12px;
  color: var(--ink-mute);
  transition: all .2s ease;
}
.case-card:hover .case-arr { background: var(--ink); border-color: var(--ink); color: var(--bone); }

/* ============ APPROCHE ============ */
.approche { background: var(--bone); }

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
  background: var(--ink);
  color: var(--bone);
  border-color: var(--ink);
}

/* ============ EXPERTISES ============ */
.expertises {
  background: var(--ice);
  color: var(--ink);
}
.expertises .sec-head {
  border-bottom-color: var(--ice-line);
}
.expertises .sec-num { color: var(--brand-blue); }
.expertises .sec-eyebrow { color: var(--ink-mute); }
.expertises .sec-title em { color: var(--brand-blue); }
.expertises .sec-intro { color: var(--ink-soft); }

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
  border-top: 1px solid var(--ice-line);
  border-bottom: 1px solid var(--ice-line);
  padding: clamp(2rem, 4vw, 3.5rem) 0;
  margin-bottom: 24px;
  display: grid;
  gap: clamp(2rem, 4vw, 4rem);
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
  background: #fff;
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
  aspect-ratio: 1 / 1;
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
  aspect-ratio: 4 / 5;
  min-height: 380px;
}
.testi-photo :deep(img) {
  width: 100%; height: 100%;
  object-fit: cover;
  display: block;
}
@media (max-width: 1079px) { .testi-photo { aspect-ratio: 16 / 10; min-height: 0; } }

.testi-card {
  position: relative;
  background: var(--paper);
  border-radius: 14px;
  padding: clamp(28px, 3.2vw, 40px);
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 28px;
  min-height: 380px;
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
  padding-right: 76px;
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
  width: 92px; height: 92px;
  padding: var(--notch) 0 0 var(--notch);
  background: var(--cream);
  border-top-left-radius: 18px;
  display: flex; align-items: center; justify-content: center;
}
.testi-mark::before,
.testi-mark::after {
  content: '';
  position: absolute;
  width: 18px; height: 18px;
  background: var(--cream);
  pointer-events: none;
}
.testi-mark::before {
  top: -18px; left: 0;
  -webkit-mask: radial-gradient(circle at 0 100%, transparent 18px, #000 18.5px);
          mask: radial-gradient(circle at 0 100%, transparent 18px, #000 18.5px);
}
.testi-mark::after {
  left: -18px; bottom: 0;
  -webkit-mask: radial-gradient(circle at 100% 0, transparent 18px, #000 18.5px);
          mask: radial-gradient(circle at 100% 0, transparent 18px, #000 18.5px);
}
.testi-mark :deep(img) {
  width: 100%; height: 100%;
  object-fit: contain;
  background: #fff;
  border-radius: 10px;
  padding: 8px;
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
  color: var(--ink);
  margin-bottom: 14px;
}
.stat-num em { font-style: italic; color: var(--rust); }
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
  background:
    radial-gradient(ellipse 70% 40% at 18% 8%, rgba(0,212,210,0.28), transparent 65%),
    radial-gradient(ellipse 55% 35% at 88% 12%, rgba(75,0,132,0.18), transparent 65%),
    radial-gradient(ellipse 80% 45% at 50% 96%, rgba(0,97,234,0.22), transparent 65%),
    var(--bone);
  overflow: hidden;
}

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
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  overflow: hidden;
  background: var(--cream);
}
.player-photo :deep(img) { width: 100%; height: 100%; object-fit: cover; }
.player-photo::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 55%, rgba(28,24,20,0.55) 100%);
}
.jersey {
  position: absolute;
  right: 24px;
  bottom: 18px;
  font-size: clamp(72px, 10vw, 132px);
  line-height: 1;
  color: rgba(255,247,235,0.92);
  z-index: 1;
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
  background: var(--ice);
  color: var(--ink);
}
.sec-head-light {
  border-bottom-color: var(--ice-line);
}
.sec-head-light .sec-num { color: var(--brand-blue); }
.sec-head-light .sec-eyebrow { color: var(--ink-mute); }
.sec-head-light .sec-title em { color: var(--brand-blue); }

.contact-grid {
  display: grid;
  gap: clamp(2.5rem, 5vw, 5rem);
}
@media (min-width: 880px) { .contact-grid { grid-template-columns: 1fr 1.05fr; } }

.contact-lead {
  font-size: 17px;
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 44ch;
}
.contact-details {
  margin-top: 40px;
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
  background: var(--paper);
  color: var(--ink);
  padding: clamp(28px, 3.5vw, 44px);
  border-radius: 6px;
  display: grid;
  gap: 22px;
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
  background: transparent;
  border: 0;
  border-bottom: 1px solid var(--line);
  color: var(--ink);
  font-size: 15px;
  padding: 6px 0 12px;
  outline: none;
  text-transform: none;
  letter-spacing: 0;
  transition: border-color .2s ease;
}
.oria-form input:focus,
.oria-form textarea:focus,
.oria-form select:focus { border-bottom-color: var(--rust); }
.oria-form textarea { resize: vertical; min-height: 80px; }
.oria-form select { appearance: none; cursor: pointer; }

.row-2 { display: grid; gap: 22px; }
@media (min-width: 600px) { .row-2 { grid-template-columns: 1fr 1fr; } }

.form-foot {
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 12px;
  margin-top: 4px;
}
.form-note {
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--ink-mute);
  font-weight: 500;
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
  font-family: var(--font-serif);
  font-size: clamp(20px, 2.2vw, 26px);
  line-height: 1.2;
  letter-spacing: -0.01em;
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
  height: 42px;
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
</style>
