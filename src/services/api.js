// import axios from 'axios';
// import qs from 'qs';

// const instance = axios.create({
//   baseURL: 'http://79.143.31.216',
//   headers: {
//     Authorization: `bearer ${localStorage.getItem('token')}`,
//     accept: 'application/json',
//     'Content-Type': 'application/x-www-form-urlencoded',
//   },
// });

// export const FastApi = {
//   async Registration(username, password) {
//     try {
//       const response = await instance.post(
//         `/register?username=${username}&password=${password}`,
//       );
//       return response;
//     } catch (error) {
//       return console.log(error);
//     }
//   },

//   async Login(data) {
//     try {
//       const response = await instance.post('/login', qs.stringify(data));
//       localStorage.setItem('token', response.data.access_token);
//       return response;
//     } catch (error) {
//       return console.log(error);
//     }
//   },

//   async SqueezeLink(link) {
//     try {
//       const response = await instance.post(`/squeeze?link=${link}`);
//       return response;
//     } catch (error) {
//       return console.log(error);
//     }
//   },

//   async GetStatistics(offset = 0, limit = 5) {
//     try {
//       const response = await instance.get(
//         `/statistics?offset=${offset}&limit=${limit}`,
//       );
//       return response;
//     } catch (error) {
//       return console.log(error);
//     }
//   },
//   async GetStatisticsBySort(
//     offset = 0,
//     limit = 5,
//     sorts = ['asc_counter', 'asc_short'],
//   ) {
//     const intSort = sorts.reduce((a, v) => {
//       let vString = `order=${v}&`;
//       return a + vString;
//     }, '');

//     try {
//       const response = await instance.get(
//         `/statistics?${intSort}offset=${offset}&limit=${limit}`,
//       );
//       return response;
//     } catch (error) {
//       return console.log(error);
//     }
//   },

//   async GetS(key) {
//     await instance.get(`/s/${key}`);
//   },
// };

// export default FastApi;
