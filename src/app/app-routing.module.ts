import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then( m => m.EmployeePageModule)
  },
  {
    path: 'employee-structure',
    loadChildren: () => import('./employee-structure/employee-structure.module').then( m => m.EmployeeStructurePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'view-details',
    loadChildren: () => import('./view-details/view-details.module').then( m => m.ViewDetailsPageModule)
  },
  {
    path: 'view-subordinates',
    loadChildren: () => import('./view-subordinates/view-subordinates.module').then( m => m.ViewSubordinatesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
