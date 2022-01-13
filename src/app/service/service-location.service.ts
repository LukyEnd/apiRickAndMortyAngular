import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { ApiLocationModel } from './model/location.model';

@Injectable({
	providedIn: 'root',
})
export class ServiceLocationService {
	public locationInfo!: ApiLocationModel;

	constructor(private http: HttpClient) {}

	apiLocationInfo(): Observable<ApiLocationModel[]> {
		return this.http.get(`${environment.url}location`).pipe(pluck('results'));
	}

	buttonPageLocation(url: string): Observable<ApiLocationModel[]> {
		return this.http.get(url).pipe(pluck('results'));
	}

	getLocationInfo(): ApiLocationModel {
		return this.locationInfo;
	}
	setLocationInfo(locationInfo: ApiLocationModel): ApiLocationModel {
		return (this.locationInfo = locationInfo);
	}

	locationUrl(id: string): Observable<ApiLocationModel> {
		return this.http.get<ApiLocationModel>(`${environment.url}location/${id}`);
	}
}
