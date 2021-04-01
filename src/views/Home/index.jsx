import { useEffect, useState } from "react";
import Table from "../../components/Table";
import Filter from "../../components/Filter";
import admins from "../../assets/users.json";
import "./Home.scss";
const Home = () => {
  const [listUsers, setListUser] = useState(admins);
  const [showListUser, setShowListUser] = useState(listUsers);
  useEffect(() => {
    setShowListUser(listUsers);
  }, [listUsers]);
  const cleanFilter = () => {
    setShowListUser(listUsers);
  };
  const addUserInArray = (newUser) => {
    setListUser([...listUsers, newUser]);
  };
  const editUserInArray = (editUser) => {
    const index = listUsers.findIndex((emp) => emp.id === editUser.id);
    let newArr = [...listUsers];
    newArr[index] = editUser;
    setListUser(newArr);
  };
  return (
    <div className="HomeContainer">
      <Table
        list={showListUser}
        setList={setListUser}
        addUserInArray={addUserInArray}
        editUserInArray={editUserInArray}
      ></Table>
      <Filter
        listUsers={listUsers}
        setShowListUser={setShowListUser}
        cleanFilter={cleanFilter}
      />
    </div>
  );
};
export default Home;
