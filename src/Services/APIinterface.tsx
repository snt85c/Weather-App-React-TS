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
      wind_speed: number;
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
        temp: number;
        weather: [
          //0
          {
            main: string;
            icon: string;
          }
        ];
      }
    ];

    daily: [
      {
        temp: {
          day: number;
          min: number;
        };
        weather: [
          {
            //0
            main: string;
            icon: string;
          }
        ];
      }
    ];
  };
}

export interface IWeekly {
  temp: {
    day: number;
    min: number;
  };
  weather: [
    {
      //0
      main: string;
      icon: string;
    }
  ];
}

export interface IHourly {
  pop: number;
  temp: number;
  weather: [
    //0
    {
      main: string;
      icon: string;
    }
  ];
}
