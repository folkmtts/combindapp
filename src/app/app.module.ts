import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { WebapiServiceProvider } from '../providers/webapi-service/webapi-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SidePaymentPage } from '../pages/side-payment/side-payment';
import { SidePortfolioPage } from '../pages/side-portfolio/side-portfolio';
import { SideSettingPage } from '../pages/side-setting/side-setting';
import { SideSchedulePage } from '../pages/side-schedule/side-schedule';
import { TabHomePage } from '../pages/tab-home/tab-home';
import { TabCoursePage } from '../pages/tab-course/tab-course';
import { TabServicePage } from '../pages/tab-service/tab-service';
import { TabArticlePage } from '../pages/tab-article/tab-article';
import { TabContactPage } from '../pages/tab-contact/tab-contact';
import { TabsPage } from '../pages/tabs/tabs';
import { CoursedetailPage } from '../pages/coursedetail/coursedetail';
import { RegisterPage } from '../pages/register/register';


@NgModule({
  declarations: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSettingPage,
    SideSchedulePage,
    //ส่วนของtabmenu
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    //ส่วนเชื่อม tab
    TabsPage,
    CoursedetailPage,
    RegisterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SidePaymentPage,
    SidePortfolioPage,
    SideSettingPage,
    SideSchedulePage,
    //ส่วนของ tabmenu
    TabHomePage,
    TabCoursePage,
    TabServicePage,
    TabArticlePage,
    TabContactPage,
    TabsPage,
    CoursedetailPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    WebapiServiceProvider
  ]
})
export class AppModule { }
