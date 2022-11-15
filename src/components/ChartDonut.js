import React from 'react'
import { Card, DonutChart, Title } from '@tremor/react'

const cities = [
    {
        name: 'New York',
        sales: 9800
    },
    {
        name: 'London',
        sales: 4567,
    },
    {
        name: 'Hong Kong',
        sales: 3908,
    },
    {
        name: 'San Francisco',
        sales: 2400,
    },
    {
        name: 'Singapore',
        sales: 1908,
    },
    {
        name: 'Zurich',
        sales: 1398,
    },
]

const ChartDonut = () => {
  return (
    <Card>
        <Title>Sales by City</Title>
        <DonutChart 
            data={cities}
            category='sales'
            dataKey='name'
            marginTop='mt-6'
            colors={["yellow", "violet", "indigo", "rose", "cyan", "green"]}
        />
    </Card>
  )
}

export default ChartDonut