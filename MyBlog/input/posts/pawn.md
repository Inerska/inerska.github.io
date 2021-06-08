# Le Pawn est désigné comme un langage typé
```c
CMD:respawn(playerid, params[])
{
    static
    userid;

    if(!IsPunAdmin(playerid, ADMIN_RANK_ID_MODO1))
    return errorMessage(playerid, MESSAGE_ERROR_CMD_NOTALLOWED);

    if (sscanf(params, "u", userid))
    return SendClientMessage(playerid, COLOR_USAGE, "/respawn <PlayerID/PlayerName>");

    if (userid == INVALID_PLAYER_ID)
    return SendClientMessage(playerid, COLOR_ERROR, MESSAGE_ERROR_PLAYER_DISCONNECTED);

    RespawnPlayer(userid);
    SetPlayerPos(userid, 1743.9965, -1863.9811, 13.5744);
    SetPlayerFacingAngle(userid, 180.0000);
    
    SendClientMessage(playerid, COLOR_YELLOW, "Vous avez respawn le joueur %s", GetName(userid, true));
    SendClientMessage(userid, COLOR_YELLOW, "Vous avez été respawn par l'Administrateur %s", GetName(playerid, true));

    return 1;
}
```
> Exemple de code en Pawn, commande joueur de respawn