import { ReactElement, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Column } from "react-table";
import TableHOC from "../components/admin/TableHOC";
import { useMyOrderQuery } from "../redux/api/orderAPI";
import { CustomError } from "../types/api";
import { UserReducerInitialState } from "../types/reducer";
import { Skeleton } from "../components/loader";

type DataType = {
  _id: string;
  amount: number;
  quantity: number;
  discount: number;
  status: ReactElement;
  action: ReactElement;
};
const columns: Column<DataType>[] = [
  {
    Header: "ID",
    accessor: "_id",
  },
  {
    Header: "Quantity",
    accessor: "quantity",
  },
  {
    Header: "Discount",
    accessor: "discount",
  },
  {
    Header: "Amount",
    accessor: "amount",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];
const Orders = () => {
  const { user } = useSelector(
    (state: { userReducer: UserReducerInitialState }) => state.userReducer
  );
  const { isLoading, data, isError, error } = useMyOrderQuery(user?._id!);
  const [rows, setRows] = useState<DataType[]>([]);
  if (isError) {
    toast.error((error as CustomError).data.message);
  }
  useEffect(() => {
    if (data) {
      setRows(
        data.orders.map((i) => ({
          _id: i._id,
          amount: i.total,
          discount: i.discount,
          quantity: i.orderItems.length,
          status: (
            <span
              className={
                i.status === "Processing"
                  ? "red"
                  : i.status === "Shipped"
                  ? "green"
                  : "purple"
              }
            >
              {i.status}
            </span>
          ),
          action: <Link to={`/admin/transaction/${i._id}`}>Manage</Link>,
        }))
      );
    }
  }, [data]);
  const Table = TableHOC<DataType>(
    columns,
    rows,
    "dashboard-product-box",
    "orders",
    rows.length > 6
  )();
  return (
    <div>
      <h1>My Orders</h1>

      {isLoading ? (
        <>
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        Table
      )}
    </div>
  );
};

export default Orders;
