import { FcPrevious, FcNext } from 'react-icons/fc'

const Pagination = ({nPages, currentPage, setCurrentPage}) => {

    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)

    const nextPage = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const prevPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <nav className="pagination-nav">
            <ul>
                <li className="prev-icon nav-icon"><a href="#" onClick={prevPage}><FcPrevious /></a></li>
                {pageNumbers.map((pgNumber) => (
                    <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? "active" : ""}`}>
                        <a href="#" onClick={()=>setCurrentPage(pgNumber)}>{pgNumber}</a>
                    </li>
                ))}
                <li className="next-icon nav-icon"><a href="#" onClick={nextPage}><FcNext /></a></li>
            </ul>
        </nav>
    )
}

export default Pagination