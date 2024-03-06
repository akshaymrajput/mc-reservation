import { Component, HostListener } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
    selector: "app-navbar",
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: "./navbar.component.html",
    styleUrl: "./navbar.component.css",
})
export class NavbarComponent {
    collapsed: boolean = true;
    optionCollapsed: boolean = true;
    screenWidth: any;

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        if (this.screenWidth <= 768) {
            this.collapsed = true;
        }
    }
    isMobile(): boolean {
        return this.screenWidth < 768;
    }

    handleCollapse(): void {
        console.log("Clicked on Collapse");
        this.collapsed = !this.collapsed;
    }

    handleUserProfileOptionClick(): void {
        console.log("Clicked on Option");
        this.optionCollapsed = !this.optionCollapsed;
    }
}
