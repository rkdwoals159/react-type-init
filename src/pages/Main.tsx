import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}


function TestPage() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error((error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <h1>테스트페이지입니다만?</h1>
      <PostList>
        {posts.map(post => (
          <PostItem key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </PostItem>
        ))}
      </PostList>
    </Container>
  );
}


//styled-components 스타일링 작업
const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
`;

const PostList = styled.ul`
  list-style: none;
  padding: 0;
`;

const PostItem = styled.li`
  margin-bottom: 20px;
`;


export default TestPage;
