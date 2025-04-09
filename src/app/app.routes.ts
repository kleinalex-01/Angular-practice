import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';


export const routes: Routes = [
    {path: "create-task", component: CreateTaskComponent},
    {path: "view-task", component: ViewTaskComponent},
    {path: "update-task", component: UpdateTaskComponent},
    {path: "delete-task", component: DeleteTaskComponent},
];
