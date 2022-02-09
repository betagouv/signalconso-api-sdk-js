"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingClient = void 0;
class RatingClient {
    constructor(client) {
        this.client = client;
        this.rate = (category, subcategories, positive) => {
            return this.client.post(`/rating`, {
                body: {
                    category,
                    subcategories: subcategories ? subcategories.map(subcategory => subcategory.title ? subcategory.title : subcategory) : [''],
                    positive
                }
            });
        };
    }
}
exports.RatingClient = RatingClient;
//# sourceMappingURL=RatingClient.js.map