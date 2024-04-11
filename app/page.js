import React from 'react'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">About</h5>
                            <p className="card-text">
                                This is the Home page.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page