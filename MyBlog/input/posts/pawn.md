---
Tags: SAMP
---

# Le Pawn, etc.....
## Utilisé pour les serveurs SAMP ....
```c
#include <YSI_Coding\y_hook>
hook OnPlayerConnect(playerid)
{
    TogglePlayerSpectating(playerid, 1);
    //TODO: Handle skin
    SetSpawnInfo(playerid, 0, 123, 235.2325, -1422.4965, 5.0315, 0,
                 0, 0,
                 0, 0,
                 0, 0);
    
    inline OnAccountChecked()
    {
        if (cache_num_rows() > 0)
        {
            Dialog_ShowCallback(playerid, using public DIALOG_LOGIN<iiiis>, DIALOG_STYLE_PASSWORD, "Connexion", "Pour vous connecter, merci de renseigner votre mot de passe", "Valider", "Annuler");
        }
        else
        {
            Dialog_ShowCallback(playerid, using public DIALOG_REGISTER<iiiis>, DIALOG_STYLE_PASSWORD, "Inscription", "Bienvenue\nPour commencer votre aventure veuillez crÃ©er un mot de passe.\n\n{6A7374}4 lettres minimum, 2 chiffres minimum 20 caractÃ¨res maximum.", "Confirmer", "Annuler");
        }
    }
    
    MySQL_TQueryInline(gSQL_CONNECTION, using inline OnAccountChecked, "select null from accounts where username = '%e' LIMIT 1", GetName(playerid));
    
    return Y_HOOKS_CONTINUE_RETURN_1;
}
```
> Exemple de code en Pawn permettant la connexion/inscription du joueur
> **Middleware client très intéressant**