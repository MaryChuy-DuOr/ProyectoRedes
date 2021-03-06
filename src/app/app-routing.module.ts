import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { MisRecetasComponent } from './components/mis-recetas/mis-recetas.component';
import { RecetaSpoonacularComponent } from './components/receta-spoonacular/receta-spoonacular.component';
import { SimilarSpoonacularComponent } from './components/similar-spoonacular/similar-spoonacular.component';
import { RecetaEdamamComponent } from './components/receta-edamam/receta-edamam.component';
import { MisRecetasEComponent } from './components/mis-recetas-e/mis-recetas-e.component';
import { Buscador2Component } from './components/buscador2/buscador2.component';
import { IngredientesComponent } from './components/ingredientes/ingredientes.component';
import { IngredienteComponent } from './components/ingrediente/ingrediente.component';
import { AboutComponent } from './shared/about/about.component';

import { CanGuard } from './auth/guards/can-guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'perfil-usuario', component: PerfilUsuarioComponent, canActivate: [CanGuard]  },
  {path: 'recetas', component: RecetasComponent, canActivate: [CanGuard]},
  {path: 'ingredientes', component: IngredientesComponent, canActivate: [CanGuard]},
  {path: 'mis-recetas', component: MisRecetasComponent, canActivate: [CanGuard]},
  {path: 'mis-recetasE', component: MisRecetasEComponent, canActivate: [CanGuard]},
  {path: 'receta-spoonacular/:id_receta', component: RecetaSpoonacularComponent, canActivate: [CanGuard]},
  {path: 'ingrediente-spoonacular/:id_ingrediente', component: IngredienteComponent, canActivate: [CanGuard]},
  {path: 'similar-spoonacular/:id_receta', component: SimilarSpoonacularComponent, canActivate: [CanGuard]},
  {path: 'receta-edamam/:uri', component: RecetaEdamamComponent, canActivate: [CanGuard]},
  {path: 'buscador/:busquedaEdaman', component: BuscadorComponent, canActivate: [CanGuard]},
  {path: 'buscador2/:busquedaEdaman', component: Buscador2Component, canActivate: [CanGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
