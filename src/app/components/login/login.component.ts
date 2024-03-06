import { Component } from "@angular/core";
import { LoginFooterComponent } from "./login-footer/login-footer.component";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-login",
    standalone: true,
    imports: [LoginFooterComponent, RouterLink],
    templateUrl: "./login.component.html",
    styleUrl: "./login.component.css",
})
export class LoginComponent {
    onSubmit(event: any) {
        event.preventDefault();
        console.log("Form submitted");
    }
}
