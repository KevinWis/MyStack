import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUserListThunk } from "../../store/modules/members/thunks";
import { InputLabel } from "@material-ui/core";

import {
  MemberList,
  MainContainer,
  FormContainer,
  StyledSelect,
  StyledTextField,
} from "./style";
import MemberCard from "../../components/members/memberCard";

const Members = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.members.list);

  const [search, setSearch] = useState("");
  const [type, setType] = useState("name");
  const [filteredMembers, setFilteredMembers] = useState([]);

  useEffect(() => {
    dispatch(getUserListThunk({ perPage: 10000, page: 1 }));
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredMembers(members);
      return;
    }
    if (type === "name") {
      const newFiltered = members.filter((el) => {
        return el.name.toLowerCase().includes(search.toLowerCase());
      });
      console.log("filtered", newFiltered);
      setFilteredMembers(newFiltered);
    }
    if (type === "tech") {
      const newFiltered = members.filter((el) => {
        return el.techs.some((tech) => {
          return tech.title.toLowerCase().includes(search.toLowerCase());
        });
      });
      console.log("filtered", newFiltered);
      setFilteredMembers(newFiltered);
    }
  }, [members, search, type]);

  return (
    <MainContainer>
      <FormContainer>
        <StyledTextField
          label={type === "name" ? "user name" : "tech name"}
          value={search}
          onChange={(evt) => {
            setSearch(evt.target.value);
          }}
        />
        <div>
          <InputLabel htmlFor="type">Type</InputLabel>
          <StyledSelect
            id="type"
            value={type}
            onChange={(evt) => {
              setType(evt.target.value);
            }}
          >
            <option value="name">nome</option>
            <option value="tech">tech</option>
          </StyledSelect>
        </div>
      </FormContainer>
      <MemberList>
        {filteredMembers.length === 0 && <h2>Loading...</h2>}
        {filteredMembers
          .sort((a, b) => (a.avatar_url ? -1 : 1))
          .map(({ name, id, course_module, avatar_url, techs }, index) => (
            <MemberCard
              key={index}
              name={name}
              id={id}
              course={course_module}
              _MemberImg={avatar_url}
              userTechs={techs}
              avatar={avatar_url}
            ></MemberCard>
          ))}
      </MemberList>
    </MainContainer>
  );
};

export default Members;
