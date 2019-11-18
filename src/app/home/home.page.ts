import { Component } from '@angular/core';
import { Secao } from '../secao/entidade/secao';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  secao: Secao = new Secao();

  constructor(private afAuth: AngularFireAuth, private router: Router) { }
  
  logar() {
    this.afAuth.auth.signInWithEmailAndPassword(this.secao.email, this.secao.senha).then(
      () => { this.router.navigate(['inicio']); }
    ).catch((erro) => alert("erro"));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

}
