const BASE_URL = 'http://localhost:3001';

function wait(delay: number) {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
}

type RequestMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

function request<Product>(
    url?: string,
    method: RequestMethod = 'GET',
    data: any = null,
): Promise<Product> {
    const options: RequestInit = { method };

    if (data) {
        options.body = JSON.stringify(data);
        options.headers = {
            'Content-Type': 'application/json; charset=UTF-8',
        };
    }

    return wait(300)
        .then(() => fetch(BASE_URL + url, options))
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        });
}

export const client = {
    get: <T>(url: string) => request<T>(url),
    post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
    patch: <T>(url: string, data: any) => request<T>(url, 'PATCH', data),
    delete: (url: string) => request(url, 'DELETE'),
};