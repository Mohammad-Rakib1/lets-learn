import React, { useContext } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';
import { LoaderContext } from '../Root/Root';


const Services = () => {
  const loaderData = useContext(LoaderContext).data;
  console.log(loaderData);
    const data = [
      {
        name: loaderData[0].name,
        total: loaderData[0].total,
      },
      {
        name: loaderData[1].name,
        total: loaderData[1].total,
      },
      {
        name: loaderData[2].name,
        total: loaderData[2].total,
      },
      {
        name: loaderData[3].name,
        total: loaderData[3].total,
      },
      ];
    return (
            <BarChart width={300} height={300} data={data} className='m-auto mt-5'>
                <Bar dataKey="total" fill="#8884d8" />
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </BarChart>
    );
};

export default Services;