const BASE_URL = import.meta.env.BASE_URL;

export const getPublicUrl = (url: string) => {
  const baseUrl = BASE_URL.endsWith('/') ? BASE_URL : `${BASE_URL}/`;
  const normalizedUrl = url.replace(/^\/+/, '');

  return `${baseUrl}${normalizedUrl}`;
};
