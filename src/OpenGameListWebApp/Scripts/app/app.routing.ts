﻿import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { AboutComponent } from "./about.component";
import { LoginComponent } from "./login.component";
import { ItemDetailComponent } from "./item-detail.component";
import { PageNotFoundComponent } from "./page-not-found.component";
const appRoutes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        redirectTo: ""
    },
    {
        path: "about",
        component: AboutComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
    {
        path: "item/:id",
        component: ItemDetailComponent
    }
];
export const AppRoutingProviders: any[] = [
];
export const AppRouting: ModuleWithProviders =
    RouterModule.forRoot(appRoutes);
