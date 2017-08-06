import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
//import { BaseOverviewComponent } from "app/components/overview/base-overview.component";
//import { AuthGuard } from "app/services/auth-guard.service";
//import { authProviders } from "./login.routing";
//import { FullCurrencyTableComponent } from "app/components/overview/full-currency-table.component";

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: 'app/modules/login/login.module#LoginModule'
  },
  {
    path: 'employee',
    loadChildren: 'app/modules/employee/employee.module#EmployeeModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);