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
    // Check if username and password are correct (for demonstration purposes)
    if (this.username === 'mdrrmogabaldon' && this.password === 'mdrrmogabaldon') {
      // Redirect to another page after successful login
      this.navCtrl.navigateForward('/adindashboard');
    } else {
      // Display an error message for invalid credentials
      console.error('Invalid credentials. Please try again.');
    }
  }
}

 

