import database from "infra/database.js";
import orchestrator from "tests/orchestrator";

beforeAll(async () => {
  await orchestrator.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;");
});

test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(201);
  const responseBody = await response.json(Array);
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);

  const retryResponse = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(retryResponse.status).toBe(200);
  const retryResponseBody = await retryResponse.json(Array);
  expect(retryResponseBody.length).toBe(0);
});
