 import React from 'react'
import Header from '../../components/header/header'
import Banner from '../../components/banner/banner'
import RowList from '../../components/rows/rowlist/rowlist'
import Footer from '../../components/footer/footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <RowList />
            <Footer />
        </div>
    )
}

export default Home