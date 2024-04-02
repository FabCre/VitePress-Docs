# Redis command

## Command utiles

Pour afficher l'ensemble des clefs present dans la base
```shell
redis-cli KEYS '*' 
```

Pour vider la base
```shell
redis-cli FlUSHALL
```

## Script pour parser l'ensemble des cles

```shell
# to get the value for a key:
redis-cli GET <your-key>

# and if you want all values:
for i in $(redis-cli KEYS '*'); do redis-cli GET $i; done

# and finally all keys and values:
for i in $(redis-cli KEYS '*'); do echo $i; redis-cli GET $i; done

#!/bin/sh -eu
keys=`redis-cli keys '*'`
if [ "$keys" ]; then
    echo "$keys" | while IFS= read -r key; do
        type=`echo | redis-cli type "$key"`
        case "$type" in
            string) value=`echo | redis-cli get "$key"`;;
            hash) value=`echo | redis-cli hgetall "$key"`;;
            set) value=`echo | redis-cli smembers "$key"`;;
            list) value=`echo | redis-cli lrange "$key" 0 -1`;;
            zset) value=`echo | redis-cli zrange "$key" 0 -1 withscores`;;
        esac
        echo "> $key ($type):"
        echo "$value" | sed -E 's/^/    /'
    done
fi
```
