import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NavberComponent } from './interface/component/navber/navber.component';
import { HeaderComponent } from './interface/component/header/header.component';
import { HomeComponent } from './interface/component/home/home.component';
import { ServicesComponent } from './interface/component/services/services.component';
import { CategoriesComponent } from './interface/component/categories/categories.component';
import { PeopleSayComponent } from './interface/component/people-say/people-say.component';
import { OurGalleryComponent } from './interface/component/our-gallery/our-gallery.component';
import { GetInTouchComponent } from './interface/component/get-in-touch/get-in-touch.component';
import { OualityControlComponent } from './interface/component/ouality-control/ouality-control.component';
import { FooterComponent } from './interface/component/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from '@angular/material/icon';
import { DetailsProductComponent } from './interface/component/details-product/details-product.component';
import { DeliveryComponent } from './interface/component/delivery/delivery.component'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule}from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavberComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    CategoriesComponent,
    PeopleSayComponent,
    OurGalleryComponent,
    GetInTouchComponent,
    OualityControlComponent,
    FooterComponent,
    DetailsProductComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,HttpClientModule,
    BrowserAnimationsModule ,CarouselModule,
    FontAwesomeModule,MatIconModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
