import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo App';
  taskList = ['Angular', 'Javascript', 'Polymer'];
  newtask = '';
  addTask = function(){
    if(this.newtask != ''){
      this.taskList.push(this.newtask);
      this.newtask = ''
    }
  }
  removeTask = function(index){
   // if(this.newtask != ''){
      this.taskList.splice(index,1);
    //  this.newtask = ''
    //}
  }
}
