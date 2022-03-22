export const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon';
export const Repo = {
    async api_call(method, body, query, urlPath) {
        let url = urlPath ? urlPath : `${pokemonUrl}${query ? '?' + query : ''}`;
        try {
            let rp = await fetch(url, {
                method: method,
                body: body ? JSON.stringify(body) : null,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            return await rp.json();
        } catch (e) {
            console.log('Xin lỗi, đã có lỗi khi thực hiện')
            throw e;
        }
        finally {

        }
    },
    api_call_get(query: string) {
        return this.api_call('GET', null, query);
    },
    api_call_get_by_url(url: string) {
        return this.api_call('GET', null, null, url);
    },
}
export const serializeObj = (obj) => {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(p + '=' + obj[p]);
        }
    return str.join('&');
}