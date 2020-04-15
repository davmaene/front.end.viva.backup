import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ForAuthService} from '../services/for-auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {CitoyenClasse} from '../services/citoyen-classe';
import {empty} from 'rxjs/internal/Observer';
import {AppComponent} from '../app.component';
import {environment} from '../../environments/environment';
import {Citoyen} from '../citoyen';
import {inspect} from 'util';


@Component({
  selector: 'app-viva-signin-signup-cmp',
  templateUrl: './viva-signin-signup-cmp.component.html',
  styleUrls: ['./viva-signin-signup-cmp.component.scss']
})
export class VivaSigninSignupCmpComponent implements OnInit {
  isAuthentified: boolean;
  error = false;
  errorEmp: boolean;
  fromForum: boolean;
  mdf: boolean;
  mdff: boolean;
  newCitoyen;
  uemaError: boolean;
  unumError: boolean;
  apiUrl = environment.apiUrl;
  errorUp: boolean;
  privancy: boolean;
  unameError: boolean;
  upostnomError: boolean;
  uprenomError: boolean;
  successMess: boolean;
  constructor(private forAuthService: ForAuthService,
              private route: Router,
              private httpClient: HttpClient,
              private rt: ActivatedRoute) { }
  ngOnInit(): void {
    if (localStorage.getItem('currentSession')){
      this.isAuthentified = this.forAuthService.userIsAuth;
      this.route.navigate(['/case-forum-route']);
    }else {
      if (this.rt.snapshot.params.status){
        this.fromForum = true;
      }
    }
  }
  // add new Citoyen or user
  onSignUpForUser(signUpForm: NgForm){
    // same like in signIn method
    // this.httpClient.post('http://localhost:3000/signupuser', signUpForm.value).subscribe((getCitoyen: CitoyenClasse) => {
    //   if (getCitoyen !== null){
    //     this.forAuthService.userSignUp(getCitoyen);
    //     this.isAuthentified = this.forAuthService.userIsAuth;
    //     this.error = false;
    //     setTimeout(() => {
    //       // if well i redirect user to 'statistics page'
    //       this.route.navigate(['/case-statistics-route']);
    //     }, 200);
    //   }else{
    //     this.error = true;
    //   }
    // });
    // console.log(signUpForm.value);
    // if (!signUpForm.invalid){
    if (signUpForm.value.uname.length >= 2 && signUpForm.value.uname !== ''){
      this.unameError = false;
      if (signUpForm.value.upostnom.length >= 2 && signUpForm.value.upostnom !== ''){
        this.upostnomError = false;
        if (signUpForm.value.uprenom.length >= 2 && signUpForm.value.uprenom !== ''){
          this.uprenomError = false;
          if (signUpForm.value.uphone){
            this.unumError = false;
            if (signUpForm.value.umail){
              this.unameError = false;
              if (signUpForm.value.upass1.length >= 6){
                this.mdf = false;
                this.mdff = false;
                if (signUpForm.value.upass1 === signUpForm.value.upass2){
                  this.mdff = false;
                  if (signUpForm.value.privancy){
                    this.newCitoyen = {
                      name: signUpForm.value.uname,
                      postNom: signUpForm.value.upostnom,
                      prenom: signUpForm.value.uprenom,
                      genre: signUpForm.value.uphone,
                      email: signUpForm.value.umail,
                      password: signUpForm.value.upass1
                    };
                    this.privancy = false;
                    if (this.forAuthService.userSignUp(this.newCitoyen)) {
                      window.location.reload();
                      this.successMess = true;
                      setTimeout(() => {
                        this.route.navigate(['/case-forum-route']);
                      }, 200);
                    }
                  }else{
                    this.privancy = true;
                  }
                }else{
                  this.mdff = true;
                }
              }else{
                this.mdf = true;
              }
            }else{
              this.uemaError = true;
            }
          }else{
            this.unumError = true;
          }
        }else{
          this.uprenomError = true;
        }
      }else{
        this.upostnomError = true;
      }
    }else{
      this.unameError = true;
    }
    // }else {
    //   this.errorUp = true;
    // }
  }
  // sign in of existing citoyen


  onSignInUser(signInForm: NgForm){
    // hdh
    // sending a pwd and email add or phone number to connect user
    // if user exist this will going to return an object Citoyen
    // this.httpClient.get(this.apiUrl + '/login').subscribe((response: CitoyenClasse) => {
    //   if (response !== null){
    //     // this.forAuthService.userSignIn(response);
    //     this.isAuthentified = this.forAuthService.userIsAuth;
    //     this.error = false;
    //     console.log(response);
    //     // setTimeout(() => {
    //     //   // if well i redirect user to 'statistics page'
    //     //   this.route.navigate(['case-statistics-route']);
    //     // }, 200);
    //   }else{
    //     this.error = true;
    //   }
    // });
    const name = signInForm.value;
    // console.log(name.ucaddmail.toString(), name.ucpassword.toString());
    const cab = {
      ident: name.ucaddmail.toString(),
      password: name.ucpassword.toString()
    };
    if (!signInForm.invalid) {
      const myQ = this.forAuthService.userSignIn(cab);
      if (myQ !== undefined) {
        localStorage.setItem('currentSession', JSON.stringify(myQ));
        this.error = false;
        this.errorEmp = false;
        this.forAuthService.userIsAuth = true;
        console.log('connexion parfaite', this.isAuthentified = this.forAuthService.userIsAuth);
        // this.route.navigate(['/case-statistics-route']);
        window.location.reload();
      } else {
        console.log(this.forAuthService.userIsAuth);
        this.errorEmp = false;
        this.error = true;
      }
    }else{
      this.error = false;
      this.errorEmp = true;
    }
  }
  onReset(signUpForm: NgForm) {
    signUpForm.reset();
  }
}
