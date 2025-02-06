import request from "supertest";
import app from "../src/index"; // ✅ Utilisation directe de `app`
import { User } from "../src/entities/User";
import { AppDataSource } from "../src/config/database";
import jwt from "jsonwebtoken";

jest.mock("jsonwebtoken", () => ({
  sign: jest.fn(() => "fake-jwt-token"),
}));

describe("🛠️ Tests unitaires - Authentification (Mocking, sans base de données)", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("✅ Connexion réussie avec email et mot de passe corrects (mock)", async () => {
    const mockUser = new User();
    mockUser.id = 1;
    mockUser.email = "test@example.com";
    mockUser.password = "hashedpassword";

    jest
      .spyOn(AppDataSource.getRepository(User), "findOne")
      .mockResolvedValue(mockUser);

    jest.spyOn(mockUser, "comparePassword").mockResolvedValue(true);

    const response = await request(app)
      .post("/auth/login")
      .send({ email: "test@example.com", password: "password" });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token", "fake-jwt-token");
  });

  test("❌ Échec si email incorrect (mock)", async () => {
    jest
      .spyOn(AppDataSource.getRepository(User), "findOne")
      .mockResolvedValue(null);

    const response = await request(app)
      .post("/auth/login")
      .send({ email: "wrong@example.com", password: "password" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty(
      "message",
      "Email ou mot de passe incorrect"
    );
  });

  test("❌ Échec si mot de passe incorrect (mock)", async () => {
    const mockUser = new User();
    mockUser.email = "test@example.com";
    mockUser.password = "hashedpassword";

    jest
      .spyOn(AppDataSource.getRepository(User), "findOne")
      .mockResolvedValue(mockUser);

    jest.spyOn(mockUser, "comparePassword").mockResolvedValue(false);

    const response = await request(app)
      .post("/auth/login")
      .send({ email: "test@example.com", password: "wrongpassword" });

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty(
      "message",
      "Email ou mot de passe incorrect"
    );
  });

  test("❌ Échec si aucun email ou mot de passe n'est fourni (mock)", async () => {
    const response = await request(app).post("/auth/login").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
  });
});
