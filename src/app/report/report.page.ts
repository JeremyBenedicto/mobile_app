import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  name: string = '';
  age: string = '';
  address: string = '';
  location: string = '';
  gender: string = '';
  mobileNumber: string = '';
  photo: string | ArrayBuffer | null = null;
  vehicular: any;

  constructor() { }

  ngOnInit() {
  }


  submitForm() {
    console.log('Form submitted with data:', {
      name: this.name,
      age: this.age,
      address: this.address,
      location: this.location,
      gender: this.gender,
      mobileNumber: this.mobileNumber,
      photo: this.photo,
      vehicular: this.vehicular
    });
  }

  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      // Read the file as a data URL
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photo = e.target?.result || null;
      };
      reader.readAsDataURL(file);
    }
  }
}

  


