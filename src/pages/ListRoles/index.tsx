import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TableRoles from "../../components/TableRoles";
import { getListRole } from "../../redux/api/roles";
import "./roles.scss";
const ListRoles = () => {
  const dispatch = useDispatch();
  const { listRoles } = useSelector((state: any) => state.role);
  useEffect(() => {
    listRoles.length === 0 && getListRole(dispatch);
  }, [dispatch, listRoles]);
  return (
    <div className="wrapperTableRoles">
      <h1 className="titleTableRoles">Danh Sách suyền</h1>
      <TableRoles />
    </div>
  );
};

export default ListRoles;
