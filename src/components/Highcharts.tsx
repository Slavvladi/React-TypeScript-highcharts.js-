import React, { useEffect, useRef, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useAppDispatch, useAppSelector } from '../hook/redux';
import { IProduct } from '../models/models'

interface ProductCardProps {
    products: IProduct[],
    category: string
}
export default function Highchart({ category, products }: ProductCardProps, props: HighchartsReact.Props) {
    const chartComponentRef = useRef<HighchartsReact.RefObject>(null);

    const smart = products.filter(el => el.category === 'smartphones')
    const lap = products.filter(el => el.category === 'laptops')
    const cat = category === 'Smartphones' ? smart : lap
    console.log(cat, 'cat');
    console.log(smart, "smart");


    const options: Highcharts.Options = {
        xAxis: {
            categories: cat.map(el => el.title),
        },
        title: {
            text: category,
        },
        series: [{
            type: 'column',
            data: cat.map(el => el.rating)
        }]
    };


    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartComponentRef}
            {...props}
        />
    );
}

