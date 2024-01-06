const request = async (method, url, data, token = undefined) => {
    const options = {};

    if (method === "POST") {
        options.method = method;

        if (data) {
            options.headers = {
                "Content-Type": "application/json",
            };

            options.body = JSON.stringify(data);
        }

        const response = await fetch(url, options);

        if (response.status === 204) {
            return {};
        }

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }
        if (result) {
            return result;
        }
    }

    if (method === "GET") {
        options.method = method;
        options.headers = {
            "user-token": `${token}`,
        };

        const response = await fetch(url, options);

        if (response.status === 204) {
            return {};
        }
    }
};

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const patch = request.bind(null, "PATCH");
export const del = request.bind(null, "DELETE");