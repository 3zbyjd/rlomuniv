import { IconButton, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import usePagination from "./usePagination";

const Pagination = (props: any) => {
  const { pageNumber, changePage, pageData, nextPage, previousPage } =
    usePagination(props.items, props.pageLimit);

  useEffect(() => {
    props.setPageItems(pageData);
  }, [pageNumber]);

  return (
    <SimpleGrid columns={5} spacing={1} p={2} alignContent="center">
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="purple"
        aria-label="Done"
        fontSize="20px"
        width="20px"
        icon={<FaAngleDoubleLeft />}
        onClick={() => changePage(1)}
      />
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="purple"
        aria-label="Done"
        fontSize="20px"
        width="20px"
        icon={<FaAngleLeft />}
        onClick={previousPage}
      />
      {/* <text>
          {currentPage} / {npage}
        </text> */}
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="purple"
        aria-label="Done"
        fontSize="20px"
        width="20px"
        icon={<FaAngleRight />}
        onClick={nextPage}
      />
      <IconButton
        isRound={true}
        variant="solid"
        colorScheme="purple"
        aria-label="Done"
        fontSize="20px"
        width="20px"
        icon={<FaAngleDoubleRight />}
        onClick={props.pageCount}
      />
    </SimpleGrid>
  );
};

export default Pagination;