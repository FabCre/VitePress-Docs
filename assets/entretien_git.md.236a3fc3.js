import{_ as e,c as t,o as r,d as a}from"./app.a50e4a12.js";const v=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"entretien/git.md"}'),o={name:"entretien/git.md"},i=a('<ul><li>Comment versionner son code ?</li><li>Qu&#39;est-ce que Git et comment cela s&#39;utilise ? (local et remote via GitHub, GitLab, etc.)</li><li>Qu&#39;est-ce que git flow, trunk base development ?</li></ul><details class="details custom-block"><summary>Expliquer la commande git Merge vs Rebase ?</summary><p>MERGE</p><p>Bon choix lorsque l&#39;on souhaite ajouter notre travail à un travail collectif.</p><p>Cela va créer un commit de merge regroupant les commits et modifier la branche master.</p><p>Dans le cas où, il n&#39;y a pas de commit en &quot;retard&quot; sur la branche feature, aucun commit de merge n&#39;est créé, cela se nomme le &quot;Fast Forward&quot;.</p><p>REBASE</p><p>Bon choix lorsque l&#39;on souhaite récupérer le travail de collègues pour mettre à jour sa version de la branche partagé. Ou se mettre à jour par rapport à une branche d&#39;origine.</p><p>Cela va rejouer l&#39;historique de la branche local au top de la branche que l&#39;on rebase sans créer de commit. Si lors du &quot; rolling&quot;, il y a un conflit sur un commit, git va demander à résoudre ce conflit avant de poursuivre au commit suivant.</p><p>Le rebase permet de conserver un historique linéaire très lisible.</p></details><ul><li>Qu&#39;est-ce qu&#39;un rebase interactive ?</li></ul>',3),s=[i];function l(n,u,c,m,p,d){return r(),t("div",null,s)}const h=e(o,[["render",l]]);export{v as __pageData,h as default};