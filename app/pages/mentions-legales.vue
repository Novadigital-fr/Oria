<script setup lang="ts">
useHead({
  title: 'Mentions légales - ORIA Solutions',
  meta: [
    { name: 'description', content: 'Mentions légales du site oria-solutions.fr — éditeur, hébergement, propriété intellectuelle, RGPD et responsabilité.' }
  ]
})
</script>

<template>
  <div class="legal-root">
    <header class="legal-nav">
      <div class="wrap legal-nav-inner">
        <NuxtLink to="/" class="legal-brand" aria-label="ORIA Solutions, retour à l'accueil">
          <img src="/assets/img/logo-horizontal.png" alt="ORIA Solutions" class="legal-brand-logo" />
        </NuxtLink>
        <NuxtLink to="/" class="legal-back">← Retour au site</NuxtLink>
      </div>
    </header>

    <main class="wrap legal-main">
      <h1 class="legal-title">Mentions <em>légales</em></h1>

      <section class="legal-section">
        <h2>1. Éditeur du site</h2>
        <p>
          Le site internet oria-solutions.fr est édité par la société <strong>Oria Solutions</strong>,
          SARL au capital de 1 000 €, immatriculée au Registre National des Entreprises sous le numéro
          SIREN <strong>990 507 519</strong>.
        </p>
        <dl class="legal-facts">
          <div><dt>Siège social</dt><dd>39 Route de Four – 38090 Vaulx-Milieu</dd></div>
          <div><dt>Gérants</dt><dd>Fabrice Garnier et Delphine Pfleger</dd></div>
          <div><dt>N° TVA intracommunautaire</dt><dd>FR28990507519</dd></div>
          <div><dt>Contact</dt><dd><a href="mailto:contact@oria-solutions.fr">contact@oria-solutions.fr</a></dd></div>
        </dl>
      </section>

      <section class="legal-section">
        <h2>2. Hébergement</h2>
        <p>Le site est hébergé par :</p>
        <p>
          <strong>Infomaniak Network SA</strong><br />
          Rue Eugène-Marziano 25 – 1227 Les Acacias (Genève), Suisse<br />
          Site : <a href="https://www.infomaniak.com" target="_blank" rel="noopener">www.infomaniak.com</a>
        </p>
      </section>

      <section class="legal-section">
        <h2>3. Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments constituant ce site (structure, textes, visuels, logo, iconographie)
          est la propriété exclusive d'Oria Solutions et est protégé par les dispositions du Code de la
          propriété intellectuelle.
        </p>
        <p>
          Toute reproduction, représentation, modification ou exploitation, totale ou partielle, de ces
          contenus, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans
          l'autorisation préalable et écrite d'Oria Solutions.
        </p>
      </section>

      <section class="legal-section">
        <h2>4. Données personnelles et protection de la vie privée (RGPD)</h2>

        <h3>Absence de collecte automatique</h3>
        <p>
          Ce site ne dépose aucun cookie, ne recourt à aucun outil de traçage, d'analyse d'audience ou de
          publicité ciblée. Aucune donnée de navigation n'est collectée automatiquement.
        </p>

        <h3>Données transmises via le formulaire de contact</h3>
        <p>
          Lorsque vous utilisez le formulaire de contact ou que vous nous écrivez à l'adresse
          contact@oria-solutions.fr, les informations que vous communiquez (nom, adresse email, message)
          sont collectées dans le seul but de traiter votre demande et d'y répondre.
        </p>
        <p>Ces données sont :</p>
        <ul>
          <li>utilisées exclusivement à des fins de réponse à votre demande ;</li>
          <li>conservées le temps nécessaire au traitement de votre demande, et au maximum 3 ans à compter du dernier contact ;</li>
          <li>jamais transmises à des tiers, revendues ou exploitées à des fins commerciales.</li>
        </ul>

        <h3>Responsable du traitement</h3>
        <p>Oria Solutions – 39 Route de Four, 38090 Vaulx-Milieu – contact@oria-solutions.fr</p>

        <h3>Vos droits</h3>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD – UE 2016/679) et à la loi
          Informatique et Libertés, vous disposez des droits suivants sur vos données :
        </p>
        <ul>
          <li>droit d'accès et de rectification ;</li>
          <li>droit à l'effacement (« droit à l'oubli ») ;</li>
          <li>droit à la limitation du traitement ;</li>
          <li>droit d'opposition.</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à :
          <a href="mailto:contact@oria-solutions.fr">contact@oria-solutions.fr</a>.
        </p>
      </section>

      <section class="legal-section">
        <h2>5. Limitation de responsabilité</h2>

        <h3>Exactitude des contenus</h3>
        <p>
          Oria Solutions s'efforce d'assurer l'exactitude et la mise à jour régulière des informations
          publiées sur ce site. Toutefois, la société ne peut garantir l'exhaustivité, l'exactitude ou la
          pertinence des contenus à tout moment, et se réserve le droit de les modifier sans préavis.
        </p>

        <h3>Disponibilité du site</h3>
        <p>
          Oria Solutions ne saurait être tenue responsable des interruptions d'accès au site liées à des
          opérations de maintenance, à des défaillances techniques, à des actes malveillants de tiers ou à
          tout événement indépendant de sa volonté.
        </p>

        <h3>Utilisation du site</h3>
        <p>
          L'utilisateur est seul responsable de l'utilisation qu'il fait des informations disponibles sur ce
          site. Oria Solutions décline toute responsabilité quant aux dommages directs ou indirects pouvant
          résulter de la consultation ou de l'utilisation des contenus publiés.
        </p>

        <h3>Liens externes</h3>
        <p>
          Ce site peut contenir des liens vers des sites tiers. Oria Solutions n'exerce aucun contrôle sur
          ces sites et décline toute responsabilité quant à leur contenu, leurs pratiques en matière de
          données personnelles ou leur disponibilité.
        </p>
      </section>

      <section class="legal-section">
        <h2>6. Droit applicable</h2>
        <p>
          Les présentes mentions légales sont soumises au droit français. En cas de litige, et à défaut de
          résolution amiable, les tribunaux français seront seuls compétents.
        </p>
      </section>

      <p class="legal-back-foot">
        <NuxtLink to="/">← Retour au site</NuxtLink>
      </p>
    </main>
  </div>
