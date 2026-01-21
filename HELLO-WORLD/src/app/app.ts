import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Helloworld';
  imgUrl = 'blLogo.jpg';
  url = 'https://www.bridgelabz.com';

  ngOnInit(): void {
    this.title = 'Hello from bridgelabz.';
  }
  onClick(event: any) {
    console.log('Save button is Clicked!', event);
    window.open(this.url, '_blank');
  }
}
