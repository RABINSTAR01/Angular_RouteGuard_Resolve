import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarkComponent } from './mark/mark.component';
import { ResovegGuard } from './resoveg.guard';

const routes: Routes = [
  {
    path:'mark',
    component:MarkComponent,
    resolve:{
      data:ResovegGuard
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
