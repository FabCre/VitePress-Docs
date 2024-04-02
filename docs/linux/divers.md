# Divers utils

## git ajout d'un fichier pour ne pas le suivre

git update-index --assume-unchanged src/public/index.html

## Typescript

```ts
type Primitive = number | string | boolean | symbol | Date;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends Primitive ? T[K] : DeepPartial<T[K]> };

export function p<T>(x: DeepPartial<T>): T {
return x as unknown as T;
}
```

## ObjectId aleatoire

```js
const mongoObjectId = function () {
    var timestamp = (new Date().getTime() / 1000 | 0).toString(16);
    return timestamp + 'xxxxxxxxxxxxxxxx'.replace(/[x]/g, function() {
        return (Math.random() * 16 | 0).toString(16);
    }).toLowerCase();
};
```