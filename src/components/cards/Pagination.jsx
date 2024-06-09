

const Pagination = ({ totalPages, currentPage, setCurrentPage }) => {

    const handlePageChange = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    if (totalPages === 1) {
        return null
    }
    if (totalPages === 0) {
        return null
    }

    return (
        <div className="pagination">
            <button 
                onClick={() => handlePageChange(currentPage - 1)} 
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button 
                    key={index + 1} 
                    onClick={() => handlePageChange(index + 1)}
                    className={index + 1 === currentPage ? 'active' : ''}
                >
                    {index + 1}
                </button>
            ))}
            <button 
                onClick={() => handlePageChange(currentPage + 1)} 
                disabled={currentPage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
