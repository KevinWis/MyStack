import CardHover from "../../components/members/memberCardhover";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUserListThunk } from "../../store/modules/members/thunks";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);
  useEffect(() => {
    dispatch(getUserListThunk({ perPage: 15, page: 1 }));
  }, []);
  return (
    <>
      {members.map(({ name, id, course_module }, index) => (
        <CardHover
          key={index}
          name={name}
          id={id}
          course={course_module}
        ></CardHover>
      ))}
    </>
  );
};

export default Members;
