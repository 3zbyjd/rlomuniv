import { Center, IconButton, Input, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import usePagination from "./usePagination";
import "./pagination.css";

const Pagination = (props: any) => {
  const {
    pageNumber,
    pageCount,
    changePage,
    pageData,
    nextPage,
    previousPage,
  } = usePagination(props.items, props.pageLimit);

  useEffect(() => {
    props.setPageItems(pageData);
  }, [pageNumber]);

  return (
    <SimpleGrid className="pagination-component" columns={5} spacing={1} p={2}>
      <Center className="pagination-center">
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="purple"
          aria-label="Done"
          fontSize="20px"
          width="20px"
          icon={<FaAngleDoubleLeft />}
          size="sm"
          onClick={() => changePage(0)}
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="purple"
          aria-label="Done"
          fontSize="20px"
          width="20px"
          icon={<FaAngleLeft />}
          size="sm"
          onClick={previousPage}
        />
        <Input
          value={pageNumber}
          onChange={(e) => changePage(e.target.valueAsNumber)}
          type="number"
          width="50px"
          size="sm"
          borderColor="purple"
          textAlign="center"
        />
        <IconButton
          isRound={true}
          variant="solid"
          colorScheme="purple"
          aria-label="Done"
          fontSize="20px"
          width="20px"
          icon={<FaAngleRight />}
          size="sm"
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
          size="sm"
          onClick={() => changePage(pageCount - 1)}
        />
      </Center>
    </SimpleGrid>
  );
};

export default Pagination;
