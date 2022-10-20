import React, { useRef } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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


    const options: Highcharts.Options = {
        xAxis: [{
            categories: cat.map(el => el.title),
        },
        {
            title: {
                text: 'Models'
            }
        }],
        yAxis: {
            title: {
                text: 'Rating'
            }
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

