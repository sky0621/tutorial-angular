import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class SetHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("[setHeader] before chain");
        const authReq = req.clone({ setHeaders: { Authorization: '92075227-c73c-4031-8aad-6da3ce5ccaa3' } });
        let res = next.handle(authReq);
        console.log("[setHeader] after chain");
        return res;
    }
}