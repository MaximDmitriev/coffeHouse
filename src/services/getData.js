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

    getCoffee = async () => {
        const items = await this.download();
        return items.coffee.map(this._transformCoffee);
    }

    getGoods = async () => {
        const items = await this.download();
        return items.goods.map(this._transformGoods);
    }

    _transformBest = (items) => {
        return {
            name: items.name,
            url: items.url,
            price: items.price,
            key: idGenerator("thsbstcfe")
        }
    }

    _transformCoffee = (items) => {
        return {
            name: items.name,
            url: items.url,
            price: items.price,
            key: idGenerator("thsallcfe"),
            country: items.country,
            descriptions: items.descriptions
        }
    }

    _transformGoods = (items) => {
        return {
            name: items.name,
            url: items.url,
            price: items.price,
            key: idGenerator("thsallgds"),

        }
    }
}