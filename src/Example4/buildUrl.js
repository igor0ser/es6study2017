const APPID = '62d91351158a0ed8ba6c81571b457551';

const baseUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APPID}&`;

const buildUrl = name => `${baseUrl}&q=${name}`;

export default buildUrl;