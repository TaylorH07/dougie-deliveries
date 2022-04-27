import { gql } from '@apollo/client';

export const USER_LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password, $password) {
            token
            user {
                _id
            }
        }
    }
`;

export const ADD_ORDER = gql`
    mutation addOrder($product: [ID]!) {
        addOrder(product: $product) {
            dateOfPurchase
            product{
                _id
                productName
                description
                price
                quantity
                category{
                    categoryName
                }
            }
        }
    }
`

export const ADD_USER = gql`
    mutation addUser(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            user {
                _id
            }
        }
    }
`