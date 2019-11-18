import { Component, OnInit } from '@angular/core';
import { Secao } from '../secao/entidade/secao' ;
import { AngularFireDatabase } from '@angular/fire/database';
import  { Router } from '@angular/router';
import {AngularFireAuth } from "angularfire2/auth";
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-secao-cadastro',
  templateUrl: './secao-cadastro.page.html',
  styleUrls: ['./secao-cadastro.page.scss'],
})
export class SecaoCadastroPage implements OnInit {

   secao: Secao = new Secao();

  constructor(
        private banco: AngularFireDatabase,
        private rota: Router,
        private modal: ModalController,
        private afAuth: AngularFireAuth
  ) { }

  ngOnInit(): void {}

  salvar() {
      this.afAuth.auth.createUserWithEmailAndPassword(this.secao.email, this.secao.senha).then(
    () => { this.rota.navigate(['inicio']) }
      ).catch((erro) => console.log (erro));
      alert("Cadastro bem Sucessido!");

  if (this.secao.key == null) {
      this.banco.list('secao').push(this.secao);
   this.secao = new Secao();
   this.rota.navigate(['inicio']);
 }
    else {
   this.banco.object('secao/' + this.secao.key).update(this.secao);
   this.modal.dismiss();
 }
    }
    }
