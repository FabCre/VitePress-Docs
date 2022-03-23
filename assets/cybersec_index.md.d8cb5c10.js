import{_ as o,o as l,c,w as u,T as d,a as p,v as h,b as e,d as f,e as m,f as _}from"./app.1c04b4cd.js";const g={name:"Modal",data(){return{isModalVisible:!0,unlockPage:""}},methods:{submit(){this.unlockPage==="remind"&&(this.isModalVisible=!1)},change(s){this.unlockPage=s.target.value}}},b={class:"modal-backdrop"},S={class:"modal"},v=e("header",{class:"modal-header"}," Provide credential ",-1),x={class:"modal-body"},P={class:"modal-footer"};function I(s,i,r,T,n,a){return l(),c(d,{name:"fade"},{default:u(()=>[p(e("div",b,[e("div",S,[v,e("section",x,[e("input",{class:"input-green",type:"password",onInput:i[0]||(i[0]=(...t)=>a.change&&a.change(...t))},null,32)]),e("footer",P,[e("button",{type:"button",class:"btn-green",onClick:i[1]||(i[1]=(...t)=>a.submit&&a.submit(...t))}," Unlock ")])])],512),[[h,n.isModalVisible]])]),_:1})}var C=o(g,[["render",I]]);const M=_('<h1 id="anssi" tabindex="-1">ANSSI <a class="header-anchor" href="#anssi" aria-hidden="true">#</a></h1><h2 id="mooc" tabindex="-1">MOOC <a class="header-anchor" href="#mooc" aria-hidden="true">#</a></h2><h1 id="iso-9007" tabindex="-1">ISO 9007 <a class="header-anchor" href="#iso-9007" aria-hidden="true">#</a></h1><h1 id="instruction-interministerielle-n\xB0-901" tabindex="-1">Instruction interminist\xE9rielle n\xB0 901 <a class="header-anchor" href="#instruction-interministerielle-n\xB0-901" aria-hidden="true">#</a></h1><h1 id="cgi-academia" tabindex="-1">CGI Academia <a class="header-anchor" href="#cgi-academia" aria-hidden="true">#</a></h1><h3 id="track-1-cgi-principes-fondamentaux-de-la-securite-des-applications" tabindex="-1">Track 1 : CGI Principes fondamentaux de la s\xE9curit\xE9 des applications <a class="header-anchor" href="#track-1-cgi-principes-fondamentaux-de-la-securite-des-applications" aria-hidden="true">#</a></h3><ul><li><p>Codage s\xE9curis\xE9, OWASP</p><ul><li>S\xE9curit\xE9 Overall, d\xE8s le d\xE9part</li><li>V\xE9rifier les donn\xE9es fournies par les users. Nettoyage des caract\xE8res sp\xE9ciaux ou masqu\xE9s.</li><li>Messages d&#39;erreur custom au front sans aucunes infos pour \xE9viter le leak d&#39;info</li><li>Validation c\xF4t\xE9 serveur</li><li>HTTPS, pas de http</li><li>Une seule session par user</li><li>V\xE9rifier les acc\xE8s</li></ul></li><li><p>Failles de s\xE9curit\xE9 des applications Web</p><ul><li>PKI</li><li>Chiffrement</li><li>Signatures Num\xE9riques, Certificats</li><li>Pas de param\xE8tres par d\xE9faut</li><li>Supprimer les comptes non utilis\xE9s</li><li>Mise \xE0 Jour des certificats PKI expir\xE9 et logiciels</li><li>Utilis\xE9 TLS au lieu SSL (ancien)</li><li>Composants tiers, faire attention au composant que l&#39;on ne connait pas assez</li></ul></li><li><p>OWASP Top 10 (Open Web Application Security Project)</p><ul><li>Mettre en lumi\xE8re les risques de s\xE9curit\xE9s les plus courants sur les applications web</li><li>Donn\xE9es user, toujours consid\xE9r\xE9s comme non fiable</li><li>Authentification doit \xEAtre forte multi factor par exemple</li><li>Chiffrement des donn\xE9es au repos ou en transport</li><li>XML External Entities, injection de code dans du Xml</li><li>Control d&#39;acc\xE8s apr\xE8s authentification, probl\xE8me du moindre privil\xE8ge</li><li>Mauvais param\xE9trage du serveur ou service. Souvent d\xFB \xE0 des param\xE8tres par d\xE9faut non modifi\xE9</li><li>XSS absences de validation ou nettoyages des champs de formulaire</li><li>D\xE9-s\xE9rialisation mal s\xE9curis\xE9e</li><li>Utilisation de tiers composants avec des vuln\xE9rabilit\xE9s connues</li><li>Journalisation et surveillance des failles nouvellement connues</li></ul></li><li><p>Authentification, authorisation et chiffrement</p><ul><li>Facteurs d&#39;authentification =&gt; mot de passes (connaissance), t\xE9l\xE9phone, carte bancaire, badge (possession), inh\xE9rence (empreint digital)</li><li>Authorisation, ressources que l&#39;user \xE0 droits, granularit\xE9 authorisation</li><li>Chiffrement, s\xE9curit\xE9 des communications (\xE9couter, intercepter), stockage, \xE9change chiffr\xE9s de bout en bout</li></ul></li><li><p>SSL et TLS</p><ul><li>SSL obsolete en raison de bcp vuln\xE9rabilit\xE9, PKI certificat</li><li>D\xE9sactiver SSL</li><li>TLS 1.0 obsol\xE8te donc utiliser les versions &gt; 1.1, PKI certificat (avec cl\xE9s public priv\xE9)</li><li>S/MIME Secure Multipurpose Internet Mail Exchange, utilis\xE9 pour chiffrer et signer les messages \xE9lectroniques + PKI</li><li>IP Sec, s\xE9curis\xE9 traffic r\xE9seau avec un VPN, IP sec permet de s\xE9curiser tout type de traffic r\xE9seau.</li><li>Chiffrage ESP (paquet)</li></ul></li></ul>',7),V='{"title":"ANSSI","description":"","frontmatter":{},"headers":[{"level":2,"title":"MOOC","slug":"mooc"},{"level":3,"title":"Track 1 : CGI Principes fondamentaux de la s\xE9curit\xE9 des applications","slug":"track-1-cgi-principes-fondamentaux-de-la-securite-des-applications"}],"relativePath":"cybersec/index.md"}',k={},y=Object.assign(k,{setup(s){return(i,r)=>(l(),f("div",null,[m(C),M]))}});export{V as __pageData,y as default};
