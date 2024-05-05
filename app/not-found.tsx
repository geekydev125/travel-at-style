import Link from 'next/link'

function NotFound() {
    return (
        <section className='h-100 w-100 flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </section>
    )
}

export default NotFound