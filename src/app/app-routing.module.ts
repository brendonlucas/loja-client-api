import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './produtos/produtos.component';
import { VendasComponent } from './vendas/vendas.component';
import { ProdutoDetailComponent }  from './produto-detail/produto-detail.component';


const routes: Routes = [
  { path: 'produto/detail/:id', component: ProdutoDetailComponent }  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
