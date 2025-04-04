"use client";
import { Button, Text } from "@radix-ui/themes";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageCount = Math.ceil(itemCount / pageSize);
  if (currentPage < 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push("?" + params.toString());
  };
  return (
    <div className="flex items-center gap-2">
      <Text>
        Page {currentPage} of {pageCount}
      </Text>
      {/* prev */}
      <Button
        onClick={() => changePage(1)}
        disabled={currentPage === 1}
        variant="soft"
        color="gray"
      >
        <FaAngleDoubleLeft />
      </Button>
      <Button
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        variant="soft"
        color="gray"
      >
        <FaAngleLeft />
      </Button>
      {/* next */}
      <Button
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === pageCount}
        variant="soft"
        color="gray"
      >
        <FaAngleRight />
      </Button>
      <Button
        onClick={() => changePage(pageCount)}
        disabled={currentPage === pageCount}
        variant="soft"
        color="gray"
      >
        <FaAngleDoubleRight />
      </Button>
    </div>
  );
};

export default Pagination;
