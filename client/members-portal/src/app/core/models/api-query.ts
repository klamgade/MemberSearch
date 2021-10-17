import { HttpParams } from '@angular/common/http';

export interface ApiQuery {
    toHttpParams(): HttpParams;
}
