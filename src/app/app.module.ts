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
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from './guards/auth.guard';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { CriarFuncionarioComponent } from './criar-funcionario/criar-funcionario.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos-list', component: ProdutosComponent },
  { path: 'vendas-list', component: VendasComponent , canActivate: [AuthGuard]},
  { path: 'add-produto', component: CriarProdutoComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard]},
  { path: 'funcionarios', component: FuncionarioComponent, canActivate: [AuthGuard]},
  { path: 'add-funcionario', component: CriarFuncionarioComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    VendasComponent,
    HomeComponent,
    CriarProdutoComponent,
    ProdutoDetailComponent,
    CriarProdutoComponent,
    LoginComponent,
    LogoutComponent,
    FuncionarioComponent,
    CriarFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [ProdutosService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
