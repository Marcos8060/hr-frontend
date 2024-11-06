import { API_URL } from '../../../../assets/api-endpoints/index';
import { backendAxiosInstance } from "../../../../assets/hooks/backend-axios-instance";

// For handling POST requests in Next.js 13+ using the app folder structure
export async function POST(req) {
  try {
    const body = await req.json();

    const payload = {
      ...body,
    };


    const config = {
      headers: {
        Authorization: req.headers.get("authorization"),
      },
    };

    const response = await backendAxiosInstance.post(`${API_URL.LOGIN}`, payload, config);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const config = {
      headers: {
        Authorization: req.headers.get("authorization"),
      },
    };

    const payload = await req.json();
  
    const response = await backendAxiosInstance.put(`${API_URL.UPDATE_PROFILE_DETAILS}`, payload, config);

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: e.response?.status ?? 500 });
  }
}
