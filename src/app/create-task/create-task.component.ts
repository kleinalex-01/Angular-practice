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
  taskArr = signal<Task[]>([
    {id: 0, title: "test-title", description:"test-description", completed: false}
  ])


  addTask(title: string) {
    if (!this.newTaskTitle) {
      alert("Please enter a task")
    }
    title = this.newTaskTitle.trim()
    const newTask: Task = {
      id: Date.now(),
      title: title,
      description: title,
      completed: false
    }
    this.taskArr.update((tasks) => [...tasks, newTask])
    this.newTaskTitle = "";
  }
}
