type Auth = {
  access_token: string;
  expiresIn: string;
};

export function setStoreAuth(auth: Auth): void {
  localStorage.setItem("signature", JSON.stringify(auth));
}

export function getStoreAuth(): Auth | null {
  const storeAuth =
    typeof window !== "undefined" ? localStorage.getItem("signature") : null;
  return storeAuth ? JSON.parse(storeAuth) : null;
}

export function checkAuth(): any {
  const signature: Auth | null = getStoreAuth();
  const accessToken: string | null = signature ? signature.access_token : null;
  if (accessToken) {
    return accessToken;
  }
  return "";
}

export function clearStoreAuth(): void {
  localStorage.removeItem("signature");
}
