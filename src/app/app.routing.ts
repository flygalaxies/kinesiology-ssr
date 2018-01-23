import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { BabsieComponent } from '../app/main/kinisiologists/babsie/babsie.component';
import { MelinaComponent } from '../app/main/kinisiologists/melina/melina.component';
import { FoodForLifeComponent } from './main/food-for-life/food-for-life.component';
import { JoinUsComponent } from './main/join-us/join-us.component';
import { FeedbackComponent } from './main/feedback/feedback.component';
import { PricesComponent } from './main/prices/prices.component';
import { DefinitionComponent } from '../app/main/home/definition/definition.component';
import { BenefitsComponent } from '../app/main/home/benefits/benefits.component';
import { TypesComponent } from '../app/main/home/types/types.component';
import { KinesiologyComponent } from './main/home/types/kinesiology/kinesiology.component';
import { MassageComponent } from './main/home/types/massage/massage.component';
import { LymphaticComponent } from './main/home/types/lymphatic/lymphatic.component';

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
    path: 'foodForLife',
    component: FoodForLifeComponent
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
