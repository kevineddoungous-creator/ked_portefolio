# LE KED — Portfolio personnel

Site statique (HTML, CSS, JavaScript) : aucune installation, aucun serveur.

## Structure
```
LE-KED-PORTFOLIO/
├── index.html   → structure et contenu
├── style.css    → design et responsive
├── script.js    → menu mobile, animations, bouton « haut de page »
├── assets/      → logo, favicon, photo, CV (CV-Ked.pdf)
└── README.md
```

## 1. Ajouter votre photo
Placez votre photo dans `assets/` sous le nom **`photo-le-ked.jpg`**
(format portrait, environ 480 × 560 px, moins de 150 Ko). Tant qu'elle est absente, le site affiche les initiales « LK ».

## 2. Tester en local
Double-cliquez sur `index.html`. (Les icônes des réseaux et la police nécessitent une connexion Internet.)

## 3. Publier sur GitHub Pages
1. Créez un dépôt GitHub (ex. `le-ked-portfolio`) et envoyez-y tous les fichiers (`index.html` à la racine).
2. Dépôt → **Settings** → **Pages**.
3. *Source* : **Deploy from a branch**, branche **main**, dossier **/ (root)** → **Save**.
4. Après 1 à 2 minutes : `https://VOTRE-PSEUDO.github.io/le-ked-portfolio/`

## 4. Modifier le contenu
- **Projets** : dans `index.html`, section `#projets`, remplacez `href="#"` par le lien du projet ou du dépôt, supprimez l'attribut `data-soon` et changez le statut « À venir » en « Terminé » quand le projet est réellement fini.
- **Couleurs** : variables en haut de `style.css` (`--blue`, `--blue-dark`…).
- **Liens sociaux** : dans `index.html`, sections `#reseaux`, `#contact` et le pied de page.
