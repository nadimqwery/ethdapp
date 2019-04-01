import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler):  Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (this.cookieService.get('id_token')) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.cookieService.get('id_token')}`
            }
        });
    }
    return next.handle(request).pipe(tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.headers.get('token')) {
              // save the new token after each request to the server
            const token = evt.headers.get('token');
            this.cookieService.set('id_token' , token);
            const tokenInfo = this.getDecodedAccessToken(token); // decode token
            const expireDate = tokenInfo.exp; // get token expiration dateTime
            this.cookieService.set('expires_at', JSON.stringify(expireDate.valueOf()) );
            }
        }
      }));
}

getDecodedAccessToken(token: string): any {
    try {
        return jwt_decode(token);
    } catch (Error) {
        return null;
    }
  }
}
