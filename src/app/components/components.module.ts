import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from "@angular/forms";
import { UsersManagementComponent } from './users-management/users-management.component';

@NgModule({
    imports: [CommonModule, RouterModule, NgbModule, FormsModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SigninComponent, UsersManagementComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent]
})
export class ComponentsModule {}
