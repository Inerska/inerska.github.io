title: Pawn moderne » Les différents processeurs de commandes
tag: Pawn
author: Rams
published: 28/06/2021
---

Après le tutoriel d'Inerska pour utiliser sscanf, il est dans mes principes de vous orienter vers votre processeur de commandes préféré.
Mais... déjà : qu'est-ce qu'un processeur de commandes ?

Très bonne question.
De base quand vous souhaitez savoir si un joueur effectue une commande via la touche T & commence son texte par un slash "/", vous devez utiliser la callback
**OnPlayerCommandText(playerid, cmdtext[])**
seulement... cette méthode n'est pas la plus fluide qui existe, voici le temps éstimé d'une commande basique pour différents processeurs de commandes :

![Comparaison des processeurs de commandes](https://camo.githubusercontent.com/429633e77cda3178c74b1c2effa67991dad282609f220b0bbf72b26058e9b9d1/687474703a2f2f692e696d6775722e636f6d2f735659394742642e706e67)
> Tableau de comparaison disponible sur le github de PawnCMD (https://github.com/katursis/Pawn.CMD)

On peut voir que la méthode de base, donc strcmp (via OnPlayerCommandText) est loin d'être la plus rapide, tandis que Pawn.CMD est de loin la meilleure.

Un petit exemple :

#### Hello world!

```c
#define c_white	0xFFFFFFFF		
CMD:helloworld(playerid, params[])
{
	SendClientMessage(playerid, c_white, "Hello World !");
	return true;
}
```

"CMD:" est la syntaxe utilisée par bon nombre de Command Processor comme ZCMD, Pawn.CMD, etc etc...