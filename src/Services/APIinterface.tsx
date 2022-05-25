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
      weather: [
        {
          main: string;
          description: string;
          icon:string;
        }
      ];
    };
  };
}
