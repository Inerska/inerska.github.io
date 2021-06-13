Title: Connexion SQL avec l'include mysql
Lead: Yay for examples!
Published: 12/13/2014
Tag: Pawn
---

### Connexion SQL avec l'include mysql

Bien que cela semble difficile à première vue, le simple fait de vouloir créer son gamemode à partir de zéro est le début même de ce système pourtant basique.
A travers cette article, je vous expliquerais comment tout mettre en œuvre pour arriver à vos fins, et finir à créer votre système d'inscriptions et de connexion sur votre magnifique serveur SAMP.

```c
new MySQL:gSQL_CONNECTION;

forward MySQLConnect();
forward MySQLDisconnect();

public 
MySQLConnect()
{
	gSQL_CONNECTION = mysql_connect(SQL_HOST, SQL_USER, SQL_PASS, SQL_DB);
	mysql_log(ALL);
    
    if(!mysql_errno(gSQL_CONNECTION))
    {
		mysql_log(ERROR | WARNING | DEBUG);
		printf("------------------------------------------------------------------------------");
    	printf("[MYSQL]: Connection to `%s`@'%s' succesful!", SQL_DB, SQL_HOST);
		printf("------------------------------------------------------------------------------");
	}
	else
	{
		printf("------------------------------------------------------------------------------");
	    printf("[MYSQL]: ERROR: Connection to `%s`@'%s' failed!", SQL_DB, SQL_HOST);
		printf("------------------------------------------------------------------------------");
	}
    
	return 1;
}

public
MySQLDisconnect()
{
    mysql_close(gSQL_CONNECTION);
}

public 
OnQueryError(errorid, const error[], const callback[], const query[], MySQL:handle)
{
	switch(errorid)
	{
		case CR_SERVER_GONE_ERROR:
		{
			printf("Lost connection to server");
		}
        
		case ER_SYNTAX_ERROR:
		{
			printf("Something is wrong in your syntax, query: %s",query);
		}
	}
	return 1;
}
```

> Vous pouvez le voir, `OnQueryError` `MySQLDisconnect` `MysqlConnect` sont des callbacks

Utilisez les avec **parsimonie**, faites bien attention !