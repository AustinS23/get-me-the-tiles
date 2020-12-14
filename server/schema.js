const { gql } = require('apollo-server');


const typeDefs = gql`
    type TileImage {
        url: String
    }

    type Attributes {
        activeEndsAt: String
        activeStartsAt: String
        callToAction: String
        comingSoon: Boolean!
        currentLogoUrl: String
        currentTileUrl: String
        currentUrl: String
        exactCategories: String
        global: Boolean!
        instore: Boolean!
        internalName: String
        logoImage: String
        name: String
        online: Boolean!
        status: String
        tagMatch: Boolean
        tileImage: TileImage
        url: String
        utmCampaign: String
        utmContent: String
        utmMedium: String
        utmSource: String
        utmTerm: String
    }

    type Data {
        id: String
        type: String
    }

    type ActivePromotion {
        data: Data
    }

    type Meta {
        included: Boolean!
    }

    type Categories {
        meta: Meta
    }

    type Merchant {
        meta: Meta
    }

    type TileTags {
        meta: Meta
    }

    type Relationships {
        activePromotion: ActivePromotion
        categories: Categories
        merchant: Merchant
        tileTags: TileTags
    }

    type Tiles {
        id: String!
        attributes: Attributes!
        relationships: Relationships!
    }

    type Query {
        tiles: [Tiles!]!
    }
`;

module.exports = typeDefs;