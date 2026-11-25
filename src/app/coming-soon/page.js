import React from 'react'
import ComingSoon from '../components/ComingSoon'

export const metadata = {
    robots: {
        index: false,
        follow: false,
    },
};


const page = () => {
    return (
        <div>
            <ComingSoon />
        </div>
    )
}

export default page
