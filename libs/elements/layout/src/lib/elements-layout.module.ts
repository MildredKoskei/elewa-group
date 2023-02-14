import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ElewaHeroComponent } from './components/elewa-hero/elewa-hero.component';
import { ElewaGroupMainPageComponent } from './pages/elewa-group-main-page/elewa-group-main-page.component';
import { ElewaGroupImageAndTextBannerComponent } from '../../../../../libs/features/components/banners/src/lib/banners/elewa-group-image-and-text-banner/elewa-group-image-and-text-banner.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, ElewaGroupMainPageComponent, ElewaHeroComponent, ElewaGroupImageAndTextBannerComponent],
  exports: [HeaderComponent, ElewaGroupMainPageComponent,ElewaHeroComponent, ElewaGroupImageAndTextBannerComponent],
})
export class LayoutModule {}
