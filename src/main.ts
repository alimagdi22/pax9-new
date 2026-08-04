import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register as registerSwiperElements } from 'swiper/element/bundle';

registerSwiperElements();
bootstrapApplication(AppComponent, appConfig).catch((err) => {
  if (err) {
    console.error('Bootstrap error:', err);
  }
});
