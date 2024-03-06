import { Component } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: "app-control",
    standalone: true,
    imports: [NavbarComponent, DashboardComponent, RouterOutlet],
    templateUrl: "./control.component.html",
    styleUrl: "./control.component.css",
})
export class ControlComponent {}
