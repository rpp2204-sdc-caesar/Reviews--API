import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  scenarios: {
    constant_request_rate: {
      executor: 'constant-arrival-rate',
      rate: 1000,
      timeUnit: '1s',
      duration: '30s',
      preAllocatedVUs: 100,
      maxVUs: 500
    }
  }
};

export default function () {
  // let res = http.get('http://localhost:3000/reviews?product_id=1&count=5');
  // check(res, {
  //   'is status 200': (r) => r.status === 200,
  // });
  let res = http.get('http://localhost:3000/reviews/meta?product_id=1');
  check(res, {
    'is status 200 for reviews/meta endpoint': (r) => r.status === 200,
  });
}
