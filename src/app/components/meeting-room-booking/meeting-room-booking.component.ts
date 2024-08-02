import { Component, OnInit } from "@angular/core";
import { DropdownComponent } from "../dropdown/dropdown.component";
import { RoomBookComponent } from "../room-book/room-book.component";

@Component({
    selector: "app-meeting-room-booking",
    standalone: true,
    imports: [DropdownComponent, RoomBookComponent],
    templateUrl: "./meeting-room-booking.component.html",
    styleUrl: "./meeting-room-booking.component.css",
})
export class MeetingRoomBookingComponent implements OnInit {
    floorDetails: any;

    selectedCityItem: any;
    selectedBuildingItem: any;
    selectedFloorItem: any;

    shouldShowModal: boolean = false;

    dropDownData: any = {
        city: [
            {
                text: "Bangalore",
                value: 1,
                icon: "../../../assets/images/city.svg",
            },
            {
                text: "Coimbatore",
                value: 2,
                icon: "../../../assets/images/city.svg",
            },
        ],

        building: [
            {
                text: "City Building",
                value: 1,
                icon: "../../../assets/images/city.svg",
            },
        ],

        floor: [
            {
                text: "All",
                value: 1,
                icon: "../../../assets/images/floor.svg",
            },
            {
                text: "Ground Floor",
                value: 2,
                icon: "../../../assets/images/floor.svg",
            },
            {
                text: "First Floor",
                value: 2,
                icon: "../../../assets/images/floor.svg",
            },
            {
                text: "Second Floor",
                value: 2,
                icon: "../../../assets/images/floor.svg",
            },
            {
                text: "Third Floor",
                value: 2,
                icon: "../../../assets/images/floor.svg",
            },
        ],
    };

    meetingRoomTableData: any = {
        timeSlot: [
            "08:00 AM",
            "08:30 AM",
            "09:00 AM",
            "09:30 AM",
            "10:00 AM",
            "10:30 AM",
            "11:00 AM",
            "11:30 AM",
            "12:00 PM",
            "12:30 PM",
            "01:00 PM",
            "01:30 PM",
            "02:00 PM",
            "02:30 PM",
            "03:00 PM",
            "03:30 PM",
            "04:00 PM",
            "04:30 PM",
            "05:00 PM",
            "05:30 PM",
            "06:00 PM",
            "06:30 PM",
            "07:00 PM",
            "07:30 PM",
            "08:00 PM",
            "08:30 PM",
        ],
        floorDetails: {
            ground: {
                name: "Ground Floor",
                rooms: [
                    "Placeholder Name",
                    "Placeholder Name",
                    "Placeholder Name",
                    "Placeholder Name",
                ],
            },
            first: {
                name: "First Floor",
                rooms: [
                    "Placeholder Name",
                    "Placeholder Name",
                    "Placeholder Name",
                ],
            },
            second: {
                name: "Second Floor",
                rooms: [
                    "Placeholder Name",
                    "Placeholder Name",
                    "Placeholder Name",
                    "Placeholder Name",
                ],
            },
            third: {
                name: "Third Floor",
                rooms: ["Placeholder Name"],
            },
        },
    };

    ngOnInit(): void {
        this.floorDetails = Object.entries(
            this.meetingRoomTableData.floorDetails
        );
        this.selectedCityItem = this.dropDownData.city[0];
        this.selectedBuildingItem = this.dropDownData.building[0];
        this.selectedFloorItem = this.dropDownData.floor[0];
    }

    onCitySelectionChange(event: any) {
        this.selectedCityItem = event;
    }
    onBuildingSelectionChange(event: any) {
        this.selectedBuildingItem = event;
    }
    onFloorSelectionChange(event: any) {
        this.selectedFloorItem = event;
    }

    handleRoomBookClick() {
        this.shouldShowModal = true;
    }

    handleClose() {
        this.shouldShowModal = false;
    }
}
