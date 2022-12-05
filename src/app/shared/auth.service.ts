import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then( res => {
      localStorage.setItem('token', 'true')
      this.router.navigate(['home'])
      if(res.user?.emailVerified == true){
        this.router.navigate(['home'])
      } else {
        this.router.navigate(['/confirm-email'])
      }
    }, err => {
      alert('Something went wrong')
      this.router.navigate(['/login'])
    })
  }

  register(email: string, password: string){
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful')
      this.router.navigate(['/login'])
      this.sendEmailForVerification(res.user)
    }, err => {
      alert(err.message)
      this.router.navigate(['/register'])
    })
  }

  logOut(){
    this.fireAuth.signOut().then( () => {
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
    }, err => {
      alert(err.message )
    })
  }

  forgotPassword(email: string){
    this.fireAuth.sendPasswordResetEmail(email).then( () => {
      this.router.navigate(['/confirm-email'])
    }, err => {
      alert('Something went wrong...')
    })
  }

  sendEmailForVerification(user: any){
    user.sendEmailForVerification().then( (res:any) => {
      this.router.navigate(['/confirm-email'])
    }, (err: any) => {
      alert('Something went wrong. Not able to send mail to your email.')
    })
  }

  googleSignIn(){
    return this.fireAuth.signInWithPopup(new GoogleAuthProvider).then( res => {
      this.router.navigate(['home'])
      localStorage.setItem('token', JSON.stringify(res.user?.uid))
    }, err => {
      alert(err.message)
    })
  }

}
