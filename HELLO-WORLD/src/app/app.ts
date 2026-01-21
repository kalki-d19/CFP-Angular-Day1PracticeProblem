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
  userName:string = "";
  nameError:string = "";

  ngOnInit(): void {
    this.title = 'Hello from bridgelabz.';
  }
  onClick(event: any) {
    console.log('Save button is Clicked!', event);
    window.open(this.url, '_blank');
  }
  onInput($event:any){
    console.log("Change Event Occured!",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }else{
      this.nameError="Name is Incorrect";
    }
  }
}
