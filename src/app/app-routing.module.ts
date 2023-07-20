import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TypedFormsComponent } from './typed-forms/typed-forms.component';

const routes: Routes = [
  { path: '', component: HomeComponent,  },
  { path: 'typed-forms', component: TypedFormsComponent,  },
  { path: 'lazy-loading', loadChildren: () => import('./lazy-loading/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: 'async-pipe', loadChildren: () => import('./async-pipe/async-pipe.module').then(m => m.AsyncPipeModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
