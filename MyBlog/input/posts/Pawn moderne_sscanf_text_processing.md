title: Pawn moderne » Utiliser sscanf
tag: Pawn
---

Ça y'est c'est le grand jour, vous souhaitez aujourd'hui vous attaquer aux commandes, la partie la plus fun d'un gamemode vous ne trouvez pas ? Surtout les commandes d'ordre administratifs, quel plaisir sadique de pouvoir bannir ses meilleurs amis avant même que votre formidable serveur ouvre ses portes.

Vous choisissez votre processeur de commandes *zcmd, i-zcmd, pawn.cmd* ou non, et vous commencez à créer la commande de kick. Sachant que vous êtes rusé, vous pensez la commande en premier temps, la commande kick prendra un joueur en paramètre et hop il se fait exclure du serveur !

 ```c
 cmd:kick(playerid, params[])
 {
     Kick(playerid);
     return 1;
 }
 ```

> Problème ici, `playerid` est l'id du joueur qui exécute la commande, ça vous exclura vous et non le joueur cible! (Ce serait quand même bête)

## Utiliser SSCANF

Il est important de noter que sscanf est un "outil" de traitement de textes, il va agir et travailler sur du texte, mais quel lien avec notre commande de kick ? Le but est de savoir si le joueur a bien tapé le nom d'un joueur qu'il souhaite exclure.

`Aymane: /kick killer1`

On souhaite savoir si Aymane a bien tapé `killer1`, et qu'il n'ait pas tapé: `Aymane: /kick`.

#### Hello world!

```c
sscanf("Hello world!", "ss", str, str2);
```

 Le but ici est de récupérer la partie `world!`, on spécifie à sscanf les différents **"spécifieurs"** (voire tableau ci-dessous). Ici on spécifie deux `string` (chaines de caractères). `str` est assigné "Hello", `str2` est assigné "world!". Simple pas vrai ?

| Spécifieurs | Nom                             | Exemples                                                |
| ----------- | ------------------------------- | ------------------------------------------------------- |
| `i`, `d`    | Integer                         | `1`, `42`, `-10`                                        |
| `c`         | Character                       | `a`, `o`, `*`                                           |
| `l`         | Logical                         | `true`, `false`                                         |
| `b`         | Binary                          | `01001`, `0b1100`                                       |
| `h`, `x`    | Hex                             | `1A`, `0x23`                                            |
| `o`         | Octal                           | `045`, `12`                                             |
| `n`         | Number                          | `42`, `0b010`, `0xAC`, `045`                            |
| `f`         | Float                           | `0.7`, `-99.5`                                          |
| `g`         | IEEE Float                      | `0.7`, `-99.5`, `INFINITY`, `-INFINITY`, `NAN`, `NAN_E` |
| `u`         | User name/id (bots and players) | `Y_Less`, `0`                                           |
| `q`         | Bot name/id                     | `ShopBot`, `27`                                         |
| `r`         | Player name/id                  | `Y_Less`, `42`                                          |
| `m`         | Colour                          | `{FF00AA}`, `0xFFFFFFFF`, `444`                         |

> Tableau du wiki du repo sscanf d'Y-Less (https://github.com/Y-Less/sscanf#specifiers)

*Pour vous rassurer, je n'ai jamais utiliser tous les spécifieurs proposés par sscanf.*

Sachant qu'on souhaite "détecter" un joueur, on récupère le spécifieur `r` ou bien `u` si on souhaite ajouter les bots en prime, *ce qui est sympa avec ces spécifieurs, c'est qu'ils "détectent" aussi bien les noms que les IDs des joueurs*.

On rajoute ça à notre commande de kick.

```c
cmd:kick(playerid, params[])
{
    new targetid;
    
    if (sscanf(params, "r", targetid)) return SendClientMessage(playerid, -1, "USAGE: /kick <player>"); // On met un message au cas où qu'un STAFF ne sache pas utiliser la commande, un petit mémo!
    
    Kick(targetid); // On n'oublie pas de changer par targetid
    
    return 1; // Et la commande s'est très bien exécutée, yes!
}
```

*Petite note pour les développeurs C, vous connaissez très probablement la fonction `sscanf`, il existe un moyen pour éviter de se confondre, vous pouvez utiliser `unformat` au lieu de `sscanf`, tout est pareil, seul le nom de la fonction change.*

Et voilà, le joueur cible se fera exclure, le pauvre!

Petit exercice pour vous tester, faites une commande de bannissement (/ban <joueur>).

*Fonctions à utiliser:* `Kick()`, `Ban()`, `sscanf()`

> Note: La fonction `Ban()` ban-ip le joueur cible, et l'ajoute au fichier `samp.ban`, il faut donc aussi exclure le joueur `Kick()`.



