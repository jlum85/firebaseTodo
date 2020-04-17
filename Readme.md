# Todo Application using ReactJS and Firebase

---

### Account creation:

![Account](doc/Account.gif)

### Todo Dashboard:

![Account](doc/Todo.gif)

### Application Architecture:

![Application Architecture](doc/TodoApp.png)

### Ressources

tuto from :
https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/

https://github.com/Sharvin26/TodoApp

### Remarques

Attention : avant le firebase init , il faut faire firebase login

pour tester la route app.get("/todos", getAllTodos); cf API/todo.js
prendre l'url de la fonction + /todos

https://us-central1-todoapp-c29da.cloudfunctions.net/api/todos

pour les functions firebase :

- pour l'émulation en local , commande firebase serve
- pour la prod : firebase deploy
