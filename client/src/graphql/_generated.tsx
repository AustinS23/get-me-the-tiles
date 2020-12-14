import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type TileImage = {
  __typename?: 'TileImage';
  url?: Maybe<Scalars['String']>;
};

export type Attributes = {
  __typename?: 'Attributes';
  activeEndsAt?: Maybe<Scalars['String']>;
  activeStartsAt?: Maybe<Scalars['String']>;
  callToAction?: Maybe<Scalars['String']>;
  comingSoon: Scalars['Boolean'];
  currentLogoUrl?: Maybe<Scalars['String']>;
  currentTileUrl?: Maybe<Scalars['String']>;
  currentUrl?: Maybe<Scalars['String']>;
  exactCategories?: Maybe<Scalars['String']>;
  global: Scalars['Boolean'];
  instore: Scalars['Boolean'];
  internalName?: Maybe<Scalars['String']>;
  logoImage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  online: Scalars['Boolean'];
  status?: Maybe<Scalars['String']>;
  tagMatch?: Maybe<Scalars['Boolean']>;
  tileImage?: Maybe<TileImage>;
  url?: Maybe<Scalars['String']>;
  utmCampaign?: Maybe<Scalars['String']>;
  utmContent?: Maybe<Scalars['String']>;
  utmMedium?: Maybe<Scalars['String']>;
  utmSource?: Maybe<Scalars['String']>;
  utmTerm?: Maybe<Scalars['String']>;
};

export type Data = {
  __typename?: 'Data';
  id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type ActivePromotion = {
  __typename?: 'ActivePromotion';
  data?: Maybe<Data>;
};

export type Meta = {
  __typename?: 'Meta';
  included: Scalars['Boolean'];
};

export type Categories = {
  __typename?: 'Categories';
  meta?: Maybe<Meta>;
};

export type Merchant = {
  __typename?: 'Merchant';
  meta?: Maybe<Meta>;
};

export type TileTags = {
  __typename?: 'TileTags';
  meta?: Maybe<Meta>;
};

export type Relationships = {
  __typename?: 'Relationships';
  activePromotion?: Maybe<ActivePromotion>;
  categories?: Maybe<Categories>;
  merchant?: Maybe<Merchant>;
  tileTags?: Maybe<TileTags>;
};

export type Tiles = {
  __typename?: 'Tiles';
  id: Scalars['String'];
  attributes: Attributes;
  relationships: Relationships;
};

export type Query = {
  __typename?: 'Query';
  tiles: Array<Tiles>;
};

export type TilesQueryVariables = Exact<{ [key: string]: never; }>;


export type TilesQuery = (
  { __typename?: 'Query' }
  & { tiles: Array<(
    { __typename?: 'Tiles' }
    & Pick<Tiles, 'id'>
    & { attributes: (
      { __typename?: 'Attributes' }
      & Pick<Attributes, 'name' | 'currentTileUrl'>
    ) }
  )> }
);


export const TilesDocument = gql`
    query Tiles {
  tiles {
    id
    attributes {
      name
      currentTileUrl
    }
  }
}
    `;

/**
 * __useTilesQuery__
 *
 * To run a query within a React component, call `useTilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTilesQuery(baseOptions?: Apollo.QueryHookOptions<TilesQuery, TilesQueryVariables>) {
        return Apollo.useQuery<TilesQuery, TilesQueryVariables>(TilesDocument, baseOptions);
      }
export function useTilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TilesQuery, TilesQueryVariables>) {
          return Apollo.useLazyQuery<TilesQuery, TilesQueryVariables>(TilesDocument, baseOptions);
        }
export type TilesQueryHookResult = ReturnType<typeof useTilesQuery>;
export type TilesLazyQueryHookResult = ReturnType<typeof useTilesLazyQuery>;
export type TilesQueryResult = Apollo.QueryResult<TilesQuery, TilesQueryVariables>;