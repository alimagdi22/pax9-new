import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { EnvironmentService, FlightSearchService, HomePageService } from 'rp-travel-ui';
import ar from '../../public/i18n/ar.json';
import en from '../../public/i18n/en.json';
import { FooterComponent } from './core/components/footer/footer.component';
import { HeaderComponent } from './core/components/header/header.component';
import { ModalsComponent } from './shared/components/modals/modals.component';
import { SharedModule } from './shared/shared.module';
import { SharedService } from './shared/shared.service';
import { filter } from 'rxjs';
import { MostSearchedFlightsService } from './features/home/components/most-searched-flights/most-searched-flights.service';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SharedModule, HeaderComponent, ModalsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'pax9';

  public translate = inject(TranslateService);
  public sharedService = inject(SharedService);
  public environmentService = inject(EnvironmentService);
  private router = inject(Router);
  private homePageService = inject(HomePageService);
  private flightSearchService = inject(FlightSearchService);
  private mostSearchedFlightsService = inject(MostSearchedFlightsService);
  private seoService = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  public isBrowser = isPlatformBrowser(this.platformId);

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (this.isBrowser) {
      this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.scrollTo(0, 0);
      });
    }

  let envtrvyl = {
    offlineSeats: 'http://185.185.50.211:7025',
    searchflow: 'http://185.185.50.211:7010',
    BookingFlow: 'http://185.185.50.211:7030',
    FareRules: 'http://185.185.50.211:7020',
    asm: 'http://185.185.50.211:7060',
    Apihotels: 'http://hotels.paxnine.com',
    users: 'http://185.185.50.211:7010',
    admin: 'http://185.185.50.211:7045',
    getDPayment: 'http://185.185.50.211:7045',
    bookHotels: 'http://hotels.paxnine.com',
    prepay: 'http://185.185.50.211:7080',
    backOffice: 'http://185.185.50.211:7060',
    staticPages: 'https://stagingcms.round-pixel.net',
    FlightTop: 'http://185.185.50.211:7010',
    offers: {
      getAll: 'http://185.185.50.211:7893/api/GetAllOffersAPI?POS=',
      getByID: 'http://185.185.50.211:7893/api/GetOfferByIdAPI?OfferId=',
      BookOffer: 'http://185.185.50.211:7895/api/BookOffer',
      RetriveItineraryDetails: '/api/Admin/RetriveItineraryDetails',
    },
  };
    let envFly = {
      offlineSeats: 'http://41.223.55.14:7025',
      searchflow: 'https://flightsearch.flytoall.com',
      BookingFlow: 'https://flightflow.flytoall.com',
      FareRules: 'https://flightprov.flytoall.com',
      asm: 'https://backofficeapi.flytoall.com',
      Apihotels: 'https://hotelsapi.flytoall.com',
      users: 'https://flightsearch.flytoall.com',
      // users: 'https://Usersapi.flytoall.com',
      admin: 'https://adminapi.flytoall.com',
      getDPayment: 'https://adminapi.flytoall.com',
      bookHotels: 'https://hotels.flytoall.com',
      prepay: 'https://prepayapi.flytoall.com',
      backOffice: 'https://backofficeapi.flytoall.com',
      FlightTop: 'https://flightsearch.flytoall.com',
      staticPages: 'https://stagingcms.round-pixel.net',
      offers: {
        getAll: 'http://41.215.243.36:7893/api/GetAllOffersAPI?POS=',
        getByID: 'http://41.215.243.36:7893/api/GetOfferByIdAPI?OfferId=',
        BookOffer: 'http://41.215.243.36:7895/api/BookOffer',
        RetriveItineraryDetails: '/api/Admin/RetriveItineraryDetails',
      },
    };

    let envRP = {
      offlineSeats: 'http://41.223.55.14:7025',
      searchflow: 'https://flightsearch.round-pixel.net',
      BookingFlow: 'https://flightflow.round-pixel.net',
      FareRules: 'https://flightprov.round-pixel.net',
      asm: 'https://backofficeapi.round-pixel.net',
      Apihotels: 'https://hotelsapi.round-pixel.net',
      users: 'https://flightsearch.round-pixel.net',
      // users: 'https://usersapi.round-pixel.net',
      admin: 'https://adminapi.round-pixel.net/',
      getDPayment: 'https://adminapi.round-pixel.net/',
      bookHotels: 'https://hotels.round-pixel.net',
      prepay: 'https://prepayapi.round-pixel.net',
      backOffice: 'https://backofficeapi.round-pixel.net',
      FlightTop: 'https://flightsearch.round-pixel.net',
      offers: {
        getAll: 'http://41.215.243.36:7893/api/GetAllOffersAPI?POS=',
        getByID: 'http://41.215.243.36:7893/api/GetOfferByIdAPI?OfferId=',
        BookOffer: 'http://41.215.243.36:7895/api/BookOffer',
        RetriveItineraryDetails: '/api/Admin/RetriveItineraryDetails',
      },
    };


    this.environmentService.envConfiguration(envRP);

    this.translate.setTranslation('en', en);
    this.translate.setTranslation('ar', ar);
    this.translate.setDefaultLang('en');

    if (this.isBrowser) {
      const lang = localStorage.getItem('lang');
      if (lang) {
        this.translate.use(lang);
      } else {
        this.translate.use('en');
        localStorage.setItem('lang', 'en');
      }
    } else {
      this.translate.use('en');
    }

    if (this.isBrowser && this.document) {
      this.document.dir = this.translate.currentLang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  ngOnInit(): void {
    this.seoService.initRouteSeoListener();
    if (this.isBrowser) {
      this.sharedService.screenWidth = window.innerWidth;
    }
    this.mostSearchedFlightsService.getMostSearchedFlights();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (this.isBrowser) {
      this.sharedService.screenWidth = window.innerWidth;
    }
  }
}
