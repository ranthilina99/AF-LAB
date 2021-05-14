package com.example.api;

import com.example.domain.Post;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class PostApi {

    private final Map<String, Post>posts;
    private Post post;

    public PostApi(){
        this.posts=new HashMap<>();
    }

    public List<Post> getAllPosts(){
        return new ArrayList<>(posts.values());
    }

    public Post addPost(Post post){
        post.setId(UUID.randomUUID().toString());
        posts.put(post.getId(),post);
        return post;
    }

    public void removePost(String id){
        posts.remove(id);
    }

    public Post updatePost(String id,Post post){
        posts.remove(id);

        post.setId(id.toString());
        posts.put(post.getId(),post);

        return post;
    }
}
