export interface OpenWeatherMapAPIdata {
    geo: [
      {
        name: string;
        country: string;
      }
    ];
    weather: {
      current: {
        dt: number;
        weather: [
          {
            main: string;
            description: string;
          }
        ];
      };
    };
  };
