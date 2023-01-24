pragma solidity ^0.5.0;

contract Marketplace {
    string public name;
    uint public postCount = 0;
    mapping(uint => Post) public posts;
    
    
    struct Post{
        uint id;
        string name;
        string content;
        address poster;
        uint likes;
    }
    
    event PostCreated(
        uint id,
        string name,
        string content,
        address poster,
        uint likes
    );
    
    
    constructor() public {
        name = "Dapp University Marketplace";
    }
    
    
    function createPost(string memory _name, string memory _content) public {
        //Require name
        require(bytes(_name).length > 0);
        //increment post count
        postCount ++;
        //Create Post
        posts[postCount] = Post(postCount, _name, _content, msg.sender, 0);
        //Trigger Event
        emit PostCreated(postCount, _name, _content, msg.sender, 0);
    }
}


