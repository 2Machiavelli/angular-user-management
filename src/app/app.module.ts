import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { HttpClientModule } from "@angular/common/http"
import { environment } from "../environments/environment"

// Material
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatToolbarModule } from "@angular/material/toolbar"
import { MatIconModule } from "@angular/material/icon"
import { MatButtonModule } from "@angular/material/button"

// Pages
import { UsersModule } from "./users/users.module"
import { UserModule } from "./user/user.module"

// Store
import { NG_ENTITY_SERVICE_CONFIG } from "@datorama/akita-ng-entity-service"
import { AkitaNgDevtools } from "@datorama/akita-ngdevtools"
import { AkitaNgRouterStoreModule } from "@datorama/akita-ng-router-store"

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    UsersModule,
    UserModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule
  ],
  providers: [
    { 
      provide: NG_ENTITY_SERVICE_CONFIG, 
      useValue: {}
    }
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
