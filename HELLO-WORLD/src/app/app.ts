import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = "Helloworld";
  imgUrl = "blLogo.jpg";
  ngOnInit():void{
    this.title= "Hello from bridgelabz.";
  }
}
