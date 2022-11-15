import { Title, Text, TabList, Tab, ColGrid, Card, Block } from '@tremor/react'
import React, { useState } from 'react'
import CardGridMap from './CardGridMap'
import ChartDonut from './ChartDonut'
import TableBase from './TableBase'

const DashboardBase = () => {
    const [selectedView, setSelectedView] = useState(1)

  return (
    <main className='bg-slate-200 p-6 sm:p-10'>
        <Title>Dashboard</Title>
        <Text>Ejemplo de Dashboard con Tremor y React</Text>

        <TabList defaultValue={selectedView} handleSelect={ value => setSelectedView(value)} marginTop="mt-6">
            <Tab value={1} text="Principal" />
            <Tab value={2} text="Detalles" />
        </TabList>

        { selectedView === 1 ? (
            <>
            <CardGridMap />           

            <Block marginTop='mt-6'>
                <ChartDonut />
            </Block>
            </>
        ) : (
            <>
            <Block marginTop='mt-6'>
                <TableBase />
            </Block>
            </>
        )

        }


    </main>
  )
}

export default DashboardBase