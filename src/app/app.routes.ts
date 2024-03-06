import { Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ControlComponent } from "./components/control/control.component";
import { GuestRoomBookingComponent } from "./components/guest-room-booking/guest-room-booking.component";
import { MeetingRoomBookingComponent } from "./components/meeting-room-booking/meeting-room-booking.component";

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
    },
    {
        path: "control",
        component: ControlComponent,
        children: [
            {
                path: "",
                redirectTo: "dashboard",
                pathMatch: "full",
            },
            {
                path: "dashboard",
                component: DashboardComponent,
            },
            {
                path: "guest-room-booking",
                component: GuestRoomBookingComponent,
            },
            {
                path: "meeting-room-booking",
                component: MeetingRoomBookingComponent,
            },
        ],
    },
    {
        path: "**",
        component: NotFoundComponent,
    },
];
