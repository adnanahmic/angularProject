import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../component/header/header.component';
import { FooterComponent } from '../component/footer/footer.component';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from '../router/custom.serializer';
import { AppReducer } from '../store/app.state';
import { appInitializer } from './app.initializer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(AppReducer),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: CustomSerializer
    }),
    ToastrModule.forRoot()
  ],
  providers: [ 
    {
    provide: APP_INITIALIZER,
    useFactory: appInitializer,
    deps: [Store],
    multi: true,
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
