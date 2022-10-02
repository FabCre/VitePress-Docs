import{_ as e,o as i,d as s,f as n}from"./app.6f707c34.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"Clean Code","slug":"clean-code","link":"#clean-code","children":[]},{"level":2,"title":"CraftsmanShip","slug":"craftsmanship","link":"#craftsmanship","children":[]},{"level":2,"title":"OOP","slug":"oop","link":"#oop","children":[]},{"level":2,"title":"SOLID","slug":"solid","link":"#solid","children":[]},{"level":2,"title":"M\xE9thode Agile","slug":"methode-agile","link":"#methode-agile","children":[]},{"level":2,"title":"Veille Technologique","slug":"veille-technologique","link":"#veille-technologique","children":[]}],"relativePath":"entretien/bonnespratiques.md"}'),t={name:"entretien/bonnespratiques.md"},a=n('<h2 id="clean-code" tabindex="-1">Clean Code <a class="header-anchor" href="#clean-code" aria-hidden="true">#</a></h2><ul><li>Qu&#39;est-ce que le &quot;Clean Code&quot; ?</li><li>Quels outils/techniques utilisez-vous pour vous assurer que vous faites du &quot;Clean Code&quot; ?</li><li>Quand est-ce qu&#39;il faut commenter du code ?</li></ul><h2 id="craftsmanship" tabindex="-1">CraftsmanShip <a class="header-anchor" href="#craftsmanship" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Manifest for software craftsmanship</summary><p>\xC9lever le niveau En tant qu\u2019aspirants Artisans du Logiciel, nous relevons le niveau du d\xE9veloppement professionnel de logiciels par la pratique et en aidant les autres \xE0 acqu\xE9rir le savoir-faire. Gr\xE2ce \xE0 ce travail, nous avons appris \xE0 appr\xE9cier :</p><p>Pas seulement des logiciels op\xE9rationnels, mais aussi des logiciels bien con\xE7us. Pas seulement l&#39;adaptation aux changements, mais aussi l&#39;ajout constant de la valeur. Pas seulement les individus et leurs interactions, mais aussi une communaut\xE9 de professionnels. Pas seulement la collaboration avec les clients, mais aussi des partenariats productifs. C&#39;est-\xE0-dire qu&#39;en recherchant les \xE9l\xE9ments de gauche, nous avons trouv\xE9 que les \xE9l\xE9ments de droite sont indispensables.</p><p>\xA9 2009, les soussign\xE9s. Cette d\xE9claration peut \xEAtre copi\xE9e librement, quelle que soit la forme, mais seulement dans sa totalit\xE9, y compris cette remarque.</p></details><h2 id="oop" tabindex="-1">OOP <a class="header-anchor" href="#oop" aria-hidden="true">#</a></h2><ul><li>Quels sont les 3 grands principes de l&#39;orient\xE9 objet ?</li></ul><h2 id="solid" tabindex="-1">SOLID <a class="header-anchor" href="#solid" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Principes SOLID</summary><p>S - Responsabilit\xE9 unique (Single responsibility principle) Une classe doit avoir une seule et unique raison de changer, ce qui signifie qu\u2019une classe ne doit appartenir qu\u2019\xE0 une seule t\xE2che.</p><p>O - Ouvert/ferm\xE9 (Open/closed principle) Les objets ou entit\xE9s devraient \xEAtre ouverts \xE0 l\u2019extension, mais ferm\xE9s \xE0 la modification.</p><p>L - Substitution de Liskov (Liskov substitution principle) Si q(x) est une propri\xE9t\xE9 d\xE9montrable pour tout objet x de type T, alors q(y) est vraie pour tout objet y de type S tel que S est un sous-type de T.</p><p>I - S\xE9gr\xE9gation des interfaces (Interface segregation principle) Un client ne doit jamais \xEAtre forc\xE9 \xE0 installer une interface qu\u2019il n\u2019utilise pas et les clients ne doivent pas \xEAtre forc\xE9s \xE0 d\xE9pendre de m\xE9thodes qu\u2019ils n\u2019utilisent pas.</p><p>D - Inversion des d\xE9pendances (Dependency inversion principle) Les entit\xE9s doivent d\xE9pendre des abstractions, pas des impl\xE9mentations. Il indique que le module de haut niveau ne doit pas d\xE9pendre du module de bas niveau, mais qu\u2019ils doivent d\xE9pendre des abstractions.</p></details><h2 id="methode-agile" tabindex="-1">M\xE9thode Agile <a class="header-anchor" href="#methode-agile" aria-hidden="true">#</a></h2><details class="details custom-block"><summary>Manifest Agile</summary><p>Manifeste pour le d\xE9veloppement Agile de logiciels</p><p>Nous d\xE9couvrons comment mieux d\xE9velopper des logiciels par la pratique et en aidant les autres \xE0 le faire. Ces exp\xE9riences nous ont amen\xE9s \xE0 valoriser :</p><p>Les individus et leurs interactions plus que les processus et les outils Des logiciels op\xE9rationnels plus qu\u2019une documentation exhaustive La collaboration avec les clients plus que la n\xE9gociation contractuelle L\u2019adaptation au changement plus que le suivi d\u2019un plan</p><p>Nous reconnaissons la valeur des seconds \xE9l\xE9ments, mais privil\xE9gions les premiers.</p><p>Kent Beck Mike Beedle Arie van Bennekum Alistair Cockburn Ward Cunningham Martin Fowler James Grenning Jim Highsmith Andrew Hunt Ron Jeffries Jon Kern Brian Marick Robert C. Martin Steve Mellor Ken Schwaber Jeff Sutherland Dave Thomas</p><p>\xA9 2001, the above authors this declaration may be freely copied in any form, but only in its entirety through this notice.</p><h4 id="principes-sous-jacents-au-manifeste" tabindex="-1">Principes sous-jacents au manifeste <a class="header-anchor" href="#principes-sous-jacents-au-manifeste" aria-hidden="true">#</a></h4><p>Nous suivons ces principes : Notre plus haute priorit\xE9 est de satisfaire le client en livrant rapidement et r\xE9guli\xE8rement des fonctionnalit\xE9s \xE0 grande valeur ajout\xE9e.</p><p>Accueillez positivement les changements de besoins, m\xEAme tard dans le projet. Les processus Agiles exploitent le changement pour donner un avantage comp\xE9titif au client.</p><p>Livrez fr\xE9quemment un logiciel op\xE9rationnel avec des cycles de quelques semaines \xE0 quelques mois et une pr\xE9f\xE9rence pour les plus courts.</p><p>Les utilisateurs ou leurs repr\xE9sentants et les d\xE9veloppeurs doivent travailler ensemble quotidiennement tout au long du projet.</p><p>R\xE9alisez les projets avec des personnes motiv\xE9es. Fournissez-leur l\u2019environnement et le soutien dont ils ont besoin et faites-leur confiance pour atteindre les objectifs fix\xE9s.</p><p>La m\xE9thode la plus simple et la plus efficace pour transmettre de l\u2019information \xE0 l&#39;\xE9quipe de d\xE9veloppement et \xE0 l\u2019int\xE9rieur de celle-ci est le dialogue en face \xE0 face.</p><p>Un logiciel op\xE9rationnel est la principale mesure d\u2019avancement.</p><p>Les processus Agiles encouragent un rythme de d\xE9veloppement soutenable. Ensemble, les commanditaires, les d\xE9veloppeurs et les utilisateurs devraient \xEAtre capables de maintenir ind\xE9finiment un rythme constant.</p><p>Une attention continue \xE0 l&#39;excellence technique et \xE0 une bonne conception renforce l\u2019Agilit\xE9.</p><p>La simplicit\xE9 \u2013 c\u2019est-\xE0-dire l\u2019art de minimiser la quantit\xE9 de travail inutile \u2013 est essentielle.</p><p>Les meilleures architectures, sp\xE9cifications et conceptions \xE9mergent d&#39;\xE9quipes autoorganis\xE9es.</p><p>\xC0 intervalles r\xE9guliers, l&#39;\xE9quipe r\xE9fl\xE9chit aux moyens de devenir plus efficace, puis r\xE8gle et modifie son comportement en cons\xE9quence.</p></details><ul><li>Agile vs Cycle en V ?</li><li>Quels sont les grands principes Agile ?</li><li>Kanban vs Scrum</li><li>Outils de gestion agile Jira ?</li></ul><h2 id="veille-technologique" tabindex="-1">Veille Technologique <a class="header-anchor" href="#veille-technologique" aria-hidden="true">#</a></h2><ul><li>Faites-vous de la veille technologique ? (curiosit\xE9, int\xE9r\xEAt pour son travail)</li><li>Comment effectuez-vous votre veille (mailing list, suivi de la communaut\xE9, meetup, devfest...) ?</li><li>Participez-vous \xE0 de l&#39;open source ?</li></ul>',13),l=[a];function o(r,u,c,d,p,m){return i(),s("div",null,l)}const f=e(t,[["render",o]]);export{v as __pageData,f as default};
