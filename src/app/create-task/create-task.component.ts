import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from '../task';
import { signal, effect, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  newTaskTitle: string = "";
  taskArr = signal<Task[]>([])

  addTask(title: string) {
    if (!this.newTaskTitle) {
      alert("Please enter a task")
      return
    }
    title = title.trim();
    const baseTaskId :number = 0;
    const nextTaskId :number = this.taskArr().length > 0 ? this.taskArr()[this.taskArr().length - 1].id + 1 : 0;
    const newTask: Task = {
      id: nextTaskId,
      title: title,
    }
    this.taskArr.update((tasks) => [...tasks, newTask])
    this.newTaskTitle = "";
  }
}
