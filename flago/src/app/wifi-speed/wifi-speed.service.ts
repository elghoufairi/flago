import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WifiSpeedService {
  private readonly speedTestUrl = 'your_backend_url'; // Replace with your backend server URL

  constructor(private http: HttpClient) {}

  startSpeedTest(): Observable<number> {
    return this.http.get<number>(this.speedTestUrl);
  }
}
