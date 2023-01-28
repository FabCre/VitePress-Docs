# Créer un RAID 1

Tout d’abord vous aurez besoin de 2 disques durs de même capacité. Ici je vais utiliser 2 disques 1To ce qui va me fournir 1To utilisable et 1To de copie au cas où un des deux disques ne marcherait plus.

Il vous faut formater les disques avec une table de partition en GPT et une partition non formatée de la taille du disque (notez que vous pouvez très bien utiliser des partitions de plus faible taille tant qu’elles font la même taille pour le RAID).

Vous aurez besoin du logiciel mdadm à installer avec votre packageur préféré. Vous pourrez alors activer le service.

systemctl start mdadm
systemctl enable mdadm
Il faut maintenant créé le volume RAID. Vérifiez bien vos disques avec :

fdisk -l
Une fois repérés vous pouvez créer le volume avec les partitions correspondantes (sda et sdb sont prises pour l’exemple) :

mdadm --create /dev/md0 -l1 -n2 /dev/sda1 /dev/sdb1
Vous pouvez voir l’état de la synchronisation avec :

watch cat /proc/mdstat
Pour avoir des infos sur votre volume :

mdadm --detail /dev/md0
Vous pouvez maintenant vous servir de ce périphérique comme d’un disque dur.

Vous pouvez notamment recréer une table des partitions et créer une partition ext4/luks chiffrée.

Je vous conseille d’utiliser un outil graphique comme gparted ou kde partition manager. Ils sont simples d’utilisation et fonctionnent bien.

Panne d’un disque dur
En cas de panne d’un disque dur, la première chose à faire est d’identifier celui qui ne fonctionne plus et de le remplacer par un disque fonctionnel de la même taille.

Il faut ensuite créé une nouvelle table de partition avec un seule partition non formatée, exactement comme si vous devez créer un RAID avec ce disque.

Vous pouvez enfin ajouter le disque dans le RAID (ici sdc est utilisé pour l’exemple, vérifiez bien le nom de votre partition) :

mdadm --manage /dev/md0 --add /dev/sdc1
Une fois la synchronisation terminée votre RAID 1 est de nouveau fonctionnel !

watch cat /proc/mdstat