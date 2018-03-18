import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-show-weather',
  templateUrl: './show-weather.component.html',
  styleUrls: ['./show-weather.component.scss']
})
export class ShowWeatherComponent implements OnInit {

  myLocalization: any;
  weather: any;
  tempC: number;
  tempF: number;
  generalData: any;
  farenheit : boolean = false;
  unit: string = "°C";


  constructor(private http: Http) {

  }


  ngOnInit() {
  	this.http.get('https://geoip.nekudo.com/api/en/')
      .subscribe(response => {
        let latitude = response.json().location.latitude;
        let longitude = response.json().location.longitude;
  	    let url = 'https://fcc-weather-api.glitch.me/api/current?lon=' + longitude + '&' + 'lat=' + latitude;
        this.http.get(url)
  	    .subscribe(response=> {
  	    	this.tempC = response.json().main.temp;
  	    	this.tempF = Math.round(((response.json().main.temp *1.8) + 32)*100)/100;
  	    	this.weather = response.json().weather[0];
			this.generalData = response.json();
  	    });
  	  });
	 }
	 toFarenheit() {
	 	this.farenheit = !this.farenheit;
	 	if (this.farenheit) {
	 		this.unit = "°F";
	 	} else {
	 		this.unit = "°C"
	 	}
	 }
}


