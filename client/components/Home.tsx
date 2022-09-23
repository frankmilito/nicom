import "./home.css"
import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { useProductList } from "../hooks/useProductList"
import { useDebounce } from "../hooks/useDebounce"

const Home = () => {
    const [page, setPage] = useState(1)
    const [nextPage, setNextPage] = useState(true)
    const [searchQuery, setSearchQuery] = useState("")
    const [sortCriteria, setSortCriteria] = useState("")
    const [order, setOrder] = useState("")
    const [selectedProduct, setSelectedProduct] = useState({})
    //get debounce value
    const debouncedValue = useDebounce(searchQuery, 500)
    const { loading, error, data } = useProductList(
        page,
        debouncedValue,
        sortCriteria,
        order
    )
    const listLength = data?.getProducts?.length
    console.log(listLength)
    useEffect(() => {
        setNextPage(true)
        if (listLength === 0 || listLength < 10) {
            setNextPage(false)
        }
    }, [listLength])

    const handlePrevious = () => {
        setNextPage(true)
        if (page >= 1) {
            setPage(prevPage => prevPage - 1)
        }
    }
    const handleNext = () => {
        if (page >= 1) {
            setPage(prevPage => prevPage + 1)
        }
    }

    return (
        <div className="container">
            <div className="header"></div>
            <div className="productOverview">
                <h3 className="product-overview">Products Overview</h3>
                <div className="sortContainer">
                    <div className="sortElements">
                        <label>Search by Title</label>
                        <input
                            type="text"
                            onChange={e => {
                                setPage(1)
                                setSearchQuery(e.target.value)
                            }}
                        />
                    </div>
                    <div className="sortElements">
                        <div className="custom-select">
                            <select
                                value={sortCriteria}
                                onChange={e => setSortCriteria(e.target.value)}
                            >
                                <option value="">Sort By</option>
                                <option value="material">Material</option>
                                <option value="color">Color</option>
                                <option value="release_date">Release Date</option>
                                <option value="title">Title</option>
                            </select>
                        </div>
                    </div>
                    <div className="sortElements">
                        <div className="custom-select">
                            <select value={order} onChange={e => setOrder(e.target.value)}>
                                <option value="">Sort Order</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
                <>
                    <>
                        {loading && <h3>Loading...</h3>}
                        {error && <h3>Something went wrong...</h3>}
                        {!loading && !error && (
                            <>
                                <div className="products">
                                    {!!data && data?.getProducts?.length > 0 ? (
                                        data.getProducts.map(item => (
                                            <div className="product" key={item.id}>
                                                <img src={item.image} alt="" className="image" />
                                                <p className="title">{item.title}</p>
                                                <p className="price">
                                                    ${!!item?.price?.price && item?.price?.price}
                                                </p>
                                                <Link to={`/product/${item.id}`}>
                                                    <button
                                                        className="btn"
                                                        onClick={() => setSelectedProduct(item)}
                                                    >
                                                        View Product
                                                    </button>
                                                </Link>
                                            </div>
                                        ))
                                    ) : (
                                        <h3>No products</h3>
                                    )}
                                </div>
                                <div className="buttonGroup">
                                    <button
                                        onClick={handlePrevious}
                                        disabled={page === 1}
                                        className={page === 1 ? "disabled" : ""}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        disabled={!nextPage}
                                        className={!nextPage ? "disabled" : ""}
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}
                    </>
                </>
            </div>
        </div>
    )
}

export default Home
