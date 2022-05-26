export interface OpenWeatherMapAPIdata {
  geo: [
    {
      name: string;
      country: string;
    }
  ];
  weather: {
    timezone: string;
    current: {
      temp: number;
      dt: number;
      feels_like: number;
      humidity: number;
      wind_speed:number;
      weather: [
        {
          main: string;
          description: string;
          icon: string;
        }
      ];
    };
    hourly: [
      {
        pop: number;
      }
    ];
  };
}
