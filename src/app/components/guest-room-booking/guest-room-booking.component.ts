import { Component } from "@angular/core";
import { DropdownComponent } from "../dropdown/dropdown.component";

@Component({
    selector: "app-guest-room-booking",
    standalone: true,
    imports: [DropdownComponent],
    templateUrl: "./guest-room-booking.component.html",
    styleUrl: "./guest-room-booking.component.css",
})
export class GuestRoomBookingComponent {
    guestRoomData: any = [
        {
            type: "emergencyContacts",
            contacts: [
                {
                    category: "Police",
                    contacts: [
                        {
                            location: "Downtown",
                            number: "080-0000-0001",
                        },
                        {
                            location: "City Women Police",
                            number: "080-0000-0002",
                        },
                    ],
                },
                {
                    category: "Hospital",
                    contacts: [
                        { name: "City Hospital", number: "080-0000-0003" },
                    ],
                },
                {
                    category: "Emergency contacts",
                    contacts: [
                        { name: "Emergency Number", number: "112" },
                        { name: "Police", number: "100 or 112" },
                        { name: "Fire", number: "101" },
                        { name: "Ambulance", number: "102" },
                    ],
                },
            ],
        },
    ];

    tableData: any = [
        "#",
        "City",
        "Check In Date",
        "Check In Time",
        "Check Out Date",
        "Check Out Time",
        "Status",
        "Reason",
        "",
    ];
    cityDropDownData: any = ["Bangalore"];
    resultsDropDownData: any = ["10", "20", "50"];
    sortDropDownData: any = [
        "Recent Bookings",
        "Status",
        "CheckIn Date",
        "CheckOut Date",
    ];

    cityDropDownOpen: boolean = false;
    resultsDropDownOpen: boolean = false;
    sortDropDownOpen: boolean = false;

    handleCityDropdownClick(): void {
        this.cityDropDownOpen = !this.cityDropDownOpen;
    }
    handleResultsFilterDropdownClick(): void {
        this.resultsDropDownOpen = !this.resultsDropDownOpen;
    }
    handleSortFilterDropdownClick(): void {
        this.sortDropDownOpen = !this.sortDropDownOpen;
    }

    handleSubmit(event: any) {
        event.preventDefault();
    }
}
