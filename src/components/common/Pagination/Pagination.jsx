import Image from 'next/image';
import ReactPaginate from 'react-paginate';

export default function Launchpad() {
  const handlePageClick = () => {
    console.log('Hmm');
  };
  const pageCount = 5;

  const prevArrow = <Image src="/assets/images/left-arrow.png" width={39} height={39} alt="" />;
  const nextArrow = <Image src="/assets/images/right-arrow.png" width={39} height={39} alt="" />;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={nextArrow}
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousLabel={prevArrow}
      renderOnZeroPageCount={null}
      className="pagination"
    />
  );
}
