import Jwt from "jsonwebtoken";

export function jwtVerify<T>(
  refreshToken: string,
  refreshTokenSecret: string
): null | T {
  try {
    const result = Jwt.verify(refreshToken, refreshTokenSecret) as T;
    if (result && typeof result !== "string") {
      return result;
    } else return null;
  } catch (error) {
    return null;
  }
}
