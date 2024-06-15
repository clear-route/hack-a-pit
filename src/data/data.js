function generateRaceData(data) {
  const newData = {};
  const timeFormat = 'HH:mm'; 

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  let currentTime = new Date();

  Object.keys(data).forEach((key) => {
    const newTime = formatTime(currentTime);
    newData[newTime] = { ...data[key] };

    currentTime.setMinutes(currentTime.getMinutes() + 1);
  });

  return newData;
}

const originalData = {
  "21:45": { lap: 20, trackTemperature: 40, stintMinutes: 20, fuelRemaining: 30, tireWear: 100, shouldPitStop: false },
  "21:46": { lap: 20, trackTemperature: 40, stintMinutes: 21, fuelRemaining: 30, tireWear: 99, shouldPitStop: false },
  "21:47": { lap: 20, trackTemperature: 39, stintMinutes: 22, fuelRemaining: 29, tireWear: 98, shouldPitStop: false },
  "21:48": { lap: 20, trackTemperature: 39, stintMinutes: 23, fuelRemaining: 29, tireWear: 97, shouldPitStop: false },
  "21:49": { lap: 21, trackTemperature: 38, stintMinutes: 26, fuelRemaining: 28, tireWear: 96, shouldPitStop: false },
  "21:50": { lap: 21, trackTemperature: 38, stintMinutes: 27, fuelRemaining: 28, tireWear: 95, shouldPitStop: false },
  "21:51": { lap: 21, trackTemperature: 37, stintMinutes: 28, fuelRemaining: 27, tireWear: 94, shouldPitStop: false },
  "21:52": { lap: 21, trackTemperature: 37, stintMinutes: 29, fuelRemaining: 27, tireWear: 93, shouldPitStop: false },
  "21:53": { lap: 21, trackTemperature: 36, stintMinutes: 30, fuelRemaining: 26, tireWear: 92, shouldPitStop: false },
  "21:54": { lap: 22, trackTemperature: 36, stintMinutes: 33, fuelRemaining: 25, tireWear: 91, shouldPitStop: false },
  "21:55": { lap: 22, trackTemperature: 35, stintMinutes: 34, fuelRemaining: 25, tireWear: 90, shouldPitStop: false },
  "21:56": { lap: 22, trackTemperature: 35, stintMinutes: 35, fuelRemaining: 24, tireWear: 89, shouldPitStop: false },
  "21:57": { lap: 22, trackTemperature: 34, stintMinutes: 36, fuelRemaining: 24, tireWear: 88, shouldPitStop: false },
  "21:58": { lap: 22, trackTemperature: 34, stintMinutes: 37, fuelRemaining: 23, tireWear: 87, shouldPitStop: false },
  "21:59": { lap: 22, trackTemperature: 33, stintMinutes: 38, fuelRemaining: 23, tireWear: 86, shouldPitStop: false },
  "22:00": { lap: 23, trackTemperature: 33, stintMinutes: 41, fuelRemaining: 22, tireWear: 85, shouldPitStop: false },
  "22:01": { lap: 23, trackTemperature: 32, stintMinutes: 42, fuelRemaining: 22, tireWear: 84, shouldPitStop: false },
  "22:02": { lap: 23, trackTemperature: 32, stintMinutes: 43, fuelRemaining: 21, tireWear: 83, shouldPitStop: false },
  "22:03": { lap: 23, trackTemperature: 31, stintMinutes: 44, fuelRemaining: 21, tireWear: 82, shouldPitStop: false },
  "22:04": { lap: 23, trackTemperature: 31, stintMinutes: 45, fuelRemaining: 20, tireWear: 81, shouldPitStop: false },
  "22:05": { lap: 23, trackTemperature: 30, stintMinutes: 46, fuelRemaining: 20, tireWear: 80, shouldPitStop: false },
  "22:06": { lap: 24, trackTemperature: 30, stintMinutes: 49, fuelRemaining: 19, tireWear: 79, shouldPitStop: false },
  "22:07": { lap: 24, trackTemperature: 29, stintMinutes: 50, fuelRemaining: 19, tireWear: 78, shouldPitStop: false },
  "22:08": { lap: 24, trackTemperature: 29, stintMinutes: 51, fuelRemaining: 18, tireWear: 77, shouldPitStop: false },
  "22:09": { lap: 24, trackTemperature: 28, stintMinutes: 52, fuelRemaining: 18, tireWear: 76, shouldPitStop: false },
  "22:10": { lap: 24, trackTemperature: 28, stintMinutes: 53, fuelRemaining: 17, tireWear: 75, shouldPitStop: false },
  "22:11": { lap: 25, trackTemperature: 27, stintMinutes: 56, fuelRemaining: 16, tireWear: 74, shouldPitStop: false },
  "22:12": { lap: 25, trackTemperature: 27, stintMinutes: 57, fuelRemaining: 16, tireWear: 73, shouldPitStop: false },
  "22:13": { lap: 25, trackTemperature: 26, stintMinutes: 58, fuelRemaining: 15, tireWear: 72, shouldPitStop: false },
  "22:14": { lap: 25, trackTemperature: 26, stintMinutes: 59, fuelRemaining: 15, tireWear: 71, shouldPitStop: false },
  "22:15": { lap: 25, trackTemperature: 25, stintMinutes: 60, fuelRemaining: 14, tireWear: 70, shouldPitStop: false },
  "22:16": { lap: 25, trackTemperature: 25, stintMinutes: 61, fuelRemaining: 14, tireWear: 69, shouldPitStop: false },
  "22:17": { lap: 26, trackTemperature: 24, stintMinutes: 64, fuelRemaining: 13, tireWear: 68, shouldPitStop: false },
  "22:18": { lap: 26, trackTemperature: 24, stintMinutes: 65, fuelRemaining: 13, tireWear: 67, shouldPitStop: false },
  "22:19": { lap: 26, trackTemperature: 23, stintMinutes: 66, fuelRemaining: 12, tireWear: 66, shouldPitStop: false },
  "22:20": { lap: 26, trackTemperature: 23, stintMinutes: 67, fuelRemaining: 12, tireWear: 65, shouldPitStop: false },
  "22:21": { lap: 26, trackTemperature: 22, stintMinutes: 68, fuelRemaining: 11, tireWear: 64, shouldPitStop: false },
  "22:22": { lap: 27, trackTemperature: 22, stintMinutes: 71, fuelRemaining: 10, tireWear: 63, shouldPitStop: false },
  "22:23": { lap: 27, trackTemperature: 21, stintMinutes: 72, fuelRemaining: 10, tireWear: 62, shouldPitStop: false },
  "22:24": { lap: 27, trackTemperature: 21, stintMinutes: 73, fuelRemaining: 9, tireWear: 61, shouldPitStop: false },
  "22:25": { lap: 27, trackTemperature: 20, stintMinutes: 74, fuelRemaining: 9, tireWear: 60, shouldPitStop: false },
  "22:26": { lap: 27, trackTemperature: 20, stintMinutes: 75, fuelRemaining: 8, tireWear: 59, shouldPitStop: false },
  "22:27": { lap: 28, trackTemperature: 19, stintMinutes: 78, fuelRemaining: 7, tireWear: 58, shouldPitStop: false },
  "22:28": { lap: 28, trackTemperature: 19, stintMinutes: 79, fuelRemaining: 7, tireWear: 57, shouldPitStop: false },
  "22:29": { lap: 28, trackTemperature: 18, stintMinutes: 80, fuelRemaining: 6, tireWear: 56, shouldPitStop: false },
  "22:30": { lap: 28, trackTemperature: 18, stintMinutes: 81, fuelRemaining: 6, tireWear: 55, shouldPitStop: false },
  "22:31": { lap: 28, trackTemperature: 17, stintMinutes: 82, fuelRemaining: 5, tireWear: 54, shouldPitStop: false },
  "22:32": { lap: 29, trackTemperature: 17, stintMinutes: 85, fuelRemaining: 4, tireWear: 53, shouldPitStop: true, reason: "Low fuel" },
  "22:33": { lap: 29, trackTemperature: 16, stintMinutes: 86, fuelRemaining: 4, tireWear: 52, shouldPitStop: true, reason: "Low fuel" },
  "22:34": { lap: 29, trackTemperature: 16, stintMinutes: 87, fuelRemaining: 3, tireWear: 51, shouldPitStop: true, reason: "Low fuel" },
  "22:35": { lap: 29, trackTemperature: 15, stintMinutes: 88, fuelRemaining: 3, tireWear: 50, shouldPitStop: true, reason: "Low fuel" },
  "22:36": { lap: 30, trackTemperature: 15, stintMinutes: 91, fuelRemaining: 2, tireWear: 49, shouldPitStop: true, reason: "Low fuel" },
  "22:37": { lap: 30, trackTemperature: 14, stintMinutes: 92, fuelRemaining: 2, tireWear: 48, shouldPitStop: true, reason: "Low fuel" },
  "22:38": { lap: 30, trackTemperature: 14, stintMinutes: 93, fuelRemaining: 1, tireWear: 47, shouldPitStop: true, reason: "Low fuel" },
  "22:39": { lap: 30, trackTemperature: 13, stintMinutes: 94, fuelRemaining: 1, tireWear: 46, shouldPitStop: true, reason: "Low fuel" },
  "22:40": { lap: 30, trackTemperature: 13, stintMinutes: 95, fuelRemaining: 0, tireWear: 45, shouldPitStop: true, reason: "Low fuel" }
};


export default generateRaceData(originalData);

