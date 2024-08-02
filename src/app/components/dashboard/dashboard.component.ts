import { Component } from "@angular/core";

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [],
    templateUrl: "./dashboard.component.html",
    styleUrl: "./dashboard.component.css",
})
export class DashboardComponent {
    dashboardData: any = [
        {
            type: "timeCard",
            time: "07:19 PM",
            date: "2 March 2024",
        },
        {
            type: "molconContacts",
            contacts: [
                {
                    category: "Office Landline",
                    numbers: ["080-0000-0000"],
                },
                {
                    category: "Admin team",
                    contacts: [
                        { name: "Mr.Doe", number: "90000 00000" },
                        { name: "Mr.Smith", number: "90000 00001" },
                        { name: "Mr.Jones", number: "90000 00002" },
                        { name: "Mrs.Brown", number: "90000 00003" },
                    ],
                },
                {
                    category: "Admin Email",
                    emails: ["admin@company.com"],
                },
                {
                    category: "Maintenance team",
                    numbers: ["90000 00004"],
                },
                {
                    category: "Security team",
                    contacts: [{ name: "John Doe", number: "90000 00005" }],
                },
            ],
        },
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
        {
            type: "bookingCount",
            message: `Hello, john.doe you have no conference bookings today and no upcoming guest room bookings.`,
        },
        {
            type: "importantLinks",
            links: [
                {
                    name: "MCNTL",
                    url: "https://mcntl.molecularconnections.com/McntlUI/login",
                    imageSrc: "../../../assets/images/mc_ntl_logo.png",
                },
                {
                    name: "MC Social",
                    url: "https://mcsocial.molecularconnections.com/user/auth/login",
                    imageSrc: "../../../assets/images/mc_social_logo.png",
                },
                {
                    name: "DSS",
                    url: "https://dss.molecularconnections.com/MCDSS_NEW/",
                    imageSrc: "../../../assets/images/dss_logo.ico",
                },
                {
                    name: "Greythr",
                    url: "https://molecular-connections.greythr.com/uas/portal/auth/login",
                    imageSrc: "../../../assets/images/greythr_logo.svg",
                },
                {
                    name: "MC Academy",
                    url: "https://academy.molecularconnections.com/login/index.php",
                    imageSrc: "../../../assets/images/mc_academy_logo.png",
                },
            ],
        },
    ];
}
