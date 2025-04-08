import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive,
    CreateTaskComponent, DeleteTaskComponent, UpdateTaskComponent, ViewTaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
