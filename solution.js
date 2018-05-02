import React from 'react'

export const FilterableProductTable = React.createClass({
    render() {
        const products = this.props.products;

        return (
            <div>
                <SearchBar/>
                <ProductTable products={products}/>
            </div>

        )

    }

})
export const SearchBar = React.createClass({
    render() {
        return (
            <form>
                <input type="search" placeholder="What are you looking for?"/>
                <label>
                    <input type="checkbox"/>
                    Only show products in stock
                </label>
            </form>
        )
    }
})
export const ProductTable = React.createClass({
    render() {
        const products = this.props.products;

        const rows = [];
        let currentCategory;

        products.forEach((item) => {
            if (item.category !== currentCategory) {
                currentCategory = item.category;

                rows.push((
                    <ProductCategoryRow
                        key={currentCategory}
                        category={currentCategory}
                    />
                ))
            }

            rows.push((
                <ProductRow key={item.name} product={item}/>
            ))
        })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        )

    }
})
export const ProductCategoryRow = React.createClass({
    render() {
        return (
            <tr>
                <th colSpan={2}>{this.props.category}</th>
            </tr>
        )
    }
})
export const ProductRow = React.createClass({
    render() {
        const product = this.props.product;

        const style = {
            color: product.stocked ? null : 'red',
        };

        return (
            <tr>
                <td style={style}>{product.name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
})
