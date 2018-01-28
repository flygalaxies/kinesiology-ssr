import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

//import { ModalModule } from 'ngx-bootstrap';
//import { AgmCoreModule } from '@agm/core';

//Modules
import { NavbarComponent } from '../app/main/navbar/navbar.component';
import { HomeComponent } from '../app/main/home/home.component';
import { KinisiologistsComponent } from '../app/main/kinisiologists/kinisiologists.component';
import { BabsieComponent } from '../app/main/kinisiologists/babsie/babsie.component';
import { MelinaComponent } from '../app/main/kinisiologists/melina/melina.component';
import { PricesComponent } from '../app/main/prices/prices.component';
import { JoinUsComponent } from '../app/main/join-us/join-us.component';
import { FeedbackComponent } from '../app/main/feedback/feedback.component';
import { ForLifeComponent } from '../app/main/for-life/for-life.component';
import { DefinitionComponent } from '../app/main/home/definition/definition.component';
import { BenefitsComponent } from '../app/main/home/benefits/benefits.component';
import { TypesComponent } from '../app/main/home/types/types.component';
import { KinesiologyComponent } from './main/home/types/kinesiology/kinesiology.component';
import { MassageComponent } from './main/home/types/massage/massage.component';
import { LymphaticComponent } from './main/home/types/lymphatic/lymphatic.component';
import { AllergyComponent } from './main/home/types/allergy/allergy.component';
import { WeightComponent } from './main/home/types/weight/weight.component';
import { ChakraComponent } from './main/home/types/chakra/chakra.component';
import { PelvicComponent } from './main/home/types/pelvic/pelvic.component';
import { AnimalComponent } from './main/home/types/animal/animal.component';
import { AdrenalComponent } from './main/home/types/adrenal/adrenal.component';
import { RegionalComponent } from './main/home/types/regional/regional.component';
import { PainComponent } from './main/home/types/pain/pain.component';
import { KefirComponent } from './main/for-life/kefir/kefir.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    KinisiologistsComponent,
    BabsieComponent,
    MelinaComponent,
    PricesComponent,
    JoinUsComponent,
    FeedbackComponent,
    ForLifeComponent,
    DefinitionComponent,
    BenefitsComponent,
    TypesComponent,
    KinesiologyComponent,
    MassageComponent,
    LymphaticComponent,
    AllergyComponent,
    WeightComponent,
    ChakraComponent,
    PelvicComponent,
    AnimalComponent,
    AdrenalComponent,
    RegionalComponent,
    PainComponent,
    KefirComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'Kinesiology-Practice' }),
    //ModalModule.forRoot(),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBkGq2sp474Ilo7mN9jEHgg-xCbrNkbF7I'
    // }),
    routing
  ],
  providers: [
    { provide: 'isBrowser', useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
