const { RESTDataSource } = require('apollo-datasource-rest');

class ShopDirectoryHerokuAPI extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = 'https://shop-directory-heroku.laybuy.com/api/';
	}

	async getTiles() {
		const result = await this.get('tiles?page%5Bsize%5D=8&page%5Bnumber%5D=1&include=activePromotion&filter%5Border%5D=Offers%20%26%20Deals&filter%5Bcategory_id%5D=1');
		return JSON.parse(result).data;
	}
}

module.exports = ShopDirectoryHerokuAPI;