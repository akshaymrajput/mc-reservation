import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "app-dropdown",
    standalone: true,
    imports: [],
    templateUrl: "./dropdown.component.html",
    styleUrl: "./dropdown.component.css",
})
export class DropdownComponent {
    @Input() items: any[] = [];
    @Input() selectedItem: any;
    @Output() selectionChange = new EventEmitter<any>();

    optionOpen: boolean = false;

    selectItem(item: any) {
        this.selectedItem = item;
        this.selectionChange.emit(item);
    }

    handleClick(): any {
        this.optionOpen = !this.optionOpen;
    }
}
