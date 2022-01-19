import React from 'react'
import './home.css'
import {userData} from '../../dummyData'
import Chart from '../../components/chart/Chart'
import Featuredinfo from '../../components/featuredinfo/featuredinfo'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import Widgetbig from '../../components/widgetbig/Widgetbig'

function home() {
    return (
        <div className='home'>
            <Featuredinfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetSm/>
            <Widgetbig/>
            </div>
        </div>
    )
}

export default home
