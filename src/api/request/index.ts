const baseUrl = 'http://dev.trainee.dex-it.ru/api/';

interface IData {
    method: string,
    body?: string,
}

export const request = async (url: string, data: IData,  contentType: string, token?: string, ) => {
    const headers = token ? {
        Authorization: `Bearer ${token}`,
        'Content-Type': `${contentType}`,
    } : {
        'Content-Type': `${contentType}`,
    };

    const response = await fetch(
        baseUrl + url,
        {
            // @ts-ignore
            headers,
            ...data,
        });

    const dataResponce = await response.json();
    console.log('response', dataResponce);

    if (response.status === 200) {
        return dataResponce;
    } else {
        console.log('response error', dataResponce);
    }
}

export const get = (url: string, contentType: string, token?: string) => request(url, {method: 'GET'}, contentType, token);
export const post = (url: string, body: string, contentType: string, token?: string) => request(url, {method: 'POST', body},  contentType, token)