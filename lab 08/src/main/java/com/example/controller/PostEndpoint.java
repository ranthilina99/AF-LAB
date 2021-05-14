package com.example.controller;

import com.example.api.PostApi;
import com.example.domain.Post;
import com.example.dto.PostDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/posts")
public class PostEndpoint {

    private PostApi postApi;

    @Autowired
    public PostEndpoint(PostApi postApi){
        this.postApi=postApi;
    }

    @GetMapping
    public List<Post>getPosts(){
        return postApi.getAllPosts();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Post addPost(@RequestBody PostDto postDto){
        Post post=new Post();
        post.setName(postDto.getName());
        post.setDescriptions(postDto.getDescriptions());
        return postApi.addPost(post);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void removePost(@PathVariable String id){
        postApi.removePost(id);

    }

    @PutMapping("/{id}")
    public Post updatePost(@PathVariable String id,@RequestBody PostDto postDto){
        Post post = new Post();
        post.setName(postDto.getName());
        post.setDescriptions(postDto.getDescriptions());
        return postApi.updatePost(id,post);
    }
}
