# Oulipop

Petite web application qui vous permet de faire des associations au hasard entre les termes d'un thésaurus.

Le jeu est accessible à l'adresse : https://le-poplab.github.io/oulipop/
(si vous ne spécifiez pas de jeu de donnée, le jeu de test est chargé).

## Spécifier son propre jeu de données.

Vous pouvez utiliser vos propres données. Pour cela :

- Préparer un fichier csv basique avec les différents termes.
Par ex :

bonjour,bonsoir
je m'appelle, mon nom est
bob,patrick

Vous pouvez avoir autant de lignes que vous le souhaitez. Chaque ligne peut contenir autant de terme que vous voulez.
Attention toutefois, si vous avez plus de 6 lignes, cela devient difficilement lisible et jouable.

- Publier le fichier xxx.csv dans le dossier /data de ce dépôt
- Sur un ordinateur ou de préférence un mobile, accéder à l'adresse : https://le-poplab.github.io/oulipop/#xxx
Par exemple vous avez publié un fichier qui d'appelle hello.csv dans le dossier data, le jeu avec ce lot de donnée est accessible à l'adresse : https://le-poplab.github.io/oulipop/#hello

