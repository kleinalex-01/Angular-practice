import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-create-task',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {

  taskform = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    date: new FormControl('')
  });

  createTask() {
    console.log(this.taskform.value);
  }
}
