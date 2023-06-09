/*
 *  巡检人员时空数据
 *  add by zxb
 *   2022-7-25
 */
export const spaceTimeData = {
    list: [
        {
            name: "张三",
            day: "2022/7/20",
            spaceTimeList: [
                /* 整理飞机移动数据添加高度值 add by zxb 2023/02/22 */
                {time:"13:03",lon:109.83,lat:40.65,height:1200},
                {time:"8:35",lon:109.871418,lat:40.653274,height:1200},
                {time:"8:40",lon: 109.886609,lat: 40.645146 ,height:1200},
                {time:"8:52",lon:109.902677,lat:40.636418,height:1200},
                {time:"9:20",lon:109.915233,lat:40.629023,height:1200},
                {time:"9:40",lon:109.924102,lat:40.62416,height:1200},
                {time:"10:00",lon:109.935692,lat:40.617231,height:1200},
                { time: "10:10", lon: 109.954044, lat: 40.607771 ,height:1200},
                {time:"11:01",lon:109.951322,lat:40.605948,height:1200},
                {time:"11:01",lon:109.949917,lat:40.604547,height:1200},
                {time:"11:02",lon:109.94737,lat:40.60208,height:1200},
                {time:"11:03",lon:109.944297,lat:40.599413,height:1200},
                {time:"11:04",lon:109.942278,lat:40.597679,height:1200},
                {time:"11:05",lon:109.939556,lat:40.595345,height:1100},
                {time:"11:06",lon:109.93859,lat:40.593211,height:1300},
                {time:"11:07",lon:109.93736,lat:40.59081,height:1230},
                {time:"11:08",lon:109.937536,lat:40.589143,height:1200},
                {time:"11:09",lon:109.937185,lat:40.585009,height:1200},
                {time:"11:10",lon:109.937448,lat:40.581475,height:1200},
                {time:"11:11",lon:109.937536,lat:40.579007,height:1200},
                {time:"11:12",lon:109.938678,lat:40.57494,height:1200},
                {time:"11:13",lon:109.939907,lat:40.572139,height:1200},
                {time:"11:14",lon:109.939907,lat:40.569605,height:1200},
                {time:"11:15",lon:109.938414,lat:40.566404,height:1200},
                {time:"11:16",lon:109.93578,lat:40.563603,height:1200},
                {time:"11:17",lon:109.933409,lat:40.560669,height:1200},
                {time:"11:18",lon:109.932092,lat:40.558535,height:1200},
                {time:"11:19",lon:109.929985,lat:40.555935,height:1200},
                {time:"11:20",lon:109.927087,lat:40.552934,height:1200},
                {time:"11:21",lon:109.922872,lat:40.547538,height:1200},
                {time:"11:22",lon:109.919624,lat:40.544001,height:1200},
                {time:"11:23",lon:109.915146,lat:40.537528,height:1200},
                {time:"11:24",lon:109.913302,lat:40.53339,height:1200},
                {time:"11:25",lon:109.912863,lat:40.529186,height:1200},
                {time:"11:26",lon:109.913302,lat:40.524648,height:1200},
                {time:"11:27",lon:109.911809,lat:40.518241,height:1200},
                {time:"11:28",lon:109.91137,lat:40.509899,height:1200},
                {time:"11:29",lon:109.912511,lat:40.504494,height:1200},
                {time:"11:30",lon:109.916989,lat:40.499689,height:1200},
                {time:"11:31",lon:109.921555,lat:40.495084,height:1200},
                {time:"11:32",lon:109.929897,lat:40.49475,height:1200},
                {time:"11:33",lon:109.94219,lat:40.493683,height:1200},
                {time:"11:34",lon:109.950004,lat:40.493215,height:1200},
                {time:"11:35",lon:109.957731,lat:40.490579,height:1200},
                {time:"11:36",lon:109.962649,lat:40.488641,height:1200},
                {time:"11:37",lon:109.968092,lat:40.4851,height:1200},
                {time:"11:38",lon:109.970639,lat:40.483162,height:1200},
                {time:"11:39",lon:109.973449,lat:40.479086,height:1200},
                {time:"11:40",lon:109.977751,lat:40.477148,height:1200},
                {time:"11:41",lon:109.983634,lat:40.472404,height:1200},
                {time:"11:42",lon:109.986619,lat:40.470065,height:1200},
                {time:"11:43",lon:109.9918,lat:40.465054,height:1200},
                {time:"11:44",lon:109.996015,lat:40.461312,height:1200},
                {time:"11:45",lon:110.001546,lat:40.458439,height:1200},
                {time:"11:46",lon:110.005849,lat:40.453962,height:1200},
                {time:"11:47",lon:110.008747,lat:40.450354,height:1200},
                {time:"11:48",lon:110.010942,lat:40.445944,height:1200},
                {time:"11:49",lon:110.014454,lat:40.441199,height:1200},
                {time:"11:50",lon:110.017264,lat:40.436723,height:1200},
                {time:"11:51",lon:110.019195,lat:40.433382,height:1200},
                {time:"11:52",lon:110.020688,lat:40.428303,height:1200},
                {time:"11:53",lon:110.022444,lat:40.424561,height:1200},
                {time:"11:54",lon:110.024552,lat:40.421287,height:1200},
                {time:"11:55",lon:110.027186,lat:40.417144,height:1200},
                {time:"11:56",lon:110.029908,lat:40.412267,height:1200},
                {time:"11:57",lon:110.030874,lat:40.410195,height:1200},
                {time:"11:58",lon:110.019722,lat:40.406787,height:1200},
                {time:"11:59",lon:110.0242,lat:40.396831,height:1200},
                {time:"12:00",lon:110.026483,lat:40.388145,height:1200},
                {time:"12:01",lon:110.027888,lat:40.382131,height:1200},
                {time:"12:02",lon:110.032103,lat:40.373177,height:1200},
                {time:"12:03",lon:110.035088,lat:40.366943,height:1200},
                {time:"12:04",lon:110.03781,lat:40.361858,height:1200},
                {time:"12:05",lon:110.041498,lat:40.354565,height:1200},
                {time:"12:06",lon:110.044659,lat:40.351153,height:1200},
                {time:"12:07",lon:110.042903,lat:40.332418,height:1200},
                {time:"12:08",lon:110.040444,lat:40.31288,height:1200},
                {time:"12:09",lon:110.039391,lat:40.303379,height:1200},
                {time:"12:10",lon:110.039127,lat:40.294213,height:1200},
                {time:"12:11",lon:110.0386,lat:40.286384,height:1200},
                {time:"12:12",lon:110.037898,lat:40.282504,height:1200},
                {time:"12:13",lon:110.037635,lat:40.274274,height:1200},
                {time:"12:14",lon:110.037108,lat:40.268118,height:1200},
                {time:"12:15",lon:110.036932,lat:40.262631,height:1200},
                {time:"12:16",lon:110.035527,lat:40.252796,height:1200},
                {time:"12:17",lon:110.03421,lat:40.239865,height:1200},
                {time:"12:18",lon:110.033508,lat:40.228065,height:1200},
                {time:"12:19",lon:110.032454,lat:40.217473,height:1200},
                {time:"12:20",lon:110.0314,lat:40.205941,height:1200},
                {time:"12:21",lon:110.031049,lat:40.199371,height:1200},
                {time:"12:22",lon:110.030171,lat:40.188778,height:1200},
                {time:"12:23",lon:110.028239,lat:40.166788,height:1200},
                {time:"12:24",lon:110.02701,lat:40.155257,height:1200},
                {time:"12:25",lon:110.028064,lat:40.144798,height:1200},
                {time:"12:26",lon:110.027537,lat:40.136619,height:1200},
                {time:"12:27",lon:110.028239,lat:40.12373,height:1200},
                {time:"12:28",lon:110.028591,lat:40.111239,height:1200},
                {time:"12:29",lon:110.026308,lat:40.096599,height:1200},
                {time:"12:30",lon:110.020337,lat:40.082361,height:1200},
                {time:"12:31",lon:110.008044,lat:40.072691,height:1200},
                {time:"12:32",lon:109.996629,lat:40.057782,height:1200},
                {time:"12:33",lon:109.9954,lat:40.045559,height:1200},
                {time:"12:34",lon:110.004883,lat:40.035485,height:1200},
                {time:"12:35",lon:110.016825,lat:40.017219,height:1200},
                {time:"12:36",lon:110.014366,lat:40.009697,height:1200},
                {time:"12:37",lon:110.008044,lat:40.003519,height:1200},
                {time:"12:38",lon:110.0026,lat:39.991565,height:1200},
                {time:"12:39",lon:109.998385,lat:39.977596,height:1200},
                {time:"12:40",lon:109.996629,lat:39.968731,height:1200},
                {time:"12:41",lon:109.992415,lat:39.95812,height:1200},
                {time:"12:42",lon:109.986093,lat:39.949658,height:1200},
                {time:"12:43",lon:109.979595,lat:39.941062,height:1200},
                {time:"12:44",lon:109.976083,lat:39.934346,height:1200},
                {time:"12:45",lon:109.968707,lat:39.930183,height:1200},
                {time:"12:46",lon:109.964668,lat:39.921721,height:1200},
                {time:"12:47",lon:109.960102,lat:39.915139,height:1200},
                {time:"12:48",lon:109.94939,lat:39.89741,height:1200},
                {time:"12:49",lon:109.95378,lat:39.885053,height:1200},
                {time:"12:50",lon:109.955887,lat:39.875517,height:1200},
                {time:"12:51",lon:109.955536,lat:39.869607,height:1200},
                {time:"12:52",lon:109.95097,lat:39.863294,height:1200},
                {time:"12:53",lon:109.94377,lat:39.85913,height:1200},
                {time:"12:54",lon:109.943243,lat:39.848116,height:1200},
                {time:"12:55",lon:109.944648,lat:39.840863,height:1200},
                {time:"12:56",lon:109.939731,lat:39.840595,height:1200},
                {time:"12:57",lon:109.934463,lat:39.84046,height:1200},
                {time:"12:58",lon:109.937799,lat:39.829178,height:1200},
                {time:"12:59",lon:109.937097,lat:39.822865,height:1200},
                {time:"13:00",lon:109.965897,lat:39.822059,height:600},
                {time:"13:01",lon:109.965884,lat:39.822164,height:30},
                { time: "13:02", lon: 109.965864, lat: 39.822263 ,height:0},
                // {time:"8:30",lon:109.8,lat:39.62,height:1200},
            ]
            
        }
    ]
};
