 constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: []
    };
  }


   componentDidMount() {
    fetchPosts().then(response => {
      this.setState({
        posts: response.posts
      });
    });

    fetchComments().then(response => {
      this.setState({
        comments: response.comments
      });
    });
  }


  /* 


The merging is shallow, so this.setState({comments}) 
leaves this.state.posts intact, but completely 
replaces this.state.comments.



  */