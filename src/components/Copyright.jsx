import React from 'react'

export default function Copyright() {
    return (
        <div className='copyright'>
            <span>
                © {new Date().getFullYear()} Mary Varrodája
            </span>
            <a href="https://webdevme.co.uk/" target="_blank" rel="noopener noreferrer">
                Powered by <span>webdevme.co.uk</span>
            </a>
        </div>
    )
}
