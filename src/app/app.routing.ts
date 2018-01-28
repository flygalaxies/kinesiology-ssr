import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BabsieComponent } from '../app/main/kinisiologists/babsie/babsie.component';
import { MelinaComponent } from '../app/main/kinisiologists/melina/melina.component';
import { ForLifeComponent } from './main/for-life/for-life.component';
import { JoinUsComponent } from './main/join-us/join-us.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { PricesComponent } from './main/prices/prices.component';
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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'definition',
    component: DefinitionComponent,
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
  },
  {
    path: 'therapies',
    component: TypesComponent,
    children: [
      {
        path: 'kinesiology',
        component: KinesiologyComponent
      },
      {
        path: 'massage',
        component: MassageComponent
      },
      {
        path: 'lymphatic',
        component: LymphaticComponent
      },
      {
        path: 'allergy',
        component: AllergyComponent
      },
      {
        path: 'weightManagement',
        component: WeightComponent
      },
      {
        path: 'chakra',
        component: ChakraComponent
      },
      {
        path: 'pelvicGirdle',
        component: PelvicComponent
      },
      {
        path: 'animal',
        component: AnimalComponent
      },
      {
        path: 'adrenalFatigue',
        component: AdrenalComponent
      },
      {
        path: 'regionalMuscle',
        component: RegionalComponent
      },
      {
        path: 'painProtocol',
        component: PainComponent
      }
    ]
  },
  {
    path: 'babsie',
    component: BabsieComponent
  },
  {
    path: 'melina',
    component: MelinaComponent
  },
  {
    path: 'ForLife',
    component: ForLifeComponent,
    children: [
    ]
  },
  {
    path: 'kefir',
    component: KefirComponent
  },
  {
    path: 'joinUs',
    component: JoinUsComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: 'prices',
    component: PricesComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
