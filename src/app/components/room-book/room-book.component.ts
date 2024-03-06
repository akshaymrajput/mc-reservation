import { Component, EventEmitter, Output } from "@angular/core";
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
    selector: "app-room-book",
    standalone: true,
    imports: [DropdownComponent],
    templateUrl: "./room-book.component.html",
    styleUrl: "./room-book.component.css",
})
export class RoomBookComponent {
    dropDownData: any = {
        room: [
            { text: "Room 1" },
            { text: "Room 2" },
            { text: "Room 3" },
            { text: "Room 4" },
        ],
        time: [
            { text: "08:00 AM" },
            { text: "08:30 AM" },
            { text: "09:00 AM" },
            { text: "09:30 AM" },
            { text: "10:00 AM" },
            { text: "10:30 AM" },
            { text: "11:00 AM" },
            { text: "11:30 AM" },
            { text: "12:00 PM" },
            { text: "12:30 PM" },
            { text: "01:00 PM" },
            { text: "01:30 PM" },
            { text: "02:00 PM" },
            { text: "02:30 PM" },
            { text: "03:00 PM" },
            { text: "03:30 PM" },
            { text: "04:00 PM" },
            { text: "04:30 PM" },
            { text: "05:00 PM" },
            { text: "05:30 PM" },
            { text: "06:00 PM" },
            { text: "06:30 PM" },
            { text: "07:00 PM" },
            { text: "07:30 PM" },
            { text: "08:00 PM" },
            { text: "08:30 PM" },
        ],
    };

    selectedRoom: any;
    selectedStartTime: any;
    selectedEndTime: any;

    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }

    ngOnInit(): void {
        this.selectedRoom = this.dropDownData.room[0];
        this.selectedStartTime = this.dropDownData.time[0];
        this.selectedEndTime = this.dropDownData.time[1];
    }

    onRoomSelectionChange(item: any) {
        this.selectedRoom = item;
    }
    onStartTimeSelectionChange(item: any) {
        this.selectedStartTime = item;
    }
    onEndTimeSelectionChange(item: any) {
        this.selectedEndTime = item;
    }
}
