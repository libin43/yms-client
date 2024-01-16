'use client'
import { gql, useQuery } from '@apollo/client';

export const GET_YARD_ID = gql`
query Query($getYardId: Int!) {
  getYard(id: $getYardId) {
    yard_name
    yard_email
    owner_name
    owner_contact
    city
    state
    pincode
  }
}
`;
