

import { gql, useQuery } from '@apollo/client';


const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;


export default function Location (){
  console.log('hello');
  
    
    // const { loading, error, data } = useQuery(GET_LOCATIONS);
    // console.log(data,'fetching ......');
    
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error: {error.message}</p>;
    return (
<div>djkf</div>
    )
}