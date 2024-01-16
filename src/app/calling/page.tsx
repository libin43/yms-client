'use client'
import dynamic from 'next/dynamic';
import { gql, useQuery } from '@apollo/client';
import { GET_YARD_ID } from '@/fetch/queryAp';


// const DynamicCallingComponent = dynamic(() => import('./CallingComponent'), { ssr: false });

export default function Calling (){
    console.count('page')
    const { loading, error, data } = useQuery(GET_YARD_ID,{
      variables: {
        getYardId: 1,
      }
    });
    if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log(data,'........data');
  
    return(
        <div>
            Everything is working fine.
        </div>
    )
}