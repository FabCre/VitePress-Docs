# Docker

## Installation binaires docker

Suivre les étapes de la documentation [Docker installation binaires](https://docs.docker.com/engine/install/binaries/#install-daemon-and-client-binaries-on-linux) puis [Docker postinstall steps](https://docs.docker.com/engine/install/linux-postinstall/)

## Installation docker desktop


## Liste de commandes docker

### Voir les logs d’un service depuis n’importe quelle machine dans le cluster swarm

```shell
docker service ls --format "table {{.ID}}\t{{.Name}}\t{{.Ports}}"
```
```shell
docker service ps NOM_DU_SERVICE
```
```shell
docker service logs -f NOM_DU_SERVICE
```

### Se connecter a un container en particulier

```shell
docker stack ls --format "table {{.Name}}\t{{.Services}}\t{{.Namespace}}\t{{.Orchestrator}}"
```
- recuperer la machine (node) pour connaitre l'emplacement du container
```shell
docker stack ps --format "table {{.ID}}\t{{.Name}}\t{{.Node}}\t{{.Ports}}\t{{.CurrentState}}\t{{.Error}}" stack-NOM_DE_LA_STACK
```
- se rendre sur la machine qui a le container
```shell
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.CreatedAt}}\t{{.State}}\t{{.Ports}}" -f name=NOM_DE_LA_STACK
```
```shell
docker exec -it ID_DU_CONTAINER bash
```

### Copie de fichiers dans/hors container

- copy un fichier depuis la recette vers le local
```shell
scp root@test.internal.test.fr:/mnt/docker/logs/tomcat/documentation/documentation.log ~/
```
- copie un fichier depuis le container vers le local
```shell
docker cp [containerId]:/opt/test.XML /home/fcrespin/Documents
```

```shell
# Fais un tri dans le ls
ls -ltr

# Ou se trouve les logs
docker stack services stack-documentation
cd /mnt/docker/logs/tomcat/documentation
cat documentast.log | grep gestionnaire
cat localhost_access_log.2022-08-03.txt

# Execute un bash dans le container
docker exec -it 9f660f45562e bash ou /bin/bash

# ecris dans un fichier ce qu'il a grep > ou avec >> pour ajoute a un fichier existant
cat prd-1.documentation-rest.log | grep "PartageviderImpl" >> test2.txt

# request la route avec curl
curl -v --get http://localhost:7080/documentation/test/

# pour déployer la stack de container ou l'update avec la configuration qui se situe dans le .yml. Cette commande est à utiliser directement depuis le fichier deploy_batche_local_deps.sh dans webstorm
docker stack deploy --with-registry-auth -c ./docker-compose-deps.yml stack-dev

# affiche les containers proprement dans une table
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.CreatedAt}}\t{{.State}}\t{{.Ports}}"

# afficher les stacks de tous le cluster swarm
docker stack ls --format "table {{.Name}}\t{{.Services}}\t{{.Namespace}}\t{{.Orchestrator}}"

# afficher une stack en particulier avec son NODE
docker stack ps --format "table {{.ID}}\t{{.Name}}\t{{.Node}}\t{{.Ports}}\t{{.CurrentState}}\t{{.Error}}\t{{.Image}}" stack-NOM_DE_LA_STACK

# afficher en equivalence de commande service ou stack
docker stack ps stack-api-auto
docker service ps stack-api-auto_api-auto

# permet de scale un service a 0
docker service scale stack-batch_bat-ch=0

# POUR TUER ET RECREER un container à jour (exemple: cherm-batch)
docker service rm stack-dev-batch
deploy_1-batch_local.sh

# Error du type "network "dev" is declared as external, but could not be found. You need to create a swarm-scoped network before the stack is deployed"
# Pour le résoudre faire un "docker network inspect dev" et si celui ci n'existe pas, le créer avec "docker network create -d overlay dev"
```

