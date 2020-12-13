import CardHover from "../../components/members/memberCardhover";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { getUserListThunk } from "../../store/modules/members/thunks";
import InfiniteScroll from 'react-infinite-scroll-component';
import { MemberList } from './style'
import MemberCard from "../../components/members/memberCard";

const Members = () => {
  
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);

  const [nextPage, setNextPage] = useState(1)
  
  const updatePage = () => setNextPage(nextPage + 1)
  
  useEffect(() => {
    dispatch(getUserListThunk({ perPage: 15, page: nextPage }));
  }, [nextPage]);
  
  return (
    <>
    <InfiniteScroll
      style={{height: "auto", overflow: "hidden"}}
      dataLength={members.length}
      next={updatePage}
      loader={<h4>Get a real loader...</h4>}
      hasMore={true}
      >
        {members.map(({ name, id, course_module,avatar_url }, index) => (
            <MemberCard
              key={index}
              MemberName={name}
              id={id}
              MemberWork={course_module}
              _MemberImg={avatar_url}
            ></MemberCard>
          ))}
        <MemberList>
          
          {members.map(({ name, id, course_module,avatar_url }, index) => (
            <CardHover
              key={index}
              name={name}
              id={id}
              course={course_module}
              avatar={avatar_url}
            ></CardHover>
          ))}
        </MemberList>
      </InfiniteScroll>
    </>
  );
};

export default Members;
