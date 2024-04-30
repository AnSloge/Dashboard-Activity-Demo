
const splitsData = [
  {"KM":1,"Pace":"7:36","Elev":5,"HR":84},
  {"KM":2,"Pace":"6:04","Elev":-6,"HR":115},
  {"KM":3,"Pace":"6:01","Elev":0,"HR":128},
  {"KM":4,"Pace":"6:58","Elev":51,"HR":130},
  {"KM":5,"Pace":"7:12","Elev":41,"HR":131},
  {"KM":6,"Pace":"6:11","Elev":10,"HR":125},
  {"KM":7,"Pace":"8:08","Elev":70,"HR":132},
  {"KM":8,"Pace":"9:35","Elev":103,"HR":147},
  {"KM":9,"Pace":"9:04","Elev":125,"HR":162},
  {"KM":10,"Pace":"9:13","Elev":128,"HR":163},
  {"KM":11,"Pace":"6:41","Elev":-7,"HR":167},
  {"KM":12,"Pace":"6:15","Elev":-102,"HR":158},
  {"KM":13,"Pace":"6:59","Elev":-43,"HR":137},
  {"KM":14,"Pace":"6:08","Elev":-64,"HR":130},
  {"KM":15,"Pace":"7:02","Elev":-60,"HR":137},
  {"KM":16,"Pace":"8:02","Elev":-110,"HR":124},
  {"KM":17,"Pace":"9:42","Elev":-141,"HR":129},
  {"KM":18,"Pace":"5:07","Elev":8,"HR":136}
];



  const newSplitsData = [
    ["KM", "Pace", "Elev", "HR"],
    ...splitsData.map(split => {
      return [
        split.KM,
        split.Pace + " /km",
        split.Elev + " m",
        split.HR + " bpm",
      ];
    }),
  ];
 

