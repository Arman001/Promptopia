"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({params}) => {
  const searchParams = useSearchParams();
  const [userPosts, setUserPosts] = useState([]);
  const username = searchParams.get("name");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params.id}/posts`);
      const data = await response.json();
      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params.id]);
  
  return (
    <Profile
      name={username}
      desc="Welcome to yout personalized profile page"
      data={userPosts}
      handleEdit={null}
      handleDelete={null}
    />
  );
};

export default UserProfile;
