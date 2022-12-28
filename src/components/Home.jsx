import React from 'react'
import Product from './Product'


const Home = () => {
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner" >
                    <div class="carousel-item active" style={{width:"90%", marginLeft:'5%'}}>
                        <img src="https://www.bing.com/th?id=OIP.1vj-ol_VhTHF0LKy4nLbagHaEJ&w=334&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item" style={{width:"90%", marginLeft:'5%'}}>
                        <img src="https://th.bing.com/th/id/OIP.g9MzqYkWR6JyxgqpqR7SdgHaDP?w=326&h=153&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item" style={{width:"90%", marginLeft:'5%'}}>
                        <img src="https://th.bing.com/th/id/OIP.biVBnjfWJlZ_82kqRSCnngHaC-?w=304&h=140&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                    <div class="carousel-item" style={{width:"90%", marginLeft:'5%'}}>
                        <img src="https://th.bing.com/th/id/OIP.1XlAwoZPbAusr22NOox28wHaCD?w=349&h=97&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="d-block w-100" alt="IPhone" height="500px" />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <Product />
        </div>
    )
}

export default Home;
