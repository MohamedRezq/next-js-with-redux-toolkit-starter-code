import { connect } from "react-redux";
import { increment, decrement } from "../store/count/countSlice";
import { getUsers } from "../store/users/usersSlice";

const IndexPage = ({ counted, increment, decrement, userz, getUsers }) => {
  return (
    <div>
      <div>
        <h1>Simple implement Next.js With Redux Toolkit</h1>
        <h2>Counted: {counted}</h2>
        <hr />
        <button onClick={() => increment()}>Increment</button>
        <button onClick={() => decrement()}>decrement</button>
      </div>
      <div>
        <button onClick={() => getUsers()}>Get Users</button>
        <div>
          Users:{" "}
          {userz.map((user, i) => (
            <>
              <div>{user.id}</div>
              <div>{user.name}</div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  counted: state.count.count,
  userz: state.users.users,
});

const mapDispatchToProps = { increment, decrement, getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
