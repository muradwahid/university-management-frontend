"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMTable from "@/components/ui/UMTable";
import UmBreadCrumb from "@/components/ui/UmBreadCrumb";
import {
  useAcademicSemestersQuery,
  useDeleteAcademicSemesterMutation,
} from "@/redux/api/academic/semesterApi";
import { useDebounced } from "@/redux/hooks";
import {
  DeleteOutlined,
  EditOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

const SemesterPage = () => {
  const query: Record<string, any> = {};
  const [size, setSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useAcademicSemestersQuery({ ...query });
  const [deleteAcademicSemester] = useDeleteAcademicSemesterMutation();

  const academicDepartments = data?.academicSemesters;
  const meta = data?.meta;

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const onTableChange = (pagination: any, filter: any, sort: any) => {
    const { order, field } = sort;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSize(pageSize);
  };

  const deleteHandler = async (id: string) => {
    try {
      const result = await deleteAcademicSemester(id as string);
      console.log(result);
      if ((result as { data: any }).data.id) {
        message.success("Academic Department deleted successfully");
      }
    } catch (error) {
      message.error("Failed to delete ");
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Year",
      dataIndex: "year",
      sorter: true,
    },
    {
      title: "Code",
      dataIndex: "code",
      sorter: true,
    },
    {
      title: "Start Month",
      dataIndex: "startMonth",
      sorter: true,
    },
    {
      title: "End Month",
      dataIndex: "endMonth",
      sorter: true,
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/academic/department/edit/${data?.id}`}>
              <Button style={{ margin: "0 5px" }} type="primary">
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      {" "}
      <UmBreadCrumb items={[{ label: "admin", link: `/admin` }]} />
      <ActionBar title="Semester List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/admin/academic/faculty/create">
            <Button type="primary">Create Faculty</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              style={{ margin: "0 5px" }}
              type="primary"
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>
      <UMTable
        loading={isLoading}
        columns={columns}
        dataSource={academicDepartments}
        onTableChange={onTableChange}
        pageSize={size}
        //@ts-ignore
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        showPagination={true}
      />
    </div>
  );
};

export default SemesterPage;
