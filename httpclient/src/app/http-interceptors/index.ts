import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NoopInterceptor } from "./noop-interceptor";
import { SecondInterceptor } from "./second-interceptor";
import { SetHeaderInterceptor } from "./set-header-interceptor";

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SecondInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: SetHeaderInterceptor, multi: true },
];
