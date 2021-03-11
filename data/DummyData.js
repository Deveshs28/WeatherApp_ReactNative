export const sampleResponse = [{
    "clouds": {
        "all": 0
    },
    "dt": 1519106400,
    "dt_txt": "2018-02-20 06:00:00",
    "main": {
        "grnd_level": 993.96,
        "humidity": 69,
        "pressure": 993.96,
        "sea_level": 1033.75,
        "temp": 273.972,
        "temp_kf": 0,
        "temp_max": 273.972,
        "temp_min": 273.972
    },
    "rain": {},
    "sys": {
        "pod": "n"
    },
    "weather": [
        {
            "description": "clear sky",
            "icon": "01n",
            "id": 800,
            "main": "Clear"
        }
    ],
    "wind": {
        "deg": 307,
        "speed": 1.96
    }
},
{
    "dt": 1519495200,
    "main": {
        "temp": 280.831,
        "temp_min": 280.831,
        "temp_max": 280.831,
        "pressure": 997.47,
        "sea_level": 1037.05,
        "grnd_level": 997.47,
        "humidity": 91,
        "temp_kf": 0
    },
    "weather": [
        {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
        }
    ],
    "clouds": {
        "all": 0
    },
    "wind": {
        "speed": 1.01,
        "deg": 192.506
    },
    "rain": {},
    "sys": {
        "pod": "d"
    },
    "dt_txt": "2018-02-24 18:00:00"
}]

export const parsedSuccessResponse = [
    {
        "title": "2018-02-20 06:00:00",
        "data": {
            "clouds": {
                "all": 0
            },
            "dt": 1519106400,
            "dt_txt": "2018-02-20 06:00:00",
            "main": {
                "grnd_level": 993.96,
                "humidity": 69,
                "pressure": 993.96,
                "sea_level": 1033.75,
                "temp": 273.972,
                "temp_kf": 0,
                "temp_max": 273.972,
                "temp_min": 273.972
            },
            "rain": {},
            "sys": {
                "pod": "n"
            },
            "weather": [
                {
                    "description": "clear sky",
                    "icon": "01n",
                    "id": 800,
                    "main": "Clear"
                }
            ],
            "wind": {
                "deg": 307,
                "speed": 1.96
            }
        }
    }
]