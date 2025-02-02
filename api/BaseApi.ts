const request = async (
  baseUrl: string,
  endpoint: string,
  method: string = "GET",
  body: any = null,
  headers: any = {}
) => {
  const url = `${baseUrl}${endpoint}`;
  const options: any = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Something went wrong");
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// Convenience methods
const get = (baseUrl: string, endpoint: string, headers: any = {}) => {
  return request(baseUrl, endpoint, "GET", null, headers);
};

const post = (
  baseUrl: string,
  endpoint: string,
  body: any,
  headers: any = {}
) => {
  return request(baseUrl, endpoint, "POST", body, headers);
};

const put = (
  baseUrl: string,
  endpoint: string,
  body: any,
  headers: any = {}
) => {
  return request(baseUrl, endpoint, "PUT", body, headers);
};

const del = (baseUrl: string, endpoint: string, headers: any = {}) => {
  return request(baseUrl, endpoint, "DELETE", null, headers);
};

export { request, get, post, put, del };
