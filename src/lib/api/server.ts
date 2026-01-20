type QueryParams = Record<string, string | number | boolean | null | undefined>;

function getApiBaseUrl(): string {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error('API_BASE_URL is not set');
  }
  return baseUrl.replace(/\/+$/, '');
}

function buildUrl(endpoint: string, params?: QueryParams): string {
  const baseUrl = getApiBaseUrl();
  const cleanedEndpoint = endpoint.replace(/^\/+/, '');
  const url = `${baseUrl}/${cleanedEndpoint}`;

  if (!params) {
    return url;
  }

  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null) {
      continue;
    }
    searchParams.append(key, String(value));
  }

  const queryString = searchParams.toString();
  return queryString ? `${url}?${queryString}` : url;
}

function buildHeaders(contentType?: string, customHeaders: HeadersInit = {}): HeadersInit {
  const headers = new Headers(customHeaders);
  const companyId = process.env.COMPANY_ID;

  if (companyId) {
    headers.set('companyId', companyId);
  }

  if (contentType && !headers.has('Content-Type')) {
    headers.set('Content-Type', contentType);
  }

  return headers;
}

async function parseJson<T>(res: Response): Promise<T> {
  const text = await res.text();
  if (!res.ok) {
    throw new Error(`HTTP ${res.status}: ${text}`);
  }
  return text ? (JSON.parse(text) as T) : ({} as T);
}

export async function postDataJson<T>(
  endpoint: string,
  params: unknown,
  customHeaders: HeadersInit = {}
): Promise<T> {
  const res = await fetch(buildUrl(endpoint), {
    method: 'POST',
    headers: buildHeaders('application/json', customHeaders),
    body: JSON.stringify(params ?? {}),
    cache: 'no-store'
  });

  return parseJson<T>(res);
}

export async function postData<T>(
  endpoint: string,
  params: QueryParams,
  customHeaders: HeadersInit = {}
): Promise<T> {
  const body = new URLSearchParams();
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value === undefined || value === null) {
      continue;
    }
    body.append(key, String(value));
  }

  const res = await fetch(buildUrl(endpoint), {
    method: 'POST',
    headers: buildHeaders('application/x-www-form-urlencoded', customHeaders),
    body: body.toString(),
    cache: 'no-store'
  });

  return parseJson<T>(res);
}

export async function getData<T>(
  endpoint: string,
  params?: QueryParams,
  customHeaders: HeadersInit = {}
): Promise<T> {
  const res = await fetch(buildUrl(endpoint, params), {
    method: 'GET',
    headers: buildHeaders(undefined, customHeaders),
    cache: 'no-store'
  });

  return parseJson<T>(res);
}

export async function verifyRoute<T>(
  endpoint: string,
  params?: QueryParams,
  customHeaders: HeadersInit = {}
): Promise<T> {
  return getData<T>(endpoint, params, customHeaders);
}

export type { QueryParams };
