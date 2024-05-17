import React from 'react'
import ProductContent from "./ProductContent"

type Props = {}

const ProductsGrid = (props: Props) => {
    return (
        <section className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
                <ProductContent />
            </div>
        </section>
    )
}

export default ProductsGrid