</template>

<style scoped>
.legal-root {
  --ink: #0f1424;
  --ink-soft: #2a3142;
  --ink-mute: #6b7280;
  --line: #e3e7ec;
  --brand-blue: #0061ea;
  --brand-navy: #00007f;
  --cream: #f5f7fa;
  --font-serif: "Instrument Serif", "Iowan Old Style", Georgia, "Times New Roman", serif;

  background: #fff;
  color: var(--ink-soft);
  min-height: 100dvh;
}
.wrap { max-width: 820px; margin: 0 auto; padding-inline: clamp(1.25rem, 4vw, 2.5rem); }

.legal-nav { border-bottom: 1px solid var(--line); }
.legal-nav-inner {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding-block: 18px;
}
.legal-brand-logo { height: 30px; width: auto; }
.legal-back {
  font-size: 14px; color: var(--brand-blue); font-weight: 500;
  transition: color .2s ease;
}
.legal-back:hover { color: var(--brand-navy); }

.legal-main { padding-block: clamp(2.5rem, 6vw, 5rem); }

.legal-title {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(40px, 6vw, 64px);
  line-height: 1.02;
  letter-spacing: -0.02em;
  color: var(--ink);
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}
.legal-title em { font-style: italic; color: var(--brand-blue); }

.legal-section { margin-bottom: clamp(2rem, 4vw, 3rem); }
.legal-section h2 {
  font-family: var(--font-serif);
  font-weight: 400;
  font-size: clamp(24px, 3vw, 32px);
  color: var(--ink);
  letter-spacing: -0.01em;
  margin-bottom: 16px;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--line);
}
.legal-section h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--ink);
  margin-top: 22px;
  margin-bottom: 6px;
}
.legal-section p { font-size: 16px; line-height: 1.7; margin-bottom: 12px; }
.legal-section strong { color: var(--ink); font-weight: 600; }
.legal-section a { color: var(--brand-blue); text-decoration: underline; text-underline-offset: 2px; }
.legal-section a:hover { color: var(--brand-navy); }

.legal-section ul {
  margin: 0 0 14px; padding-left: 1.2em;
  display: grid; gap: 6px;
}
.legal-section li { font-size: 16px; line-height: 1.6; }

.legal-facts {
  margin: 18px 0 0;
  display: grid; gap: 10px;
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: clamp(18px, 3vw, 26px);
}
.legal-facts div { display: flex; flex-wrap: wrap; gap: 4px 10px; }
.legal-facts dt { font-weight: 600; color: var(--ink); margin: 0; }
.legal-facts dd { margin: 0; color: var(--ink-soft); }

.legal-back-foot {
  margin-top: clamp(2rem, 5vw, 3.5rem);
  padding-top: 24px;
  border-top: 1px solid var(--line);
}
.legal-back-foot a { color: var(--brand-blue); font-weight: 500; }
.legal-back-foot a:hover { color: var(--brand-navy); }
</style>
