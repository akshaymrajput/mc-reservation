import { Component } from "@angular/core";

@Component({
    selector: "app-login-footer",
    standalone: true,
    imports: [],
    templateUrl: "./login-footer.component.html",
    styleUrl: "./login-footer.component.css",
})
export class LoginFooterComponent {
    footerData: any = [
        // {
        //     title: "Corporate Address:",
        //     content:
        //         "Heritage Building, #59/2, Kaderanahalli, 100 feet road, Banashankari 2nd Stage, Bangalore 560070, Karnataka, India",
        // },
        // {
        //     title: "Tel:",
        //     content: "+91 80 2669 0145",
        // },
        // {
        //     title: "Email:",
        //     content: "info@molecularconnections.com",
        // },
        {
            title: "Corporate Address:",
            content:
                "Heritage Building, #59/2, Kaderanahalli, 100 feet road, Banashankari 2nd Stage, Bangalore 560070, Karnataka, India",
            subItems: [
                {
                    title: "Tel:",
                    content: "+91 80 2669 0145",
                },
                {
                    title: "Email:",
                    content: "info@molecularconnections.com",
                },
            ],
        },
        {
            title: "Services",
            items: [
                {
                    label: "Literature Curation",
                    link: "http://www.molecularconnections.com/?page_id=14326",
                },
                {
                    label: "Publishing",
                    link: "http://www.molecularconnections.com/?page_id=13631",
                },
                {
                    label: "Technology & Big Data",
                    link: "http://www.molecularconnections.com/?page_id=13714",
                },
                { label: "IP Research", link: "http://mcresearch.co.in" },
                {
                    label: "Real World Evidence",
                    link: "https://rwe.molecularconnections.com/services/index.php/home",
                },
            ],
        },
        {
            title: "Products",
            items: [
                {
                    label: "Life Sciences",
                    link: "http://www.molecularconnections.com/?page_id=18511#life-sciences12",
                },
                {
                    label: "Publishing",
                    link: "http://www.molecularconnections.com/?page_id=18511#publishing12",
                },
                {
                    label: "IP Research",
                    link: "http://www.molecularconnections.com/?page_id=18511#ip-research12",
                },
            ],
        },
        {
            title: "Resources",
            items: [
                {
                    label: "Press Releases",
                    link: "http://www.molecularconnections.com/?page_id=14740",
                },
                {
                    label: "Case Studies",
                    link: "http://www.molecularconnections.com/?page_id=13915",
                },
                {
                    label: "Research Publications",
                    link: "http://www.molecularconnections.com/?page_id=13921",
                },
                {
                    label: "White Papers",
                    link: "http://www.molecularconnections.com/?page_id=13918",
                },
                {
                    label: "Events",
                    link: "http://www.molecularconnections.com/?page_id=19861",
                },
            ],
        },
    ];

    copyrightLinks: any = [
        {
            url: "../../../../assets/images/linkedin.png",
            alt: "linkedin",
        },
        {
            url: "../../../../assets/images/youtube.png",
            alt: "youtube",
        },
        {
            url: "../../../../assets/images/twitter.png",
            alt: "twitter",
        },
    ];
}
