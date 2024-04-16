interface Props {
    children: React.ReactNode
}

function ProductsTab({
    children
}: Props) {
    return (
        <>
            <p><small className='text-muted'>*Click on product's image/name for more info</small></p>
            <div className='container'>
                <div className='row gx-4 gy-5'>
                    {children}
                </div>
            </div>
        </>
    )
}

export default ProductsTab