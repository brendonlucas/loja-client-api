import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { VendasComponent } from './vendas/vendas.component';
import { Routes, RouterModule  } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProdutosService } from './produtos.service';
import { ProdutoDetailComponent } from './produto-detail/produto-detail.component';
import { FormsModule } from '@angular/forms';
import { CriarProdutoComponent } from './criar-produto/criar-produto.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos-list', component: ProdutosComponent },
  { path: 'vendas-list', component: VendasComponent },
  { path: 'add-produto', component: CriarProdutoComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    VendasComponent,
    HomeComponent,
    CriarProdutoComponent,
    ProdutoDetailComponent,
    CriarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
