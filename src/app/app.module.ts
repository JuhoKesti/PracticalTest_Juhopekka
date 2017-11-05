import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireAuth } from 'angularfire2/auth';

import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';
 
const firebaseConfig = {
  apiKey: "AIzaSyBmIhJVjUSBjFyh37Qgh9q7taX0fofseTA",
  authDomain: "labwork-5-c8c5b.firebaseapp.com",
  databaseURL: "https://labwork-5-c8c5b.firebaseio.com",
  projectId: "labwork-5-c8c5b",
  storageBucket: "labwork-5-c8c5b.appspot.com",
  messagingSenderId: "264469050062"
  };
 
@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    FirebaseProvider,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}