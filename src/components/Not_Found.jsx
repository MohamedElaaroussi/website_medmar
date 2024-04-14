import React from 'react'

const Not_Found = () => {
    return (
        <div>
            <section>
                <div class="container_NotFound">
                    <div class="text">
                        <h1>Page Not Found</h1>
                        <p>We can't seem to find the page you're looking for. Please check the URL for any typos.</p>
                        <div class="input-box">
                            <input type="text" placeholder="Search..." />
                            <button>
                                <i class="fa-solid fa-search"></i>
                            </button>
                        </div>
                        <ul class="menu">
                            <li><a href="#">Go to Homepage</a></li>
                            <li><a href="#">Visit our Blog</a></li>
                            <li><a href="#">Contact support</a></li>
                        </ul>
                    </div>
                    <div>
                        <img class="image" src="errorimg.png" alt="" />
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Not_Found
