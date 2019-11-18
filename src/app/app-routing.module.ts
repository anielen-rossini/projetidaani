import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},  { path: 'inicio', loadChildren: './inicio/inicio.module#InicioPageModule' },
  { path: 'secao-cadastro', loadChildren: './secao-cadastro/secao-cadastro.module#SecaoCadastroPageModule' },
  { path: 'aprovados', loadChildren: './aprovados/aprovados.module#AprovadosPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
