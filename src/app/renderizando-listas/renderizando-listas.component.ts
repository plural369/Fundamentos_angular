import { Component } from '@angular/core';
import { Celular } from '../types/celulares';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome:"S20", descricao:"Muito top, celular que irá atender necessidades", esgotado:false},
    {id: 2, nome:"S21", esgotado:false},
    {id: 3, nome:"S22", descricao:"Muito top", esgotado:true}

  ]
}
