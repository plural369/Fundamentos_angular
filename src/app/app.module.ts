import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.components';
import { SegundoComponentComponent } from './segundo-component/segundo-component.component';
import { MultiplicaPorPipe } from './multiplica-por.pipe';
import { PipeCustomizadoComponent } from './pipe-customizado/pipe-customizado.component';
import { ToWayDateBindingComponent } from './to-way-date-binding/to-way-date-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderizandoListasComponent } from './renderizando-listas/renderizando-listas.component';
import { ComponentePersonalizadoComponent } from './componente-personalizado/componente-personalizado.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploServicosComponent } from './exemplo-servicos/exemplo-servicos.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponenteComponent,
    SegundoComponentComponent,
    MultiplicaPorPipe,
    PipeCustomizadoComponent,
    ToWayDateBindingComponent,
    RenderizandoListasComponent,
    ComponentePersonalizadoComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploServicosComponent,
    ExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
