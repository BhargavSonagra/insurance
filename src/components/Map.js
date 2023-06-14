import React from 'react'
import '../index.css'
import '../assets/style.css'
const Map = () => {
    return (
            <div className="container-fluid  text-center p-5"> 
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14766.581235452988!2d70.8000912!3d22.291421849999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1683014140429!5m2!1sen!2sin" width="100%" height="450" style={{ "border": 0, "allowfullscreen": "", "loading": "lazy", "referrerpolicy": "no-referrer-when-downgrade" }}></iframe>
            </div> 
    )
}

export default Map