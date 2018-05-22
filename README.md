
JAVASCRIPT.2
-------------

# Introduction : Présentation de l'équipe

## ** WEST COAST MARSEILLE**

##- Audrey (@audreycouture)

##- Jerome (@Jerome)

##- Damien (@damien13005)

##- Maxime (@Maxime)

##- Sam (@sam)


##Fait en pair programming

![alt tag](images/pairProgramming.jpg)

-------------

# But de l´exercice

Pour ce Mardi 22 Mai 2018 dans le cadre de l'approfondissement du langage Javascipt, nous devions definir plusieurs fonctions Javascript pour the hacking project.



Notre cahier des charges :

A] EXERCICE CHAUFFE JS
1) Une fonction qui prend une array et qui retourne le nombre maximum
2) Une fonction qui prend un string et qui retourne le nombre de voyelles
3) Faire une fonction qui prend un string et qui renvoie les caractères en position inverse.

B] EXERCICE CALCULETTE
1) Une calculette qui marche avec un Backend et front tout deux opérationel 
2) Une calculette qui marche avec fonction Clear
3) Une calculette qui marche avec fonction Plusieurs opérations à la suite
4) Donner de la forme à nos pages en intégrant un template WrapBootstrap

------------   



# Consignes d'utilisation

 
## 1.  Chauffe : Tests en local:
Pour ouvrir les exercices de chauffe et les tester il vous suffit d'utiliser un tester en ligne comme : https://jsfiddle.net/  et de copier coder notre code. 


## 2.  Calculette Tests en local:

il faut downloader le dossier, se placer dedans et dans dans votre terminal et lancer en commande:

> $ bundle install 


Pour voir la base données exécuter en commande un

> $ rails db:migrate

Puis tapez la commande suivante pour tester en local l'appli:

> $ rails server

La vous pouver vous balader sur notre code.

Puis ouvrir le fichier sqlite dans le dossier db de l'app, soit avec dbBrowser soit avec SqliteStudio ou autre et visionner.

et Tester la Version en Localhost en allant dans ton navigateur sur :

> localhost:3000


## 2.  Calculette Test en ligne:

Aller sur les liens Heroku suivants


> https://marseillewestcoast.herokuapp.com





------------


# Explications détaillés 

------------- choix du design  -------------

2 personnes ont disséqué les ressources proposées pour retenir certains points clés : 
        ◦ Des éléments visuels attirants
        ◦ Ne pas trop charger la landing page
        ◦ Pas de Nav Bar (pour favoriser le call to action) 
        ◦ Attirer le clic et favoriser les contacts 

------------- comment le code a été fait : -------------

    1. Nouveau projet Rails : landing page
        a. $ rails new lendingpage.2
        b. Modif du gemfile (pour integration heroku ) 
    2. Nouveau Repo sur Github
        a. cd dossier lendingpage.2
        b. $ git init 
        c. $ git remote
        d. $ git Add . 
        e. $ git commit -m "first commit"
        f. $ git push 
    3. Heroku compatible
        a. $ heroku create
        b. $ git add .
        c. $ git commit -m "heroku"
        d. $ git push heroku master
        e. Succés avec site en ligne appelé https://marseillewestcoast.herokuapp.com
    4. Créer un compte Mailchimp pour les mails et la newsletter
        a. Créer un fichier .env avec les clées API de Mailchimp
        b. Dans le gitiniore rajouter le .env
        c. Sur mailchimp.com paramétrer avec le site heroku  
    5. Paramètrer la base de donner des utilisateurs 
        a. $ rails generate scaffold user email:string
        b. $ rails db:migrate
        c. Verif heroku comparabilité avec un nouveau push heroku => ok
        d. $ heroku run rails db:migrate => ok
        e. Affichage des routes users : $ rails routes 
        f. Vérification en ligne :   https://marseillewestcoast.herokuapp.com
    6. Configuration des pages en ligne en définissant seulement les routes 
        a. Dans config routes.rb :   
        b. $ verif avec rails routes => ok
        c. Verif avec heroku push (refaire étape 2def et 3bcd) => ok
    7. Ajout de Boostrap
        a. Insertion de Wrapboostrap dans notre application html  
    8. Mise en place d'un tracking avec Mixpanel pour chaque landing page

    9. Mise en place d'un bot Instagram
    Génère des Likes, des commentaires et des followers
       
    10. Mise en place d'un Scheduler pour lancer les bots avec Heroku



# Résultats

Exercixes de chauffes tous ok
Calculette fonctionelle ! 


A vous de voir !


Merci pour la correction ! 
