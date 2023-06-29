import { useEffect, useState } from "react";
import Users from "../../Components/Users/Users";
import { fetchUsers } from "../../Redux/operations";
import {
  BtnBox,
  GoHome,
  LoadMoreBtn,
  Select,
  UserBox,
  UsersList,
} from "./UsersPage.styled";

function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isFollowing, setIsFollowing] = useState(
    () => JSON.parse(localStorage.getItem("following")) ?? []
  );
  const [page, setPage] = useState(1);
  const [hasMoreUsers, setHasMoreUsers] = useState(true);
  const [filter, setFilter] = useState("All");

  const fetchUsersAPI = async (pageNumber) => {
    const data = await fetchUsers(pageNumber);
    if (data.length === 0) {
      setHasMoreUsers(false);
    }
    return data;
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    const data = await fetchUsersAPI(nextPage);
    setUsers((prevUsers) => [...prevUsers, ...data]);
    setPage(nextPage);
  };

  const filterUsers = (users) => {
    if (filter === "Following") {
      return users.filter((user) => isFollowing.includes(user.id));
    } else if (filter === "No_Following") {
      return users.filter((user) => !isFollowing.includes(user.id));
    } else {
      return users;
    }
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsersAPI(page);
      setUsers(data);
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    localStorage.setItem("following", JSON.stringify(isFollowing));
  }, [isFollowing]);

  return (
    <>
      <UserBox>
        <BtnBox>
          <GoHome to={"/"}>Home</GoHome>
          <Select name="select" value={filter} onChange={handleFilterChange}>
            <option value="All">All</option>
            <option value="Following">Following</option>
            <option value="No_Following">No Following</option>
          </Select>
        </BtnBox>
        <UsersList>
          {users && users.length > 0 ? (
            filterUsers(users).map((user) => (
              <Users
                user={user}
                key={user.id}
                isFollowing={isFollowing}
                setIsFollowing={setIsFollowing}
              />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </UsersList>
        {hasMoreUsers && (
          <LoadMoreBtn onClick={handleLoadMore}>Load More &#8595;</LoadMoreBtn>
        )}
      </UserBox>
    </>
  );
}

export default UsersPage;
