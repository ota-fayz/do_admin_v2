export const apiUrl = "https://dev.polito.uz/api/token-auth/"

// const httpClient = (url, options = {}) => {
//     if (!options.headers) {
//         options.headers = new Headers({ Accept: 'application/json' });
//     }
//     const { token } = JSON.parse(localStorage.getItem('auth'));
//     options.headers.set('Authorization', `Bearer ${token}`);
//     return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = simpleRestProvider('https://dev.polito.uz/api/token-auth', httpClient);