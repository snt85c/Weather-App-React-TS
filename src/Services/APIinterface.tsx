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
      }
    ];

    daily: [
      {
        //0
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
      },
      {
        //1
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
      },
      {
        //2
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
      },
      {
        //3
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
      },
      {
        //4
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
      },
      {
        //5
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
      },
      {
        //6
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
      },
      {
        //7
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
      },
      {
        //8
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
