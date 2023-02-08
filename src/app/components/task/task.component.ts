import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})

export class TaskComponent implements OnInit {

  @Input() task: ITask  | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>;

  constructor() {}
  
  ngOnInit(): void {
    console.log("Tarea: ", this.task?.title);
  }

  deleteTask() {
    this.delete.emit(this.task); // Notificamos al componente superior el elemento a eliminar
  }

}
