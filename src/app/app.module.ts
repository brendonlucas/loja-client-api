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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos-list', component: ProdutosComponent },
  { path: 'vendas-list', component: VendasComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    VendasComponent,
    HomeComponent,
    ProdutoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
