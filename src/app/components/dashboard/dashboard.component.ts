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
                    numbers: ["080-2669 0145"],
                },
                {
                    category: "Admin team",
                    contacts: [
                        { name: "Mr.Bhagwan", number: "98805 48147" },
                        { name: "Mr.Veerendra", number: "96328 92050" },
                        { name: "Mr.Haridas", number: "98806 61145" },
                        { name: "Mrs.Nethra", number: "93801 58989" },
                    ],
                },
                {
                    category: "Admin Email",
                    emails: ["reservations@molecularconnections.com"],
                },
                {
                    category: "Maintenance team",
                    numbers: ["96066 89915"],
                },
                {
                    category: "Security team",
                    contacts: [{ name: "Jagadish", number: "77957 61003" }],
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
                            location: "Kumarswamy layout",
                            number: "080-2294-2567",
                        },
                        {
                            location: "Banglore Women Police",
                            number: "080-22943225",
                        },
                    ],
                },
                {
                    category: "Hospital",
                    contacts: [
                        { name: "Sagar Hospital", number: "080-6955-5555" },
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
            message: `Hello, akshay.r you have no conference bookings today and no upcoming guest room bookings.`,
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
