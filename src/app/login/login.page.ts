import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = '';
  password: string = '';

  constructor(public navCtrl: NavController) {}
  ngOnInit() {
  }


  login() {
    
    if (this.username === 'mdrrmogabaldon' && this.password === 'mdrrmogabaldon') {
      
      this.navCtrl.navigateForward('/adindashboard');
    } else {
     
      alert("Incorrect Username or Password");
    }
  }
}

 

