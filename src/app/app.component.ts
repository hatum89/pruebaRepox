import { Component } from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authCodeFlowConfig} from './oAuth.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OAUTH2';
  constructor( private oauthService: OAuthService) {
    this.configureOauth();
  }

  configureOauth() {
   this.oauthService.configure(authCodeFlowConfig);
   this.oauthService.tokenValidationHandler = new JwksValidationHandler();
   // this.oauthService.loadDiscoveryDocumentAndTryLogin().then();
   this.oauthService.loadDiscoveryDocumentAndLogin().then();
  }
  // login() {
  //  this.oauthService.initImplicitFlow();
  // }
  //
  // logout() {
  //  this.oauthService.logOut();
  // }
  get token() {
    let claims: any = this.oauthService.getIdentityClaims();
    return claims ? claims  : null;
  }
}
