import{_ as e,c as r,o as t,d as i}from"./app.79f2b470.js";const f=JSON.parse('{"title":"Conférence cyber ADN Ouest/CCI Quimper","description":"","frontmatter":{},"headers":[{"level":2,"title":"Introduction par intervenant ANSSI","slug":"introduction-par-intervenant-anssi","link":"#introduction-par-intervenant-anssi","children":[{"level":3,"title":"Menaces existantes (les plus répandus sur le territoire Breton)","slug":"menaces-existantes-les-plus-repandus-sur-le-territoire-breton","link":"#menaces-existantes-les-plus-repandus-sur-le-territoire-breton","children":[]}]},{"level":2,"title":"Retour cyberattaque Verlingue (groupe Adélaïde, Mutuelle Génération et Cocoon)","slug":"retour-cyberattaque-verlingue-groupe-adelaide-mutuelle-generation-et-cocoon","link":"#retour-cyberattaque-verlingue-groupe-adelaide-mutuelle-generation-et-cocoon","children":[]},{"level":2,"title":"Retour Cyber Attaque SICA","slug":"retour-cyber-attaque-sica","link":"#retour-cyber-attaque-sica","children":[{"level":3,"title":"01/2022 déni de service","slug":"_01-2022-deni-de-service","link":"#_01-2022-deni-de-service","children":[]},{"level":3,"title":"05/2022 crypto mining, RCE (remote execution code)","slug":"_05-2022-crypto-mining-rce-remote-execution-code","link":"#_05-2022-crypto-mining-rce-remote-execution-code","children":[]},{"level":3,"title":"Suite aux attaques","slug":"suite-aux-attaques","link":"#suite-aux-attaques","children":[]}]}],"relativePath":"cybersec/rex2022.md"}'),n={name:"cybersec/rex2022.md"},a=i('<h1 id="conference-cyber-adn-ouest-cci-quimper" tabindex="-1">Conférence cyber ADN Ouest/CCI Quimper <a class="header-anchor" href="#conference-cyber-adn-ouest-cci-quimper" aria-hidden="true">#</a></h1><p>Conférence cybersécurité organisée par ADN Ouest et la Cci Quimper. Intervenants : ANSSI, Dsi <a href="https://www.verlingue.fr" target="_blank" rel="noreferrer">Verlingue</a> (Olivier Le Gall), Dsi <a href="https://www.sicastpol.fr" target="_blank" rel="noreferrer">SICA</a> (Linlaud Stéphane) et la <a href="https://www.gacyb.bzh" target="_blank" rel="noreferrer">GACYB</a>.</p><h2 id="introduction-par-intervenant-anssi" tabindex="-1">Introduction par intervenant ANSSI <a class="header-anchor" href="#introduction-par-intervenant-anssi" aria-hidden="true">#</a></h2><p>En 2021, une entreprise sur six a subi une attaque, fraude etc. En Bretagne c&#39;est en moyenne une attaque par semaine par les entreprises qui est déclarée.</p><h3 id="menaces-existantes-les-plus-repandus-sur-le-territoire-breton" tabindex="-1">Menaces existantes (les plus répandus sur le territoire Breton) <a class="header-anchor" href="#menaces-existantes-les-plus-repandus-sur-le-territoire-breton" aria-hidden="true">#</a></h3><h4 id="rancongicielle-ransonware" tabindex="-1">Rancongicielle (Ransonware) <a class="header-anchor" href="#rancongicielle-ransonware" aria-hidden="true">#</a></h4><p>Attaque consistant à chiffrer les données et demander une rançon en échange de la clé de déchiffrement. Les exemples d&#39;attaques de ce type ne manquent pas et ne concerne pas uniquement que les entreprises du CAC40 ou sites institutionnel, mais aussi les TPEs et même les communautés de communes de seulement quelques centaines d&#39;habitants. Prévention, Backup non numérique ou offline. Etude d&#39;impact à faire en amont et création d&#39;une cellule de crise afin d&#39;être en mesure de gérer ce type de situation.</p><h4 id="espionnage" tabindex="-1">Espionnage <a class="header-anchor" href="#espionnage" aria-hidden="true">#</a></h4><p>Du point de vue de l&#39;ANSSI, une inquiétude forte existe autour de cette menace puisqu&#39;elle est, par définition très difficile à repérer. Le risque encouru est une perte de développement/recherche...</p><h4 id="deni-de-service-ddos" tabindex="-1">Déni de service (DDOS) <a class="header-anchor" href="#deni-de-service-ddos" aria-hidden="true">#</a></h4><p>Cette attaque est le plus souvent utilisée comme diversion afin de détourner l&#39;attention des équipes it en plus de rendre provisoirement le service attaqué indisponible.</p><h4 id="malveillance-interne" tabindex="-1">Malveillance interne <a class="header-anchor" href="#malveillance-interne" aria-hidden="true">#</a></h4><p>Comme pour l&#39;espionnage, celle-ci est difficile à repérer. Elle peut provenir d&#39;un (ex)collaborateur mécontent ou bien d&#39;un client ayant au SI. C&#39;est pourquoi il est indispensable de gérer correctement les authorisations aux sites physiques en plus des authentifications/authorizations au SI.</p><h4 id="fraudes-au-president-et-autres-menaces-par-ingenierie-sociale" tabindex="-1">Fraudes au président et autres menaces par ingénierie sociale <a class="header-anchor" href="#fraudes-au-president-et-autres-menaces-par-ingenierie-sociale" aria-hidden="true">#</a></h4><p>Le pishing par mail est le canal le plus souvent utilisé. En cas de fraude de ce type, les authoritées compétentes sont la police ou la gendarmerie.</p><h2 id="retour-cyberattaque-verlingue-groupe-adelaide-mutuelle-generation-et-cocoon" tabindex="-1">Retour cyberattaque Verlingue (groupe Adélaïde, Mutuelle Génération et Cocoon) <a class="header-anchor" href="#retour-cyberattaque-verlingue-groupe-adelaide-mutuelle-generation-et-cocoon" aria-hidden="true">#</a></h2><p>Retour rapporté par le DSI de l&#39;entreprise Verlingue, Olivier Le Gall. Cette entreprise est constituée d&#39;un SI de 200 personnes avec une infrastructure comportant 700 serveurs.</p><p>Le 28 novembre 2021, l&#39;entreprise a subi une attaque par Ransonware avec le chiffrement d&#39;une partie de leur données. Vers minuit, le DSI reçoit un message d&#39;alerte du système lui signifiant la désactivation des antivirus et prend immédiatement la décision de se rendre sur site. Vingt minutes plus tard, les routeurs sont coupés physiquement afin de stopper l&#39;attaque. A ce stade l&#39;équipe sait juste qu&#39;il s&#39;agit d&#39;une attaque, mais n&#39;a pas encore idée de son ampleur ou type.</p><p>En cas d&#39;attaque du SI, les premières 24 heures sont déterminantes. Le dsi décide l&#39;activation d&#39;une cellule de crise dans le but de gérer au mieux la situation. Une communication est faite auprès des collaborateurs et clients par la direction pour les informer du problème et de l&#39;inactivité pour un temps non encore déterminé. Après la première réunion de crise, la direction donne 3 jours au DSI pour rétablir la situation et restart les premiers services critiques comme les remboursements santé des assurés (Mutuelle Génération) ou les renouvellements des contrats (mois de novembre). Celui-ci s&#39;entoure des &#39;sachants&#39; du SI et d&#39;une entreprise spécialisée dans la gestion de crise (IntraSec PRIS auprès de la ANSSI).</p><p>Points importants retenus dans la gestion de la crise :</p><ul><li>Deux salles physiques (bah oui plus de réseau ni SI...) avec séparations des personels techniques et directions/business</li><li>Répartitions des rôles et droits des personnes</li><li>Savoir faire des points réguliers pour transmettre les informations</li><li>Avoir une stratégie de redémarrage des parties système d&#39;information en fonction de leur criticité</li><li>Eviter la &quot;pollution&quot; provenant de l&#39;extérieur, pour anecdote le DSI n&#39;a pas décroché son téléphone pendant 3 jours, 150 appels de numéro inconnus (média, entreprise externes...)</li><li>Un seul collaborateur pour gérer la communication externe</li><li>Définir les &#39;bulles de confiance&#39; lors du redémarrage progressif. Technique afin de s&#39;assurer que ce que l&#39;on restart n&#39;est pas/plus touché par le Ranconware. Première bulle, l&#39;active directory.</li><li>Pour la communication interne, ils ont mis en place sur une autre réseau un blog et une messagerie pour les collaborateurs.</li><li>Définition de CERT to CERT afin de rassurer les collaborateurs</li><li>La direction a su faire confiance au DSI et ses équipes afin de les laisser prendre les décisions et travailler sans les déranger et leur faire perdre du temps en en réunion ou discussion.</li></ul><p>Point à améliorer avant et en cas de nouvelle crise :</p><ul><li>La communication interne via des outils comme signal ou proton mail</li><li>La communication externe à gérer plus efficacement, cas d&#39;un article dans la presse nationale avec de fausse information propagée. Donc perte de temps pour répondre et éviter les fausses interprétations.</li><li>Meilleure prévention auprès des collaborateurs (techniques et métiers)</li></ul><p>Constat :</p><ul><li>L&#39;attaque à fait perdre plusieurs jours de production, mais grâce à une décision rapide de coupée les routeurs, l&#39;attaque a été stoppé rapidement et un minimum de données ont été impactés.</li><li>La faille exploitée par les attaquants est dû à une négligence d&#39;un collaborateur non technique.</li></ul><h2 id="retour-cyber-attaque-sica" tabindex="-1">Retour Cyber Attaque SICA <a class="header-anchor" href="#retour-cyber-attaque-sica" aria-hidden="true">#</a></h2><p>Retour rapporté par le DSI de SICA Saint Pol de Léon. Ils ont subi deux attaques : 01/2022 et 05/2022.</p><h3 id="_01-2022-deni-de-service" tabindex="-1">01/2022 déni de service <a class="header-anchor" href="#_01-2022-deni-de-service" aria-hidden="true">#</a></h3><p>Des ralentissements sont constatés sur l&#39;accès au service de la plateforme logistique. Au départ, il leur à été difficile de comprendre qu&#39;il s&#39;agissait d&#39;une attaque et non pas d&#39;un problème d&#39;infrastructure du SI. Les serveurs DNS sont submergées d&#39;appels provenants d&#39;adresse non Européenne. Une fois le constat de l&#39;attaque, la décision est prise de communiquer en interne au niveau de l&#39;encadrement et du GIRAL (réseau de DSI du domaine agroalimentaire). Mesures prises :</p><ul><li>Drop de toutes les requêtes sur le DNS ne provenant pas de France ou Belgique</li><li>Communication avec la gendarmerie et dépôt de plainte</li><li>Remise en question de du DNS et Firewall</li></ul><h3 id="_05-2022-crypto-mining-rce-remote-execution-code" tabindex="-1">05/2022 crypto mining, RCE (remote execution code) <a class="header-anchor" href="#_05-2022-crypto-mining-rce-remote-execution-code" aria-hidden="true">#</a></h3><p>Une utilisation des cpus serveurs importante sur la journée puis une saturation complète dès le lendemain. L&#39;attaque est identifiée sur un ensemble de serveur qui sont tout de suite isolés (VMs). Un clonage des machines infectées est réalisée et une analyse par une entreprise spécialisée en cybersécurité est effectuée. Découverte d&#39;un malware crypto qui exécute un process qui utilise du cpu afin de miner des cryptos et envoi ensuite ses résultats sur un serveur hors europe. Ce malware se propage également sur tous les postes clients qui se connecte sur le serveur via un fichier JS qui exécute un process sur le poste infecté. Mesures prises :</p><ul><li>Blocage ips sortantes hors France, blocage de tous les postes clients infectés (y compris celui du président du groupe 😄).</li><li>Redémarrage/installation de nouvelle Vms pour rétablir la production</li></ul><h3 id="suite-aux-attaques" tabindex="-1">Suite aux attaques <a class="header-anchor" href="#suite-aux-attaques" aria-hidden="true">#</a></h3><p>Constat :</p><ul><li>Les attaques ont fait perdre 8 jours de production (avec un potentiel CA de 1M€ par jour)</li><li>Suite à l&#39;attaque pqr crypto mining, un audit est ensuite effectué. Résultat, c&#39;est une mauvaise gestion des droits utilisateurs (accès root exposé à tous sur les serveurs) qui a permis à l&#39;attaquant d&#39;exécuter facilement son malware sur les serveurs. Cela est du a une mauvaise gestion au sein des équipes IT niveau régional (aucune gouvernance)</li></ul><p>Point à améliorer avant et en cas de nouvelle crise :</p><ul><li>Amélioration de la gestion des droits sur les serveurs</li><li>Mise en place d&#39;une stratégie de maintenance de l&#39;applicatif (mise a niveau des OS, des librairies et du code a tous les niveaux)</li></ul>',38),s=[a];function u(l,o,d,c,p,m){return t(),r("div",null,s)}const g=e(n,[["render",u]]);export{f as __pageData,g as default};
