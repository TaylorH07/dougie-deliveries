import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
    query getProduct($category: ID) {
        product(category: $category) {
            _id
            productName
            description
            price
            quantity
            image
            category {
                _id
            }
        }
    }
`;

export const CHECKOUT_QUERY = gql`
    query getCheckout($products: [ID]!) {
        checkout(product: $product) {
            session
        }
    }
`;

export const ALL_PRODUCT_QUERY = gql`
    {
        product{
            _id
            productName
            description
            price
            quantity
            category {
                name
            }
        }
    }
`;

export const CATEGORIES_QUERY = gql`
    {
        categories {
            _id
            name
        }
    }
`;

export const BUYER_QUERY = gql`
    {
        buyer {
            firstName
            lastName
            orders {
                _id
                dateOfPurchase
                products{
                    _id
                    productName
                    description
                    price
                    quantity
                    image
                }
            }
        }
    }
`