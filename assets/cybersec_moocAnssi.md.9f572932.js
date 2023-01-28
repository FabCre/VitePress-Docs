import{_ as e,c as i,o as s,d as r}from"./app.79f2b470.js";const h=JSON.parse('{"title":"ANSSI MOOC","description":"","frontmatter":{},"headers":[{"level":2,"title":"ISO 9007","slug":"iso-9007","link":"#iso-9007","children":[]},{"level":2,"title":"Instruction interministérielle n° 901","slug":"instruction-interministerielle-n°-901","link":"#instruction-interministerielle-n°-901","children":[{"level":3,"title":"Track 1 : CGI Principes fondamentaux de la sécurité des applications","slug":"track-1-cgi-principes-fondamentaux-de-la-securite-des-applications","link":"#track-1-cgi-principes-fondamentaux-de-la-securite-des-applications","children":[]}]}],"relativePath":"cybersec/moocAnssi.md"}'),t={name:"cybersec/moocAnssi.md"},l=r('<h1 id="anssi-mooc" tabindex="-1">ANSSI MOOC <a class="header-anchor" href="#anssi-mooc" aria-hidden="true">#</a></h1><p>Pour augmenter le niveau de sécurité face à ce type d’attaque, il est nécessaire d’augmenter la longueur de la clé qui permettra de rendre impossible la récupération de la clé en un temps raisonnable. En cryptographie, la longueur de la clé se mesure en bits.</p><p>Par analogie avec le code d&#39;un cadenas à combinaison à 4 chiffres qui peut prendre 10 000 valeurs (de 0000 à 9999), une clé sur 1 bit peut prendre deux valeurs (0 ou 1), sur 2 bits elle pourra prendre 4 valeurs (00, 01, 10 ou 11), sur 3 bits ce sera 8 valeurs etc. oDkZWCXWAWIKBEdm_-goZRB1x-vv4QDdm-_NOPROCESS_timeline_ter_2.png</p><p>Pour généraliser, chaque bit de la clé peut prendre 2 valeurs (0 ou 1), soit pour une clé de longueur n, 2n possibilités.</p><p>Pour une clé de 128 bits ce sera donc 2128 possibilités (environ 4x1038, c’est-à-dire un 4 suivi de 38 zéros !), et pour une clé de 256 bits ce sera donc 2256 possibilités (environ 1077, c’est-à-dire un 1 suivi de 77 zéros !).</p><p>Afin de comprendre ce que représente cette complexité, imaginons un ordinateur capable de tester 1 milliard de clés à la seconde.</p><p>En utilisant 1 milliard d’ordinateurs de cette sorte pour une recherche exhaustive sur 128 bits, cela prendrait plus de 11 000 milliards d’années ! 4V9i3A3vH_fARffU_tvTCDumTBRP_C6xs-_NOPROCESS_timeline_ter_3.png</p><p>Détails du calcul : 60 secondes x 60 minutes x 24 heures x 365 jours = 31,54 millions de secondes par an 109 ordinateurs x 109 clés à la seconde x 2128 nombre de possibilités / 31,54 millions de secondes par an = + de 11 000 milliards d’années. Retenez que plus la longueur de la clé (le nombre de bits) est grande, plus le niveau de sécurité sera élevé. C7MShKY4EWX3NwfK_Y1MrhHICbmfKPwJW-_NOPROCESS_timeline_ter_4.png</p><h2 id="iso-9007" tabindex="-1">ISO 9007 <a class="header-anchor" href="#iso-9007" aria-hidden="true">#</a></h2><h2 id="instruction-interministerielle-n°-901" tabindex="-1">Instruction interministérielle n° 901 <a class="header-anchor" href="#instruction-interministerielle-n°-901" aria-hidden="true">#</a></h2><h3 id="track-1-cgi-principes-fondamentaux-de-la-securite-des-applications" tabindex="-1">Track 1 : CGI Principes fondamentaux de la sécurité des applications <a class="header-anchor" href="#track-1-cgi-principes-fondamentaux-de-la-securite-des-applications" aria-hidden="true">#</a></h3><ul><li><p>Codage sécurisé, OWASP</p><ul><li>Sécurité Overall, dès le départ</li><li>Vérifier les données fournies par les users. Nettoyage des caractères spéciaux ou masqués.</li><li>Messages d&#39;erreur custom au front sans aucunes infos pour éviter le leak d&#39;info</li><li>Validation côté serveur</li><li>HTTPS, pas de http</li><li>Une seule session par user</li><li>Vérifier les accès</li></ul></li><li><p>Failles de sécurité des applications Web</p><ul><li>PKI</li><li>Chiffrement</li><li>Signatures Numériques, Certificats</li><li>Pas de paramètres par défaut</li><li>Supprimer les comptes non utilisés</li><li>Mise à Jour des certificats PKI expiré et logiciels</li><li>Utilisé TLS au lieu SSL (ancien)</li><li>Composants tiers, faire attention au composant que l&#39;on ne connait pas assez</li></ul></li><li><p>OWASP Top 10 (Open Web Application Security Project)</p><ul><li>Mettre en lumière les risques de sécurités les plus courants sur les applications web</li><li>Données user, toujours considérés comme non fiable</li><li>Authentification doit être forte multi factor par exemple</li><li>Chiffrement des données au repos ou en transport</li><li>XML External Entities, injection de code dans du Xml</li><li>Control d&#39;accès après authentification, problème du moindre privilège</li><li>Mauvais paramétrage du serveur ou service. Souvent dû à des paramètres par défaut non modifié</li><li>XSS absences de validation ou nettoyages des champs de formulaire</li><li>Dé-sérialisation mal sécurisée</li><li>Utilisation de tiers composants avec des vulnérabilités connues</li><li>Journalisation et surveillance des failles nouvellement connues</li></ul></li><li><p>Authentification, authorisation et chiffrement</p><ul><li>Facteurs d&#39;authentification =&gt; mot de passes (connaissance), téléphone, carte bancaire, badge (possession), inhérence (empreint digital)</li><li>Authorisation, ressources que l&#39;user à droits, granularité authorisation</li><li>Chiffrement, sécurité des communications (écouter, intercepter), stockage, échange chiffrés de bout en bout</li></ul></li><li><p>SSL et TLS</p><ul><li>SSL obsolete en raison de bcp vulnérabilité, PKI certificat</li><li>Désactiver SSL</li><li>TLS 1.0 obsolète donc utiliser les versions &gt; 1.1, PKI certificat (avec clés public privé)</li><li>S/MIME Secure Multipurpose Internet Mail Exchange, utilisé pour chiffrer et signer les messages électroniques + PKI</li><li>IP Sec, sécurisé traffic réseau avec un VPN, IP sec permet de sécuriser tout type de traffic réseau.</li><li>Chiffrage ESP (paquet)</li></ul></li></ul>',12),n=[l];function a(o,c,u,d,p,m){return s(),i("div",null,n)}const _=e(t,[["render",a]]);export{h as __pageData,_ as default};
