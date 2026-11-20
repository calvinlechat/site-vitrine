# Medjed — site vitrine

Site statique one-page (HTML/CSS/JS, aucune dépendance) prêt pour **GitHub Pages**.

## Arborescence

```
index.html   # contenu et structure
style.css    # thème (variables CSS en tête de fichier)
script.js    # filtre des projets, copie de l'e-mail
README.md
```

## Personnaliser

1. **Liens des projets** : dans `index.html`, section `#projets`, vérifie chaque `href` de la forme
   `https://github.com/calvinlechat/<nom-du-repo>` (slug à confirmer notamment pour « Générateur de Devis de Donjon » → `Generateur-Devis-Donjon`).
2. **E-mail** : section `#contact`, remplace `contact@exemple.fr` à **deux endroits** (`href="mailto:…"` + texte, et `data-email` du bouton).
3. **Couleurs** : variables `--gold`, `--cyan`, `--bg`, `--card` au début de `style.css`.
4. **Textes** : modifie directement les balises de `index.html`.

## Déployer sur GitHub Pages

1. Pousse les fichiers à la racine de la branche `main` d'un dépôt (ex. `medjed` ou `calvinlechat.github.io`).
2. Sur GitHub : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Le site est publié sous `https://calvinlechat.github.io/<repo>/` (ou à la racine pour `calvinlechat.github.io`).

Tous les chemins sont relatifs : le site fonctionne à la racine comme dans un sous-chemin.

## Tester en local

Ouvre `index.html` dans le navigateur, ou : `python -m http.server` puis http://localhost:8000.
