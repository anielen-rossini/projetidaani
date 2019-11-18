import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import {map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {


listaFormulario: Observable<Formulario[]>;
  ngOnInit() {
  }
  constructor(private menu: MenuController, private fire: AngularFireDatabase) {
  this.listaFormulario= this.fire.list<Formulario> ('formulario')
.snapshotChanges().pipe(map(lista=>lista.map(linha=>({key:linha.payload.key,...linha.payload.val()
})))
);
}

  openEnd() {
    this.menu.open('end');
  }

}
