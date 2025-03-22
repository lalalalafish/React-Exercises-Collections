import {useEffect, useState} from 'react';
import {useOutletContext} from 'react-router-dom';


const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

//类别行
function ProductCategoryRow({category}){
    return (
        <tr>
            <th colSpan="2">{category}</th>
        </tr>
    );
}

//产品行
function ProductRow({product}){
    const name = product.stocked? product.name:
        <span style={{color: 'red'}}>{product.name}</span>;

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

//基本表格
function ProductTable({products, filterText, inStockOnly}){
    const rows = [];
    let lastCategory = null;

    products.forEach((product)=>{
        //实现filter功能
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){
            return;
        }
        //实现inStockOnly功能
        if(inStockOnly && !product.stocked){
            return;
        }
        //如果产品的类别与上一个产品的类别不同，则添加类别行
        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow
                    key={product.category}
                    category={product.category}
                />
            );
        }
        rows.push(
          <ProductRow
          key={product.name}
          product={product}/>
        );
        lastCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar({filterText, inStockOnly, setFilterText, setInStockOnly}){
    return (
        <form>
            <input type="text"
                   value={filterText}
                   onChange={(e)=>{setFilterText(e.target.value)}}
                   placeholder="Search..."/>
            <label>
                <input type="checkbox"
                       checked={inStockOnly}
                       onChange={()=>setInStockOnly(!inStockOnly)}/>
                {' '}
                Only show products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({products}){
    const [filterText, setFilterText] = useState('');//搜索框
    const [inStockOnly, setInStockOnly] = useState(false);//Cehckbox-只显示库存产品

    return (
        <div>
            <SearchBar
                filterText={filterText}
                inStockOnly={inStockOnly}
                setFilterText={setFilterText}
                setInStockOnly={setInStockOnly}/>
            <ProductTable
                products={products}
                filterText={filterText}
                inStockOnly={inStockOnly}
            />
        </div>
    );
}

export default function Start() {
    const {setHeader, setDescription} = useOutletContext();

    useEffect(() => {
        setHeader("Exercises1: Product Category");
        setDescription("Use a mockup to familiarize yourself with React Router and its concepts.");
    }, [setHeader, setDescription]);

    return(
        <FilterableProductTable products={PRODUCTS}/>
    );
}