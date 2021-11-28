import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
@Input() todo:any={};
@Output() toggleEvent = new EventEmitter();
@Output() deleteEvent = new EventEmitter();
@Output() updateEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggle(todo){
    this.toggleEvent.emit(todo);
  }
  delete(todo){
    this.deleteEvent.emit(todo);
  }
  update(todo){
    this.updateEvent.emit(todo);
  }
}
