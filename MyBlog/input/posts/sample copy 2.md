Title: Connexion SQL avec l'include mysql
Lead: Yay for examples!
Published: 12/13/2014
Tag: Pawn
---
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