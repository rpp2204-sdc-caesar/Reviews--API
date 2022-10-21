const app = require("../server/app");
const supertest = require("supertest");
const request = supertest(app);

describe("testing endpoints", function() {
  it('Gets the reviews/meta endpoint', async () => {
    const response = await request.get('/reviews/meta');
    expect(response.status).toBe(200);
  });

  it('Gets the reviews endpoint', async () => {
    const response = await request.get('/reviews');
    expect(response.status).toBe(200);
  });
});
