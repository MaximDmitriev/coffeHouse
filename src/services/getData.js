import idGenerator from 'react-id-generator';

export default class getData {
    
    url = process.env.PUBLIC_URL + "/db.json";

    download = async () => {

        const data = await fetch(this.url);

        return await data.json();
    }

    getBest = async () => {
        const items = await this.download();
        return items.bestsellers.map(this._transformBest);
    }

    _transformBest = (items) => {
        return {
            name: items.name,
            url: items.url,
            price: items.price,
            key: idGenerator("thsbstcfe")
        }
    }
}