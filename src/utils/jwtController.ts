import Jwt from "jsonwebtoken";

export function jwtDecode<T>(refreshToken: string): null | T {
  const result = Jwt.decode(refreshToken) as T;
  if (result && typeof result !== "string") {
    return result;
  } else return null;
}

export function jwtVerify<T>(
  refreshToken: string,
  refreshTokenSecret: string
): null | T {
  const result = Jwt.verify(refreshToken, refreshTokenSecret) as T;
  if (result && typeof result !== "string") {
    return result;
  } else return null;
}
