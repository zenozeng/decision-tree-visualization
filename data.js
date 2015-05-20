// data from Tom M. Mitchell's Machine Learning Textbook

var sunny = '晴天',
    overcast = '阴天',
    rain = '雨天';

var hot = '高温',
    mild = '中温',
    cool = '低温';

var high = '高湿度',
    normal = '一般湿度';

var weak = '弱风',
    strong = '强风';

var values = {
    outlook: {sunny: sunny, overcast: overcast, rain: rain},
    temperature: {hot: hot, mild: mild, cool: cool},
    humidity: {high: high, normal: normal},
    wind: {weak: weak, strong: strong}
};

var data = [
    {outlook: sunny, temperature: hot, humidity: high, wind: weak, playTennis: false},
    {outlook: sunny, temperature: hot, humidity: high, wind: strong, playTennis: false},
    {outlook: overcast, temperature: hot, humidity: high, wind: weak, playTennis: true},
    {outlook: rain, temperature: mild, humidity: high, wind: weak, playTennis: true},
    {outlook: rain, temperature: cool, humidity: normal, wind: weak, playTennis: true},

    {outlook: rain, temperature: cool, humidity: normal, wind: strong, playTennis: false},
    {outlook: overcast, temperature: cool, humidity: normal, wind: strong, playTennis: true},
    {outlook: sunny, temperature: mild, humidity: high, wind: weak, playTennis: false},
    {outlook: sunny, temperature: cool, humidity: normal, wind: weak, playTennis: true},
    {outlook: rain, temperature: mild, humidity: normal, wind: weak, playTennis: true},

    {outlook: sunny, temperature: mild, humidity: normal, wind: strong, playTennis: true},
    {outlook: overcast, temperature: mild, humidity: high, wind: strong, playTennis: true},
    {outlook: overcast, temperature: hot, humidity: normal, wind: weak, playTennis: true},
    {outlook: rain, temperature: mild, humidity: high, wind: strong, playTennis: false}
];
