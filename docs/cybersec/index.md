<script setup>
  import Modal from '../components/Modal.vue';
</script>

<Modal />

# ANSSI

## MOOC

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