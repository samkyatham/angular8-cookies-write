import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   cookieValue : string;
   
   constructor(private cookieService: CookieService){}
    
    public ngOnInit():void{
        this.cookieService.set("cookie.email", "initial cookie value");
    }

   onClickSubmit(formData) {
      alert('Your Email is : ' + formData.email);
      this.cookieService.set("cookie.email", formData.email);
      window.location.href = "http://localhost:4300?"+"email="+formData.email;
   }
}