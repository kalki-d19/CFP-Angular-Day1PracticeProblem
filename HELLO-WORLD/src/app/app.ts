import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  title = 'Helloworld';
  imgUrl = 'blLogo.jpg';
  url = 'https://www.bridgelabz.com';
  userName:string = "sdjfknsd";

  ngOnInit(): void {
    this.title = 'Hello from bridgelabz.';
  }
  onClick(event: any) {
    console.log('Save button is Clicked!', event);
    window.open(this.url, '_blank');
  }
}
