<script setup>
  import Modal from '../components/Modal.vue';
</script>

<Modal />

# ANSSI MOOC

Pour augmenter le niveau de sécurité face à ce type d’attaque, il est nécessaire d’augmenter la longueur de la clé qui permettra de rendre impossible la récupération de la clé en un temps raisonnable.
En cryptographie, la longueur de la clé se mesure en bits.

Par analogie avec le code d'un cadenas à combinaison à 4 chiffres qui peut prendre 10 000 valeurs (de 0000 à 9999), une clé sur 1 bit peut prendre deux valeurs (0 ou 1), sur 2 bits elle pourra prendre 4 valeurs (00, 01, 10 ou 11), sur 3 bits ce sera 8 valeurs etc.
oDkZWCXWAWIKBEdm\_-goZRB1x-vv4QDdm-\_NOPROCESS_timeline_ter_2.png

Pour généraliser, chaque bit de la clé peut prendre 2 valeurs (0 ou 1), soit pour une clé de longueur n, 2n possibilités.

Pour une clé de 128 bits ce sera donc 2128 possibilités (environ 4x1038, c’est-à-dire un 4 suivi de 38 zéros !), et pour
une clé de 256 bits ce sera donc 2256 possibilités (environ 1077, c’est-à-dire un 1 suivi de 77 zéros !).

Afin de comprendre ce que représente cette complexité, imaginons un ordinateur capable de tester 1 milliard de clés à la
seconde.

En utilisant 1 milliard d’ordinateurs de cette sorte pour une recherche exhaustive sur 128 bits, cela prendrait plus de
11 000 milliards d’années !
4V9i3A3vH_fARffU_tvTCDumTBRP_C6xs-\_NOPROCESS_timeline_ter_3.png

Détails du calcul :
60 secondes x 60 minutes x 24 heures x 365 jours = 31,54 millions de secondes par an
109 ordinateurs x 109 clés à la seconde x 2128 nombre de possibilités / 31,54 millions de secondes par an = + de 11 000
milliards d’années.
Retenez que plus la longueur de la clé (le nombre de bits) est grande, plus le niveau de sécurité sera élevé.
C7MShKY4EWX3NwfK_Y1MrhHICbmfKPwJW-\_NOPROCESS_timeline_ter_4.png

# ISO 9007

# Instruction interministérielle n° 901

# CGI Academia

### Track 1 : CGI Principes fondamentaux de la sécurité des applications

- Codage sécurisé, OWASP

  - Sécurité Overall, dès le départ
  - Vérifier les données fournies par les users. Nettoyage des caractères spéciaux ou masqués.
  - Messages d'erreur custom au front sans aucunes infos pour éviter le leak d'info
  - Validation côté serveur
  - HTTPS, pas de http
  - Une seule session par user
  - Vérifier les accès

- Failles de sécurité des applications Web

  - PKI
  - Chiffrement
  - Signatures Numériques, Certificats
  - Pas de paramètres par défaut
  - Supprimer les comptes non utilisés
  - Mise à Jour des certificats PKI expiré et logiciels
  - Utilisé TLS au lieu SSL (ancien)
  - Composants tiers, faire attention au composant que l'on ne connait pas assez

- OWASP Top 10 (Open Web Application Security Project)

  - Mettre en lumière les risques de sécurités les plus courants sur les applications web
  - Données user, toujours considérés comme non fiable
  - Authentification doit être forte multi factor par exemple
  - Chiffrement des données au repos ou en transport
  - XML External Entities, injection de code dans du Xml
  - Control d'accès après authentification, problème du moindre privilège
  - Mauvais paramétrage du serveur ou service. Souvent dû à des paramètres par défaut non modifié
  - XSS absences de validation ou nettoyages des champs de formulaire
  - Dé-sérialisation mal sécurisée
  - Utilisation de tiers composants avec des vulnérabilités connues
  - Journalisation et surveillance des failles nouvellement connues

- Authentification, authorisation et chiffrement

  - Facteurs d'authentification => mot de passes (connaissance), téléphone, carte bancaire, badge (possession), inhérence (empreint digital)
  - Authorisation, ressources que l'user à droits, granularité authorisation
  - Chiffrement, sécurité des communications (écouter, intercepter), stockage, échange chiffrés de bout en bout

- SSL et TLS
  - SSL obsolete en raison de bcp vulnérabilité, PKI certificat
  - Désactiver SSL
  - TLS 1.0 obsolète donc utiliser les versions > 1.1, PKI certificat (avec clés public privé)
  - S/MIME Secure Multipurpose Internet Mail Exchange, utilisé pour chiffrer et signer les messages électroniques + PKI
  - IP Sec, sécurisé traffic réseau avec un VPN, IP sec permet de sécuriser tout type de traffic réseau.
  - Chiffrage ESP (paquet)
