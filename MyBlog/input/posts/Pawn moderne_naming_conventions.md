title: Pawn moderne » Les conventions de nommage
tag: Pawn
---

​	Généralement, en Pawn comme en tout autre langage de programmation, il est important d'être consistant, de garder les mêmes règles dans quelconque projet ou programme lambda. Afin que le code soit plus lisible, et compréhensible aux autres ou aux contributeurs, il est important de respecter des conventions de nommages.

> Cet article est non-exhaustif et tire beaucoup de ses notions et exemples du guide d'open.mp (https://open.mp/fr/docs/scripting/language/Style)

### Accolades

On distingue deux écoles concernant les accolades, la méthode dite `Allman` et la méthode dite `K&R` qui est tout aussi valable en Pawn.

```c
public OnGameModeInit()
{
    return 0;
}
```

> Méthode Allman

```c
public OnGameModeInit(){
    return 0;
}
```

> Méthode K&R

Libre à vous de choisir celle qui vous convient le mieux, cependant, gardez à l'esprit que la consistance est la clé.

### Nommage

#### Fonctions

Les fonctions doivent être nommées en `PascalCase` et écrites en anglais.

```c
inline OnDataRetrieved()
{
    cache_get_value_name(0, "password", password, sizeof password);
}
```

#### Variables globales

Les variables globales doivent être utilisées avec le mot clé `new` et doit être préfixé avec `g_Variable` ou `gVariable` tout en utilisant `PascalCase`.

```c
new bool:gLobbyState = false;
```

 #### Variables locales

Les variables locales quant à elles doivent utiliser `camelCase`, et doivent être compréhensibles un strict minimum.

```c
// Mauvais
new string:a[72];

// Correcte
new string:password[72];
```

#### Énumérateurs

Si l'énumérateur est nommé, car facultatif, il doit être préfixé avec `E_` ou `e_` et doivent utiliser `SCREAMING_SNAKE_CASE`.

```c
// Mauvais
enum ChatType{
	VeryLow = 0,
    Low = 1,
};

// Correcte
enum E_CHAT_TYPE {
    ...
};
```

#### Macros et directive de pré-processeurs

Les macros doivent utiliser `SCREAMING_SNAKE_CASE`, quelque soit son utilisation.

Il est cependant, déconseillé d'utiliser des macros / directives de pré-processeurs au risque de semer confusion à quiconque lira votre code, quelque soit son niveau.

```c
#define internal        static
#define local_persist   static
#define global_variable static
```

#### Documentation

Les fonctions externes sont encouragées à être documenter pour que celles-ci soient plus facilement utilisables par autrui. `// Cette fonction fait X, Y et Z choses et retournes A`

```c
// Cette fonction prend en paramètre l'ID du véhicule, et retourne l'état du capot du véhicule.
bool:GetHoodStatus(vehicleid)
{
	static
        engine,
	lights,
	alarm,
	doors,
	bonnet,
	boot,
	objective;
    
	GetVehicleParamsEx(vehicleid, engine, lights, alarm, doors, bonnet, boot, objective);
    
	if (bonnet != 1)
        return false;
    
	return true;
}
```

