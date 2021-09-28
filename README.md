# Le jeu de la fourchette, dans l'autre sens, via requête HTTP

Hier, nous avons créé le jeu de la fourchette inversé :upside_down_face: grâce aux fonctionnalités du mystérieux `readline`. Aujourd'hui, nous allons le refaire en version HTTP. La logique de programmation du jeu est la même, mais la nouveauté se situe au niveau de la mise en place du serveur HTTP qui restera actif tout au long de la partie. Pour rappel, l'utilisateur décide d'un nombre entre 1 et 100 et c'est à votre programme de le trouver.

## Énoncé

1.  Créer un serveur qui écoute le port 3000
2.  Ecrire en réponse HTTP un premier nombre entre 1 et 100 (réutiliser la méthode _optimale_ pour calculer ce nombre, comme vu à la correction)
3.  L'utilisateur devra atteindre une des trois _routes_ suivantes : `/plus`, `/moins`, ou `/bravo`, ce qui générera un message détaillant ce que le programme va faire par la suite. Sauf si c'est gagné : il faudra alors afficher un message de victoire :tada:
4.  Plutôt que détailler ce que le programme va faire, le faire :boom: => Proposer un nouveau nombre pertinent par rapport à la réponse de l'utilisateur (=la route contactée).

## Astuce

N'hésitez pas à réouvrir le challenge `ettehcruof` à côté de votre code : toute la _logique_ est déjà développée, il n'y a finalement que la façon de communiquer qui change :wink:

## Bonus

1.  Afficher du HTML au lieu d'un simple texte
2.  Créer des boutons pour l'utilisateur afin de lui simplifier la vie.
3.  Réinitialiser le jeu une fois que le bon nombre a été trouvé par le programme.
