import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from './models/todo'; 

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {
   title ='';
   comment ='';
   todos: Todo[]= [];

   onSubmit() {
    console.log(`Tache: ${this.title}`); // Utilisez la syntaxe `${...}` pour l'interpolation
    console.log(`Commentaire: ${this.comment}`); // Utilisez la syntaxe `${...}` pour l'interpolation
    const todo = new Todo(this.todos.length+1,this.title!,this.comment!, true);
    this.todos.push(todo)  
  }

  close(id:number){

  }
  
}
